"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";
import { useResponsive } from "../_lib/useResponsive";

function ReservationForm({ cabin, user, settings }) {
  const index = useResponsive([640]);
  // CHANGE
  const name = user.name.split(" ").at(0);
  const { breakfastPrice } = settings;
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const { range, resetRange } = useReservation();

  const startDate = range.from;

  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);

  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    breakfastPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 max-sm:px-8 sm:px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{index ? user.name : name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        // action={createBookingWithData}
        className="bg-primary-900 py-10 sm:px-16 max-sm:px-8 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="space-y-2 flex items-center justify-start gap-2">
          <input
            type="checkbox"
            id="hasBreakfast"
            name="hasBreakfast"
            className="h-6 w-6 accent-accent-500 focus:outline-none focus:ring focus:ring-accent-500 focus:ring-offset-2"
          />
          <label htmlFor="hasBreakfast">Do you want breakfast</label>
        </div>
        <div className="flex sm:flex-row-reverse group justify-end max-sm:flex-col-reverse items-center max-sm:gap-4 sm:gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton>Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;

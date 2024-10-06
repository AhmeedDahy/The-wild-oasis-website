"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";
import { useResponsive } from "../_lib/useResponsive";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const index = useResponsive([640]);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between scroll-mt-32">
      <DayPicker
        className="max-lg:pt-12 lg:pt-16 max-lg:pb-12 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={index ? 2 : 1}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between max-sm:px-4 max-sm:h-fit min-h-16 max-sm:py-4 sm:px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-2 max-sm:flex-col max-lg:flex-row max-xl:flex-col xl:flex-row">
          <div className="flex items-center">
            <p className="flex gap-2 items-baseline">
              {discount > 0 ? (
                <>
                  <span className="text-2xl">${regularPrice - discount}</span>
                  <span className="line-through font-semibold text-primary-700">
                    ${regularPrice}
                  </span>
                </>
              ) : (
                <span className="text-2xl">${regularPrice}</span>
              )}
              <span className="">/night</span>
            </p>
            {numNights ? (
              <p className="bg-accent-600 px-3 py-2 ml-1 max-sm:text-xl sm:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
            ) : null}
          </div>
          {numNights ? (
            <p>
              <span className="text-lg font-bold uppercase">Total</span>{" "}
              <span className="text-2xl font-semibold">${cabinPrice}</span>
            </p>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;

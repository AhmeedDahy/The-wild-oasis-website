import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "@/app/_components/DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex border border-primary-800">
      <div className="relative h-32 aspect-square">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-6 max-md:px-3 py-3 max-md:py-2 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold max-sm:text-xs max-md:text-lg">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center justify-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 max-md:px-1 max-md:h-5 px-3 uppercase text-xs font-bold flex items-center justify-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="max-md:hidden text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <p className="md:hidden text-lg max-md:text-sm text-primary-300">
          {format(new Date(startDate), "MMM dd yyyy")}
          &mdash; {format(new Date(endDate), "MMM dd yyyy")}
        </p>

        <div className="flex gap-5 max-md:gap-2 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-300 text-nowrap">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="max-lg:hidden ml-auto text-sm text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
          <p className="max-md:hidden lg:hidden ml-auto text-sm text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy")}
          </p>
          <p className="md:hidden ml-auto max-sm:hidden text-sm text-primary-400">
            Booked {format(new Date(created_at), "MM/dd/yyy")}
          </p>
        </div>
      </div>

      <div className="flex flex-col max-sm:items-center max-sm:justify-center border-l border-primary-800 w-[100px] max-md:w-[70px]">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 max-sm:px-0 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1 max-sm:hidden">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;

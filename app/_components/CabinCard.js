import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="grid max-sm:grid-cols-1 sm:grid-cols-2  rounded-md border border-primary-900 hover:border-accent-200 hover:border-opacity-70 shadow-sm shadow-primary-800  hover:shadow-sm hover:shadow-primary-700 hover:scale-[1.005]  transition  duration-300  ease-in-out  overflow-hidden">
      <div className="relative self-center sm:min-h-full max-sm:aspect-video sm:aspect-square">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow group">
        <div className="h-full flex flex-col justify-end">
          <div className="h-full flex flex-col justify-end bg-primary-950">
            <div className="pt-5 pb-4 px-7 h-full flex flex-col justify-around">
              <h3 className="text-accent-500 font-semibold text-2xl mb-3">
                Cabin {name}
              </h3>

              <div className="flex gap-3 items-center mb-2">
                <UsersIcon className="h-5 w-5 text-primary-600" />
                <p className="text-lg text-primary-200">
                  For up to <span className="font-bold">{maxCapacity}</span>{" "}
                  guests
                </p>
              </div>

              <p className="flex gap-3 justify-end items-baseline">
                {discount > 0 ? (
                  <>
                    <span className="text-3xl font-[350]">
                      ${regularPrice - discount}
                    </span>
                    <span className="line-through font-semibold text-primary-600">
                      ${regularPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-[350]">${regularPrice}</span>
                )}
                <span className="text-primary-200">/ night</span>
              </p>
            </div>
          </div>

          <div className="bg-primary-950 border-t border-t-primary-800 text-right">
            <Link
              href={`/cabins/${id}`}
              className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
            >
              Details & reservation &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;

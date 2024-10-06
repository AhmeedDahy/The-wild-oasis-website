import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="grid max-lg:grid-cols-1 lg:grid-cols-[3fr_4fr]  max-lg:gap-8 lg:gap-20  max-lg:p-2 lg:py-4 lg:px-10  max-lg:mb-16 lg:mb-24 rounded-md  border border-primary-800">
      <div className="relative max-sm:m-1 max-lg:m-2 max-lg:aspect-video lg:aspect-square lg:-translate-x-6">
        <Image
          fill
          className="object-cover rounded-md"
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>
      {/* "text-accent-100 font-black max-sm:text-3xl max-lg:text-5xl lg:text-7xl
      bg-primary-950 rounded-bl-3xl mb-2 max-sm:p-1 max-lg:p-2 lg:mb-4 lg:p-4
      lg:pb-2 lg:translate-x-[-254px] lg:w-[150%] " 
      "relative max-sm:m-1 max-lg:m-2 max-lg:aspect-video lg:aspect-square lg:-translate-x-6"
      "grid max-lg:grid-cols-1 lg:grid-cols-[3fr_4fr]  max-lg:gap-8 lg:gap-20  max-lg:p-2 lg:py-4 lg:px-10  max-lg:mb-16 lg:mb-24 rounded-md  ring-1 ring-primary-100  shadow-sm shadow-primary-100  border border-primary-800  */}
      <div>
        <h3 className="text-accent-100 font-black  max-sm:text-3xl max-lg:text-5xl lg:text-7xl    bg-primary-950 rounded-bl-3xl mb-2 max-sm:p-1 max-lg:p-2 lg:mb-4  lg:p-4 lg:pb-2 lg:translate-x-[-254px]  lg:w-[150%] ">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          {" "}
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;

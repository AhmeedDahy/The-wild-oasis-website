import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        className="object-cover object-top"
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="max-sm:text-5xl max-md:text-6xl max-lg:text-7xl lg:text-8xl text-primary-50  max-sm:mb-[62vw] max-md:mb-[48vw] max-lg:mb-[24vw] max-xl:mb-[26vw] max-2xl:mb-[4vw] 2xl:mb-[8vw] tracking-tight  font-normall">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        // height="60"
        // width="60"
        quality={100}
        alt="The Wild Oasis logo"
        className="h-16 w-16 max-md:h-12 max-md:w-12"
      />
      <span className="whitespace-nowrap max-md:text-lg text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;

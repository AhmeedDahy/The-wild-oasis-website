"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: (
      <HomeIcon className="h-6 w-6 max-md:h-5 max-md:w-5 text-primary-600" />
    ),
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: (
      <CalendarDaysIcon className="h-6 w-6 max-md:h-5 max-md:w-5 text-primary-600" />
    ),
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: (
      <UserIcon className="h-6 w-6 max-md:h-5 max-md:w-5 text-primary-600" />
    ),
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Side Navigation for Desktop */}
      <nav className="border-r border-primary-900 hidden md:flex flex-col h-full text-lg">
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`${
                  pathname === link.href ? "bg-primary-900" : ""
                } py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}

          <li className="mt-auto">
            <SignOutButton />
          </li>
        </ul>
      </nav>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-primary-1000 border-t border-primary-900 text-lg z-50">
        <ul className="flex justify-between items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="flex-1">
              <Link
                className={`flex flex-col items-center py-3 ${
                  pathname === link.href
                    ? "text-accent-400"
                    : "text-primary-200"
                } hover:text-accent-300 transition-colors`}
                href={link.href}
              >
                {link.icon}
                <span className="text-sm">{link.name}</span>
              </Link>
            </li>
          ))}
          <li className="">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideNavigation;

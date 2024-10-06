"use client";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Navigation({ session }) {
  const [nav, setNav] = useState(false);

  return (
    <>
      {/* Mobile navigation button */}
      <nav className="md:hidden z-50">
        <button
          onClick={() => setNav((s) => !s)}
          className="z-50 inline-flex h-12 w-12 items-center justify-center rounded-full"
        >
          {!nav ? (
            <Bars3Icon className="w-8 h-8 text-accent-200" />
          ) : (
            <XMarkIcon className="w-8 h-8 text-accent-200" />
          )}
        </button>
      </nav>

      {/* Full screen navigation for mobile */}
      <nav
        className={`text-center fixed inset-0 bg-primary-800 text-accent-200 text-xl flex flex-col items-center justify-center transform ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in z-40 backdrop-blur-5xl md:hidden`}
      >
        <ul className="space-y-6">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
              onClick={() => setNav(false)} // Close menu on click
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
              onClick={() => setNav(false)} // Close menu on click
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
                onClick={() => setNav(false)} // Close menu on click
              >
                <img
                  src={session.user.image}
                  className="h-8 rounded-full"
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
                <span>Guest area</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
                onClick={() => setNav(false)} // Close menu on click
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Full screen navigation for desktop */}
      <nav className="hidden md:flex  md:z-10 text-xl">
        <ul className="flex max-lg:gap-x-8 lg:gap-x-16 items-center justify-end">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <img
                  src={session.user.image}
                  className="h-8 rounded-full"
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
                <span>Guest area</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

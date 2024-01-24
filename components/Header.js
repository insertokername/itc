import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="w-full sticky-nav">
      <div className="grid grid-cols-1 justify-center max-w-xl p-2.5 mx-auto">{/*md:flex-row*/}
        <a href="/" >
          <img src="logo.png" width={250} className="mx-auto" />
        </a>
        {/*
        <button
          className="px-3 py-1 pb-4 ml-auto text-black outline-none md:hidden"
          type="button"
          aria-label="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        > 
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <line x1="3" y1="6" y2="6" x2="21"></line>
            <line x1="3" y1="12" y2="12" x2="21"></line>
            <line x1="3" y1="18" y2="18" x2="21"></line>
          </svg>
        </button>
         
        <div className="flex flex-row items-center text-center justify-between p-2 md:p-1">
        <a className="mb-4 text-2xl font-medium text-black transition duration-300 hover:text-gray-300 md:mb-0">
          <p className="text-center">kys</p>
            PLUTONIUM
          </a>
        </div>
              */}
        <div
          className={
            "md:flex flex-col flex-grow items-center" +
            "flex"
            //(navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="uppercase text-lg flex flex-wrap items-center justify-center pt-1 pl-2 ml-1 space-x-8 md:space-x-16 md:mx-auto md:pl-14">
            <a
              href="/"
              className="text-sky-900 font-black transition duration-300 hover:underline"
            >
              home
            </a>
            <a
              href="/about-us"
              className="text-sky-900 font-black transition duration-300 hover:underline"
            >
              about us
            </a>
            <Link href="/our-projects">
              <a className="text-sky-900 font-black transition duration-300 hover:underline">
                our projects
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header >
  );
}

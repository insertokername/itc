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
        <div
          className={
            "md:flex flex-col flex-grow items-center" +
            "flex"
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

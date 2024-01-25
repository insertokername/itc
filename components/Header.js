import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const refContainer = useRef();
  const [height, setHeight] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [nav_offset, setNavOffset, preNavOffset] = useState(0);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const [delta, setDelta] = useState(0);
  let scroll_ammount = 0;


  useEffect(() => {
    const interval = setInterval(() => {
      let temp_delta = window.scrollY - scroll_ammount;
      setDelta(temp_delta);
      scroll_ammount = window.scrollY;

      if (refContainer.current) {
        let prev_height = 0;
        setHeight(preHeight => {
          prev_height = preHeight;
          return refContainer.current.offsetHeight;
        });

        setNavOffset(function (prevNavOffset) {
          let next = prevNavOffset + temp_delta;
          //console.log("next:", next, prev_height);
          if (-next > prev_height) {
            //console.log("returning: ", -prev_height);
            return -prev_height;
          }
          else if (next > prev_height) {
            //console.log("returning: ", prev_height);
            return prev_height;
          }
          else {
            //console.log("returning:", next);
            return next;
          }
        });
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);
  if (!mounted) return null;

  return (
    <header style={{ transform: `translateY(-${nav_offset}px)` }} className={`w-full sticky-nav transform`} >
      <div ref={refContainer} className="grid grid-cols-1 justify-center max-w-xl p-2.5 mx-auto">{/*md:flex-row*/}
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

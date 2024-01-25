import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  useEffect(() => {
    if (typeof window != 'undefined') { // i hate javascript i hate javascript i hate javascript i hate javascript
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          setTop(0);
        } else if (currentScrollPos > height) {
          setTop(-100);
        }
        setPrevScrollpos(currentScrollPos);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollpos]);

  const navbarStyle = {
    zIndex: '100',
    transition: "all 0.65s",
    transform: `translateY(${top}%)`,
  };

  return (
    <header ref={ref} className="bg-white background-parallax-waves sticky-nav w-full " style={navbarStyle}>
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

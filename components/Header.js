import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const [height, setHeight] = useState(0)
  const [shoudBlur, setShoudBlur] = useState(false)
  const ref = useRef(null)
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    if (window && typeof window != 'undefined') {
      setShoudBlur(window.scrollY > 0);
    }
  })

  useEffect(() => {
    if (typeof window != 'undefined') { // i hate javascript i hate javascript i hate javascript i hate javascript
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos >= 0 && prevScrollpos > currentScrollPos ) {
          setTop(0);
        } else if(currentScrollPos >=1){
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
    position: 'fixed',
    zIndex: '100',
    transition: "all 0.5s",
    transform: `translateY(${top}%)`,
    backgroundColor: shoudBlur ? 'white' : '',
    // 'WebkitBackdropFilter': `blur(${shoudBlur ? 20 : 0}px)`,
    // 'backdropFilter': `blur(${shoudBlur ? 20 : 0}px)`
  };

  return (
    <header ref={ref} className="sticky-nav w-full" style={navbarStyle}>
      <div className="grid grid-cols-1 justify-center max-w-xl p-2.5 mx-auto">{/*md:flex-row*/}
        <div>
        <a href="/" >
          <img src="logo.png" width={250} className="mx-auto" />
          </a>
          <button
            className="px-3 py-1 pb-4 ml-auto text-black outline-none dark:text-gray-300 md:hidden relative group"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 focus:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-x-1.5 group-focus:rotate-180">
                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
              </div>
            </div>
          </button>
        </div>
        <div
          className={
            "md:flex flex-col flex-grow items-center" +
            "flex"
          }
        >
          <div className="uppercase text-lg flex flex-wrap place-items-center content-center justify-center pt-1 space-x-8">
            <a
              href="/"
              className="text-sky-900 font-black transition duration-300 hover:underline"
            >
              home
            </a>
            <a
              href="/about-us"
              className="self-stretch text-sky-900 font-black transition duration-300 hover:underline"
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

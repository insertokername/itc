import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Headerold() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <header className="w-full sticky-nav" style={{position:"static"}}>
            <div className="flex flex-col flex-wrap max-w-5xl p-2.5 mx-auto md:flex-row">
                <div className="flex flex-row items-center justify-between p-2 md:p-1">
                    <a href="/" >
                        <img src="logo.png" className="w-[250px] mx-auto" />
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
                        "md:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                >
                    <div className="flex flex-wrap items-center justify-center pt-1 pl-2 ml-1 space-x-8 md:space-x-16 md:mx-auto md:pl-14">
                        <a
                            href="/#features"
                            className="text-black transition duration-300 dark:text-gray-300 hover:text-gray-300"
                        >
                            Features
                        </a>
                        <a
                            href="/#pricing"
                            className="text-black transition duration-300 dark:text-gray-300 hover:text-gray-300"
                        >
                            Pricing
                        </a>
                        <Link href="/404">
                            <a className="text-black transition duration-300 dark:text-gray-300 hover:text-gray-300">
                                Demo
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
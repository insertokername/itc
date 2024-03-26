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
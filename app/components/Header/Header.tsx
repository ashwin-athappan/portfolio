'use client';

import React, { useState, useRef, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import "../../globals.css";
import ThemeSwitch from "@/app/components/ThemeSwitch/ThemeSwitch";
import { ChevronDown } from "lucide-react";

interface menuItemProps {
    name: string;
    link: string;
}

const menuItemsInitial: menuItemProps[] = [
    { name: "About", link: "/" },
    { name: "Tools", link: "/tools" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
];

const Header = (): React.JSX.Element => {
    const [activeMenu, setActiveMenu] = useState("About");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const highlightRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const menuItems = useMemo(() => [...menuItemsInitial], []);

    useEffect(() => {
        const activeElement = document.querySelector(".nav-item.nav-highlight") as HTMLElement;
        if (activeElement && highlightRef.current) {
            const navContainer = activeElement.closest("#navbar-sticky") as HTMLElement;
            if (navContainer) {
                const height = activeElement.offsetHeight;
                const offsetLeft = activeElement.offsetLeft;
                const offsetWidth = activeElement.offsetWidth;
                highlightRef.current.style.height = `${height}px`;
                highlightRef.current.style.left = `${offsetLeft}px`;
                highlightRef.current.style.width = `${offsetWidth}px`;
            }
        }
    }, [activeMenu]);

    const pathname = usePathname();
    useEffect(() => {
        const item = menuItems.find((item) => item.link === pathname);
        if (item) setActiveMenu(item.name);
    }, [menuItems, pathname]);

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileMenuOpen]);

    const handleMobileSelect = (item: menuItemProps) => {
        setActiveMenu(item.name);
        router.push(item.link);
        setMobileMenuOpen(false);
    };

    return (
        <nav className="bg-transparent backdrop-filter backdrop-blur-sm fixed w-full z-40 top-0">
            <div className="max-w-screen-xl flex justify-between items-center mx-auto p-3 sm:p-4">
                <h2 className="font-bold text-sky-800 text-xl sm:text-[25px] lg:text-[20px]">
                    <Link className="text-2xl sm:text-4xl" href="/">
                        <span className="sm:hidden">A</span>
                        <span className="hidden sm:inline">Ashwin</span>
                    </Link>
                </h2>

                {/* Mobile: single expandable button showing active page */}
                <div className="relative flex md:hidden" ref={mobileMenuRef}>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((o) => !o)}
                        className="flex items-center gap-1.5 rounded-[30px] bg-light-element px-4 py-2 text-sm font-extrabold text-[#000000] dark:bg-dark-background dark:border-2 dark:border-dark-nav-border dark:text-[#FFFFFF]"
                        aria-expanded={mobileMenuOpen}
                        aria-haspopup="listbox"
                        aria-label="Open menu"
                    >
                        {activeMenu}
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}
                        />
                    </button>
                    {mobileMenuOpen && (
                        <ul
                            role="listbox"
                            className="absolute left-1/2 top-full z-50 mt-2 min-w-[140px] -translate-x-1/2 rounded-[20px] border-2 border-gray-200 bg-white py-2 shadow-lg dark:border-dark-nav-border dark:bg-dark-element"
                        >
                            {menuItems.map((item) => (
                                <li key={item.link} role="option" aria-selected={item.name === activeMenu}>
                                    <button
                                        type="button"
                                        onClick={() => handleMobileSelect(item)}
                                        className={`block w-full px-4 py-2.5 text-left text-sm font-semibold transition ${
                                            item.name === activeMenu
                                                ? "bg-light-highlight text-sky-700 dark:bg-dark-highlight dark:text-sky-300"
                                                : "text-[#000000] hover:bg-gray-100 dark:text-[#FFFFFF] dark:hover:bg-dark-highlight"
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Desktop: pill nav with all items side by side */}
                <div className="hidden md:block items-center bg-nav justify-between w-auto" id="navbar-sticky">
                    <div className="flex justify-center flex-row p-2 bg-light-element dark:bg-dark-background dark:border-2 dark:border-dark-nav-border rounded-[30px] text-md font-extrabold relative">
                        <div
                            ref={highlightRef}
                            id="highlight"
                            className="bg-light-highlight dark:bg-dark-highlight absolute transition-all duration-150 ease-out"
                        />
                        {menuItems.map((item, index) => {
                            let classes =
                                "flex items-center nav-item cursor-pointer text-[#000000] dark:text-[#FFFFFF] transition ease-in duration-300 px-2 sm:px-3 text-sm sm:text-base h-[28px] sm:h-[32px] rounded-full relative z-10";
                            if (item.name === activeMenu) classes += " nav-highlight";
                            return (
                                <div
                                    key={index}
                                    id={`nav-${item.link.replace("/", "")}`}
                                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                                        e.preventDefault();
                                        setActiveMenu(item.name);
                                        router.push(item.link);
                                    }}
                                    className={classes}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <ThemeSwitch />
            </div>
        </nav>
    );
};

export default Header;
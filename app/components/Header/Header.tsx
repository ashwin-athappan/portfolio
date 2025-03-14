'use client';

import hamburger from '@/public/assets/hamburger.svg';
import React, { useState, useRef, useEffect } from "react";
import {usePathname, useRouter} from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import '../../globals.css';
import ThemeSwitch from "@/app/components/ThemeSwitch/ThemeSwitch";

const Header = (): React.JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('About');
    const highlightRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const router = useRouter();

    const menuItems = [
        {name: 'About', link: '/'},
        {name: 'Tools', link: '/tools'},
        {name: 'Projects', link: '/projects'},
        {name: 'Resume', link: '/resume'},
        {name: 'Content', link: '/content'},
    ];

    useEffect(() => {
        const activeElement = document.querySelector('.nav-item.nav-highlight') as HTMLElement;
        if (activeElement && highlightRef.current) {
            const navContainer = activeElement.closest('#navbar-sticky') as HTMLElement;
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
        const item = menuItems.find(item => item.link === pathname);
        if (item) {
            setActiveMenu(item.name);
            closeMenu();
        }
    }, []);


    return (
        <nav className="bg-transparent backdrop-filter backdrop-blur-sm fixed w-full z-40 top-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h2 className="font-bold text-sky-800 text-[25px] lg:text-[20px]">
                    <Link href="/public">Ashwin</Link>
                </h2>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse" onClick={toggleMenu}>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <Image src={hamburger} alt="menu"/>
                    </button>
                </div>
                <div
                    className={`items-center bg-nav justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
                    id="navbar-sticky">
                    <div
                        className="flex justify-center flex-col p-2 bg-light-element dark:bg-dark-background dark:border-2 dark:border-dark-nav-border rounded-[20px] md:rounded-[30px] md:flex-row text-md font-extrabold relative">
                        <div
                            ref={highlightRef}
                            id="highlight"
                            // Changed duration from 300ms to 150ms and using ease-out
                            className="bg-light-highlight dark:bg-dark-highlight absolute transition-all duration-150 ease-out"
                        ></div>
                        {menuItems.map((item, index) => {
                            let classes = "flex items-center nav-item cursor-pointer text-[#000000] dark:text-[#FFFFFF] transition ease-in duration-300 px-3 h-[32px] rounded-full relative z-10";
                            if (item.name === activeMenu) {
                                classes += " nav-highlight";
                            }

                            return (
                                <div key={index}
                                     id={`nav-${item.link.replace('/', '')}`}
                                     onClick={(e: React.MouseEvent<HTMLElement>) => {
                                         e.preventDefault();
                                         setActiveMenu(item.name);
                                         closeMenu();
                                         router.push(item.link);
                                     }}
                                     className={classes}>
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                    <ThemeSwitch/>
                </div>
            </div>
        </nav>
    );
};

export default Header;
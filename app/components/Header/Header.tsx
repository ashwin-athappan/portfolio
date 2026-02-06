'use client';

import React, {useState, useRef, useEffect, useMemo} from "react";
import {usePathname, useRouter} from 'next/navigation';
import Link from 'next/link';
import '../../globals.css';
import ThemeSwitch from "@/app/components/ThemeSwitch/ThemeSwitch";

interface menuItemProps {
    name: string;
    link: string;
}

const menuItemsInitial: menuItemProps[] = [
    {name: 'About', link: '/'},
    {name: 'Tools', link: '/tools'},
    {name: 'Projects', link: '/projects'},
    {name: 'Resume', link: '/resume'},
];

const Header = (): React.JSX.Element => {
    const [activeMenu, setActiveMenu] = useState('About');
    const highlightRef = useRef<HTMLDivElement>(null);


    const router = useRouter();

    const menuItems = useMemo(() => ([...menuItemsInitial]), [])

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
        }
    }, [menuItems, pathname]);


    return (
        <nav className="bg-transparent backdrop-filter backdrop-blur-sm fixed w-full z-40 top-0">
            <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
                <h2 className="font-bold text-sky-800 text-[25px] lg:text-[20px]">
                    <Link className="text-4xl" href="/">Ashwin</Link>
                </h2>
                <div className="items-center bg-nav justify-between flex w-auto" id="navbar-sticky">
                    <div
                        className="flex justify-center flex-row p-2 bg-light-element dark:bg-dark-background dark:border-2 dark:border-dark-nav-border rounded-[30px] text-md font-extrabold relative">
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
                                         router.push(item.link);
                                     }}
                                     className={classes}>
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <ThemeSwitch/>
            </div>
        </nav>
    );
};

export default Header;
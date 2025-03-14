"use client";

import React from 'react';
import Image from "next/image";
import lightArrow from "@/public/assets/arrows/light_arrow.svg";
import darkArrow from "@/public/assets/arrows/dark_arrow.svg";
import Link from "next/link";

interface LinkArrowProps {
    link: string;
    mounted: boolean;
    theme: string | undefined;
    linkType: string;
}

const LinkArrow = ({link, mounted, theme, linkType}: LinkArrowProps): React.JSX.Element => {

    const moveStickyNavTablet = () => {
        if (linkType === "internal") {
            const linkElementToClick = document.getElementById(`nav-${link.replace('/', '')}`) as HTMLElement;
            if (linkElementToClick) {
                linkElementToClick.click();
            }
        }
    }

    return (
        <Link
            href={link}
            target={linkType === "external" ? "_blank" : "_self"}
            onClick={moveStickyNavTablet}
            className="bg-white dark:bg-dark-element w-10 h-10 rounded-full absolute bottom-4 left-4 flex justify-center items-center ring-1 ring-gray-400 hover:ring-4 hover:ring-gray-200 transition-all duration-700 ease-in-out"
        >
            {mounted ? (
                theme === "dark" ? (
                    <Image src={lightArrow} alt="light arrow" width={20} height={20}/>
                ) : (
                    <Image src={darkArrow} alt="dark arrow" width={20} height={20}/>
                )
            ) : (
                <Image src={darkArrow} alt="default arrow" width={20} height={20}/>
            )}
        </Link>
    );
};

export default LinkArrow;
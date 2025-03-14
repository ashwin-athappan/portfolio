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
    text: string;
}

const ExpandableLinkArrow = ({link, mounted, theme, linkType, text}: LinkArrowProps): React.JSX.Element => {

    return (
        <div className="h-44 flex justify-start">
            <Link
                href={link}
                target={linkType === "external" ? "_blank" : "_self"}
                className="bg-white dark:bg-dark-element duration-500  absolute truncate m-4 whitespace-nowrap left-0 bottom-0 w-10 h-10 hover:w-[135px] hover:pl-2 flex justify-center items-center hover:justify-start rounded-full cursor-pointer ring-1 hover:ring-4 ring-gray-200 dark:ring-gray-400"
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
                <span className="ml-2">{text}</span>
            </Link>
        </div>
    );
};

export default ExpandableLinkArrow;
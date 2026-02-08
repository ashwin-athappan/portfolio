"use client";

import React from 'react';
import Image from "next/image";
import lightGitHub from "@/public/assets/svg/devops/github_white.svg";
import darkGitHub from "@/public/assets/svg/devops/github.svg";
import Link from "next/link";

interface LinkGitHubProps {
    link: string;
    mounted: boolean;
    theme: string | undefined;
    linkType: string;
}

const LinkGitHub = ({link, mounted, theme, linkType}: LinkGitHubProps): React.JSX.Element => {

    return (
        <Link
            href={link}
            target={linkType === "external" ? "_blank" : "_self"}
            className="bg-white dark:bg-dark-element w-10 h-10 rounded-full absolute bottom-4 left-18 flex justify-center items-center ring-1 ring-gray-400 hover:ring-4 hover:ring-gray-200 transition-all duration-700 ease-in-out"
        >
            {mounted ? (
                theme === "dark" ? (
                    <Image src={lightGitHub} alt="light arrow" width={20} height={20}/>
                ) : (
                    <Image src={darkGitHub} alt="dark arrow" width={20} height={20}/>
                )
            ) : (
                <Image src={darkGitHub} alt="default arrow" width={20} height={20}/>
            )}
        </Link>
    );
};

export default LinkGitHub;
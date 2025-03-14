'use client';

// pages/maps.js (or components/Maps.js)
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {useTheme} from "next-themes";
import github_dark from '@/public/assets/svg/github.svg';
import github_light from '@/public/assets/svg/github_white.svg';
import LinkArrow from "@/app/components/LinkArrow/LinkArrow";
import Link from "next/link";

const GitHub = () => {
    const githubUrl = "https://github.com/ashwin-athappan";
    const [githubImage, setGitHubImage] = useState(github_dark);

    const {theme} = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            setGitHubImage(github_light);
        } else {
            setGitHubImage(github_dark);
        }
    }, [theme]);

    return (
        <div className="md:row-span-1 col-span-1 md:col-span-1 bg-white border-2 border-transparent
            dark:bg-dark-element dark:border-2 dark:border-dark-nav-border
            rounded-[30px] relative h-[280px] justify-center overflow-hidden flex hover:shadow-lg dark:hover:shadow-xl">
            <Image src={githubImage} alt="GitHub" width={200} height={200}/>
            <LinkArrow link={githubUrl} mounted={mounted} theme={theme} linkType={"external"}/>
        </div>
    );
};

export default GitHub;
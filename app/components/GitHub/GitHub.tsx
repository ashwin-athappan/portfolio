'use client';

// pages/maps.js (or components/Maps.js)
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {useTheme} from "next-themes";
import github_dark from '@/public/assets/svg/devops/github.svg';
import github_light from '@/public/assets/svg/devops/github_white.svg';
import LinkArrow from "@/app/components/LinkArrow/LinkArrow";

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
        <div className="md:row-span-1 col-span-1 md:col-span-1 glass-card
            relative h-[280px] justify-center overflow-hidden flex transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <Image src={githubImage} alt="GitHub" width={200} height={200} className="p-10 h-auto w-auto"/>
            <LinkArrow link={githubUrl} mounted={mounted} theme={theme} linkType={"external"}/>
        </div>
    );
};

export default GitHub;
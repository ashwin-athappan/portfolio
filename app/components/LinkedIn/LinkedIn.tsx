'use client';

// pages/maps.js (or components/Maps.js)
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {useTheme} from "next-themes";
import linkedin from '@/public/assets/svg/social/linkedin.svg';
import LinkArrow from "@/app/components/LinkArrow/LinkArrow";

const LinkedIn = () => {
    const linkedInURL = "https://www.linkedin.com/in/ashwin-athappan/";

    const {theme} = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="md:row-span-1 col-span-1 md:col-span-1 bg-[#0077B5] border-2 border-transparent
            rounded-[30px] relative h-[280px] justify-center overflow-hidden flex hover:shadow-lg dark:hover:shadow-xl">
            <Image src={linkedin} alt="GitHub" width={200} height={200} className="p-10 h-auto w-auto"/>
            <LinkArrow link={linkedInURL} mounted={mounted} theme={theme} linkType={"external"}/>
        </div>
    );
};

export default LinkedIn;
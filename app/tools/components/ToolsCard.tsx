"use client";

import React, {useEffect, useState} from 'react';
import Image, {StaticImageData} from 'next/image';
import {useTheme} from "next-themes";

import LinkArrow from "@/app/components/LinkArrow/LinkArrow";

interface ToolsCardProps {
    index: number;
    item: {
        id: number;
        name: string;
        image: StaticImageData;
        link: string;
        description: string;
    };
}

const ToolsCard = ({index, item}: ToolsCardProps) => {
    const {theme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div
                key={index}
                className="bg-white col-span-2 md:col-span-1 lg:col-span-1 rounded-[30px] flex flex-col justify-center hover:shadow-lg min-h-[280px] dark:bg-dark-element dark:border-2 dark:border-dark-nav-border dark:text-white items-start relative group"
            >
                <div className="m-5">
                    <div className="w-12 h-12 flex items-center justify-center absolute inset-x-0 top-0 ml-6 mt-6">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="mt-4 text-left w-full mb-3">
                        <h2 className="text-2xl font-medium text-gray-800 dark:text-white roboto-mono-500">
                            {item.name}
                        </h2>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                            {item.description}
                        </p>
                    </div>

                    <LinkArrow link={item.link} mounted={mounted} theme={theme} linkType={"external"}/>
                </div>
            </div>
        </>
    );
};

export default ToolsCard;
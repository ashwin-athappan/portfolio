"use client";

import React, {useEffect, useState} from "react";
import Image, {StaticImageData} from "next/image";
import lightArrow from "@/public/assets/arrows/light_arrow.svg";
import darkArrow from "@/public/assets/arrows/dark_arrow.svg";
import Link from "next/link";
import {useTheme} from "next-themes";
import LinkArrow from "@/app/components/LinkArrow/LinkArrow";

interface CredlyBadgeProps {
    badge: {
        id: string;
        title: string;
        link: string;
        image: StaticImageData;
        skills: string[];
    };
    index: number;
}

export default function Badge(props: CredlyBadgeProps): React.JSX.Element {
    const {badge, index} = props;

    const {theme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            key={index}
            className="bg-white col-span-2 md:col-span-1 lg:col-span-1 rounded-[30px] flex flex-col hover:shadow-lg min-h-[400px] dark:bg-dark-element dark:border-2 dark:border-dark-nav-border dark:text-white relative group"
        >
            <div className="m-5 flex flex-col justify-between">
                {/* Title Section */}
                <div className="block mb-2">
                    <h2 className="text-md font-semibold text-justify text-dark-element dark:text-white">
                        {badge.title}
                    </h2>
                </div>
                <hr className="border-dark-nav-border dark:border-white mt-2 mb-4"/>
                {/* Image Section */}
                <div className="flex justify-center h-[150px] p-5">
                    <Image src={badge.image} alt={badge.title} width={150} height={150} className="object-contain"/>
                </div>

                <hr className="border-dark-nav-border dark:border-white mb-4"/>
                <div className="flex flex-col">

                    <div className="flex flex-wrap gap-2 mb-4">
                        {badge.skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Link Section */}
                <div className="mb-10">
                    <LinkArrow link={badge.link} mounted={mounted} theme={theme} linkType={"external"}/>
                </div>
            </div>
        </div>
    );
}
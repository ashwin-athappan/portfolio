"use client";

import React, {useEffect, useState} from "react";
import Badge from "@/app/tools/components/Badge";

import github_white from "@/public/assets/svg/github_white.svg";
import github from "@/public/assets/svg/github.svg";
import aws_white from "@/public/assets/svg/aws_white.svg";
import aws from "@/public/assets/svg/aws.svg";

import {certificates, toolsAndTechnologies, ide} from "@/app/tools/utils/data";
import ToolsCard from "@/app/tools/components/ToolsCard";
import {useTheme} from "next-themes";
import {StaticImageData} from "next/image";

interface toolsAndTechnologiesProps {
    id: number;
    name: string;
    image: StaticImageData;
    link: string;
    description: string;
}

export default function ToolsSection(): React.JSX.Element {

    const {theme} = useTheme();

    const [languages, setLanguages] = useState<toolsAndTechnologiesProps[]>(toolsAndTechnologies);

    useEffect(() => {
        const modifiedArray = toolsAndTechnologies.map((item) => {
            if (item.name === 'GitHub' && theme === 'dark') {
                item.image = github_white;
            } else if (item.name === 'GitHub' && theme === 'light') {
                item.image = github;
            } else if (item.name === 'AWS' && theme === 'dark') {
                item.image = aws_white;
            } else if (item.name === 'AWS' && theme === 'light') {
                item.image = aws;
            }
            return item;
        });
        setLanguages(modifiedArray);
    }, [theme]);

    return (
        <div className="p-4 mt-5">
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">Certificates</h1>
            </div>
            <div
                className="container mt-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-10 xl:px-32 pb-20 content">
                {certificates.map((badge, index) => (
                    <Badge badge={badge} index={index} key={badge.id}/>
                ))}
            </div>
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">Languages & Frameworks</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-12 xl:px-32 pb-20">
                {languages.map((item, index) => (<ToolsCard key={item.id} index={index} item={item}/>))}
            </div>
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">Tools</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-12 xl:px-32 pb-20">
                {ide.map((item, index) => (<ToolsCard key={item.id} index={index} item={item}/>))}
            </div>
        </div>
    );
}
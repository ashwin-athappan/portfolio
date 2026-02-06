"use client";

import React from "react";
import Badge from "@/app/tools/components/Badge";
import {certificates, toolsAndTechnologies, ide} from "@/app/tools/utils/data";
import ToolsCard from "@/app/tools/components/ToolsCard";
import {useThemeImages} from "@/lib/hooks/useThemeImages";

export default function ToolsSection(): React.JSX.Element {
    const languages = useThemeImages(toolsAndTechnologies);

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
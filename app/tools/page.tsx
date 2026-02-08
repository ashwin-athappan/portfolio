"use client";

import React from "react";
import Badge from "@/app/tools/components/Badge";
import {certificates, languages, frameworks, devops, databases, tools} from "@/app/tools/utils/data";
import ToolsCard from "@/app/tools/components/ToolsCard";
import {useThemeImages} from "@/lib/hooks/useThemeImages";

export default function ToolsSection(): React.JSX.Element {
    const languagesList = useThemeImages(languages);
    const frameworksList = useThemeImages(frameworks);
    const devopsList = useThemeImages(devops);
    const databasesList = useThemeImages(databases);
    const toolsList = useThemeImages(tools);

    return (
        <div className="p-4 mt-5">
            {/* ==================== CERTIFICATIONS ==================== */}
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">Certificates</h1>
            </div>
            <div
                className="container mt-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-10 xl:px-32 pb-20 content">
                {certificates.map((badge, index) => (
                    <Badge badge={badge} index={index} key={index}/>
                ))}
            </div>

            {/* ==================== LANGUAGES ==================== */}
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">Languages</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-12 xl:px-32 pb-20">
                {languagesList.map((item, index) => (<ToolsCard key={`language-${index}`} index={index} item={item}/>))}
            </div>

            {/* ==================== FRAMEWORKS ==================== */}
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">Frameworks</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-12 xl:px-32 pb-20">
                {frameworksList.map((item, index) => (<ToolsCard key={`frameworks-${index}`} index={index} item={item}/>))}
            </div>

            {/* ==================== DEVOPS ==================== */}
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">DevOps</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-12 xl:px-32 pb-20">
                {devopsList.map((item, index) => (<ToolsCard key={`frameworks-${index}`} index={index} item={item}/>))}
            </div>

            {/* ==================== DATABASES ==================== */}
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">Databases</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-12 xl:px-32 pb-20">
                {databasesList.map((item, index) => (<ToolsCard key={`frameworks-${index}`} index={index} item={item}/>))}
            </div>

            {/* ==================== TOOLS ==================== */}
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">Tools</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-12 xl:px-32 pb-20">
                {toolsList.map((item, index) => (<ToolsCard key={index} index={index} item={item}/>))}
            </div>
        </div>
    );
}
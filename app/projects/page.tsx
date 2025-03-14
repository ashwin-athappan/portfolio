"use client";

import Image from "next/image";
import {projects} from "./utils/data";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import LinkArrow from "@/app/components/LinkArrow/LinkArrow";
import LinkGitHub from "@/app/components/LinkGitHub/LinkGitHub";

const Projects = () => {

    const {theme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-10 xl:px-32 pb-20 mt-10 content h-full">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="row-span-2 md:row-span-1 col-span-2 bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border rounded-[30px] p-6 flex flex-col gap-4 h-[400px] md:h-[310px] hover:shadow-lg dark:hover:shadow-xl hover-trigger relative"
                >
                    <div className="grid grid-cols-4 sm:mb-4">
                        {/* Image */}
                        <div className="md:col-span-2 col-span-4">
                            <Image
                                className="w-full h-[100px] md:h-full object-contain rounded-lg p-2"
                                src={project.image}
                                alt={project.name}
                                width={200}
                                height={100}
                            />
                        </div>

                        {/* Text */}
                        <div className="md:col-span-2 col-span-4">
                            <h5 className="md:mb-2 text-xl font-bold font-mono text-gray-900 dark:text-white p-2">
                                {project.name}
                            </h5>
                            <p className="font-sans text-justify text-gray-700 dark:text-gray-300 text-xs md:text-sm p-2 mb-6">
                                {project.description}
                            </p>

                            <div className="flex gap-5 md:ml-5">
                                {project.tech.map((tech, techIndex) => (
                                    <div key={techIndex} className="w-7 h-7 flex items-center justify-center">
                                        <Image className="w-full h-full object-contain" src={tech.image} alt={tech.name}
                                               width={28} height={28}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links and Status */}
                    <div className="flex gap-x-5 md:gap-x-8">
                        {project.demo && (
                            <LinkArrow link={project.demo} mounted={mounted} theme={theme} linkType={"external"}/>
                        )}

                        {project.github && (
                            <LinkGitHub link={project.github} mounted={mounted} theme={theme} linkType={"external"}/>
                        )}

                        {/* Status Tags */}
                        <div className="absolute bottom-0 right-0 sm:flex items-center space-x-2 m-5">
                            {project.type && (
                                <span
                                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {project.type}
                </span>
                            )}
                            {project.status ? (
                                <span
                                    className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  Open
                </span>
                            ) : (
                                <span
                                    className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  Closed
                </span>
                            )}
                            <p className="text-gray-500 text-sm">{project.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;

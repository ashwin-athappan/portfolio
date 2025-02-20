import React from "react";
import Image, {StaticImageData} from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: { name: string; icon: StaticImageData }[];
    link: string;
    github: string;
    imageUrl: {
        src: StaticImageData,
        alt: string
        width: number
        height: number
    };
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div
            className="w-50 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Project Image */}
            <Image src={props.imageUrl.src} width={props.imageUrl.width} height={props.imageUrl.height}
                   alt={props.imageUrl.alt} className="w-full h-48 object-cover"/>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{props.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{props.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {props.techStack.map((tech, index) => (
                        <div key={index} className="flex items-center justify-center w-8 h-8 rounded-full">
                            <Image src={tech.icon} width={10} height={10} alt={tech.name} className="w-10 h-10" />
                        </div>
                    ))}
                </div>

                {/* Link */}
                <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-500 hover:text-blue-700 text-sm font-medium"
                >
                    View Project →
                </a>
            </div>
        </div>
    );
};

export {ProjectCard};
export type {ProjectCardProps};

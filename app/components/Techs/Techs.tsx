'use client';

import Image from 'next/image';
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";

// Import SVGs as named components
import Html5Icon from '@/public/assets/svg/languages/html5.svg';
import PythonIcon from '@/public/assets/svg/languages/python.svg';
import MysqlIcon from '@/public/assets/svg/database/mysql.svg';
import NextJsIcon from '@/public/assets/svg/frameworks/nextjs2.svg';
import GithubIcon from '@/public/assets/svg/devops/github.svg';
import JsIcon from '@/public/assets/svg/languages/js.svg';
import JiraIcon from '@/public/assets/svg/devops/jira.svg';
import Docker from '@/public/assets/svg/devops/docker.svg';
import TailwindIcon from '@/public/assets/svg/frameworks/tailwindcss.svg';
import PostmanIcon from '@/public/assets/svg/tools/postman.svg';
import KubernetesIcon from '@/public/assets/svg/devops/kubernetes.svg';
import NodeJSIcon from '@/public/assets/svg/frameworks/nodejs.svg';

import LinkArrow from "@/app/components/LinkArrow/LinkArrow";

interface Tech {
    Component?: string;
    alt: string;
    link?: string;
}

const Techs = () => {
    const techs : Tech[] = [
        {Component: Html5Icon, alt: 'HTML5'},
        {Component: PythonIcon, alt: 'Python'},
        {alt: ''}, // Empty slot
        {Component: MysqlIcon, alt: 'MySQL', link: 'https://www.mysql.com/'},
        {Component: NextJsIcon, alt: 'NextJS', link: 'https://nextjs.org/'},
        {alt: ''}, // Empty slot
        {Component: GithubIcon, alt: 'GitHub', link: 'https://github.com/'},
        {Component: JsIcon, alt: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {Component: JiraIcon, alt: 'Jira', link: 'https://www.atlassian.com/software/jira'},
        {Component: Docker, alt: 'Docker', link: 'https://www.docker.com/'},
        {Component: TailwindIcon, alt: 'Tailwind CSS', link: 'https://tailwindcss.com/'},
        {Component: PostmanIcon, alt: 'Postman', link: 'https://www.postman.com/'},
        {Component: PythonIcon, alt: 'Python', link: 'https://www.python.org/'},
        {Component: KubernetesIcon, alt: 'Kubernetes', link: 'https://kubernetes.io/'},
        {Component: NodeJSIcon, alt: 'NodeJS', link: 'https://nodejs.org/en'},
    ];

    const {theme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className="md:row-span-2 col-span-1 glass-card relative h-[576px] overflow-hidden flex transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <div className="grid gap-4 grid-cols-3 rotate-[35deg] absolute bottom-20 -right-20">
                {techs.map((tech, index) => (
                    <div key={index} className="contents">
                        {tech.link ? (
                            <a
                                href={tech.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-dark-highlight dark:border-2 dark:border-dark-nav-border w-24 h-24 rounded-lg flex items-center
                  justify-center drop-shadow-md hover:shadow-lg transition-shadow"
                            >
                                {tech.Component && (
                                    <Image
                                        src={tech.Component}
                                        alt={tech.alt}
                                        width={64}
                                        height={64}
                                        className="p-5 h-auto w-auto"
                                    />
                                )}
                            </a>
                        ) : (
                            <div
                                className="bg-white dark:bg-gray-700 w-24 h-24 rounded-lg flex items-center
                  justify-center drop-shadow-md hover:shadow-lg transition-shadow"
                            >
                                {tech.Component && (
                                    <Image
                                        src={tech.Component}
                                        alt={tech.alt}
                                        width={64}
                                        height={64}
                                        className="p-5 h-auto w-auto"
                                    />
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <LinkArrow link="/tools" mounted={mounted} theme={theme} linkType={"internal"}/>
        </div>
    );
};

export default Techs;
"use client";

import Image from 'next/image';


import git from "@/public/_assets/svg/git.svg"
import java from "@/public/_assets/svg/java.svg"
import reactjs from "@/public/_assets/svg/reactjs.svg"
import linux from "@/public/_assets/svg/linux.svg"
import mysql from "@/public/_assets/svg/mysql.svg"
import docker from "@/public/_assets/svg/docker.svg"
import python from "@/public/_assets/svg/python.svg"
import mongodb from "@/public/_assets/svg/mongodb.svg"
import nextjs2 from "@/public/_assets/svg/nextjs2.svg"
import kubernetes from "@/public/_assets/svg/kubernetes.svg"
import javascript from "@/public/_assets/svg/js.svg"
import typescript from "@/public/_assets/svg/typescript.svg"

interface techSkill {
    skill: string;
    image: any;
    link: string;
}

const TechCard = () => {

    const displayTools = () => {
        const toolsTab = document.getElementById('hero-tab-tools');
        if (toolsTab) {
            console.log(toolsTab);
            toolsTab.click();
        }
    }

    const shuffleArray = (array: techSkill[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    let techSkills = [
        {
            skill: 'JavaScript',
            image: javascript,
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            skill: 'TypeScript',
            image: typescript,
            link: 'https://www.typescriptlang.org/',
        },
        {
            skill: 'Java',
            image: java,
            link: 'https://www.java.com/en/',
        },
        {
            skill: 'Python',
            image: python,
            link: 'https://www.python.org/',
        },
        {
            skill: 'NextJS',
            image: nextjs2,
            link: 'https://nextjs.org/',
        },
        {
            skill: 'ReactJS',
            image: reactjs,
            link: 'https://react.dev/',
        },
        {
            skill: 'Docker',
            image: docker,
            link: 'https://www.docker.com/',
        },
        {
            skill: 'Kubernetes',
            image: kubernetes,
            link: 'https://kubernetes.io/',
        },
        {
            skill: 'Linux',
            image: linux,
            link: 'https://en.wikipedia.org/wiki/Linux',
        },
        {
            skill: 'MongoDB',
            image: mongodb,
            link: 'https://www.mongodb.com/',
        },
        {
            skill: 'Git',
            image: git,
            link: 'https://git-scm.com/',
        },
        {
            skill: 'MySQL',
            image: mysql,
            link: 'https://www.mysql.com/',
        },
    ];

    techSkills = shuffleArray(techSkills);

    return (
        <div
            className="my-5 bg-[url('/_assets/bg/topographic_black.svg')] dark:bg-[url('/_assets/bg/topographic_white.svg')] md:row-span-2 col-span-2 md:col-span-1 border border-black dark:bg-jetBlackDark dark:border-white rounded-[30px] static relative h-[560px] overflow-hidden flex">
            <div className="grid gap-4 grid-cols-3 rotate-[35deg] content-center absolute -top-20 -right-20">
                {techSkills.map((skill, index) => {
                    const imageClassName = "w-10 lg:w-16";
                    const mongoDBClassName = "h-16 w-10 lg:w-16";
                    return (
                        <>
                            <a key={index} href={skill.link || '#'} target="_blank" rel="noopener noreferrer"
                               className="bg-white dark:bg-gray-400 w-24 h-24 rounded-lg flex items-center justify-center dark:shadow-gray-700 drop-shadow-md hover:shadow-lg">
                                <Image src={skill.image} alt={skill.skill} width={30} height={30}
                                       className={skill.skill === 'MongoDB' ? mongoDBClassName : imageClassName}/>
                            </a>
                            {(index + 1) % 3 === 0 ?
                                (<div
                                    className="bg-white dark:bg-gray-700 w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg"></div>)
                                : null
                            }
                        </>
                    );
                })}
            </div>
            <div onClick={() => displayTools()}>
                <div
                    className="bg-white dark:bg-gray-700 w-10 h-10 rounded-full absolute bottom-0 left-0 m-4 flex justify-center items-center ring-1 ring-gray-400 hover:ring-4 hover:ring-gray-200 hover:transition duration-700 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18.256 18.256"
                         style={{transition: '.3s'}}>
                        <g transform="translate(5.363 5.325)">
                            <path d="M14.581,7.05,7.05,14.581" transform="translate(-7.05 -7.012)" fill="none"
                                  stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            <path d="M10,7l5.287.037.038,5.287" transform="translate(-7.756 -7)" fill="none"
                                  stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        </g>
                        <path d="M0,0H18.256V18.256H0Z" fill="none"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TechCard;
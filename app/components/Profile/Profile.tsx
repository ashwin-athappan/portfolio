'use client';

import {useEffect, useState} from 'react';
import Image from "next/image";
import styles from './Profile.module.css';

import coding from '@/public/assets/me/coding.png';

const Profile = () => {
    const [gridCols, setGridCols] = useState('col-span-1');

    // Handle window resize
    const updateGridCols = (windowWidth: number) => {
        setGridCols(
            windowWidth >= 1024 ? 'col-span-2' :
                windowWidth >= 640 ? 'col-span-2' :
                    'col-span-1'
        );
    };

    // Initialize and handle resize
    useEffect(() => {
        const handleResize = () => updateGridCols(window.innerWidth);

        updateGridCols(window.innerWidth); // Set initial value
        window.addEventListener('resize', handleResize);

        // Cleanup event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className={`${styles.profileCard} ${gridCols} bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border rounded-[30px] p-6 flex flex-col md:gap-4 h-[280px] hover:shadow-lg dark:hover:shadow-xl`}>
            <div className="flex justify-between">
                <div className={`${styles.imageContainer} relative w-20- h-20 lg:w-25 lg:h-25`}>
                    <Image
                        className={`${styles.defaultImage} w-full h-full object-cover`}
                        src={coding}
                        alt="default image"
                        width={100}
                        height={100}
                    />
                </div>
                <p className="w-[80%] font-medium text-gray-500 dark:text-gray-300 text-md text-justify">
                    I’m <span className="text-lg">Ashwin</span>, an enthusiastic Software Developer from Arlington,
                    Texas. I’m passionate about crafting impactful solutions using <span className="font-semibold">React.js, Spring Boot, Node.js and Next.js</span>,
                    with expertise in <span className="font-semibold">AWS, Docker, Kubernetes, and Git</span>.
                </p>
            </div>
            <div className="relative inline-block">
                <p className="font-medium text-gray-500 dark:text-gray-300 text-md text-justify">
                    My expertise also includes database management, performance testing with JMeter, and software
                    development
                    workflows using Git, Maven, and JIRA. I am proficient in <span className="font-semibold">Python, Java, JavaScript, and TypeScript</span>.
                    In my free time, I love listening to music and playing video games.
                </p>
            </div>
        </div>
    );
};

export default Profile;
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
            className={`${styles.profileCard} ${gridCols} hero-gradient p-4 sm:p-6 flex flex-col md:gap-4 min-h-[280px] transition-shadow hover:shadow-[0_16px_48px_rgba(37,99,235,0.3)]`}>
            <div className="flex justify-between">
                <div className={`${styles.imageContainer} relative w-20 h-20 lg:w-25 lg:h-25 shrink-0 rounded-2xl overflow-hidden`}>
                    <Image
                        className={`${styles.defaultImage} w-full h-full object-cover`}
                        src={coding}
                        alt="default image"
                        width={80}
                        height={80}
                    />
                </div>
                <p className="w-[80%] font-medium text-white/95 text-md text-justify drop-shadow-sm">
                    I’m <span className="text-lg font-bold text-white">Ashwin</span>, an enthusiastic Software Developer from Arlington,
                    Texas. I’m passionate about crafting impactful solutions using <span className="font-semibold text-white">React.js, Spring Boot, Node.js and Next.js</span>,
                    with expertise in <span className="font-semibold text-white">AWS, Docker, Kubernetes, and Git</span>.
                </p>
            </div>
            <div className="relative inline-block">
                <p className="font-medium text-white/90 text-md text-justify drop-shadow-sm">
                    My expertise also includes database management, performance testing with JMeter, and software
                    development
                    workflows using Git, Maven, and JIRA. I am proficient in <span className="font-semibold text-white">Python, Java, JavaScript, and TypeScript</span>.
                </p>
            </div>
        </div>
    );
};

export default Profile;
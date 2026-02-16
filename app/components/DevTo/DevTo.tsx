'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import LinkArrow from '@/app/components/LinkArrow/LinkArrow';
import devto from '@/public/assets/svg/devto.svg';

const DEV_TO_URL = 'https://dev.to/ashwin_athappan';

const DevTo = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className="md:row-span-1 col-span-1 md:col-span-1 glass-card rounded-[28px] relative h-[280px] justify-center overflow-hidden flex transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
            aria-label="Visit my Dev.to profile"
        >
            <Image src={devto} alt="Visit my Dev.to profile" width={200} height={200} className="p-10 h-auto w-auto" />
            <LinkArrow link={DEV_TO_URL} mounted={mounted} theme={theme} linkType="external" />
        </div>
    );
};

export default DevTo;

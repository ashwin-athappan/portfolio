'use client';

// pages/maps.js (or components/Maps.js)
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import {useTheme} from "next-themes";
import youtube from "@/public/assets/svg/social/youtube.svg";
import LinkArrow from "@/app/components/LinkArrow/LinkArrow";
import StaticPill from "@/app/components/StaticPill/StaticPill";

const YouTube = () => {
    const youTubeUrl = "https://www.youtube.com/@coffeewithcode9988";

    const [subscriberCount, setSubscriberCount] = React.useState(0);

    const getYouTubeSubscribers = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCmC64HZp0Ze9vH9pFmc9-lg&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`);
        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            return 0;
        }

        return data.items[0].statistics.subscriberCount;
    };

    useEffect(() => {
        getYouTubeSubscribers().then((data) => {
            setSubscriberCount(data);
        });
    }, []);

    const {theme} = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <div className="md:row-span-1 col-span-1 md:col-span-1 glass-card
            relative h-[280px] justify-center overflow-hidden flex transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <Image src={youtube} alt="YouTube" width={200} height={200} className="p-10 h-auto w-auto"/>
            <LinkArrow link={youTubeUrl} mounted={mounted} theme={theme} linkType={"external"}/>
            <StaticPill content={subscriberCount} />
        </div>
    );
};

export default YouTube;
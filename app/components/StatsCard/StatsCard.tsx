"use client";

import React, { useState, useEffect } from "react";
import { useTestimonials } from "@/lib/hooks/useTestimonials";

/** Same channel ID as YouTube component – uses NEXT_PUBLIC_GOOGLE_API_KEY */
const YOUTUBE_CHANNEL_ID = "UCmC64HZp0Ze9vH9pFmc9-lg";
const GITHUB_USER = "ashwin-athappan";

/** Edit this to match your experience (e.g. from first professional role start date). */
const YEARS_OF_EXPERIENCE = 4;

export default function StatsCard(): React.JSX.Element {
    const [youtubeSubs, setYoutubeSubs] = useState<number>(0);
    const [githubRepos, setGithubRepos] = useState<number | null>(null);
    const { testimonials } = useTestimonials();

    useEffect(() => {
        const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
        if (!key) return;
        fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${key}`
        )
            .then((res) => res.json())
            .then((data) => {
                const count = data?.items?.[0]?.statistics?.subscriberCount;
                if (count != null) setYoutubeSubs(Number(count));
            })
            .catch(() => {});
    }, []);

    useEffect(() => {
        fetch(`https://api.github.com/users/${GITHUB_USER}`)
            .then((res) => res.json())
            .then((data) => {
                if (typeof data?.public_repos === "number")
                    setGithubRepos(data.public_repos);
            })
            .catch(() => {});
    }, []);

    const stats = [
        { label: "Years experience", value: `${YEARS_OF_EXPERIENCE}+` },
        {
            label: "YouTube subs",
            value: youtubeSubs > 0 ? youtubeSubs.toLocaleString() : "—",
        },
        { label: "Testimonials", value: testimonials.length },
        {
            label: "GitHub repos",
            value: githubRepos != null ? githubRepos : "—",
        },
    ];

    return (
        <div
            className="md:row-span-1 col-span-1 md:col-span-1 glass-card rounded-[28px] p-6 min-h-[280px] flex flex-col justify-center transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
            aria-label="Stats by the numbers"
        >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-5">
                By the numbers
            </h3>
            <div className="grid grid-cols-2 gap-5">
                {stats.map(({ label, value }) => (
                    <div key={label}>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white tabular-nums">
                            {value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

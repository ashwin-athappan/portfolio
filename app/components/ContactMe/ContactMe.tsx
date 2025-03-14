"use client";

import React, {useEffect, useState} from "react";
import { Copy, Check } from "lucide-react";

import ExpandableLinkArrow from "@/app/components/ExpandableLinkArrow/ExpandableLinkArrow";
import {useTheme} from "next-themes";

const ContactMe = (): React.JSX.Element => {
    const [copied, setCopied] = useState(false);
    const email = "ashwinathappank@gmail.com";

    const {theme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return (
        <div className="relative col-span-2 rounded-[30px] h-[280px] p-4 md:px-12 pb-20 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-48 h-44 bg-[#98d0ff] dark:bg-gray-800 rounded-bl-full flex items-center justify-center"></div>

            {/* Header */}
            <h2 className="font-bold text-[25px] lg:text-[30px] dark:text-white">
                Get In Touch:
            </h2>

            {/* Contact Info */}
            <p className="mt-4 text-gray-500 flex items-center dark:text-white">
                <span className="mr-2">Contact:</span>
                <span>{email}</span>

                {/* Copy Button */}
                <button
                    onClick={copyToClipboard}
                    className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                    {copied ? <Check color="green" /> : <Copy />}
                </button>
            </p>

            {/* Contact Button */}
            <ExpandableLinkArrow link={`mailto:${email}`} mounted={mounted} theme={theme} linkType={"external"} text={"Contact Me"} />
        </div>
    );
};

export default ContactMe;

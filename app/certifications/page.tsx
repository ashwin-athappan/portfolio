"use client";

import React from "react";
import Badge from "@/app/tools/components/Badge";
import { certificates } from "@/app/tools/utils/data";

export default function CertificationsPage(): React.JSX.Element {
    return (
        <div className="p-4 mt-5">
            <div className="w-full flex justify-center max-w-7xl mx-auto border-b-2 border-gray-900 dark:border-gray-200">
                <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">
                    Certifications
                </h1>
            </div>
            <div className="container mt-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-4 sm:px-10 xl:px-32 pb-20 content">
                {certificates.map((badge, index) => (
                    <Badge badge={badge} index={index} key={badge.id} />
                ))}
            </div>
        </div>
    );
}

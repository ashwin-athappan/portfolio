"use client";

import React from "react";
import Link from "next/link";

export function TestimonialsCtaLink(): React.JSX.Element {
    return (
        <div className="flex justify-center px-4 pb-6">
            <Link
                href="/testimonial"
                className="rounded-[30px] bg-white px-5 py-2.5 font-semibold text-gray-700 ring-1 ring-gray-400 transition hover:ring-4 hover:ring-gray-200 focus:outline-none dark:bg-dark-element dark:text-gray-200 dark:ring-dark-nav-border dark:hover:ring-gray-600"
            >
                Give testimony
            </Link>
        </div>
    );
}

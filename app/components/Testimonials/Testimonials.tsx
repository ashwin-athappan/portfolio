"use client";

import React from 'react';
import Link from "next/link";
import styles from './Testimonials.module.css';
import Image from "next/image";
import { useTestimonials } from "@/lib/hooks/useTestimonials";
import { mockTestimonials } from "@/lib/data/testimonials";
import blank_user_black from "@/public/assets/svg/user_black.svg";
import { Testimony } from "@/lib/types/Testimony";
import { TestimonialContent } from "./TestimonialContent";

const Testimonials = (): React.JSX.Element => {
    const { testimonials: fetchedTestimonials, isLoading, error } = useTestimonials();

    // Use fetched testimonials if available, otherwise fall back to mock data
    const testimonials: Testimony[] = fetchedTestimonials.length > 0
        ? fetchedTestimonials
        : mockTestimonials.map(t => ({
            ...t,
            imageUrl: t.imageUrl || blank_user_black,
        }));

    const getImageSrc = (testimonial: Testimony): string | typeof blank_user_black => {
        const url = testimonial.imageUrl;
        if (!url) return blank_user_black;
        if (typeof url === "string" && (url.startsWith("/") || url.startsWith("http://") || url.startsWith("https://")))
            return url;
        return blank_user_black;
    };

    return (
        <div className="max-w-full flex flex-col space-y-6">
            <div className="flex justify-center px-4">
                <Link
                    href="/testimonial"
                    className="rounded-lg bg-blue-500 px-5 py-2.5 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                    Give testimony
                </Link>
            </div>
        <div className="max-w-full flex space-y-8">
            {[1, 2].map((row) => (
                <div
                    key={row}
                    className="relative mx-5 overflow-hidden"
                >
                    <div id="animate_scroll" className={`flex ${styles.animate_scroll}`}>
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={`${row}-${testimonial._id}-${index}`}
                                className="flex flex-col w-64 p-4 my-5 bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border shadow-lg rounded-lg mx-2"
                            >
                                <hr/>
                                <Image
                                    src={getImageSrc(testimonial)}
                                    alt={testimonial.name}
                                    height={50}
                                    width={50}
                                    className="w-16 h-16 rounded-full mx-auto mb-2"
                                />
                                <hr/>
                                <h3 className="font-bold text-center">{testimonial.name}</h3>
                                <TestimonialContent html={testimonial.comment ?? ""} />
                                <hr/>
                                <div className="w-full flex justify-center">
                                    {testimonial.relation && (
                                        <p className="text-xs rounded-2xl p-2 bg-amber-200 w-fit
                                     text-gray-500 text-center mt-1">
                                            Relation: {testimonial.relation}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {error && <div className="text-red-500 text-center">{error}</div>}
        </div>
        </div>
    );
};

export default Testimonials;

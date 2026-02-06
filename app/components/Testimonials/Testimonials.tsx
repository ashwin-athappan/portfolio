"use client";

import React from 'react';
import styles from './Testimonials.module.css';
import Image from "next/image";
import { useTestimonials } from "@/lib/hooks/useTestimonials";
import { mockTestimonials } from "@/lib/data/testimonials";
import blank_user_black from "@/public/assets/svg/user_black.svg";
import { Testimony } from "@/lib/types/Testimony";

const Testimonials = (): React.JSX.Element => {
    const { testimonials: fetchedTestimonials, isLoading, error } = useTestimonials();

    // Use fetched testimonials if available, otherwise fall back to mock data
    const testimonials: Testimony[] = fetchedTestimonials.length > 0
        ? fetchedTestimonials
        : mockTestimonials.map(t => ({
            ...t,
            imageUrl: t.imageUrl || blank_user_black,
        }));

    const getImageUrl = (testimonial: Testimony): string => {
        console.log("Image URL = " + testimonial.imageUrl);
        return testimonial.imageUrl || blank_user_black;
    };

    return (
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
                                    src={getImageUrl(testimonial)}
                                    alt={testimonial.name}
                                    height={50}
                                    width={50}
                                    className="w-16 h-16 rounded-full mx-auto mb-2"
                                />
                                <hr/>
                                <h3 className="font-bold text-center">{testimonial.name}</h3>
                                <p className="text-justify">{testimonial.comment}</p>
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
    );
};

export default Testimonials;

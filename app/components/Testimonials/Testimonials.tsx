"use client";

import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import { useTestimonials } from "@/lib/hooks/useTestimonials";
import blank_user_black from "@/public/assets/svg/user_black.svg";
import { Testimony } from "@/lib/types/Testimony";
import type { ImageSrc } from "./TestimonyCard";
import { TestimonyCard } from "./TestimonyCard";
import { TestimonialsSectionHeader } from "./TestimonialsSectionHeader";
import { TestimonialsCtaLink } from "./TestimonialsCtaLink";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getImageSrc(testimonial: Testimony): ImageSrc {
    if (
        testimonial.imageData &&
        typeof testimonial.imageData === "string" &&
        testimonial.imageData.startsWith("data:")
    )
        return testimonial.imageData;
    const url = testimonial.imageUrl;
    if (!url || typeof url !== "string") return blank_user_black;
    if (url.startsWith("/") || url.startsWith("http://") || url.startsWith("https://"))
        return url;
    return blank_user_black;
}

function isDataUrl(src: ImageSrc): src is string {
    return typeof src === "string" && src.startsWith("data:");
}

const Testimonials = (): React.JSX.Element => {
    const { testimonials, error } = useTestimonials();
    const [activeIndex, setActiveIndex] = useState(0);
    const N = testimonials.length;

    const goPrev = () => {
        if (N === 0) return;
        setActiveIndex((i) => (i - 1 + N) % N);
    };

    const goNext = () => {
        if (N === 0) return;
        setActiveIndex((i) => (i + 1) % N);
    };

    return (
        <section className={styles.testimonialsSection}>
            <div className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-8 p-8">
                <div className="w-full max-w-[69rem] px-4">
                    <TestimonialsSectionHeader />
                    <TestimonialsCtaLink />
                </div>

                <div className="flex w-full max-w-[69rem] items-center justify-center gap-4 px-4">
                    {testimonials.length === 0 ? (
                        <div className="glass-card rounded-[28px] p-8 text-center text-gray-600 dark:text-gray-300">
                            No testimonials yet. Be the first to share your experience.
                        </div>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={goPrev}
                                aria-label="Previous testimonial"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass-card ring-1 ring-gray-300/50 transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] focus:outline-none dark:ring-white/10 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                            >
                                <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                            </button>

                            <div className={styles.testimonialCardWrap}>
                                <TestimonyCard
                                    testimonial={testimonials[activeIndex]}
                                    getImageSrc={getImageSrc}
                                    isDataUrl={isDataUrl}
                                />
                            </div>

                            <button
                                type="button"
                                onClick={goNext}
                                aria-label="Next testimonial"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass-card ring-1 ring-gray-300/50 transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] focus:outline-none dark:ring-white/10 dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                            >
                                <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {error && <div className="mt-4 text-center text-red-500">{error}</div>}
        </section>
    );
};

export default Testimonials;

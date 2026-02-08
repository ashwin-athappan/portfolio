"use client";

import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import { useTestimonials } from "@/lib/hooks/useTestimonials";
import { mockTestimonials } from "@/lib/data/testimonials";
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
    const { testimonials: fetchedTestimonials, error } = useTestimonials();
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials: Testimony[] =
        fetchedTestimonials.length > 0
            ? fetchedTestimonials
            : mockTestimonials.map((t) => ({
                  ...t,
                  imageUrl: t.imageUrl || blank_user_black,
              }));

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
            <div className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-8 bg-light-background p-8 dark:bg-dark-background">
                <div className="w-full max-w-[69rem] px-4">
                    <TestimonialsSectionHeader />
                    <TestimonialsCtaLink />
                </div>

                <div className="flex w-full max-w-[69rem] items-center justify-center gap-4 px-4">
                    {testimonials.length === 0 ? (
                        <div className="rounded-[30px] border-2 border-transparent bg-white p-8 text-center text-gray-500 dark:border-dark-nav-border dark:bg-dark-element dark:text-gray-300">
                            No testimonials yet. Be the first to share your experience.
                        </div>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={goPrev}
                                aria-label="Previous testimonial"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-gray-400 transition hover:ring-4 hover:ring-gray-200 focus:outline-none dark:bg-dark-element dark:ring-dark-nav-border dark:hover:ring-gray-600"
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
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-gray-400 transition hover:ring-4 hover:ring-gray-200 focus:outline-none dark:bg-dark-element dark:ring-dark-nav-border dark:hover:ring-gray-600"
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

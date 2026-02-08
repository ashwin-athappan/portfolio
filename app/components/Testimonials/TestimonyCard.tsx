"use client";

import React from "react";
import Image from "next/image";
import { Testimony } from "@/lib/types/Testimony";
import { TestimonialContent } from "./TestimonialContent";
import blank_user_black from "@/public/assets/svg/user_black.svg";
import { companiesMap } from "@/lib/data/companies";
import styles from "./Testimonials.module.css";

export type ImageSrc = string | typeof blank_user_black;

export interface TestimonyCardProps {
    testimonial: Testimony;
    getImageSrc: (t: Testimony) => ImageSrc;
    isDataUrl: (src: ImageSrc) => src is string;
    /** Optional; ignored. Kept so callers can omit it without type error. */
    variant?: string;
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]+>/g, "").trim();
}

/** First sentence or first ~80 chars for card headline */
function getHeadline(comment: string, professionalRelation?: string): string {
    if (professionalRelation?.trim()) return professionalRelation;
    const text = stripHtml(comment || "");
    const firstSentence = text.split(/[.!?]/)[0]?.trim();
    if (firstSentence && firstSentence.length <= 100) return firstSentence;
    return text.slice(0, 80) + (text.length > 80 ? "…" : "");
}

/** Card style matching Profile, GitHub, etc.: white / dark-element, gray text */
const cardStyle = {
    card: "bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border rounded-[30px] shadow-lg dark:shadow-xl",
    name: "text-gray-700 dark:text-gray-200",
    designation: "text-gray-500 dark:text-gray-400",
    heading: "text-gray-800 dark:text-gray-100",
    body: "text-gray-500 dark:text-gray-300",
};

export function TestimonyCard({ testimonial, getImageSrc, isDataUrl }: TestimonyCardProps): React.JSX.Element {
    const src = getImageSrc(testimonial);
    const s = cardStyle;
    const company = testimonial.company ? companiesMap.get(testimonial.company) : null;
    const hasPositionOrCompany = testimonial.position ?? testimonial.company;

    return (
        <article
            className={`flex h-[25em] w-[40em] shrink-0 flex-col rounded-[30px] px-8 py-6 ${s.card}`}
        >
            <div className="mb-5 flex">
                <div className="mr-5 shrink-0">
                    {isDataUrl(src) ? (
                        <img
                            src={src}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="h-20 w-20 rounded-full border-2 border-gray-300 object-cover dark:border-dark-nav-border"
                        />
                    ) : (
                        <Image
                            src={src}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="h-20 w-20 rounded-full border-2 border-gray-300 object-cover dark:border-dark-nav-border"
                        />
                    )}
                </div>
                <div className="min-w-0 flex-1 flex flex-col justify-center">
                    <p className={`m-0 truncate text-xl font-semibold ${s.name}`}>
                        {testimonial.name}
                    </p>
                    {hasPositionOrCompany ? (
                        <p className={`m-0 mt-1 flex min-w-0 items-center gap-2 truncate text-base opacity-70 ${s.designation}`}>
                            {testimonial.position && <span>{testimonial.position}</span>}
                            {testimonial.position && testimonial.company && <span>at</span>}
                            {testimonial.company && (
                                company?.logo ? (
                                    <span className="inline-flex shrink-0">
                                        <Image
                                            src={company.logo}
                                            alt={testimonial.company}
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                    </span>
                                ) : (
                                    <span>{testimonial.company}</span>
                                )
                            )}
                        </p>
                    ) : (
                        <p className={`m-0 mt-1 truncate text-base opacity-70 ${s.designation}`}>
                            {testimonial.professionalRelation || testimonial.relation || "Verified"}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                <h4 className={`mb-3 shrink-0 text-xl font-semibold leading-snug ${s.heading}`}>
                    {getHeadline(testimonial.comment ?? "", testimonial.professionalRelation)}
                </h4>
                <div className={`min-h-0 flex-1 overflow-y-auto text-base font-medium leading-relaxed opacity-80 ${s.body}`}>
                    <TestimonialContent html={testimonial.comment ?? ""} className="!text-inherit !opacity-80" />
                </div>
            </div>
        </article>
    );
}

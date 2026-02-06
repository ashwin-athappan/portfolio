"use client";

import React from "react";
import { sanitizeHtml } from "@/lib/utils/sanitizeHtml";

export interface TestimonialContentProps {
    html: string;
    className?: string;
}

/**
 * Renders testimonial comment HTML safely (bold, emojis, etc.).
 */
export function TestimonialContent({ html, className = "" }: TestimonialContentProps) {
    const safe = sanitizeHtml(html || "");
    return (
        <p
            className={`text-justify ${className}`}
            dangerouslySetInnerHTML={{ __html: safe }}
        />
    );
}

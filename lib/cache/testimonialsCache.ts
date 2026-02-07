import { Testimony } from "@/lib/types/Testimony";

/**
 * In-memory server cache for approved testimonials.
 * Client-facing GET should read from this cache only.
 * Cache is invalidated on create, status change, or delete so the next read refetches from DB.
 */
let approvedTestimonies: Testimony[] | null = null;

export const testimonialsCache = {
    getCached(): Testimony[] | null {
        return approvedTestimonies;
    },

    setCached(list: Testimony[]): void {
        approvedTestimonies = list;
    },

    invalidate(): void {
        approvedTestimonies = null;
    },
};

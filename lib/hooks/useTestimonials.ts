import { useState, useEffect, useCallback, useMemo } from "react";
import { HttpClient } from "@/lib/clients/HttpClient";
import { Testimony } from "@/lib/types/Testimony";

interface UseTestimonialsReturn {
    testimonials: Testimony[];
    isLoading: boolean;
    error: string | null;
}

export function useTestimonials(fetchInterval: number = 3000000): UseTestimonialsReturn {
    const [testimonials, setTestimonials] = useState<Testimony[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const httpClient = useMemo(() => new HttpClient(), []);

    const fetchTestimonials = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await httpClient.get<{ testimonies: Testimony[] }>('/api/testimonials');
            setTestimonials(response.testimonies);
        } catch (err) {
            console.error('Failed to fetch testimonials:', err);
            setError('Failed to fetch testimonials');
        } finally {
            setIsLoading(false);
        }
    }, [httpClient]);

    useEffect(() => {
        fetchTestimonials();

        const intervalId = setInterval(() => {
            fetchTestimonials();
        }, fetchInterval);

        return () => clearInterval(intervalId);
    }, [fetchTestimonials, fetchInterval]);

    return { testimonials, isLoading, error };
}

"use client";

import {ThemeProvider} from "next-themes";
import {useEffect} from "react";
import {setCookie} from "cookies-next";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export function NextThemeProvider({children}: ThemeProviderProps) {
    useEffect(() => {
        // Set default theme to "light" on initial load if no cookie exists
        if (!document.cookie.includes("theme=")) {
            setCookie("theme", "light", {path: "/", maxAge: 60 * 60 * 24 * 365});
        }
    }, []);

    return (
            <ThemeProvider
                attribute="class"
                defaultTheme="light" // Default theme is light
                storageKey="theme" // Key used for localStorage syncing
                enableSystem={false} // Disable system preference
            >
                {children}
            </ThemeProvider>
    );
}
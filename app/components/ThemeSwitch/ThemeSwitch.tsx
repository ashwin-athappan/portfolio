"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { setCookie } from "cookies-next";

import styles from "./ThemeSwitch.module.css";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted before rendering to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleThemeChange = () => {
        if (theme === "dark") {
            setTheme("light");
            setCookie("theme", "light", { path: "/", maxAge: 60 * 60 * 24 * 365 });
            return;
        } else if (theme === "light") {
            setTheme("dark");
            setCookie("theme", "dark", { path: "/", maxAge: 60 * 60 * 24 * 365 });
            return;
        } else {
            // Default to light theme
            const defaultTheme = "light";
            setTheme(defaultTheme);
            setCookie("theme", defaultTheme, { path: "/", maxAge: 60 * 60 * 24 * 365 });
            return;
        }
    };

    return (
        <div className="inline-block origin-right scale-75 sm:scale-100">
            <input
                id="Switch"
                type="checkbox"
                onChange={() => handleThemeChange()}
                className={styles.switch__input}
                checked={!(theme === "dark")} />
            <label className={styles.switch__label} htmlFor="Switch">
                <span className={styles.switch__indicator}></span>
                <span className={styles.switch__decoration}></span>
            </label>
        </div>
    );

};

export default ThemeSwitch;
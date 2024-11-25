"use client";

import React, {useState, useEffect} from "react";

import styles from "./ThemeSwitch.module.css";

const ThemeSwitch = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="inline-block">
            <input
                id="Switch"
                type="checkbox"
                onChange={() => setDarkMode(!darkMode)}
                className={styles.switch__input}
                checked={!darkMode} />
            <label className={styles.switch__label} htmlFor="Switch">
                <span className={styles.switch__indicator}></span>
                <span className={styles.switch__decoration}></span>
            </label>
        </div>
    );

};

export default ThemeSwitch;
"use client";

import React, {useState, useEffect} from "react";
import SectionHeading from "@/app/components/Hero/SectionHeading";

// Sections


import styles from "./Hero.module.css";
import AboutSection from "@/app/components/Hero/Sections/AboutSection";
import ResumeSection from "@/app/components/Hero/Sections/ResumeSection";
import ProjectSection from "@/app/components/Hero/Sections/ProjectsSection";
import ToolsSection from "@/app/components/Hero/Sections/ToolsSection";
import ContactSection from "@/app/components/Hero/Sections/ContactSection";

export default function Hero() {

    const pages = ["About", "Resume", "Projects", "Tools", "Contact"];
    const sectionHeadings = ["About Me", "My Resume", "Projects", "Tools", "Contact Me"];
    const sections = [<AboutSection key={0} />, <ResumeSection key={1} />, <ProjectSection key={2} />, <ToolsSection key={3} />, <ContactSection key={4} />];
    const [selectedPage, setSelectedPage] = useState(0);

    const handleChangeSelectedPage = (index: number) => {
        setSelectedPage(index);
    }

    useEffect(() => {

    }, [selectedPage]);

    const prepareListItem = (page: string, index: number) => {

        let classNames = "cursor-pointer";

        if (index === 0) {
            classNames += " lg:rounded-bl-3xl max-[1024px]:rounded-tr-3xl";
        }

        if (index === pages.length - 1) {
            classNames += " lg:rounded-tr-3xl max-[1024px]:rounded-br-3xl";
        }

        if (index === selectedPage) {
            classNames += " text-black dark:text-white bg-amber-500";
        }

        return (
            <li key={"hero-tab-" + page.toLowerCase()}
                id={"hero-tab-" + page.toLowerCase()}
                className={classNames}
                onClick={() => handleChangeSelectedPage(index)}>
                <div className="px-5 py-3">{page}</div>
            </li>
        );
    };

    return (
        <div className="bg-jetWhite border border-black dark:bg-jetBlackDark dark:border-white rounded-3xl">
            <div className="flex justify-between w-full">

                <SectionHeading heading={sectionHeadings[selectedPage]}/>

                <nav id="hero-nav" className={`bg-white dark:bg-jetBlack mr-0 mt-0 h-fit ${pages[selectedPage]} ${styles.hero_nav}`}>
                    <ul className="lg:flex lg:justify-between lg:float-right text-black dark:text-jetWhite">
                        {pages.map((page, index) => (prepareListItem(page, index)))}
                    </ul>
                </nav>
            </div>

            <div className="p-5">
                {sections[selectedPage]}
            </div>

        </div>
    );
}
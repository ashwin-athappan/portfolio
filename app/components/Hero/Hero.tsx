"use client";

import React, {useState, useEffect} from "react";

export default function Hero() {

    const pages = ["About", "Resume", "Projects", "Tools", "Contact"];
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
            <li key={index}
                className={classNames}
                onClick={() => handleChangeSelectedPage(index)}>
                <div className="px-5 py-3">{page}</div>
            </li>
        );
    };

    return (
        <div className="bg-jetWhite border border-black dark:bg-jetBlackDark dark:border-white rounded-3xl border ">
            <div
                className="flex justify-items-start">
                <div className="p-5 mr-[10rem]">
                    <h1 className="text-3xl text-jetBlack dark:text-jetWhite">About Me</h1>
                </div>
                <nav className={`bg-white dark:bg-jetBlack rounded-tr-3xl rounded-bl-3xl mr-0 mt-0 h-fit`}>
                    <ul className="lg:flex lg:justify-between lg:items-start text-black dark:text-jetWhite">
                        {pages.map((page, index) => (prepareListItem(page, index)))}
                    </ul>
                </nav>
            </div>
            <div>
                <div className="ml-2">
                    <p></p>
                </div>
            </div>
        </div>
    );
}
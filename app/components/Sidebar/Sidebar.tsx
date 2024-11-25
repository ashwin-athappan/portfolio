"use client";

import '@/app/components/common.css';
import Image from "next/image";

import coding from "@/public/me/coding.png"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import {useEffect, useState} from "react";
import Link from "next/link";
import ThemeSwitch from "@/app/components/ThemeSwitch/ThemeSwitch";

export default function Sidebar() {

    // const [toggle, setToggle] = useState(false);
    //
    // useEffect(() => {
    //
    // }, [toggle]);

    return (
        <div
            className="flex flex-col justify-center items-center bg-jetWhite border border-black dark:bg-jetBlackDark dark:border-white p-10 rounded-3xl border border-2-jetBlack max-w-[350px]">
            <div id="profile-pic" className="bg-white dark:bg-jetBlack rounded-full p-5">
                <Image src={coding} alt="Ashwin Athappan" width={150}/>
            </div>
            <div className="flex flex-col justify-center items-center text-black dark:text-white">
                <div className="py-5">Ashwin Athappan</div>
                <div className="bg-white dark:bg-jetBlack p-2 my-5 rounded-xl">Software Engineer</div>
            </div>
            <ThemeSwitch />
            <div className="h-[1px] w-[100%] bg-jetBlack dark:bg-gray-600"></div>
            <div id="profile-description">
                <div id="tools">

                </div>
            </div>
            <div className="h-[1px] w-[100%] bg-jetBlack dark:bg-gray-600"></div>
            <div id="profile-footer" className="mt-2 flex justify-center items-center">
                <Link href="https://github.com/ashwin-athappan" className="mx-2 text-3xl text-black dark:text-white">
                    <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/ashwin-athappan/" className="mx-2 text-3xl text-[#0077B5]">
                    <FaLinkedin />
                </Link>
            </div>
        </div>
    );
}
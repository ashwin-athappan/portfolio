import React from "react";

export default function AboutSection() {
    return (
        <div className="">
            <div className="grid grid-rows-3 grid-flow-col gap-4 px-4 py-4 leading-10">
                <div className="p-4 w-full dark:bg-jetBlack bg-white rounded-xl row-span-3">
                    <p className="text-lg text-justify text-jetBlack dark:text-white">
                        I am a software developer with a passion for creating and building web applications. I have
                        experience with a variety of technologies and am always looking to learn more. I am currently
                        working on a few projects and am always looking for new opportunities to learn and grow. I am a
                        hard worker and am always looking to improve my skills.
                    </p>
                </div>
                <div className="p-4 w-full bg-fuchsia-800 rounded-xl col-span-2">
                    <div className="">
                        <h3 className="text-xl font-semibold text-jetBlack dark:text-jetWhite mb-4">
                            Languages I Speak
                        </h3>
                        <ul className="list-disc pl-4 text-md text-gray-700 dark:text-gray-300">
                            <li>Kannada</li>
                            <li>Telugu</li>
                            <li>Tamil</li>
                            <li>Hindi</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 w-full bg-fuchsia-700 rounded-xl row-span-2 col-span-2">
                </div>
            </div>
        </div>
    );
}
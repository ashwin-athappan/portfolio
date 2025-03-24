"use client";

import React, {ChangeEvent, useEffect} from "react";
import axios from "axios";
import Image, {StaticImageData} from "next/image";

import blank_user_black from "@/public/assets/svg/user_black.svg";
import blank_user_white from "@/public/assets/svg/user_white.svg";
import {useTheme} from "next-themes";

import {DEFAULT_USER_IMAGE_STRING, DEFAULT_USER_IMAGE_STRING_TYPE} from "@/lib/constants";

const Review = (): React.JSX.Element => {

    const {theme} = useTheme();

    const [filename, setFilename] = React.useState<string | DEFAULT_USER_IMAGE_STRING_TYPE>(DEFAULT_USER_IMAGE_STRING);
    const [previewImage, setPreviewImage] = React.useState<string | StaticImageData>(blank_user_black);
    const [imageData, setImageData] = React.useState<string | ArrayBuffer | null>(null);

    const relations = ['Friend', 'Family', 'Colleague', 'Mentor', 'Other'];

    const [nameField, setNameField] = React.useState<string>('');
    const [relationField, setRelationField] = React.useState<string>(relations[relations.length - 1]);
    const [commentField, setCommentField] = React.useState<string>('');

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;

        if (file) {
            setFilename(file.name);
            const reader = new FileReader();

            reader.onloadend = () => {
                setImageData(reader.result);
                setPreviewImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        } else {
            setFilename(DEFAULT_USER_IMAGE_STRING);
            if (theme === 'dark') {
                setPreviewImage(blank_user_white);
            } else {
                setPreviewImage(blank_user_black);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/testimonials", {
                name: 'Name',
                relation: 'FRIEND',
                comment: 'Comment',
                image: {
                    name: filename,
                    data: imageData,
                },
            });
            console.log(response.data);
        } catch (NextServerError) {
            console.error("Failed to submit review:", NextServerError);
        }

    };

    useEffect(() => {
        if (theme === 'dark') {
            setPreviewImage(blank_user_white);
        } else {
            setPreviewImage(blank_user_black);
        }
    }, [theme]);

    return (
        <div
            className="relative col-span-2 rounded-[30px] h-[576px] p-4 md:px-12 pb-20 bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border shadow-lg overflow-hidden">
            <h2 className="font-bold text-[25px] lg:text-[30px] dark:text-white mb-2">
                Do you know me?
            </h2>
            <div className="max-w-md mx-auto">
                <form
                    className="max-w-sm mx-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-5">
                        <label htmlFor="name" className="sr-only ">Name</label>
                        <input type="text"
                               id="name"
                               value={nameField}
                               onChange={(e) => setNameField(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Name"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="relation" className="sr-only ">Relation</label>
                        <select
                            id="relation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue={relationField}
                            onChange={(e) => setRelationField(e.target.value)}
                        >
                            {relations.map((relation, index) => (
                                <option key={index} value={relation}>{relation}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="comment" className="sr-only ">Comment</label>
                        <input type="text"
                               id="comment"
                               value={commentField}
                               onChange={(e) => setCommentField(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="What do you think?"
                        />
                    </div>
                    <div className="mb-5">
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto">
                            {previewImage && (
                                <Image
                                    src={previewImage}
                                    alt="Preview"
                                    height={50}
                                    width={50}
                                    className="w-16 h-16 rounded-full mx-auto mb-2"
                                />
                            )}
                        </div>
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile
                            Image</label>
                        <input type="file"
                               accept="image/*"
                               id="image"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={handleFileChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold
                         py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
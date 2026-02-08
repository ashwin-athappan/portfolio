"use client";

import React from "react";
import Image from "next/image";
import {useReviewForm} from "@/lib/hooks/useReviewForm";

const Review = (): React.JSX.Element => {
    const {
        previewImage,
        nameField,
        relationField,
        commentField,
        relations,
        setNameField,
        setRelationField,
        setCommentField,
        handleFileChange,
        handleSubmit,
    } = useReviewForm();

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
                            value={relationField}
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
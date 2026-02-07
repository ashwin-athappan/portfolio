"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTestimonialForm } from "@/lib/hooks/useTestimonialForm";
import { TestimonialRichEditor } from "@/app/components/TestimonialEditor/TestimonialRichEditor";

const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const labelClass =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

export default function TestimonialPage() {
    const {
        whereWeFirstMet,
        professionalRelation,
        relation,
        setWhereWeFirstMet,
        setProfessionalRelation,
        setRelation,
        relationOptions,
        name,
        comment,
        previewImage,
        setName,
        setComment,
        handleFileChange,
        handleSubmit,
        submitted,
        error,
    } = useTestimonialForm();

    if (submitted) {
        return (
            <div className="container mx-auto max-w-lg px-4 py-16">
                <div className="rounded-[30px] border-2 border-transparent bg-white p-8 shadow-lg dark:border-dark-nav-border dark:bg-dark-element">
                    <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                        Thank you
                    </h1>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                        Your testimony has been submitted. I’ll review it and may
                        reach out if needed.
                    </p>
                    <Link
                        href="/"
                        className="inline-block rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-lg px-4 py-16">
            <div className="rounded-[30px] border-2 border-transparent bg-white p-6 shadow-lg dark:border-dark-nav-border dark:bg-dark-element md:p-10">
                <h1 className="mb-2 text-[25px] font-bold text-gray-900 dark:text-white md:text-[30px]">
                    Give a testimony
                </h1>
                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    Help others get to know me by sharing how we connected.
                </p>

                <form
                    className="mx-auto max-w-sm"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    {/* 1. Where did we first meet? */}
                    <div className="mb-5">
                        <label htmlFor="whereWeFirstMet" className={labelClass}>
                            Where did we first meet?
                        </label>
                        <input
                            type="text"
                            id="whereWeFirstMet"
                            value={whereWeFirstMet}
                            onChange={(e) => setWhereWeFirstMet(e.target.value)}
                            className={inputClass}
                            placeholder="e.g. University, previous company, conference"
                            required
                        />
                    </div>

                    {/* 2. Professional relation to me? */}
                    <div className="mb-5">
                        <label
                            htmlFor="professionalRelation"
                            className={labelClass}
                        >
                            Professional relation to me?
                        </label>
                        <input
                            type="text"
                            id="professionalRelation"
                            value={professionalRelation}
                            onChange={(e) =>
                                setProfessionalRelation(e.target.value)
                            }
                            className={inputClass}
                            placeholder="e.g. Former manager, teammate, classmate"
                            required
                        />
                    </div>

                    {/* 3. Relation (Friend / Colleague) */}
                    <div className="mb-5">
                        <label htmlFor="relation" className={labelClass}>
                            Relation
                        </label>
                        <select
                            id="relation"
                            value={relation}
                            onChange={(e) =>
                                setRelation(e.target.value as "FRIEND" | "COLLEAGUE")
                            }
                            className={inputClass}
                            required
                        >
                            {relationOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt === "FRIEND" ? "Friend" : "Colleague"}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Name */}
                    <div className="mb-5">
                        <label htmlFor="name" className={labelClass}>
                            Your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={inputClass}
                            placeholder="Name"
                            required
                        />
                    </div>

                    {/* Comment (rich: bold + emojis, stored as HTML) */}
                    <div className="mb-5">
                        <label htmlFor="testimonial-editor" className={labelClass}>
                            What do you think?
                        </label>
                        <TestimonialRichEditor
                            value={comment}
                            onChange={setComment}
                            placeholder="Your testimony or message"
                            required
                            aria-label="What do you think?"
                        />
                    </div>

                    {/* Profile image (optional) */}
                    <div className="mb-6">
                        <div className="mx-auto mb-2 h-16 w-16 overflow-hidden rounded-full">
                            {previewImage && (
                                <Image
                                    src={previewImage}
                                    alt="Preview"
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-cover"
                                />
                            )}
                        </div>
                        <label htmlFor="image" className={labelClass}>
                            Profile image (optional)
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            id="image"
                            name="image"
                            className={inputClass}
                            onChange={handleFileChange}
                        />
                    </div>

                    {error && (
                        <p className="mb-4 text-sm text-red-500">{error}</p>
                    )}

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit testimony
                        </button>
                        <Link
                            href="/"
                            className="text-sm text-gray-500 underline hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

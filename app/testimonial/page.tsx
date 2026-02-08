"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTestimonialForm } from "@/lib/hooks/useTestimonialForm";
import { TestimonialRichEditor } from "@/app/components/TestimonialEditor/TestimonialRichEditor";
import { companies } from "@/lib/data/companies";

const knownCompanies = companies.filter((c) => c.name !== "Other");

function filterCompanies(query: string): typeof companies {
    const q = query.trim().toLowerCase();
    if (q === "") return [];
    return knownCompanies.filter((c) => c.name.toLowerCase().includes(q));
}

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
        company,
        position,
        setCompany,
        setPosition,
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

    const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const companyWrapperRef = useRef<HTMLDivElement>(null);

    const companyQuery = company.trim();
    const filteredCompanies = filterCompanies(company);
    const showOther = companyQuery !== "" && filteredCompanies.length === 0;
    const options =
        filteredCompanies.length > 0
            ? filteredCompanies
            : showOther
              ? [{ name: "Other", logo: null }]
              : [];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (companyWrapperRef.current && !companyWrapperRef.current.contains(event.target as Node)) {
                setCompanyDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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

                    {/* Current company (type-ahead: filter from list, or Other if no match) */}
                    <div className="relative mb-5" ref={companyWrapperRef}>
                        <label htmlFor="company" className={labelClass}>
                            Current company
                        </label>
                        <input
                            type="text"
                            id="company"
                            value={company}
                            onChange={(e) => {
                                setCompany(e.target.value);
                                setCompanyDropdownOpen(true);
                            }}
                            onFocus={() => setCompanyDropdownOpen(true)}
                            className={inputClass}
                            placeholder="Type to search companies"
                            autoComplete="off"
                        />
                        {companyDropdownOpen && options.length > 0 && (
                            <ul
                                className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-lg border border-gray-300 bg-white py-1 text-sm shadow-lg dark:border-gray-600 dark:bg-dark-element"
                                role="listbox"
                            >
                                {options.map((opt) => (
                                    <li
                                        key={opt.name}
                                        role="option"
                                        aria-selected={opt.name === company}
                                        className="cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            if (opt.name === "Other") {
                                                // Keep current typed value as custom company
                                            } else {
                                                setCompany(opt.name);
                                            }
                                            setCompanyDropdownOpen(false);
                                        }}
                                    >
                                        {opt.name === "Other"
                                            ? `Other${companyQuery ? ` — use "${companyQuery}"` : ""}`
                                            : opt.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Position at company */}
                    <div className="mb-5">
                        <label htmlFor="position" className={labelClass}>
                            Position at company
                        </label>
                        <input
                            type="text"
                            id="position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className={inputClass}
                            placeholder="e.g. Software Engineer, Product Manager"
                        />
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

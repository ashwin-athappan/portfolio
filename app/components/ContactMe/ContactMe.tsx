"use client";

import React from "react";
import {Copy, Check} from "lucide-react";
import {useContactForm} from "@/lib/hooks/useContactForm";
import {useClipboard} from "@/lib/hooks/useClipboard";

const ContactMe = (): React.JSX.Element => {
    const email = "ashwinathappank@gmail.com";
    const {copied, copyToClipboard} = useClipboard();
    const {
        contactEmail,
        message,
        errors,
        inputClass,
        setContactEmail,
        setMessage,
        handleSubmit,
    } = useContactForm();

    return (
        <div
            className="relative col-span-2 rounded-[30px] p-4 md:px-12 pb-20 bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border shadow-lg overflow-hidden">

            {/* Header */}
            <h2 className="font-bold text-[25px] lg:text-[30px] dark:text-white">
                Get In Touch:
            </h2>

            {/* Contact Info */}
            <p className="mt-4 text-gray-500 flex items-center dark:text-white">
                <span className="mr-2">Email me:</span>
                <span>{email}</span>

                {/* Copy Button */}
                <button
                    onClick={() => copyToClipboard(email)}
                    className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                    {copied ? <Check color="green"/> : <Copy/>}
                </button>
            </p>

            <form className="mt-5 mx-auto"
                  onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="email" className="sr-only">How do I reach you?</label>
                    {errors.email && (<span className="text-red-500">{errors.email}</span>)}
                    <input
                        type="email"
                        id="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className={inputClass}
                        placeholder="What is your email?"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="message" className="sr-only">What do you want to say?</label>
                    {errors.message && (<span className="text-red-500">{errors.message}</span>)}
                    <input
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={inputClass}
                        placeholder="What do you want to say?"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold
                         py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;

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
            className="relative col-span-2 glass-card rounded-[28px] p-4 md:px-12 pb-5 overflow-hidden transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">

            {/* Header */}
            <h3 className="font-bold text-[20px] lg:text-[25px] dark:text-white">
                Get In Touch:
            </h3>

            {/* Contact Info */}
            <p className="mt-2 text-gray-500 flex items-center dark:text-white">
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

            <form className="mt-2 mx-auto"
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
                <div className="flex items-center justify-items-start w-full">

                    <div className="w-[85%]">
                        <label htmlFor="message" className="sr-only">What do you want to say?</label>
                        {errors.message && (<span className="text-red-500">{errors.message}</span>)}
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={inputClass}
                            placeholder="What do you want to say?"
                        />
                    </div>

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold
                         ml-2 py-5 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
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

"use client";

import React, {useEffect, useState} from "react";
import {Copy, Check} from "lucide-react";
import axios from "axios";

interface ErrorType {
    email?: string;
    message?: string;
}

const ContactMe = (): React.JSX.Element => {
    const [copied, setCopied] = useState(false);
    const email = "ashwinathappank@gmail.com";

    const [contactEmail, setContactEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [errors, setErrors] = useState<ErrorType>({});
    const [success, setSuccess] = useState<boolean>(false);

    const [inputClass, setInputClass] = useState<string>("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500");

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!contactEmail || contactEmail === '') {
            setErrors({
                ...errors,
                email: "Please enter an email"
            })
            return;
        }

        if (!message || message === '') {
            setErrors({
                ...errors,
                message: "Please enter a message"
            });
            return;
        }

        const data = {
            email: contactEmail.trim(),
            message: message.trim(),
        }

        try {
            const response = await axios.post("/api/contact", data);
            if (response.status === 201) {
                setSuccess(true);
                setErrors({});
                setContactEmail("");
                setMessage("");
            }
        } catch (NextServerError) {
            console.error("Failed to submit review:", NextServerError);
        }

    };

    useEffect(() => {
        if (errors.email || errors.message) {
            setInputClass("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500");
        }
    }, [errors]);

    useEffect(() => {
        if (success) {
            setInputClass("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500");
        }
    }, [success]);

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
                    onClick={copyToClipboard}
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

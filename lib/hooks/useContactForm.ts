import { useState } from "react";
import { ContactRequest } from "@/lib/types/Contact";
import { ContactValidator } from "@/lib/validators/ContactValidator";
import { HttpClient } from "@/lib/clients/HttpClient";

interface UseContactFormReturn {
    contactEmail: string;
    message: string;
    errors: Record<string, string>;
    success: boolean;
    inputClass: string;
    setContactEmail: (email: string) => void;
    setMessage: (message: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export function useContactForm(): UseContactFormReturn {
    const [contactEmail, setContactEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState<boolean>(false);

    const defaultInputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500";
    const errorInputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500";
    const successInputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500";

    const [inputClass, setInputClass] = useState<string>(defaultInputClass);

    const validator = new ContactValidator();
    const httpClient = new HttpClient();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data: ContactRequest = {
            email: contactEmail.trim(),
            message: message.trim(),
        };

        const validation = validator.validate(data);

        if (!validation.isValid) {
            setErrors(validation.errors);
            setInputClass(errorInputClass);
            return;
        }

        try {
            await httpClient.post("/api/contact", data);
            setSuccess(true);
            setErrors({});
            setContactEmail("");
            setMessage("");
            setInputClass(successInputClass);
        } catch (error) {
            console.error("Failed to submit contact form:", error);
            setErrors({ submit: "Failed to submit form. Please try again." });
            setInputClass(errorInputClass);
        }
    };

    return {
        contactEmail,
        message,
        errors,
        success,
        inputClass,
        setContactEmail,
        setMessage,
        handleSubmit,
    };
}

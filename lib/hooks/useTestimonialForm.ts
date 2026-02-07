"use client";

import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { StaticImageData } from "next/image";
import {
    DEFAULT_USER_IMAGE_STRING,
    DEFAULT_USER_IMAGE_STRING_TYPE,
} from "@/lib/constants";
import blank_user_black from "@/public/assets/svg/user_black.svg";
import blank_user_white from "@/public/assets/svg/user_white.svg";
import { useTheme } from "next-themes";
import { TestimonyRelation } from "@/lib/types/Testimony";
import { addTestimony } from "@/app/actions/addTestimony";

const RELATION_OPTIONS: TestimonyRelation[] = ["FRIEND", "COLLEAGUE"];

export interface UseTestimonialFormReturn {
    // Verification questions
    whereWeFirstMet: string;
    professionalRelation: string;
    relation: TestimonyRelation;
    setWhereWeFirstMet: (v: string) => void;
    setProfessionalRelation: (v: string) => void;
    setRelation: (v: TestimonyRelation) => void;
    relationOptions: TestimonyRelation[];
    // Rest of form
    name: string;
    comment: string;
    filename: string | DEFAULT_USER_IMAGE_STRING_TYPE;
    previewImage: string | StaticImageData;
    imageData: string | ArrayBuffer | null;
    setName: (v: string) => void;
    setComment: (v: string) => void;
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    submitted: boolean;
    error: string | null;
}

export function useTestimonialForm(): UseTestimonialFormReturn {
    const { theme } = useTheme();
    const [whereWeFirstMet, setWhereWeFirstMet] = useState("");
    const [professionalRelation, setProfessionalRelation] = useState("");
    const [relation, setRelation] = useState<TestimonyRelation>("COLLEAGUE");
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [filename, setFilename] = useState<
        string | DEFAULT_USER_IMAGE_STRING_TYPE
    >(DEFAULT_USER_IMAGE_STRING);
    const [previewImage, setPreviewImage] = useState<
        string | StaticImageData
    >(blank_user_black);
    const [imageData, setImageData] = useState<string | ArrayBuffer | null>(
        null
    );
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        if (file) {
            setFilename(file.name);
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result;
                setImageData(result);
                setPreviewImage((result as string) || blank_user_black);
            };
            reader.readAsDataURL(file);
        } else {
            setFilename(DEFAULT_USER_IMAGE_STRING);
            setImageData(null);
            setImageFile(null);
            setPreviewImage(
                theme === "dark" ? blank_user_white : blank_user_black
            );
        }
    };

    const hasCommentText = (html: string) =>
        html.replace(/<[^>]+>/g, "").trim().length > 0;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        if (!hasCommentText(comment)) {
            setError("Please enter your testimony.");
            return;
        }
        const formData = new FormData();
        formData.set("name", name.trim());
        formData.set("comment", comment);
        formData.set("relation", relation);
        formData.set("whereWeFirstMet", whereWeFirstMet.trim());
        formData.set("professionalRelation", professionalRelation.trim());
        if (imageFile) {
            formData.set("image", imageFile);
        }
        const result = await addTestimony(formData);
        if (result.success) {
            setSubmitted(true);
            setName("");
            setComment("");
            setWhereWeFirstMet("");
            setProfessionalRelation("");
            setFilename(DEFAULT_USER_IMAGE_STRING);
            setImageData(null);
            setImageFile(null);
        } else {
            setError(result.error ?? "Failed to submit. Please try again.");
        }
    };

    useEffect(() => {
        setPreviewImage(
            theme === "dark" ? blank_user_white : blank_user_black
        );
    }, [theme]);

    return {
        whereWeFirstMet,
        professionalRelation,
        relation,
        setWhereWeFirstMet,
        setProfessionalRelation,
        setRelation,
        relationOptions: RELATION_OPTIONS,
        name,
        comment,
        filename,
        previewImage,
        imageData,
        setName,
        setComment,
        handleFileChange,
        handleSubmit,
        submitted,
        error,
    };
}

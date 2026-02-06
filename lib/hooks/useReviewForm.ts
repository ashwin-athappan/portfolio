import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { StaticImageData } from "next/image";
import { HttpClient } from "@/lib/clients/HttpClient";
import { DEFAULT_USER_IMAGE_STRING, DEFAULT_USER_IMAGE_STRING_TYPE } from "@/lib/constants";
import blank_user_black from "@/public/assets/svg/user_black.svg";
import blank_user_white from "@/public/assets/svg/user_white.svg";
import { useTheme } from "next-themes";
import { TestimonyRelation } from "@/lib/types/Testimony";

interface UseReviewFormReturn {
    filename: string | DEFAULT_USER_IMAGE_STRING_TYPE;
    previewImage: string | StaticImageData;
    imageData: string | ArrayBuffer | null;
    nameField: string;
    relationField: string;
    commentField: string;
    relations: string[];
    setNameField: (value: string) => void;
    setRelationField: (value: string) => void;
    setCommentField: (value: string) => void;
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export function useReviewForm(): UseReviewFormReturn {
    const { theme } = useTheme();
    const [filename, setFilename] = useState<string | DEFAULT_USER_IMAGE_STRING_TYPE>(DEFAULT_USER_IMAGE_STRING);
    const [previewImage, setPreviewImage] = useState<string | StaticImageData>(blank_user_black);
    const [imageData, setImageData] = useState<string | ArrayBuffer | null>(null);
    const [nameField, setNameField] = useState<string>('');
    const [commentField, setCommentField] = useState<string>('');

    const relations = ['FRIEND', 'FAMILY', 'COLLEAGUE', 'OTHER'];
    const [relationField, setRelationField] = useState<string>(relations[relations.length - 1]);

    const httpClient = new HttpClient();

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
            await httpClient.post("/api/testimonials", {
                name: nameField,
                relation: relationField as TestimonyRelation,
                comment: commentField,
                image: {
                    name: filename,
                    data: imageData,
                },
            });
            // Reset form on success
            setNameField('');
            setCommentField('');
            setFilename(DEFAULT_USER_IMAGE_STRING);
            setImageData(null);
        } catch (error) {
            console.error("Failed to submit review:", error);
        }
    };

    useEffect(() => {
        if (theme === 'dark') {
            setPreviewImage(blank_user_white);
        } else {
            setPreviewImage(blank_user_black);
        }
    }, [theme]);

    return {
        filename,
        previewImage,
        imageData,
        nameField,
        relationField,
        commentField,
        relations,
        setNameField,
        setRelationField,
        setCommentField,
        handleFileChange,
        handleSubmit,
    };
}

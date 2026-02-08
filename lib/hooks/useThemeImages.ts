import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { StaticImageData } from "next/image";
import github_white from "@/public/assets/svg/devops/github_white.svg";
import github from "@/public/assets/svg/devops/github.svg";
import aws_white from "@/public/assets/svg/devops/aws_white.svg";
import aws from "@/public/assets/svg/devops/aws.svg";
import express from "@/public/assets/svg/frameworks/express.svg";
import express_white from "@/public/assets/svg/frameworks/express_white.svg";

interface ToolItem {
    name: string;
    image: StaticImageData;
    link: string;
    description: string;
}

const THEME_IMAGE_MAP: Record<string, { dark: StaticImageData; light: StaticImageData }> = {
    'GitHub': { dark: github_white, light: github },
    'AWS': { dark: aws_white, light: aws },
    'Express.js': { dark: express_white, light: express }
};

export function useThemeImages<T extends ToolItem>(items: T[]): T[] {
    const { theme } = useTheme();
    const [modifiedItems, setModifiedItems] = useState<T[]>(items);

    useEffect(() => {
        const updated = items.map((item) => {
            const themeImage = THEME_IMAGE_MAP[item.name];
            if (themeImage && theme) {
                return {
                    ...item,
                    image: theme === 'dark' ? themeImage.dark : themeImage.light,
                };
            }
            return item;
        });
        setModifiedItems(updated);
    }, [theme, items]);

    return modifiedItems;
}

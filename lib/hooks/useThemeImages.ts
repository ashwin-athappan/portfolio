import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { StaticImageData } from "next/image";
import github_white from "@/public/assets/svg/github_white.svg";
import github from "@/public/assets/svg/github.svg";
import aws_white from "@/public/assets/svg/aws_white.svg";
import aws from "@/public/assets/svg/aws.svg";

interface ToolItem {
    id: number;
    name: string;
    image: StaticImageData;
    link: string;
    description: string;
}

const THEME_IMAGE_MAP: Record<string, { dark: StaticImageData; light: StaticImageData }> = {
    'GitHub': { dark: github_white, light: github },
    'AWS': { dark: aws_white, light: aws },
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

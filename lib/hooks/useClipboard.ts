import { useState } from "react";

interface UseClipboardReturn {
    copied: boolean;
    copyToClipboard: (text: string) => Promise<void>;
}

export function useClipboard(): UseClipboardReturn {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return { copied, copyToClipboard };
}

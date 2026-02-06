"use client";

import React from "react";
import { Bold } from "lucide-react";

export interface EditorToolbarProps {
    onBold: () => void;
    disabled?: boolean;
    className?: string;
}

export function EditorToolbar({
    onBold,
    disabled = false,
    className = "",
}: EditorToolbarProps) {
    return (
        <div
            className={`flex items-center gap-1 border-b border-gray-300 dark:border-gray-600 p-1 ${className}`}
            role="toolbar"
            aria-label="Formatting"
        >
            <button
                type="button"
                onClick={onBold}
                disabled={disabled}
                className={`rounded p-1.5 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600 disabled:opacity-50`}
                title="Bold"
                aria-label="Bold"
            >
                <Bold className="h-4 w-4" />
            </button>
        </div>
    );
}

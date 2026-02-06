"use client";

import React from "react";
import { Bold, Italic } from "lucide-react";

export interface EditorToolbarProps {
    onBold: () => void;
    onItalic: () => void;
    activeBold?: boolean;
    activeItalic?: boolean;
    disabled?: boolean;
    className?: string;
}

const toolbarButtonClass =
    "rounded p-1.5 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600 disabled:opacity-50";
const toolbarButtonActiveClass =
    "bg-gray-200 dark:bg-gray-600";

export function EditorToolbar(props: EditorToolbarProps) {
    const {
        onBold,
        onItalic,
        activeBold = false,
        activeItalic = false,
        disabled = false,
        className = "",
    } = props;
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
                className={`${toolbarButtonClass} ${activeBold ? toolbarButtonActiveClass : ""}`}
                title="Bold"
                aria-label="Bold"
                aria-pressed={activeBold}
            >
                <Bold className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={onItalic}
                disabled={disabled}
                className={`${toolbarButtonClass} ${activeItalic ? toolbarButtonActiveClass : ""}`}
                title="Italic"
                aria-label="Italic"
                aria-pressed={activeItalic}
            >
                <Italic className="h-4 w-4" />
            </button>
        </div>
    );
}

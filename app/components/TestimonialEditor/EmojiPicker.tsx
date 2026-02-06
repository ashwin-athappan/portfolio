"use client";

import React, { useState } from "react";

const EMOJI_GRID = [
    "😀",
    "😊",
    "👍",
    "🙌",
    "❤️",
    "🔥",
    "⭐",
    "✨",
    "💯",
    "🎉",
    "👏",
    "🙏",
    "😄",
    "😂",
    "😍",
    "🤔",
    "💪",
    "🚀",
];

export interface EmojiPickerProps {
    onSelect: (emoji: string) => void;
    className?: string;
}

export function EmojiPicker({ onSelect, className = "" }: EmojiPickerProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`relative ${className}`}>
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className={`rounded p-1.5 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600 ${open && 'bg-gray-200 dark:bg-gray-600'}`}
                title="Insert emoji"
                aria-label="Insert emoji"
                aria-expanded={open}
            >
                <span className="text-lg" aria-hidden>
                    😀
                </span>
            </button>
            {open && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        aria-hidden
                        onClick={() => setOpen(false)}
                    />
                    <div
                        className="absolute left-[-160px] top-full z-20 mt-1 grid grid-cols-6 gap-0.5 rounded-lg border border-gray-300 bg-white p-2 shadow-lg dark:border-gray-600 dark:bg-dark-element"
                        role="dialog"
                        aria-label="Emoji picker"
                    >
                        {EMOJI_GRID.map((emoji) => (
                            <button
                                key={emoji}
                                type="button"
                                className="rounded p-1.5 text-xl hover:bg-gray-100 dark:hover:bg-gray-600"
                                onClick={() => {
                                    onSelect(emoji);
                                    setOpen(false);
                                }}
                                aria-label={`Insert ${emoji}`}
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

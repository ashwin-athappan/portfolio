"use client";

import React, {
    useRef,
    useEffect,
    useCallback,
    useId,
} from "react";
import { EditorToolbar } from "./EditorToolbar";
import { EmojiPicker } from "./EmojiPicker";

export interface TestimonialRichEditorProps {
    value: string;
    onChange: (html: string) => void;
    placeholder?: string;
    className?: string;
    required?: boolean;
    "aria-label"?: string;
}

export function TestimonialRichEditor({
    value,
    onChange,
    placeholder = "Your testimony or message",
    className = "",
    required = false,
    "aria-label": ariaLabel = "Testimonial message",
}: TestimonialRichEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const isInternalChange = useRef(false);
    const id = useId();

    const emitChange = useCallback(() => {
        const el = editorRef.current;
        if (!el) return;
        const html = el.innerHTML;
        isInternalChange.current = true;
        onChange(html === "<br>" ? "" : html);
    }, [onChange]);

    useEffect(() => {
        const el = editorRef.current;
        if (!el) return;
        if (isInternalChange.current) {
            isInternalChange.current = false;
            return;
        }
        const empty = !value || value === "<br>" || value.trim() === "";
        if (empty) {
            el.innerHTML = "";
        } else if (!el.innerHTML || el.innerHTML === "<br>") {
            el.innerHTML = value;
        }
    }, [value]);

    const handleBold = useCallback(() => {
        editorRef.current?.focus();
        document.execCommand("bold", false);
        emitChange();
    }, [emitChange]);

    const insertEmoji = useCallback(
        (emoji: string) => {
            const el = editorRef.current;
            if (!el) return;
            el.focus();
            document.execCommand("insertText", false, emoji);
            emitChange();
        },
        [emitChange]
    );

    return (
        <div
            className={`overflow-hidden rounded-lg border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 ${className}`}
        >
            <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-600">
                <EditorToolbar onBold={handleBold} />
                <EmojiPicker onSelect={insertEmoji} />
            </div>
            <div
                ref={editorRef}
                contentEditable
                data-placeholder={placeholder}
                role="textbox"
                aria-label={ariaLabel}
                aria-required={required}
                id={id}
                className="min-h-[150px] max-h-[200px] overflow-y-auto p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none dark:text-white dark:placeholder-gray-400 [&:empty::before]:content-[attr(data-placeholder)] [&:empty::before]:text-gray-400"
                onInput={emitChange}
                onPaste={(e) => {
                    e.preventDefault();
                    const text = e.clipboardData.getData("text/plain");
                    document.execCommand("insertText", false, text);
                    emitChange();
                }}
                suppressContentEditableWarning
            />
        </div>
    );
}

/**
 * Sanitizes HTML for safe display (e.g. testimonial content).
 * Only allows a minimal set of formatting tags; strips scripts and other dangerous content.
 * Works on both server and client to avoid hydration mismatch.
 */

const ALLOWED_TAGS = new Set([
    "b",
    "strong",
    "em",
    "i",
    "br",
    "p",
    "div",
    "span",
]);

const DANGEROUS_BLOCKS =
    /<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi;

function isAllowedTag(tagName: string): boolean {
    return ALLOWED_TAGS.has(tagName.toLowerCase());
}

export function sanitizeHtml(html: string): string {
    if (!html || typeof html !== "string") return "";

    let out = html
        .replace(DANGEROUS_BLOCKS, "")
        .replace(/<[^>]+>/g, (tag) => {
            const match = tag.match(/^<\/?([a-z][a-z0-9]*)/i);
            const tagName = match ? match[1].toLowerCase() : "";
            if (!tagName) return "";
            if (!isAllowedTag(tagName)) return "";
            return tag.startsWith("</") ? `</${tagName}>` : `<${tagName}>`;
        });

    return out;
}

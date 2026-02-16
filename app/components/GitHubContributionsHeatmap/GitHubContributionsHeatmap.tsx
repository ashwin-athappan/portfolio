"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const GITHUB_USER = "ashwin-athappan";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USER}`;

/**
 * Heatmap dimensions. Adjust cellSize and gap to scale the grid;
 * monthRowHeight and dayLabelWidth are derived but can be overridden.
 */
const HEATMAP_CONFIG = {
    cellSize: 10,
    gap: 3,
    monthRowMarginBottom: 2,
    dayLabelWidth: 24,
} as const;

interface ContributionDay {
    date: string;
    contributionCount: number;
}

interface ContributionWeek {
    contributionDays: ContributionDay[];
}

function getLevel(count: number): 0 | 1 | 2 | 3 | 4 {
    if (count <= 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    if (count <= 9) return 3;
    return 4;
}

export default function GitHubContributionsHeatmap(): React.JSX.Element {
    const [weeks, setWeeks] = useState<ContributionWeek[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/github/contributions")
            .then((res) => {
                if (!res.ok) return res.json().then((e) => { throw new Error(e?.error || "Fetch failed"); });
                return res.json();
            })
            .then((data) => setWeeks(data.weeks ?? null))
            .catch((err) => setError(err.message));
    }, []);

    if (error) {
        return (
            <div
                className="md:row-span-1 col-span-1 sm:col-span-2 lg:col-span-3 glass-card rounded-[28px] p-4 h-[280px] flex flex-col justify-center items-center transition-shadow"
                aria-label="GitHub contributions"
            >
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Contributions unavailable. Add GITHUB_TOKEN to load heatmap.
                </p>
                <Link
                    href={GITHUB_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300 underline hover:no-underline"
                >
                    View profile on GitHub
                </Link>
            </div>
        );
    }

    if (!weeks || weeks.length === 0) {
        return (
            <div
                className="md:row-span-1 col-span-1 sm:col-span-2 lg:col-span-3 glass-card rounded-[28px] p-4 h-[280px] flex flex-col justify-center items-center transition-shadow"
                aria-label="GitHub contributions"
            >
                <div className="w-full h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Loading…</p>
            </div>
        );
    }

    const rows = 7;
    const cols = weeks.length;
    const grid: (number | null)[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(null)
    );

    weeks.forEach((week, col) => {
        week.contributionDays.forEach((day, row) => {
            if (row < rows) grid[row][col] = day.contributionCount;
        });
    });

    const { cellSize, gap, monthRowMarginBottom, dayLabelWidth } = HEATMAP_CONFIG;
    const cellWithGap = cellSize + gap;
    const rowHeight = cellWithGap;
    const monthRowHeight = cellSize + 3;
    const gridWidth = cols * cellSize + (cols - 1) * gap;
    const gridHeight = rows * cellSize + (rows - 1) * gap;
    const dayLabelPaddingTop = monthRowHeight + monthRowMarginBottom;

    const monthLabels: { month: string; weekIndex: number }[] = [];
    const seenMonths = new Set<string>();
    weeks.forEach((week, weekIndex) => {
        week.contributionDays.forEach((day) => {
            const d = new Date(day.date);
            if (d.getDate() === 1) {
                const key = `${d.getFullYear()}-${d.getMonth()}`;
                if (!seenMonths.has(key)) {
                    seenMonths.add(key);
                    monthLabels.push({
                        month: d.toLocaleString("default", { month: "short" }),
                        weekIndex,
                    });
                }
            }
        });
    });

    const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div
            className="md:row-span-1 col-span-1 sm:col-span-2 lg:col-span-3 glass-card rounded-[28px] p-4 h-[280px] flex flex-col transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
            aria-label="GitHub contributions in the last year"
        >
            <div className="flex items-center justify-between mb-2 shrink-0">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    GitHub activity
                </h3>
                <Link
                    href={GITHUB_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline"
                >
                    Profile
                </Link>
            </div>
            <div className="flex-1 min-h-0 flex overflow-x-auto overflow-y-hidden py-1 justify-center items-center">
                <div className="flex gap-2 shrink-0">
                    <div
                        className="flex flex-col shrink-0 text-[9px] text-gray-500 dark:text-gray-400"
                        style={{
                            width: dayLabelWidth,
                            paddingTop: dayLabelPaddingTop,
                        }}
                    >
                        {dayLabels.map((label) => (
                            <span
                                key={label}
                                className="leading-none flex items-center"
                                style={{ height: rowHeight }}
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col shrink-0">
                        <div
                            className="relative shrink-0 mb-0.5 text-[9px] text-gray-500 dark:text-gray-400"
                            style={{
                                height: monthRowHeight,
                                width: gridWidth,
                            }}
                        >
                            {monthLabels.map(({ month, weekIndex }) => (
                                <span
                                    key={`${month}-${weekIndex}`}
                                    className="absolute leading-none whitespace-nowrap"
                                    style={{
                                        left: weekIndex * cellWithGap,
                                    }}
                                >
                                    {month}
                                </span>
                            ))}
                        </div>
                        <div
                            className="inline-grid shrink-0"
                            style={{
                                gap: `${gap}px`,
                                gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
                                gridTemplateRows: `repeat(7, ${cellSize}px)`,
                            }}
                        >
                            {grid.map((row, i) =>
                                row.map((count, j) => {
                                    const level =
                                        count != null ? getLevel(count) : 0;
                                    const title =
                                        count != null
                                            ? `${count} contribution${count !== 1 ? "s" : ""}`
                                            : "No contributions";
                                    return (
                                        <div
                                            key={`${i}-${j}`}
                                            className="rounded-[1px] min-w-0 min-h-0"
                                            style={{
                                                width: cellSize,
                                                height: cellSize,
                                                backgroundColor:
                                                    level === 0
                                                        ? "var(--heatmap-0, #ebedf0)"
                                                        : level === 1
                                                          ? "var(--heatmap-1, #9be9a8)"
                                                          : level === 2
                                                            ? "var(--heatmap-2, #40c463)"
                                                            : level === 3
                                                              ? "var(--heatmap-3, #30a14e)"
                                                              : "var(--heatmap-4, #216e39)",
                                            }}
                                            title={title}
                                            aria-hidden
                                        />
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center shrink-0">
                Last year · Less → More
            </p>
        </div>
    );
}

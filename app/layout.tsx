import type {Metadata} from "next";
import "./globals.css";

import React from "react";

import {Poppins} from "next/font/google";

import {ThemeProvider} from "next-themes";

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
    style: "normal"
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Ashwin Athappan's portfolio",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} bg-white dark:bg-dark`}>
                <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
            </body>
        </html>
    );
}

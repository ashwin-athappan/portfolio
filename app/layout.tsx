import React from "react";
import type {Metadata} from "next";
import "./globals.css";

import {NextThemeProvider} from "./providers/NextThemeProvider";
import {cookies} from "next/headers";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
    title: "Ashwin Athappan",
    description: "Ashwin Athappan's personal website showcasing my portfolio, skills, and contact information.",
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")?.value || "light";

    return (
        <html lang="en" className={theme} suppressHydrationWarning>
        <body className={`bg-light-background dark:bg-dark-background`}>
        <NextThemeProvider>
            <div className="pt-20">
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </NextThemeProvider>
        </body>
        </html>
    );
}
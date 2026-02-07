import { cookies } from "next/headers";

const COOKIE_NAME = "dashboard_auth";

export function getDashboardSecret(): string {
    const secret = process.env.DASHBOARD_SECRET;
    if (!secret) throw new Error("DASHBOARD_SECRET is not set");
    return secret;
}

export function getDashboardPassword(): string {
    const password = process.env.DASHBOARD_PASSWORD;
    if (!password) throw new Error("DASHBOARD_PASSWORD is not set");
    return password;
}

export async function isDashboardAuthenticated(): Promise<boolean> {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    try {
        return token === getDashboardSecret();
    } catch {
        return false;
    }
}

export async function setDashboardAuth(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, getDashboardSecret(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24, // 24 hours
    });
}

export async function clearDashboardAuth(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
}

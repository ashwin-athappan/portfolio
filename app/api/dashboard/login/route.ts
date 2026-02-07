import { NextResponse } from "next/server";
import { getDashboardPassword, setDashboardAuth } from "@/lib/auth/dashboardAuth";

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const { password } = await request.json();

        if (!password || typeof password !== "string") {
            return NextResponse.json({ error: "Password required" }, { status: 400 });
        }

        const validPassword = getDashboardPassword();

        if (password !== validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        await setDashboardAuth();
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Dashboard login error:", err);
        return NextResponse.json({ error: "Login failed" }, { status: 500 });
    }
}

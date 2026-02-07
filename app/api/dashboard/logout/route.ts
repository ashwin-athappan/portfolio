import { NextResponse } from "next/server";
import { clearDashboardAuth } from "@/lib/auth/dashboardAuth";

export async function POST(): Promise<NextResponse> {
    try {
        await clearDashboardAuth();
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Dashboard logout error:", err);
        return NextResponse.json({ error: "Logout failed" }, { status: 500 });
    }
}

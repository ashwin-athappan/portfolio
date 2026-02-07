import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import { ServiceFactory } from "@/lib/factories/ServiceFactory";
import { isDashboardAuthenticated } from "@/lib/auth/dashboardAuth";

export async function GET(): Promise<NextResponse> {
    try {
        const authenticated = await isDashboardAuthenticated();
        if (!authenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        await connect();
        const testimonyService = ServiceFactory.getTestimonyService();
        const testimonies = await testimonyService.getTestimoniesByStatus();
        return NextResponse.json({ testimonies }, { status: 200 });
    } catch (err) {
        console.error("Failed to fetch dashboard testimonies:", err);
        return NextResponse.json({ error: "Failed to fetch testimonies" }, { status: 500 });
    }
}

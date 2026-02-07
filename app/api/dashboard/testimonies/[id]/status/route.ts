import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import { ServiceFactory } from "@/lib/factories/ServiceFactory";
import { isDashboardAuthenticated } from "@/lib/auth/dashboardAuth";
import { TestimonyStatus } from "@/lib/types/Testimony";

const VALID_STATUSES: TestimonyStatus[] = ["pending", "approved", "rejected"];

export async function PATCH(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
    try {
        const authenticated = await isDashboardAuthenticated();
        if (!authenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { id } = await params;
        const body = await _request.json();
        const status = body?.status;
        if (!status || !VALID_STATUSES.includes(status)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 });
        }
        await connect();
        const testimonyService = ServiceFactory.getTestimonyService();
        const updated = await testimonyService.updateTestimonyStatus(id, status);
        if (!updated) {
            return NextResponse.json({ error: "Testimony not found" }, { status: 404 });
        }
        return NextResponse.json({ testimony: updated }, { status: 200 });
    } catch (err) {
        console.error("Failed to update testimony status:", err);
        return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
    }
}

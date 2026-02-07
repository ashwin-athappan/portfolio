import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import { ServiceFactory } from "@/lib/factories/ServiceFactory";
import { isDashboardAuthenticated } from "@/lib/auth/dashboardAuth";

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
    try {
        const authenticated = await isDashboardAuthenticated();
        if (!authenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { id } = await params;
        await connect();
        const testimonyService = ServiceFactory.getTestimonyService();
        const deleted = await testimonyService.deleteTestimony(id);
        if (!deleted) {
            return NextResponse.json({ error: "Testimony not found" }, { status: 404 });
        }
        return new NextResponse(null, { status: 204 });
    } catch (err) {
        console.error("Failed to delete testimony:", err);
        return NextResponse.json({ error: "Failed to delete testimony" }, { status: 500 });
    }
}

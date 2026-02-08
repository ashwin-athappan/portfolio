import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import { ServiceFactory } from "@/lib/factories/ServiceFactory";
import { isDashboardAuthenticated } from "@/lib/auth/dashboardAuth";
import { TestimonyUpdateRequest, TestimonyStatus } from "@/lib/types/Testimony";

const VALID_STATUSES: TestimonyStatus[] = ["pending", "approved", "rejected"];

function parseBody(body: unknown): TestimonyUpdateRequest | null {
    if (!body || typeof body !== "object") return null;
    const o = body as Record<string, unknown>;
    const out: TestimonyUpdateRequest = {};
    if (typeof o.name === "string") out.name = o.name;
    if (typeof o.relation === "string" && ["FRIEND", "FAMILY", "COLLEAGUE", "OTHER"].includes(o.relation)) out.relation = o.relation as TestimonyUpdateRequest["relation"];
    if (typeof o.comment === "string") out.comment = o.comment;
    if (typeof o.whereWeFirstMet === "string") out.whereWeFirstMet = o.whereWeFirstMet;
    if (typeof o.professionalRelation === "string") out.professionalRelation = o.professionalRelation;
    if (typeof o.company === "string") out.company = o.company;
    if (typeof o.position === "string") out.position = o.position;
    if (typeof o.status === "string" && VALID_STATUSES.includes(o.status as TestimonyStatus)) out.status = o.status as TestimonyStatus;
    return Object.keys(out).length > 0 ? out : null;
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
    try {
        const authenticated = await isDashboardAuthenticated();
        if (!authenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { id } = await params;
        const body = await request.json().catch(() => null);
        const data = parseBody(body);
        if (!data) {
            return NextResponse.json({ error: "Invalid or empty update body" }, { status: 400 });
        }
        await connect();
        const testimonyService = ServiceFactory.getTestimonyService();
        const updated = await testimonyService.updateTestimony(id, data);
        if (!updated) {
            return NextResponse.json({ error: "Testimony not found" }, { status: 404 });
        }
        return NextResponse.json({ testimony: updated }, { status: 200 });
    } catch (err) {
        const message = err instanceof Error ? err.message : "";
        try {
            const parsed = JSON.parse(message);
            if (typeof parsed === "object" && parsed !== null) {
                return NextResponse.json({ errors: parsed }, { status: 400 });
            }
        } catch {
            // not validation errors
        }
        console.error("Failed to update testimony:", err);
        return NextResponse.json({ error: "Failed to update testimony" }, { status: 500 });
    }
}

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

"use server";

import { connect } from "@/lib/db";
import { NextResponse } from "next/server";
import { ServiceFactory } from "@/lib/factories/ServiceFactory";

export async function POST(request: Request): Promise<NextResponse> {
    try {
        await connect();
        const body = await request.json();
        const { name, relation, comment, whereWeFirstMet, professionalRelation, image } = body;

        const testimonyService = ServiceFactory.getTestimonyService();
        await testimonyService.createTestimony({
            name,
            relation,
            comment,
            whereWeFirstMet,
            professionalRelation,
            image: image ?? undefined,
        });

        return NextResponse.json({ message: "Testimony added successfully" }, { status: 201 });
    } catch (err) {
        console.error("Failed to add testimony:", err);

        // Check if it's a validation error
        let errorMessage = "Failed to create testimony";
        try {
            const parsedError = JSON.parse((err as Error).message);
            if (typeof parsedError === 'object') {
                return NextResponse.json({ errors: parsedError }, { status: 400 });
            }
        } catch {
            // Not a validation error, use default message
        }

        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}

export async function GET(): Promise<NextResponse> {
    try {
        await connect();

        const testimonyService = ServiceFactory.getTestimonyService();
        const testimonies = await testimonyService.getAllTestimonies();

        return NextResponse.json({ testimonies }, { status: 200 });
    } catch (err) {
        console.error("Failed to fetch testimonies:", err);
        return NextResponse.json({ message: "Failed to fetch testimonies" }, { status: 500 });
    }
}

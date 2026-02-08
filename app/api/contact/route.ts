"use server";

import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import { ServiceFactory } from "@/lib/factories/ServiceFactory";

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const { email, message } = await request.json();

        await connect();

        const contactService = ServiceFactory.getContactService();
        await contactService.submitContactForm({ email, message });

        return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
    } catch (err) {
        console.error("Failed to send message:", err);

        // Check if it's a validation error
        const errorMessage = "Failed to send message";
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

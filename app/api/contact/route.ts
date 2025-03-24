"use server";

import {NextResponse} from "next/server";
import {connect} from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const {email, message} = await request.json();
        console.log("Email:", email);
        console.log("Message:", message);

        const {client} = await connect();

        const contactObj = new Contact({email, message, date: new Date()});
        await contactObj.save();

        client?.close();
        return NextResponse.json({message: "Message sent successfully"}, {status: 201});
    } catch (err) {
        console.error("Failed to send message:", err);
        return NextResponse.json({message: "Failed to send message"}, {status: 500});
    }
}
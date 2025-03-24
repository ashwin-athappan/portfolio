"use server";

import {connect} from "@/lib/db";
import Testimony from "@/models/Testimony";
import {NextResponse} from "next/server";
import {Readable} from "stream";

import {DEFAULT_USER_IMAGE_STRING} from "@/lib/constants";

export async function POST(request: Request): Promise<NextResponse> {
    console.log("Request body:", request.body);
    try {
        const {client, bucket} = await connect();
        const {name, relation, comment, image} = await request.json();

        if (!name || !relation || !comment || name === "" || relation === "" || comment === "") {
            return NextResponse.json({message: "Invalid request body"}, {status: 400});
        }

        let newTestimony = null;

        if (image.name === DEFAULT_USER_IMAGE_STRING) {
            newTestimony = new Testimony({name, relation, comment});
        } else {
            const imageName = `${image.name}-${Date.now()}`;
            image.name = imageName;
            const buffer = Buffer.from(image.data);
            const stream = Readable.from(buffer);
            const uploadStream = bucket?.openUploadStream(image, {
                metadata: {
                    name: imageName
                }
            });
            if (uploadStream) {
                console.log("Uploading image to GridFS");
                stream.pipe(uploadStream);
            } else {
                return NextResponse.json({message: "Failed to upload image"}, {status: 500});
            }
            newTestimony = new Testimony({name, relation, comment, imageUrl: imageName});
        }

        await newTestimony.save();
        client?.close();

        return NextResponse.json({message: "Testimony added successfully"}, {status: 201});
    } catch (err) {
        console.log("Failed to add testimony:", err);
        return NextResponse.json({message: "Failed to create testimony"}, {status: 500});
    }
}

export async function GET(): Promise<NextResponse> {
    try {
        await connect();
        const testimonies = await Testimony.find();
        return NextResponse.json({testimonies}, {status: 200});
    } catch (err) {
        console.error("Failed to fetch testimonies:", err);
        return NextResponse.json({message: "Failed to fetch testimonies"}, {status: 500});
    }
}
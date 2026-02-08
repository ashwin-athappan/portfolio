"use server";

import { put } from "@vercel/blob";
import { connect } from "@/lib/db";
import { ServiceFactory } from "@/lib/factories/ServiceFactory";
import { TestimonyRelation } from "@/lib/types/Testimony";

export type AddTestimonyResult = { success: true } | { success: false; error: string };

export async function addTestimony(formData: FormData): Promise<AddTestimonyResult> {
    try {
        const name = formData.get("name");
        const comment = formData.get("comment");
        const relation = formData.get("relation");
        const whereWeFirstMet = formData.get("whereWeFirstMet");
        const professionalRelation = formData.get("professionalRelation");
        const company = formData.get("company");
        const position = formData.get("position");
        const image = formData.get("image") as File | null;

        if (
            typeof name !== "string" ||
            typeof comment !== "string" ||
            typeof relation !== "string" ||
            typeof whereWeFirstMet !== "string" ||
            typeof professionalRelation !== "string"
        ) {
            return { success: false, error: "Missing required fields." };
        }

        if (!name.trim() || !comment.trim() || !whereWeFirstMet.trim() || !professionalRelation.trim()) {
            return { success: false, error: "All required fields must be non-empty." };
        }

        const validRelations: TestimonyRelation[] = ["FRIEND", "FAMILY", "COLLEAGUE", "OTHER"];
        if (!validRelations.includes(relation as TestimonyRelation)) {
            return { success: false, error: "Invalid relation." };
        }

        let imageUrl: string | undefined;

        if (image && image.size > 0 && image.name) {
            const blob = await put(image.name, image, {
                access: "public",
                addRandomSuffix: true,
            });
            imageUrl = blob.url;
        }

        await connect();
        const testimonyService = ServiceFactory.getTestimonyService();
        await testimonyService.createTestimony({
            name: name.trim(),
            relation: relation as TestimonyRelation,
            comment: comment.trim(),
            whereWeFirstMet: whereWeFirstMet.trim(),
            professionalRelation: professionalRelation.trim(),
            company: typeof company === "string" ? company.trim() : undefined,
            position: typeof position === "string" ? position.trim() : undefined,
            imageUrl,
        });

        return { success: true };
    } catch (err) {
        console.error("addTestimony failed:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "Failed to submit testimony.",
        };
    }
}

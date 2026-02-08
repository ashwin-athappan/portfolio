import { del } from "@vercel/blob";
import { ITestimonyService } from "@/lib/interfaces/ITestimonyService";
import { ITestimonyRepository } from "@/lib/interfaces/ITestimonyRepository";
import { TestimonyValidator } from "@/lib/validators/TestimonyValidator";
import { TestimonyRequest, Testimony, TestimonyStatus } from "@/lib/types/Testimony";
import { TestimonyUpdateRequest } from "@/lib/types/Testimony";
import { DEFAULT_USER_IMAGE_STRING } from "@/lib/constants";
import { testimonialsCache } from "@/lib/cache/testimonialsCache";

export class TestimonyService implements ITestimonyService {
    constructor(
        private testimonyRepository: ITestimonyRepository,
        private validator: TestimonyValidator = new TestimonyValidator()
    ) {}

    async createTestimony(data: TestimonyRequest): Promise<Testimony> {
        const validation = this.validator.validate(data);

        if (!validation.isValid) {
            throw new Error(JSON.stringify(validation.errors));
        }

        let imageData: string | undefined;
        const imageUrl: string | undefined = data.imageUrl;

        if (imageUrl) {
            // Use provided public URL (e.g. Vercel Blob)
        } else if (data.image && data.image.name !== DEFAULT_USER_IMAGE_STRING) {
            const raw = data.image.data;
            if (raw != null && typeof raw === "string") {
                imageData = raw.startsWith("data:") ? raw : `data:image/jpeg;base64,${raw}`;
            }
        }

        const created = await this.testimonyRepository.create({
            name: data.name.trim(),
            relation: data.relation,
            comment: data.comment.trim(),
            imageUrl,
            imageData,
            whereWeFirstMet: data.whereWeFirstMet.trim(),
            professionalRelation: data.professionalRelation.trim(),
            company: data.company?.trim(),
            position: data.position?.trim(),
            status: "pending",
        });
        testimonialsCache.invalidate();
        return created;
    }

    async getAllTestimonies(): Promise<Testimony[]> {
        const cached = testimonialsCache.getCached();
        if (cached !== null) return cached;
        const list = await this.testimonyRepository.findAllByStatus("approved");
        testimonialsCache.setCached(list);
        return list;
    }

    async getTestimoniesByStatus(status?: TestimonyStatus): Promise<Testimony[]> {
        return await this.testimonyRepository.findAllByStatus(status);
    }

    async updateTestimonyStatus(id: string, status: TestimonyStatus): Promise<Testimony | null> {
        const updated = await this.testimonyRepository.updateStatus(id, status);
        if (updated) testimonialsCache.invalidate();
        return updated;
    }

    async updateTestimony(id: string, data: TestimonyUpdateRequest): Promise<Testimony | null> {
        const validation = this.validator.validateUpdate(data);
        if (!validation.isValid) {
            throw new Error(JSON.stringify(validation.errors));
        }
        const update: TestimonyUpdateRequest = {};
        if (data.name !== undefined) update.name = data.name.trim();
        if (data.relation !== undefined) update.relation = data.relation;
        if (data.comment !== undefined) update.comment = data.comment.trim();
        if (data.whereWeFirstMet !== undefined) update.whereWeFirstMet = data.whereWeFirstMet.trim();
        if (data.professionalRelation !== undefined) update.professionalRelation = data.professionalRelation.trim();
        if (data.company !== undefined) update.company = data.company.trim() || undefined;
        if (data.position !== undefined) update.position = data.position.trim() || undefined;
        if (data.status !== undefined) update.status = data.status;
        const updated = await this.testimonyRepository.update(id, update);
        if (updated) testimonialsCache.invalidate();
        return updated;
    }

    async deleteTestimony(id: string): Promise<boolean> {
        const testimony = await this.testimonyRepository.findById(id);
        if (!testimony) return false;

        const imageUrl = testimony.imageUrl;
        if (imageUrl && typeof imageUrl === "string" && imageUrl.includes("blob.vercel-storage.com")) {
            try {
                await del(imageUrl);
            } catch (err) {
                console.error("Failed to delete blob image:", err);
                // Continue to delete the record even if blob delete fails (e.g. already deleted)
            }
        }

        const deleted = await this.testimonyRepository.deleteById(id);
        if (deleted) testimonialsCache.invalidate();
        return deleted;
    }
}

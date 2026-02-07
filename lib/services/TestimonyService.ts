import { ITestimonyService } from "@/lib/interfaces/ITestimonyService";
import { ITestimonyRepository } from "@/lib/interfaces/ITestimonyRepository";
import { TestimonyValidator } from "@/lib/validators/TestimonyValidator";
import { TestimonyRequest, Testimony, TestimonyStatus } from "@/lib/types/Testimony";
import { DEFAULT_USER_IMAGE_STRING } from "@/lib/constants";

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
        let imageUrl: string | undefined = data.imageUrl;

        if (imageUrl) {
            // Use provided public URL (e.g. Vercel Blob)
        } else if (data.image && data.image.name !== DEFAULT_USER_IMAGE_STRING) {
            const raw = data.image.data;
            if (raw != null && typeof raw === "string") {
                imageData = raw.startsWith("data:") ? raw : `data:image/jpeg;base64,${raw}`;
            }
        }

        return await this.testimonyRepository.create({
            name: data.name.trim(),
            relation: data.relation,
            comment: data.comment.trim(),
            imageUrl,
            imageData,
            whereWeFirstMet: data.whereWeFirstMet.trim(),
            professionalRelation: data.professionalRelation.trim(),
            status: "pending",
        });
    }

    async getAllTestimonies(): Promise<Testimony[]> {
        return await this.testimonyRepository.findAllByStatus("approved");
    }

    async getTestimoniesByStatus(status?: TestimonyStatus): Promise<Testimony[]> {
        return await this.testimonyRepository.findAllByStatus(status);
    }

    async updateTestimonyStatus(id: string, status: TestimonyStatus): Promise<Testimony | null> {
        return await this.testimonyRepository.updateStatus(id, status);
    }
}

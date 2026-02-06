import { ITestimonyService } from "@/lib/interfaces/ITestimonyService";
import { ITestimonyRepository } from "@/lib/interfaces/ITestimonyRepository";
import { TestimonyValidator } from "@/lib/validators/TestimonyValidator";
import { TestimonyRequest, Testimony } from "@/lib/types/Testimony";
import { DEFAULT_USER_IMAGE_STRING } from "@/lib/constants";
import { Readable } from "stream";
import mongoose from "mongoose";

export class TestimonyService implements ITestimonyService {
    constructor(
        private testimonyRepository: ITestimonyRepository,
        private validator: TestimonyValidator = new TestimonyValidator(),
        private gridFSBucket?: mongoose.mongo.GridFSBucket
    ) {}

    async createTestimony(data: TestimonyRequest): Promise<Testimony> {
        const validation = this.validator.validate(data);

        if (!validation.isValid) {
            throw new Error(JSON.stringify(validation.errors));
        }

        let imageUrl: string | undefined;

        if (data.image && data.image.name !== DEFAULT_USER_IMAGE_STRING && this.gridFSBucket) {
            imageUrl = await this.uploadImage(data.image);
        }

        return await this.testimonyRepository.create({
            name: data.name.trim(),
            relation: data.relation,
            comment: data.comment.trim(),
            imageUrl,
        });
    }

    async getAllTestimonies(): Promise<Testimony[]> {
        return await this.testimonyRepository.findAll();
    }

    private async uploadImage(image: { name: string; data: string }): Promise<string> {
        if (!this.gridFSBucket) {
            throw new Error("GridFS bucket is not available");
        }

        const imageName = `${image.name}-${Date.now()}`;
        const buffer = Buffer.from(image.data);
        const stream = Readable.from(buffer);

        return new Promise((resolve, reject) => {
            const uploadStream = this.gridFSBucket!.openUploadStream(imageName, {
                metadata: { name: imageName },
            });

            stream.pipe(uploadStream);

            uploadStream.on('finish', () => {
                resolve(imageName);
            });

            uploadStream.on('error', (error) => {
                reject(error);
            });
        });
    }
}

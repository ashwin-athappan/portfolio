import { TestimonyRequest, Testimony } from "@/lib/types/Testimony";

export interface ITestimonyService {
    createTestimony(data: TestimonyRequest): Promise<Testimony>;
    getAllTestimonies(): Promise<Testimony[]>;
}

import { TestimonyRequest, Testimony, TestimonyStatus } from "@/lib/types/Testimony";

export interface ITestimonyService {
    createTestimony(data: TestimonyRequest): Promise<Testimony>;
    getAllTestimonies(): Promise<Testimony[]>;
    getTestimoniesByStatus(status?: TestimonyStatus): Promise<Testimony[]>;
    updateTestimonyStatus(id: string, status: TestimonyStatus): Promise<Testimony | null>;
}

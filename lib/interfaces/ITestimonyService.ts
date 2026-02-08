import { TestimonyRequest, Testimony, TestimonyStatus } from "@/lib/types/Testimony";
import { TestimonyUpdateRequest } from "@/lib/types/Testimony";

export interface ITestimonyService {
    createTestimony(data: TestimonyRequest): Promise<Testimony>;
    getAllTestimonies(): Promise<Testimony[]>;
    getTestimoniesByStatus(status?: TestimonyStatus): Promise<Testimony[]>;
    updateTestimonyStatus(id: string, status: TestimonyStatus): Promise<Testimony | null>;
    updateTestimony(id: string, data: TestimonyUpdateRequest): Promise<Testimony | null>;
    deleteTestimony(id: string): Promise<boolean>;
}

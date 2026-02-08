import { Testimony, TestimonyStatus, TestimonyUpdateRequest } from "@/lib/types/Testimony";

export interface ITestimonyRepository {
    create(testimony: Omit<Testimony, '_id'>): Promise<Testimony>;
    findAll(): Promise<Testimony[]>;
    findAllByStatus(status?: TestimonyStatus): Promise<Testimony[]>;
    findById(id: string): Promise<Testimony | null>;
    updateStatus(id: string, status: TestimonyStatus): Promise<Testimony | null>;
    update(id: string, data: TestimonyUpdateRequest): Promise<Testimony | null>;
    deleteById(id: string): Promise<boolean>;
}

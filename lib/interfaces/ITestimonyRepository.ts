import { Testimony, TestimonyStatus } from "@/lib/types/Testimony";

export interface ITestimonyRepository {
    create(testimony: Omit<Testimony, '_id'>): Promise<Testimony>;
    findAll(): Promise<Testimony[]>;
    findAllByStatus(status?: TestimonyStatus): Promise<Testimony[]>;
    updateStatus(id: string, status: TestimonyStatus): Promise<Testimony | null>;
}

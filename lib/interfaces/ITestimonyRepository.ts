import { Testimony } from "@/lib/types/Testimony";

export interface ITestimonyRepository {
    create(testimony: Omit<Testimony, '_id'>): Promise<Testimony>;
    findAll(): Promise<Testimony[]>;
}

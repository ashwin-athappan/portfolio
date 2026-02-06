import { ITestimonyRepository } from "@/lib/interfaces/ITestimonyRepository";
import { Testimony } from "@/lib/types/Testimony";
import TestimonyModel from "@/models/Testimony";

export class TestimonyRepository implements ITestimonyRepository {
    async create(testimony: Omit<Testimony, '_id'>): Promise<Testimony> {
        const testimonyObj = new TestimonyModel({
            name: testimony.name,
            relation: testimony.relation,
            comment: testimony.comment,
            imageUrl: testimony.imageUrl,
        });
        const saved = await testimonyObj.save();
        return {
            _id: saved._id.toString(),
            name: saved.name,
            relation: saved.relation,
            comment: saved.comment,
            imageUrl: saved.imageUrl,
        };
    }

    async findAll(): Promise<Testimony[]> {
        const testimonies = await TestimonyModel.find();
        return testimonies.map((t) => ({
            _id: t._id.toString(),
            name: t.name,
            relation: t.relation,
            comment: t.comment,
            imageUrl: t.imageUrl,
        }));
    }
}

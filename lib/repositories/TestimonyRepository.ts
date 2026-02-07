import { ITestimonyRepository } from "@/lib/interfaces/ITestimonyRepository";
import { Testimony, TestimonyStatus } from "@/lib/types/Testimony";
import TestimonyModel from "@/models/Testimony";
import mongoose from "mongoose";

function mapDocToTestimony(t: { _id: mongoose.Types.ObjectId; name: string; relation: string; comment: string; imageUrl?: string; whereWeFirstMet?: string; professionalRelation?: string; status?: string }): Testimony {
    return {
        _id: t._id.toString(),
        name: t.name,
        relation: t.relation as Testimony["relation"],
        comment: t.comment,
        imageUrl: t.imageUrl,
        whereWeFirstMet: t.whereWeFirstMet,
        professionalRelation: t.professionalRelation,
        status: (t.status as TestimonyStatus) || "pending",
    };
}

export class TestimonyRepository implements ITestimonyRepository {
    async create(testimony: Omit<Testimony, '_id'>): Promise<Testimony> {
        const testimonyObj = new TestimonyModel({
            name: testimony.name,
            relation: testimony.relation,
            comment: testimony.comment,
            imageUrl: testimony.imageUrl,
            whereWeFirstMet: testimony.whereWeFirstMet,
            professionalRelation: testimony.professionalRelation,
            status: testimony.status ?? "pending",
        });
        const saved = await testimonyObj.save();
        return mapDocToTestimony(saved);
    }

    async findAll(): Promise<Testimony[]> {
        const testimonies = await TestimonyModel.find();
        return testimonies.map(mapDocToTestimony);
    }

    async findAllByStatus(status?: TestimonyStatus): Promise<Testimony[]> {
        const query = status ? { status } : {};
        const testimonies = await TestimonyModel.find(query).sort({ _id: -1 });
        return testimonies.map(mapDocToTestimony);
    }

    async updateStatus(id: string, status: TestimonyStatus): Promise<Testimony | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) return null;
        const updated = await TestimonyModel.findByIdAndUpdate(id, { status }, { new: true });
        return updated ? mapDocToTestimony(updated) : null;
    }
}

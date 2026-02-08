import { ITestimonyRepository } from "@/lib/interfaces/ITestimonyRepository";
import { Testimony, TestimonyStatus } from "@/lib/types/Testimony";
import TestimonyModel from "@/models/Testimony";
import mongoose from "mongoose";

function mapDocToTestimony(t: { _id: mongoose.Types.ObjectId; name: string; relation: string; comment: string; imageUrl?: string; imageData?: string; whereWeFirstMet?: string; professionalRelation?: string; company?: string; position?: string; status?: string }): Testimony {
    return {
        _id: t._id.toString(),
        name: t.name,
        relation: t.relation as Testimony["relation"],
        comment: t.comment,
        imageUrl: t.imageUrl,
        imageData: t.imageData,
        whereWeFirstMet: t.whereWeFirstMet,
        professionalRelation: t.professionalRelation,
        company: t.company,
        position: t.position,
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
            imageData: testimony.imageData,
            whereWeFirstMet: testimony.whereWeFirstMet,
            professionalRelation: testimony.professionalRelation,
            company: testimony.company,
            position: testimony.position,
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

    async findById(id: string): Promise<Testimony | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) return null;
        const doc = await TestimonyModel.findById(id);
        return doc ? mapDocToTestimony(doc) : null;
    }

    async updateStatus(id: string, status: TestimonyStatus): Promise<Testimony | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) return null;
        const updated = await TestimonyModel.findByIdAndUpdate(id, { status }, { new: true });
        return updated ? mapDocToTestimony(updated) : null;
    }

    async deleteById(id: string): Promise<boolean> {
        if (!mongoose.Types.ObjectId.isValid(id)) return false;
        const result = await TestimonyModel.findByIdAndDelete(id);
        return result != null;
    }
}

import mongoose from "mongoose";

export interface IDatabaseConnection {
    connect(): Promise<{ client: mongoose.Connection | null; bucket: mongoose.mongo.GridFSBucket | null }>;
    disconnect(): Promise<void>;
}

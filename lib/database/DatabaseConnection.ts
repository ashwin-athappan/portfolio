import { IDatabaseConnection } from "@/lib/interfaces/IDatabaseConnection";
import mongoose from "mongoose";
import { Db } from "mongodb";

export class DatabaseConnection implements IDatabaseConnection {
    private client: mongoose.Connection | null = null;
    private bucket: mongoose.mongo.GridFSBucket | null = null;

    async connect(): Promise<{ client: mongoose.Connection | null; bucket: mongoose.mongo.GridFSBucket | null }> {
        if (this.client && mongoose.connection.readyState === 1) {
            return { client: this.client, bucket: this.bucket };
        }

        try {
            await mongoose.connect(`${process.env.MONGODB_URL}`);
            this.client = mongoose.connection;
            this.bucket = await this.getGridFSBucket();
            console.log("Connected to the Database");
            return { client: this.client, bucket: this.bucket };
        } catch (err) {
            console.error("Failed to connect to MongoDB:", err);
            throw err;
        }
    }

    async disconnect(): Promise<void> {
        if (this.client) {
            await mongoose.disconnect();
            this.client = null;
            this.bucket = null;
        }
    }

    private async getGridFSBucket(): Promise<mongoose.mongo.GridFSBucket | null> {
        if (!this.bucket && mongoose.connection.readyState === 1) {
            if (mongoose.connection.db instanceof Db) {
                this.bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
                    bucketName: 'images',
                });
            }
        }
        return this.bucket;
    }
}

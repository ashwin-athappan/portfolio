import { IDatabaseConnection } from "@/lib/interfaces/IDatabaseConnection";
import mongoose from "mongoose";

export class DatabaseConnection implements IDatabaseConnection {
    private client: mongoose.Connection | null = null;

    async connect(): Promise<{ client: mongoose.Connection | null }> {
        if (this.client && mongoose.connection.readyState === 1) {
            return { client: this.client };
        }

        try {
            await mongoose.connect(`${process.env.MONGODB_URL}`);
            this.client = mongoose.connection;
            console.log("Connected to the Database");
            return { client: this.client };
        } catch (err) {
            console.error("Failed to connect to MongoDB:", err);
            throw err;
        }
    }

    async disconnect(): Promise<void> {
        if (this.client) {
            await mongoose.disconnect();
            this.client = null;
        }
    }
}

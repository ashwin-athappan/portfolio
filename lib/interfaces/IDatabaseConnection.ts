import mongoose from "mongoose";

export interface IDatabaseConnection {
    connect(): Promise<{ client: mongoose.Connection | null }>;
    disconnect(): Promise<void>;
}

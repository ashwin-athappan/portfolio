import {Db} from 'mongodb';
import mongoose from "mongoose";

let client: mongoose.Connection | null = null;
let bucket: mongoose.mongo.GridFSBucket | null = null;

async function getGridFSBucket() {
    if (!bucket && mongoose.connection.readyState === 1) {
        if (mongoose.connection.db instanceof Db) {
            bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
                bucketName: 'images', // Replace with your desired bucket name
            });
        }
    }
    return bucket;
}

const connect = async () => {

    if (client) {
        return {client, bucket};
    }

    try {
        console.log(`${process.env.MONGODB_URL}`);
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        client = mongoose.connection;
        bucket = await getGridFSBucket();
        console.log("Connected to the Database");
        return {client, bucket};
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }

    return {client, bucket};
};

export {connect};
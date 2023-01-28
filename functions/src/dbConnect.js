import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

export function dbConnect() {
    const client = new MongoClient(process.env.URI);
    return client.db(process.env.DB)
}
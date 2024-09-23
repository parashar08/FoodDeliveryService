import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
    try {
        console.log("test");
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`MongoDB connected successfully! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed!", error);
        process.exit(1);
    }
}

export default connectDB;

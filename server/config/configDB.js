import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        const connection = await mongoose.connect(process.env.MONGO_URI);

        console.error(`connected to MONGODB ✅ :: ${connection.connection.host}`);

    } catch (err) {
        console.error(`Can't connect to database`);
        process.exit(1);
    }
}
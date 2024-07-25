import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jefreemendoza:mendoza@cluster0.crayqut.mongodb.net/ProjectTBD');
        console.log(">>>> DB is connected <<<<<")
    } catch (error) {
        console.log(error);
    }
}


import mongoose from "mongoose";


export const initMongoDB = async () => {

    const user = process.env.MONGODB_USER;
    const url = process.env.MONGODB_URL;
    const password = process.env.MONGODB_PASSWORD;
    const db = process.env.MONGODB_DB;
    try {
        await mongoose.connect(`mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("Mongo connection successfully established!");
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}
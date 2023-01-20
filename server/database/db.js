import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@flipkart-clone.g8j2vrb.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database Connected Sucessfully");
    } catch (error) {
        console.log("Error while connecting with database", error.message);
    }
}

export default Connection;
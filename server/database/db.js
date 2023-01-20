import mongoose from "mongoose";

export const Connection = async (username, password) => {
    // const URL = `mongodb+srv://${username}:${password}@flipkart-clone.g8j2vrb.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb://testuser1:test@ac-q3d8bfe-shard-00-00.g8j2vrb.mongodb.net:27017,ac-q3d8bfe-shard-00-01.g8j2vrb.mongodb.net:27017,ac-q3d8bfe-shard-00-02.g8j2vrb.mongodb.net:27017/?ssl=true&replicaSet=atlas-3zx185-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database Connected Sucessfully");
    } catch (error) {
        console.log("Error while connecting with database", error.message);
    }
}

export default Connection;
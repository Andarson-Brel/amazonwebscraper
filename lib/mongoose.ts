import mongoose from "mongoose";

let isConnected = false; // a variable to track connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URI) return console.log("Database Not defined");
  if (isConnected) console.log("using Existing Database connection");
  try {
    mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log(`Connected to database`);
  } catch (error) {}
};

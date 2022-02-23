import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("Please set the MONGO_URI environment variable.");
}

export const connectDatabase = async () => {
  await connect(process.env.MONGO_URI!);
  console.log("Database Connected!");
};

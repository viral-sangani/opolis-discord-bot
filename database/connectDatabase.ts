import { connect } from "mongoose";

// dotenv.config();

if (!process.env.MONGODB_PASSWORD) {
  throw new Error("Please set the MONGODB_PASSWORD environment variable.");
}

export const connectDatabase = async () => {
  await connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.jheym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  console.log("Database Connected!");
};

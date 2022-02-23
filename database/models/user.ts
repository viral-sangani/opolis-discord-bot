import { Document, model, Schema } from "mongoose";

export interface UserInt extends Document {
  discordId: string;
  timestamp: number;
  username: string;
  email: string;
  text: string;
}

export const User = new Schema({
  discordId: String,
  timestamp: Number,
  username: String,
  email: String,
  text: String,
});

export default model<UserInt>("user", User);

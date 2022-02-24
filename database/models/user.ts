import { Document, model, Schema } from "mongoose";

export interface UserInt extends Document {
  discordId: string;
  timestamp: number;
  username: string;
  name: string;
  email: string;
  experience: string;
  yearsOfExperience: number;
  areaOfInterest: string;
  lastProjectWorkedOn: string;
}

export const User = new Schema({
  discordId: String,
  timestamp: Number,
  username: String,
  name: String,
  email: String,
  experience: String,
  yearsOfExperience: Number,
  areaOfInterest: String,
  lastProjectWorkedOn: String,
});

export default model<UserInt>("user", User);

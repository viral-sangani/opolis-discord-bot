import { Document, model, Schema } from "mongoose";

export interface UserInt extends Document {
  discordId: string;
  timestamp: number;
  username: string;
  githubUsername: string;
  website: string;
  twitter: string;
  name: string;
  email: string;
  experience: string;
  yearsOfExperience: number;
  areaOfInterest: string;
  lastProjectWorkedOn: string;
  preferredLocation: string;
  workType: string;
}

export const User = new Schema({
  discordId: String,
  timestamp: Number,
  username: String,
  githubUsername: String,
  website: String,
  twitter: String,
  name: String,
  email: String,
  experience: String,
  yearsOfExperience: Number,
  areaOfInterest: String,
  lastProjectWorkedOn: String,
  preferredLocation: String,
  workType: String,
});

export default model<UserInt>("user", User);

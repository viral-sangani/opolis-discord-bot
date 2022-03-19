import { Document, model, Schema } from "mongoose";

export interface ProjectUserInt extends Document {
  discordId: string;
  timestamp: number;
  username: string;
  name: string;
  companyName: string;
  email: string;
  role: string;
  experienceRange: string;
  projectType: string;
  preferredLocation: string;
  workType: string;
  lastUpdatedAt: number;
  hasSubmitted: boolean;
}

export const ProjectUser = new Schema({
  discordId: String,
  timestamp: Number,
  username: String,
  name: String,
  companyName: String,
  email: String,
  role: String,
  experienceRange: String,
  projectType: String,
  preferredLocation: String,
  workType: String,
  lastUpdatedAt: Number,
  hasSubmitted: Boolean,
});

export default model<ProjectUserInt>("projectUser", ProjectUser);

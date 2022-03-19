import { Document, model, Schema } from "mongoose";

export interface ProjectUserInt extends Document {
  discordId: string;
  timestamp: number;
  username: string;
  name: string;
  email: string;
  role: string;
  experienceRange: string;
  projectType: string;
  preferredLocation: string;
  workType: string;
}

export const ProjectUser = new Schema({
  discordId: String,
  timestamp: Number,
  username: String,
  name: String,
  email: String,
  role: String,
  experienceRange: String,
  projectType: String,
  preferredLocation: String,
  workType: String,
});

export default model<ProjectUserInt>("projectUser", ProjectUser);

import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({}, { timestamps: true });

export const JobApplication = mongoose.model(
  "JobApplication",
  jobApplicationSchema
);

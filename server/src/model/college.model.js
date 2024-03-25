import mongoose from "mongoose";
const collegeSchema = new mongoose.Schema({}, { timestamps: true });

export const College = mongoose.model("College", collegeSchema);

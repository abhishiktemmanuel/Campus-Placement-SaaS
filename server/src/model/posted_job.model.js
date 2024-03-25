import mongoose from "mongoose";

const postedJobSchema = new mongoose.Schema({}, { timestamps: true });

export const PostedJob = mongoose.model("PostedJob", postedJobSchema);

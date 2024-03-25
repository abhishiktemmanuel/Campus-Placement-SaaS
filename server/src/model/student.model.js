import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({}, { timestamps: true });

export const Student = mongoose.model("Student", studentSchema);

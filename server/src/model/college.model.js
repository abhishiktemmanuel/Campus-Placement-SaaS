import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    courses: [{ type: String }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  },
  { timestamps: true }
);

export const College = mongoose.model("College", collegeSchema);

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true,
    },
    course: { type: String, required: true },
    applications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
    ],
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);

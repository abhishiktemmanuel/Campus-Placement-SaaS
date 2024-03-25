import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    status: {
      type: String,
      enum: ["pending", "shortlisted", "rejected", "accepted"],
      default: "pending",
    },
    appliedOn: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);

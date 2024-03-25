import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    website: { type: String, required: true },
    industry: { type: String, required: true },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);

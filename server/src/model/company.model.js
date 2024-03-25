import mongoose from "mongoose";
const companySchema = new mongoose.Schema({}, { timestamps: true });

export const Company = mongoose.model("Company", companySchema);

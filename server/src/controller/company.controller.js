import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Company } from "../models/company.model.js";
import { Job } from "../models/job.model.js";
import { Application } from "../models/application.model.js";

// Get all companies
const getAllCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

// Get a specific company
const getCompanyById = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) {
    throw new ApiError(404, "Company not found");
  }
  res.json(company);
});

// Update company profile
const updateCompany = asyncHandler(async (req, res) => {
  const updatedCompany = await Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!updatedCompany) {
    throw new ApiError(404, "Company not found");
  }
  res.json(updatedCompany);
});

// Post a new job by a company
const postJob = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) {
    throw new ApiError(404, "Company not found");
  }
  const job = await Job.create({ ...req.body, company: company._id });
  company.jobs.push(job._id);
  await company.save();
  res.json(job);
});

// Get all jobs posted by a company
const getCompanyJobs = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id).populate("jobs");
  if (!company) {
    throw new ApiError(404, "Company not found");
  }
  res.json(company.jobs);
});

// Update a job posting
const updateJobPosting = asyncHandler(async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.jobId, req.body, {
    new: true,
  });
  if (!updatedJob) {
    throw new ApiError(404, "Job not found");
  }
  res.json(updatedJob);
});

// Get all job applications for a company's jobs
const getCompanyApplications = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id).populate({
    path: "jobs",
    populate: { path: "applications" },
  });
  if (!company) {
    throw new ApiError(404, "Company not found");
  }
  const applications = company.jobs.flatMap((job) => job.applications);
  res.json(applications);
});

// Update the status of a job application
const updateApplicationStatus = asyncHandler(async (req, res) => {
  const updatedApplication = await Application.findByIdAndUpdate(
    req.params.applicationId,
    { status: req.body.status },
    { new: true }
  );
  if (!updatedApplication) {
    throw new ApiError(404, "Application not found");
  }
  res.json(updatedApplication);
});

export {
  getAllCompanies,
  getCompanyById,
  updateCompany,
  postJob,
  getCompanyJobs,
  updateJobPosting,
  getCompanyApplications,
  updateApplicationStatus,
};

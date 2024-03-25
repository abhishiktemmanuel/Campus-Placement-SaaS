import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Job } from "../models/job.model.js";
import { Application } from "../models/application.model.js";

// Get all job postings
const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Get a specific job posting
const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    throw new ApiError(404, "Job not found");
  }
  res.json(job);
});

// Apply for a job posting
const applyForJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    throw new ApiError(404, "Job not found");
  }
  const application = await Application.create({
    student: req.user._id,
    job: job._id,
  });
  job.applications.push(application._id);
  await job.save();
  res.json(application);
});

export { getAllJobs, getJobById, applyForJob };

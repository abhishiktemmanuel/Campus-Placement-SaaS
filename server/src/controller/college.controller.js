import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { College } from "../models/college.model.js";
import { Job } from "../models/job.model.js";

// Get all colleges
const getAllColleges = asyncHandler(async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
});

// Get a specific college
const getCollegeById = asyncHandler(async (req, res) => {
  const college = await College.findById(req.params.id);
  if (!college) {
    throw new ApiError(404, "College not found");
  }
  res.json(college);
});

// Update college profile
const updateCollege = asyncHandler(async (req, res) => {
  const updatedCollege = await College.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!updatedCollege) {
    throw new ApiError(404, "College not found");
  }
  res.json(updatedCollege);
});

// Get all students from a college
const getCollegeStudents = asyncHandler(async (req, res) => {
  const college = await College.findById(req.params.id).populate("students");
  if (!college) {
    throw new ApiError(404, "College not found");
  }
  res.json(college.students);
});

// Get all approved job postings for a college
const getCollegeJobs = asyncHandler(async (req, res) => {
  const college = await College.findById(req.params.id);
  if (!college) {
    throw new ApiError(404, "College not found");
  }
  const approvedJobs = await Job.find({ approvedBy: college._id });
  res.json(approvedJobs);
});

// Approve a job posting for a college
const approveJobPosting = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    req.params.jobId,
    { approvedBy: req.params.id },
    { new: true }
  );
  if (!job) {
    throw new ApiError(404, "Job not found");
  }
  res.json(job);
});

// Reject a job posting for a college
const rejectJobPosting = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    req.params.jobId,
    { approvedBy: null },
    { new: true }
  );
  if (!job) {
    throw new ApiError(404, "Job not found");
  }
  res.json(job);
});

export {
  getAllColleges,
  getCollegeById,
  updateCollege,
  getCollegeStudents,
  getCollegeJobs,
  approveJobPosting,
  rejectJobPosting,
};

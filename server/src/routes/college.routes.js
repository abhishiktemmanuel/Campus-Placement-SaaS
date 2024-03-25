const express = require("express");
const router = express.Router();
const collegeController = require("../controller/college.controller");

// Get all colleges
router.get("/", collegeController.getAllColleges);

// Get a specific college
router.get("/:id", collegeController.getCollegeById);

// Update college profile
router.put("/:id", collegeController.updateCollege);

// Get all students from a college
router.get("/:id/students", collegeController.getCollegeStudents);

// Get all approved job postings for a college
router.get("/:id/jobs", collegeController.getCollegeJobs);

// Approve a job posting for a college
router.post("/:id/jobs/:jobId/approve", collegeController.approveJobPosting);

// Reject a job posting for a college
router.post("/:id/jobs/:jobId/reject", collegeController.rejectJobPosting);

module.exports = router;

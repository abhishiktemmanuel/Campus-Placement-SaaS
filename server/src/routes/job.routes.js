const express = require("express");
const router = express.Router();
const jobController = require("../controller/job.controller");

// Get all job postings
router.get("/", jobController.getAllJobs);

// Get a specific job posting
router.get("/:id", jobController.getJobById);

// Apply for a job posting
router.post("/:id/apply", jobController.applyForJob);

module.exports = router;

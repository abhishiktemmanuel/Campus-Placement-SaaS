const express = require("express");
const router = express.Router();
const companyController = require("../controller/company.controller");

// Get all companies
router.get("/", companyController.getAllCompanies);

// Get a specific company
router.get("/:id", companyController.getCompanyById);

// Update company profile
router.put("/:id", companyController.updateCompany);

// Post a new job by a company
router.post("/:id/jobs", companyController.postJob);

// Get all jobs posted by a company
router.get("/:id/jobs", companyController.getCompanyJobs);

// Update a job posting
router.put("/:id/jobs/:jobId", companyController.updateJobPosting);

// Get all job applications for a company's jobs
router.get("/:id/applications", companyController.getCompanyApplications);

// Update the status of a job application
router.put(
  "/:id/applications/:applicationId",
  companyController.updateApplicationStatus
);

module.exports = router;

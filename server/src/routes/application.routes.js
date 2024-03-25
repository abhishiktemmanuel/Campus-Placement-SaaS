const express = require("express");
const router = express.Router();
const applicationController = require("../controller/application.controller");

// Get all job applications
router.get("/", applicationController.getAllApplications);

// Get a specific job application
router.get("/:id", applicationController.getApplicationById);

module.exports = router;

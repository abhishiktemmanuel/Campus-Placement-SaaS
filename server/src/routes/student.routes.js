const express = require("express");
const router = express.Router();
const studentController = require("../controller/student.controller");

// Get all students
router.get("/", studentController.getAllStudents);

// Get a specific student
router.get("/:id", studentController.getStudentById);

// Update student profile
router.put("/:id", studentController.updateStudent);

// Get all job applications for a student
router.get("/:id/applications", studentController.getStudentApplications);

module.exports = router;

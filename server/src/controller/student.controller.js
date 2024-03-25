import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Student } from "../models/student.model.js";

// Get all students
const getAllStudents = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Get a specific student
const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    throw new ApiError(404, "Student not found");
  }
  res.json(student);
});

// Update student profile
const updateStudent = asyncHandler(async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!updatedStudent) {
    throw new ApiError(404, "Student not found");
  }
  res.json(updatedStudent);
});

// Get all job applications for a student
const getStudentApplications = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id).populate(
    "applications"
  );
  if (!student) {
    throw new ApiError(404, "Student not found");
  }
  res.json(student.applications);
});

export {
  getAllStudents,
  getStudentById,
  updateStudent,
  getStudentApplications,
};

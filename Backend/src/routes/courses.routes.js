const express = require("express");
const router = express.Router();
const CoursesController = require("../controllers/courses.controller");

// Public
router.get("/", CoursesController.getAllCourses);
router.get("/:id", CoursesController.getCourseById);

module.exports = router;
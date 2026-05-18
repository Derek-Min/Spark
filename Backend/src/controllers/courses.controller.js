const CoursesModel = require("../models/course.model");

function toISO(row) {
  // mysql usually returns Date objects; convert to ISO for frontend formatting
  const copy = { ...row };

  if (copy.enrollment_open_date instanceof Date) {
    copy.enrollment_open_date = copy.enrollment_open_date.toISOString();
  }
  if (copy.start_date instanceof Date) {
    copy.start_date = copy.start_date.toISOString().slice(0, 10); // YYYY-MM-DD
  }
  if (copy.end_date instanceof Date) {
    copy.end_date = copy.end_date.toISOString().slice(0, 10);
  }
  if (copy.created_at instanceof Date) copy.created_at = copy.created_at.toISOString();
  if (copy.updated_at instanceof Date) copy.updated_at = copy.updated_at.toISOString();

  return copy;
}

exports.getAllCourses = async (req, res) => {
  try {
    const rows = await CoursesModel.findAllPublic();
    const data = rows.map(toISO);
    res.json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ error: "Invalid course id" });
    }

    const row = await CoursesModel.findByIdPublic(id);
    if (!row) return res.status(404).json({ error: "Course not found" });

    res.json({ data: toISO(row) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch course details" });
  }
};
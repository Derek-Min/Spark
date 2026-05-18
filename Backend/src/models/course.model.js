const db = require("../config/db");

// ✅ For listing cards + quick modal info (join lecturer)
exports.findAllPublic = async () => {
  const sql = `
    SELECT
      c.id,
      c.title,
      c.description,
      c.price,
      c.category,
      c.level,
      c.course_image,
      c.enrollment_open_date,
      c.start_date,
      c.end_date,
      c.created_at,
      c.updated_at,
      l.id AS lecturer_id,
      l.name AS lecturer_name,
      l.expertise AS lecturer_expertise
    FROM courses c
    JOIN lecturers l ON l.id = c.lecturer_id
    ORDER BY c.created_at DESC, c.id DESC
  `;
  return db.query(sql);
};

// ✅ For modal detail
exports.findByIdPublic = async (courseId) => {
  const sql = `
    SELECT
      c.id,
      c.title,
      c.description,
      c.price,
      c.category,
      c.level,
      c.course_image,
      c.enrollment_open_date,
      c.start_date,
      c.end_date,
      c.created_at,
      c.updated_at,
      l.id AS lecturer_id,
      l.name AS lecturer_name,
      l.email AS lecturer_email,
      l.bio AS lecturer_bio,
      l.expertise AS lecturer_expertise,
      l.photo_url AS lecturer_photo_url
    FROM courses c
    JOIN lecturers l ON l.id = c.lecturer_id
    WHERE c.id = ?
    LIMIT 1
  `;
  const rows = await db.query(sql, [courseId]); // ✅ prepared statement
  return rows[0] || null;
};
const express = require("express");
const cors = require("cors");
const path = require("path");

const coursesRoutes = require("./src/routes/courses.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.get("/", (req, res) => res.json({ message: "Teaching Platform API Running" }));

app.use("/api/courses", coursesRoutes);

module.exports = app;
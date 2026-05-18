require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;
const db = require("./src/config/db");

(async () => {
  try {
    const ok = await db.testConnection();
    console.log("✅ DB connected:", ok);
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  }
})();


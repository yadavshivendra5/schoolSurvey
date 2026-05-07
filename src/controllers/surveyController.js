import pool from "../config/db.js";

export const createSurvey = async (req, res) => {
  const data = req.body;

  try {
   await pool.query(
  `INSERT INTO schoolsurvey (data) VALUES ($1)`,
  [data]
);

    res.status(201).json({ message: "Survey saved successfully" });

  } catch (error) {
    // console.error("Error inserting survey:", error);
    // res.status(500).json({ error: "Failed to save survey" });
      console.error("FULL ERROR:", error);
  console.error("DETAIL:", error?.detail);
  console.error("CODE:", error?.code);
  }
};
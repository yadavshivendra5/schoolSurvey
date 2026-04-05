import pool from "../config/db.js";

export const createSurvey = async (req, res) => {
  const data = req.body;

  try {
    await pool.query(
      `INSERT INTO schoolsurvey (
        school_name, location, area_type, school_type,
        number_of_students, number_of_teachers,
        contact_name, contact_role, contact_phone,
        attendance_system, fees_system,
        problems, operations, users_communication, business
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)`,
      [
        data.schoolInfo.schoolName,
        data.schoolInfo.location,
        data.schoolInfo.areaType,
        data.schoolInfo.schoolType,
        Number(data.schoolInfo.numberOfStudents),
        Number(data.schoolInfo.numberOfTeachers),
        data.schoolInfo.contactPerson.name,
        data.schoolInfo.contactPerson.role,
        data.schoolInfo.contactPerson.phone,
        data.schoolInfo.currentSystem.attendanceSystem,
        data.schoolInfo.currentSystem.feesSystem,
        data.problems,
        data.operations,
        data.usersCommunication,
        data.business
      ]
    );

    res.status(201).json({ message: "Survey saved successfully" });
  } catch (error) {
    console.error("Error inserting survey:", error);
    res.status(500).json({ error: "Failed to save survey" });
  }
};
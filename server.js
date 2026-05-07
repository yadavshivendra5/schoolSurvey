import express from "express";
import cors from "cors";

import schoolRoutes from "./src/routes/schoolRoutes.js";

const app = express();

// ✅ Middleware (correct order)
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// ✅ Routes
app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
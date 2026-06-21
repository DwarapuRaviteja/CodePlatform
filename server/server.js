import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

import connectDB from "./config/db.js";

import generateRoutes from "./routes/generateRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
console.log("Current Directory:", process.cwd());
console.log("GEMINI:", process.env.GEMINI_API_KEY);

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(helmet());

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message:
      "learn to code AI Backend Running",

  });

});

app.use(
  "/api",
  generateRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/projects",
  projectRoutes
);

app.use((err, req, res, next) => {

  console.log(err);

  res.status(500).json({

    success: false,

    message:
      "Internal Server Error",

  });

});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});
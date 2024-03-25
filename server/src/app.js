import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import { multerMiddleware } from "./middlewares/multer.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(multerMiddleware);

// Routes import
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import studentRouter from "./routes/student.routes.js";
import companyRouter from "./routes/company.routes.js";
import collegeRouter from "./routes/college.routes.js";
import jobRouter from "./routes/job.routes.js";
import applicationRouter from "./routes/application.routes.js";

// Routes declaration
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/students", studentRouter);
app.use("/api/companies", companyRouter);
app.use("/api/colleges", collegeRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/applications", applicationRouter);

export { app };

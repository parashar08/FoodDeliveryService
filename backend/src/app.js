import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "6kb" }));
app.use(cors(corsOptions));
app.use(cookieParser());

import userRouter from "./routes/user.route.js";

app.use("/api/v1/user", userRouter);

export default app;
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 4001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

// Without using these middlewares, the error will come in HTML format (default)
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
    console.log(`SERVER HAS STARTED ON PORT ------- ${port}`)
);

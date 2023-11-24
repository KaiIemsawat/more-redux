import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 4001;
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => {
    console.log(`SERVER HAS LAUNCH ON PORT ------ ${port}`);
});

import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 4001;

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () =>
    console.log(`SERVER HAS STARTED ON PORT ------- ${port}`)
);

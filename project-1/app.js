import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", userRoutes);

export { app };

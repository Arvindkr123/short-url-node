import express from "express";
import urlRouter from "./routes/url.routes.js";
import staticRouter from "./routes/static.routes.js";
import userRoutes from "./routes/user.routes.js";
import { getShortIdUrlController } from "./controllers/url.controllers.js";
import path from "path";
import cookieParser from "cookie-parser";
import {
  checkAuth,
  restrictTOUserLoginOnly,
} from "./middleware/auth.middleware.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./project-2/views"));

app.use("/", checkAuth, staticRouter);
app.use("/url", restrictTOUserLoginOnly, urlRouter);
app.get("/:id", getShortIdUrlController);
app.use("/user", userRoutes);

export { app };

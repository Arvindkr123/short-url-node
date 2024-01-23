import express from "express";
import {
  postUrlController,
  getAnalyticsUrlController,
} from "../controllers/url.controllers.js";

const router = express.Router();

router.post("/", postUrlController);
router.get("/analytics/:id", getAnalyticsUrlController);

export default router;

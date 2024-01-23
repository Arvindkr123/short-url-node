import express from "express";
import {
  getUsersController,
  postUsersController,
  updateUsersController,
  deleteUsersController,
  getSingleUsersController,
} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/users", getUsersController);
router.post("/users", postUsersController);
router.patch("/users/:id", updateUsersController);
router.delete("/users/:id", deleteUsersController);
router.get("/users/:id", getSingleUsersController);

export default router;

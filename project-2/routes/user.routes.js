import express from "express";
import { handleUserSignUp, handleUserlogin } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/", handleUserSignUp);
router.post("/login", handleUserlogin);


export default router;

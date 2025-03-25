import express from "express";
import { formSubmit } from "../controllers/authController.js";

const router = express.Router();

router.post("/submit", formSubmit);

export default router;

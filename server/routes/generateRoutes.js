import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {  generateCode,} from "../controllers/generateController.js";

const router =
  express.Router();

router.post(
  "/generate",
  authMiddleware,
  generateCode
);

export default router;

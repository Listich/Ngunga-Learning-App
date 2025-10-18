import express from "express";
import { registerUser } from "../controllers/authController.js";

console.log("📦 authRoutes.js chargé !");

const router = express.Router();

// ✅ Ajout du log pour vérifier que la route est atteinte
router.post("/register", (req, res, next) => {
  console.log("📩 Route /register atteinte !");
  next();
}, registerUser);

export default router;

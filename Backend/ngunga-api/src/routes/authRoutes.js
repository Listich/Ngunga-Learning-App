import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

console.log("📦 authRoutes.js chargé !");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "✅ API Auth fonctionne parfaitement !" });
});

router.post("/register", registerUser);
router.post("/login", loginUser);


export default router;

import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { User } from "../models/User.js";

const router = express.Router();

router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé ❌" });
    }
    res.json({ message: "Profil utilisateur", user });
  } catch (error) {
    console.error("Erreur profil :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;

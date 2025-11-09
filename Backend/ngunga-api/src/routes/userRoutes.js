import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { User } from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// Récupérer le profil actuel
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

// Je modifier le profil utilisateur
router.put("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé ❌" });
    }

    const { name, email, password } = req.body;

    // Met à jour les champs 
    if (name) user.name = name;
    if (email) user.email = email;

    // Si un nouveau mot de passe est fourni je le hacher
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    if (email && email !== user.email) {
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Cet email est déjà utilisé" });
        }
        user.email = email;
    }
    // Sauvegarde dans Ma bases de donne 
    const updatedUser = await user.save();

    res.json({
      message: "Profil mis à jour ✅",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      },
    });
  } catch (error) {
    console.error("Erreur update profil :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;

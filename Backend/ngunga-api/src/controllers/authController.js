import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//inscription 
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;    

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Veuillez remplir tous les champs" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Cet email est déjà utilisé." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({
      message: "Utilisateur créé avec succès",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Erreur lors de l’inscription :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

//connection

export const loginUser = async(req, res) => {
  try {
    const {email, password} = req.body;

    //Je  si l'utilisateur existe
    const user = await User.findOne({email});
    if (!user) {
      return res.status(404).json({message: "Utilisateur non trouvé"});
    }

    //je verifier le mot de passe 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    //je cree le token JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      message: "Connexion réussie ✅",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Erreur lors du login :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};


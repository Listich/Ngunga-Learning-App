// src/server.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion MongoDB
connectDB();

// Middleware JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Ngunga API est en ligne !");
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});

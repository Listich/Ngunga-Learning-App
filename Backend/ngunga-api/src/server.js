// src/server.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js";

/*dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// 🧭 Middleware pour tout loguer
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

// ✅ Routes
app.get("/", (req, res) => {
  console.log("📍 Route / atteinte !");
  res.send("Ngunga API est en ligne !");
});

app.use("/api/auth", authRoutes);

// ✅ Démarrage propre et asynchrone
const startServer = async () => {
  try {
    console.log("🚀 Démarrage du serveur Ngunga...");
    await connectDB();
    app.listen(PORT, "127.0.0.1", () =>
      console.log(`✅ Serveur lancé sur http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Erreur lors du démarrage du serveur :", error);
    process.exit(1);
  }
};

startServer();
*/

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

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});

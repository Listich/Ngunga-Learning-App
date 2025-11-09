// src/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("🚀 Ngunga API est en ligne !");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
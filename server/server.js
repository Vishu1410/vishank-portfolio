import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import contactRoute from "./routes/contact.js";



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

app.use(
  express.json({
    limit: "10kb",
  })
);

// Routes
app.use("/api/contact", contactRoute);

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// MongoDB Connection
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log("⚠️ MONGO_URI not found — running without database");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

// Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "./route.js";
import connectDB from "./db/mongodb.js";

// Initialize dotenv to load environment variables
dotenv.config({ path: "../.env" });

const app = express();

// Middlewares
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Basic Route
app.use("/api", router);

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from "express";
import authRoutes from "./routes/AuthRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", UserRoutes);

export default router;

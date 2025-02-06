import express from "express";
import authRoutes from "./routes/AuthRoutes";
import UserRoutes from "./routes/UserRoutes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", UserRoutes);

export default router;

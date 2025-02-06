import express from "express";
import { getUsers } from "../controllers/userController.js";

router.get("/users", getUsers);

export default router;

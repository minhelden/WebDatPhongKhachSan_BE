import express from "express";
import { login, signUp } from "../Controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/sign-up", signUp);
userRoutes.post("/login", login)

export default userRoutes;
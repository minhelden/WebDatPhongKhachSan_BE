import express from "express";
import { deleteUser, getUserAll, loginAdmin, loginUser, logout, selectUser, signUp } from "../Controllers/userController.js";
import { checkToken } from "../Config/jwtConfig.js";

const userRoutes = express.Router();

userRoutes.post("/sign-up", signUp);
userRoutes.post("/login-user", loginUser);
userRoutes.post("/login-admin", loginAdmin);
userRoutes.get("/get-user-all", checkToken, getUserAll);
userRoutes.post("/logout", logout);
userRoutes.get("/select-user/:MA_ND", checkToken, selectUser);
userRoutes.delete("/delete-user/:MA_ND", checkToken, deleteUser);

export default userRoutes;
import express from "express";
import { getDiscount } from "../Controllers/discountController.js";

const discountRoutes = express.Router();

discountRoutes.get("/get-discount", getDiscount);

export default discountRoutes;
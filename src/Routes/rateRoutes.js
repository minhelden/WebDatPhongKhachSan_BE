import express from "express";
import { getRateID, getRateSummary } from "../Controllers/rateController.js";

const rateRoutes = express.Router();

rateRoutes.get("/get-rate-id/:MA_KS", getRateID);
rateRoutes.get("/get-avg-rate/:MA_KS", getRateSummary);

export default rateRoutes;
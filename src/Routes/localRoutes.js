import express from "express";
import { getCountry, getProvince } from "../Controllers/localController.js";

const localRoutes = express.Router();

localRoutes.get("/get-country", getCountry);
localRoutes.get("/get-province", getProvince);

export default localRoutes;
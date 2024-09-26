import express from "express";
import { createHotel, deleteHotel, getHotel, getSearchNameHotel, selectHotel, updateHotel } from "../Controllers/hotelController.js";
import { checkToken } from "../Config/jwtConfig.js";

const hotelRoutes = express.Router();

hotelRoutes.get("/get-hotel", getHotel);
hotelRoutes.post("/create-hotel", checkToken, createHotel);
hotelRoutes.put("/update-hotel/:MA_KS", checkToken, updateHotel);
hotelRoutes.delete("/delete-hotel/:MA_KS", checkToken, deleteHotel);
hotelRoutes.get("/search-hotel/:TEN_KS", getSearchNameHotel);
hotelRoutes.get("select-hotel/:TEN_KS", selectHotel);

export default hotelRoutes;

import express from "express";
import { createRoom, deleteRoom, getConvenient, getPrice, getPriceDiscount, getRoom, getSearchNameRoom, selectRoom, updateRoom } from "../Controllers/roomController.js";
import { checkToken } from "../Config/jwtConfig.js";

const roomRoutes = express.Router();

roomRoutes.get("/get-room", getRoom);
roomRoutes.post("/create-room", checkToken, createRoom);
roomRoutes.put("/update-room/:MA_PHONG", checkToken, updateRoom);
roomRoutes.delete("/delete-room/:MA_PHONG", checkToken, deleteRoom);
roomRoutes.get("/search-room/:TENPHONG", checkToken, getSearchNameRoom);
roomRoutes.get("select-room", selectRoom);
roomRoutes.get("/get-convenient/:MA_KS", getConvenient)
roomRoutes.get("/get-price/:MA_KS", getPrice);
roomRoutes.get("/get-price-discount/:MA_KS", getPriceDiscount);

export default roomRoutes;
import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { addStation, deleteStation, getStations, updateStation } from "../controllers/EV/user.js";

const router = express.Router();
router.post("/addStation", verifyToken, addStation);
router.get("/getStations", verifyToken, getStations);
router.post("/updateStation", verifyToken, updateStation);
router.post("/deleteStation", verifyToken, deleteStation);
export default router;
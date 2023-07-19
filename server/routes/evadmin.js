import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { deleteAdminStation, getAdminStations, verifyAdminStation } from "../controllers/EV/admin.js";

const router = express.Router();
router.get("/getAdminStations", verifyToken, getAdminStations);
router.post("/verifyAdminStation", verifyToken, verifyAdminStation);
router.post("/deleteAdminStation", verifyToken,deleteAdminStation);
export default router;
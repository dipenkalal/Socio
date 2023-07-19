import express from "express";
import {
  getUser,
  // getUserSelectedFeature,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
// router.get("/:id/selectedFeatureId", verifyToken, getUserSelectedFeature);


export default router;

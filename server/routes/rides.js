import express from "express";


import { verifyToken } from "../middleware/auth.js";
import { 
    getRides,
    bookRides,
    getMyBookedRides,
     cancelRides
 } from "../controllers/Rider/passenger.js";
import { deleteRide, getMyPostedRides, postRide, updateRide, getMyPassengers } from "../controllers/Rider/rider.js";

const router = express.Router();

/* READ */
//Customer//
router.post("/getRides", verifyToken, getRides);
router.post("/bookRides", verifyToken, bookRides);
router.get("/getMyBookedRides/:id", verifyToken, getMyBookedRides);
router.post("/cancelRides", verifyToken, cancelRides);

//Rider//
router.post("/rider/postRide", verifyToken, postRide);
router.post("/rider/updateRide", verifyToken, updateRide);
router.get("/rider/getMyPostedRides/:id", verifyToken, getMyPostedRides);
router.get("/rider/deleteRide/:id", verifyToken,deleteRide);
router.get("/rider/getMyPassengers/:id", verifyToken, getMyPassengers);

export default router;
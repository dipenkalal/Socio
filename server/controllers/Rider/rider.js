import Ride from "../../models/Rides.js";
import User from "../../models/User.js";


/* REGISTER USER */
export const postRide = async (req, res) => {
  try {
    const {
      from,
      to,
      date,
      time,
      riderID,
      price,
      seat,
    } = req.body;
    const newRide = new Ride({
        from,
        to,
        date,
        time,
        riderID,
        price,
        seat,
    });
    const savedRide = await newRide.save();
    res.status(201).json(savedRide);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const updateRide= async (req, res) => {
  try {
   
    const {
      rideId,
      from,
      to,
      date,
      time,
      price,
      seat,
    } = req.body;
     

    const updatedRide = await Ride.findOneAndUpdate(
      { _id: rideId },
      { $set: {
        from: from,
         to:  to,
         date: date,
         time: time,
         price: price,
         seat: seat
         // Add more fields to update as needed
      }},
      { returnOriginal: false, projection: {createdAt:0,updatedAt:0, __v:0, } },
   )

    res.status(200).json(updatedRide);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }

  
};
export const getMyPostedRides = async (req, res) => {
  try {
    const { id } = req.params;
    const rides = await Ride.find({riderID:id});
    res.status(200).json(rides);
  } catch (err) {
    
    res.status(404).json({ message: err.message });
  }
};

export const deleteRide = async (req, res) => {
  try {
    const { id } = req.params;
    const rides = await Ride.deleteOne({_id:id});
    res.status(200).json(rides);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getMyPassengers = async (req, res) => {
  try {
    const { id } = req.params;
    const rides = await Ride.find({riderID:id});
    const passengers = rides[0].passengers; 
  const customerDetails = await User.find({ _id: { $in: passengers },  },{createdAt:0,updatedAt:0, __v:0, });
  res.status(200).json(customerDetails);   
  } catch (err) {
    res.status(404).json([]);
  }
};
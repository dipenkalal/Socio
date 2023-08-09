import Ride from "../../models/Rides.js";
export const getRides = async (req, res) => {
    try {
    //   const { userId } = req.params;
    const {
        userId,
        from,
        to,
        date,
      } = req.body;
      const rides = await Ride.find({from: from, to: to });
      res.status(200).json({data:rides});
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  export const bookRides = async (req, res) => {
    try {
    //   const { userId } = req.params;
    const {
        userId,
        rideID
      } = req.body;
      // $push: { "your_array_field": "new_value" }
      const updatedRide = await Ride.findOneAndUpdate(
        { _id: rideID },
        { 
          $inc: { 
            seat: -1 
          },
          $addToSet: {
            passengers: userId}
       },
        
        
        { returnOriginal: false, projection: {createdAt:0,updatedAt:0, __v:0, } },
     )
      // const bookedRide = await User.findByIdAndUpdate(
      //   userId,
      //    { $addToSet: {"rides": rideID} }
        
      // );
      res.status(200).json({"message":"booked successfully"});
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  export const cancelRides = async (req, res) => {
    try {
    //   const { userId } = req.params;
    const {
        userId,
        rideID
      } = req.body;
      // $push: { "your_array_field": "new_value" }
      const updatedRide = await Ride.findOneAndUpdate(
        { _id: rideID },
        { 
          $inc: { 
            seat: 1 
          },
          $pull: {
            passengers: userId}
       },
        
        { returnOriginal: false, projection: {createdAt:0,updatedAt:0, __v:0, } },
     )
      // const bookedRide = await User.findByIdAndUpdate(
      //   userId,
      //    { $addToSet: {"rides": rideID} }
        
      // );
      res.status(200).json({"message":"cancelled successfully"});
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  export const getMyBookedRides = async (req, res) => {
    try {
      const { id } = req.params;
      // const user = await User.findById(id);
      // const rides = user.rides; 
    const rideDetails = await Ride.find({ passengers: { $in: id },  },{createdAt:0,updatedAt:0, __v:0,passengers:0 });

      res.status(200).json({"rides":rideDetails});
    } catch (err) {
      res.status(404).json({ message: err.message });
}
};
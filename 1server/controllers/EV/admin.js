import EvStation from "../../models/Evstation.js";

export const getAdminStations = async (req, res) => {
    try {

      const stations = await EvStation.find();
      res.status(200).json(stations);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

export const verifyAdminStation= async (req, res) => {
  try {
   
    const {
        stationId,
        ownerId,
        isVerified
    } = req.body;
     

    const updatedStation = await EvStation.findOneAndUpdate(
      { _id: stationId, ownerId:ownerId },
      { $set: {
        isVerified:isVerified,
       // Add more fields to update as needed
      }},
      { returnOriginal: false, projection: {createdAt:0,updatedAt:0, __v:0, } },
   )

    res.status(200).json(updatedStation);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteAdminStation = async (req, res) => {
    try {
      const {
        stationId,
        } = req.body;
      const deletestation = await EvStation.deleteOne({_id:stationId });
      res.status(200).json("Station Deleted Successfully");
    } catch (err) {
      res.status(404).json({ message: err.message});
    }
  };


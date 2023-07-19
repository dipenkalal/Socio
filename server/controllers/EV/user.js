import EvStation from "../../models/Evstation.js";
export const addStation = async (req, res) => {
  try {
    const {
        stationName,
          stationDescription,
          ownerId,
          latitude,
          longitude,
    } = req.body;
    const newStation = new EvStation({
        stationName,
          stationDescription,
          ownerId,
          
          latitude,
          longitude,
    });
    const Station = await newStation.save();
    res.status(201).json(Station);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStations = async (req, res) => {
    try {

      const stations = await EvStation.find({isVerified:true, isDisabled:false});
      res.status(200).json(stations);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

export const updateStation= async (req, res) => {
  try {
   
    const {
        stationId,
        ownerId,
        stationName,
        stationDescription,
        isDisabled,
        latitude,
        longitude,
    } = req.body;
     

    const updatedStation = await EvStation.findOneAndUpdate(
      { _id: stationId, ownerId:ownerId },
      { $set: {
        stationName: stationName,
        stationDescription:  stationDescription,
        isDisabled: isDisabled,
        latitude: latitude,
        longitude: longitude         // Add more fields to update as needed
      }},
      { returnOriginal: false, projection: {createdAt:0,updatedAt:0, __v:0, } },
   )

    res.status(200).json(updatedStation);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteStation = async (req, res) => {
    try {
      const {
        stationId,
        ownerId} = req.body;
      const deletestation = await EvStation.deleteOne({_id:stationId,ownerId:ownerId });
      res.status(200).json("Station Deleted Successfully");
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
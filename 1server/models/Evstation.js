import mongoose from "mongoose";

const EvStationSchema = new mongoose.Schema(
  {
    stationName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    stationDescription:{
        type: String,
        min: 2,
        max: 50,
    },
    ownerId: String,
    isDisabled: {
        type:Boolean,
    default:false},

    isVerified: {
        type:Boolean,
    default:false},
    latitude: String,
    longitude:String,
  },
  { timestamps: true }
);

const EvStation = mongoose.model("EvStation", EvStationSchema);
export default EvStation;
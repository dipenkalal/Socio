import mongoose from "mongoose";

const RideSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    to: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    date: {
      type: String,
      required: true,
      max: 50,
    //   unique: false,
    },
    time: {
      type: String,
    //   required: true,
      min: 5,
    },
    riderID: {
        type: String,
        default: "",
      },
    // driverName: {
    //   type: String,
    //   default: "",
    // },
    price: {
      type: String,
      required: true,
      max: 15,
    //   unique: false,
    },
    passengers: Array,
    seat: Number,
  },
  { timestamps: true }
);

const Ride = mongoose.model("Rides", RideSchema);
export default Ride;



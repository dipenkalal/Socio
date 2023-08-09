import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const profileUpdate= async (req, res) => {
  try {
    const {
      userId,
      firstName,
      lastName,
      mobile,
      email,
      password,
    } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const updatedProfile = await User.findOneAndUpdate(
      { _id: userId },
      { $set: {
        firstName: firstName,
        lastName:  lastName,
        mobile: mobile,
        email: email,
        password: passwordHash,
          // Add more fields to update as needed
      }},
      { returnOriginal: false, projection: {createdAt:0,updatedAt:0, __v:0, } },
   )

    res.status(200).json(updatedProfile);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }

  
};

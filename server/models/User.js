import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;



//  /* Login */
// export const login = async (req, res ) =>{
//     try {
//         const { email, password } = req.body;
//         const User = await User.findOne({ email: email});
//         if(!user) return res.status(400).json({msg: "404 User not found... Try Again. "})
        

//         const isMatch = await bcrypt.compare(password, user.password);
//         if(!isMatch) return res.status(400).json({ msg: "Try Again bro credentials does not match!!"})

//         const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
//         delete user.password;
//         res.status(200).json({ token, user });

//     } catch (err) {
        
//     }
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, useTheme, useMediaQuery, TextField, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from 'components/NavBar';

const ProfilePage = () => {

    const [isUpdate, setIsUpdate] = useState(false);

    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const userid = useSelector((state) => state._id);

    const [UserID, setuserid] = useState(user?.userid || userid);
    const [firstName, setFirstName] = useState(user?.firstName || firstName);
    const [lastName, setLastName] = useState(user?.lastName || lastName);
    const [email, setEmail] = useState(user?.email || email);
    const [mobile, setMobile] = useState(user?.mobile || mobile);
    const [password, setPassword] = useState(user?.password || password);

    useEffect(() => {
        if (!user) {
            navigate('/welcome');
        }
    }, [user, navigate]);
    
    const handleUpdateProfile = async () => {
        const updatedUser = {
            UserID ,
            firstName,
            lastName,
            email,
            mobile,
            password,
        };

        await axios.post(`http://localhost:3001/users/updateProfile`, updatedUser, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {
                if (response.updatedUser) {
                    setFirstName(response.updatedUser.firstName);
                    setLastName(response.updatedUser.lastName);
                    setEmail(response.updatedUser.email);
                    setIsUpdate(true);
                } else {
                    console.error('Response data is null');
                }

            })
            .catch(error => {
                console.error('There was an error updating the profile:', error);
            });
    };


    return (
        <Box >
            <Navbar />
            <Box className="background-container" sx={{ flexGrow: 1 }} >
                <Box
                    width={isNonMobileScreens ? "50%" : "93%"}
                    p="2rem"
                    m="2rem auto"
                    borderRadius="1.5rem"
                    backgroundColor={theme.palette.background.alt}
                    display="flex"
                    flexDirection="column" >
                    <Typography fontWeight="500" variant="h4" sx={{ mb: "1.5rem" }} textAlign={"center"}>
                        Update your details here...
                    </Typography>

                    <Box width="100%" display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-circle"
                            style={{ width: '180px', height: '180px' }}
                        />
                    </Box>
                    <Typography fontWeight="800" variant="h3" sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }} textAlign={"center"}>
                        {user?.firstName} {user?.lastName}
                    </Typography>

                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="UserID"
                            value={userid} // Use state instead of `defaultValue`
                            onChange={(e) => setuserid(e.target.value)} // Update state on change
                            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                        />
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="First Name"
                            value={firstName} // Use state instead of `defaultValue`
                            onChange={(e) => setFirstName(e.target.value)} // Update state on change
                            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                        />
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Last Name"
                            value={lastName} // Use state instead of `defaultValue`
                            onChange={(e) => setLastName(e.target.value)} // Update state on change
                            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                        />
                    </Box>

                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Email"
                        value={email} // Use state instead of `defaultValue`
                        onChange={(e) => setEmail(e.target.value)} // Update state on change
                        sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Cell Number"
                        value={mobile} // Use state instead of `defaultValue`
                        onChange={(e) => setMobile(e.target.value)} // Update state on change
                        sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Password" // Use state instead of `defaultValue`
                        onChange={(e) => setPassword(e.target.value)} // Update state on change
                        sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                    />
                    {/* Register Button */}
                    <Button
                        sx={{ mt: "1rem", height: "6ev", width: "10ev", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "normal", fontSize: "12px" }}
                        type="button"
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={() => {
                            setIsUpdate(true);
                            handleUpdateProfile();
                        }


                        }
                    // sx={{ mt: "2rem" }} // Adding top margin for spacing
                    >
                        Update Profile
                    </Button>
                </Box>

            </Box>

        </Box>

    );

}

export default ProfilePage;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Box, Typography, useTheme, useMediaQuery, TextField, Avatar, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import Navbar from 'components/NavBar';

// const ProfileUpdate = () => {
//   const userId = useSelector((state) => state.user._id); // Assuming user ID is stored in Redux state
//   const [profile, setProfile] = useState({
//     firstName: '',
//     lastName: '',
//     mobile: '',
//     email: '',
//     password: ''
//   });
//       const theme = useTheme();
//     const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
//     const navigate = useNavigate();
//     const user = useSelector((state) => state.user);
//     const token = useSelector((state) => state.token);
//     const userid = useSelector((state) => state._id);

//   useEffect(() => {
//     // axios.get(`http://localhost:3001/users/${userId}`, setProfile, {
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //             Authorization: `Bearer ${token}`,
//     //         }
//     //     })
//     // Fetch the current user profile when the component mounts
//     axios.get(`http://localhost:3001/users/${userId}`, {

//     headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//     }}
    
//   )
//       .then((response) => {
//         const { firstName, lastName, mobile, email } = response.data;
//         setProfile({ firstName, lastName, mobile, email, password: '' });
//       })
//       .catch((error) => {
//         console.error('Error fetching user profile:', error);
//       });
//   }, [userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
//   };

//   const handleUpdateProfile = () => {
//     axios.post('http://localhost:3001/users/updateProfile', { userId, ...profile })
//       .then((response) => {
//         console.log('Profile updated successfully:', response.data);
//         // You may want to navigate to another page or show a success message
//       })
//       .catch((error) => {
//         console.error('Error updating profile:', error);
//         // You may want to show an error message
//       });
//   };

//   return (
//     <div>
//       <Typography variant="h4">Update Profile</Typography>
//       <TextField
//         name="firstName"
//         label="First Name"
//         value={profile.firstName}
//         onChange={handleInputChange}
//       />
//       <TextField
//         name="lastName"
//         label="Last Name"
//         value={profile.lastName}
//         onChange={handleInputChange}
//       />
//       <TextField
//         name="mobile"
//         label="Mobile"
//         value={profile.mobile}
//         onChange={handleInputChange}
//       />
//       <TextField
//         name="email"
//         label="Email"
//         value={profile.email}
//         onChange={handleInputChange}
//       />
//       <TextField
//         name="password"
//         label="Password"
//         type="password"
//         value={profile.password}
//         onChange={handleInputChange}
//       />
//       <Button onClick={handleUpdateProfile}>Update Profile</Button>
//     </div>
//   );
// };

// export default ProfileUpdate;

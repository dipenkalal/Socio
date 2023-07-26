import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, useTheme, useMediaQuery, TextField, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from 'components/NavBar3';

const ProfilePage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const userid = useSelector((state) => state._id);
    // const firstName = useSelector((state) => state.firstName);
    // const lastName = useSelector((state) => state.lastName);
    // const email = useSelector((state) => state.email);
    // const mobile = useSelector((state) => state.mobile);
    // const age = useSelector((state) => state.age);


    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [email, setEmail] = useState(user.email);
    const [mobile, setMobile] = useState(user.mobile);
    
    const [gender, setGender] = useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    }

    const handleUpdateProfile = async () => {
        const updatedUser = {
            firstName,
            lastName,
            gender,
            age,
            email,
            mobile,
        };

        await axios.put(`http://localhost:3001/users/${userid}`, updatedUser, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                console.log(response.data);
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
                    {/* //     alignItems="center"
                //     justifyContent="center"
                // > */}
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
                        {user.firstName} {user.lastName}
                    </Typography>
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
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
                    <Box display="flex" >
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Age"
                            value={age} // Use state instead of `defaultValue`
                            onChange={(e) => setAge(e.target.value)} // Update state on change
                            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                        />

                        <TextField
                            select
                            fullWidth
                            label="Gender"
                            value={gender}
                            onChange={handleChange}
                            variant="outlined"
                            SelectProps={{
                                native: true,
                            }}
                            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                        >
                            <option value="Gender"></option>
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>
                            <option value={'Other'}>Other</option>
                        </TextField>
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
                    {/* Register Button */}
                    <Button
                        sx={{ mt: "1rem", height: "6ev", width: "10ev", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "normal", fontSize: "12px" }}
                        type="button"
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={handleUpdateProfile}
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

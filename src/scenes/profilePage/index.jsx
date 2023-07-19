import { Box, Typography, useTheme, useMediaQuery, Grid, TextField, Autocomplete, Avatar, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";

import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import * as React from 'react';
import { CenterFocusStrong } from "@mui/icons-material";

const ProfilePage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate("/profile");
    };

    return (
        <Box >
            <Box className="background-container" sx={{ flexGrow: 1 }} >
            <Box
                    width={isNonMobileScreens ? "50%" : "93%"}
                    p="2rem"
                    m="2rem auto"
                    borderRadius="1.5rem"
                    backgroundColor={theme.palette.background.alt}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography fontWeight="800" variant="h3" sx={{ mb: "1.0rem" }} textAlign={"center"}>
                        Profile Page
                    </Typography>
                    <Typography fontWeight="500" variant="h6" sx={{ mb: "1.5rem" }}  textAlign={"center"}>
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
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            defaultValue="Orillia"
                            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            defaultValue="wtf"
                            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                        />

                        <TextField
                            id="outlined-number"
                            label="Age"
                            type="number"
                            defaultValue="20"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
                        />
                    </Box>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{justifyContent: "center"}}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>

                    <TextField
                        fullWidth label="Email"
                        id="email"
                        defaultValue="orillia@wtf.com"
                        sx={{ mt: "1.0rem", mb: "1.0rem", mr: "1.0rem" }}
                    />
                    <TextField
                        fullWidth label="Cell"
                        id="phone"
                        defaultValue="1234567890"
                        sx={{ mt: "0.5rem", mb: "1.0rem", mr: "1.0rem" }}
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



// import { Box, Typography, useTheme, useMediaQuery, Grid, TextField, Autocomplete, Avatar, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Navbar from "scenes/navbar";
// import * as React from 'react';
// import { CenterFocusStrong } from "@mui/icons-material";

// const ProfilePage = () => {
//     const theme = useTheme();
//     const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
//     const navigate = useNavigate();

//     const handleUpdateProfile = () => {
//         navigate("/profile");
//     };

//     return (
//         <Box  display="flex" flexDirection="column"  overflow="auto" > 
//             <Box className="background-container" display="flex" flexDirection="column">
//            </Box>
//         </Box>

//     );

// }
// export default ProfilePage;

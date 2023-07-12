import { Box, Typography, Button, useTheme } from "@mui/material";
import React from 'react';
import { useNavigate } from "react-router-dom";
//import Navbar from "scenes/navbar";

const HomePage = () => {
    const theme = useTheme();
    // const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Insert logic to handle login
            navigate("/login");
      };
      const handleRegister = () => {
        // Insert logic to handle login
            navigate("/register");
      };

    return (
        <Box className="banner-container" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
            <Box
            mt={5}
            width="35%"
            p="0.5rem"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
            textAlign="top">
            <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="150px" />
            </Box>
            <Box>
            <Typography sx={{ mb: "9.5rem" }}>
            </Typography>
                
            </Box>
            <Box>
            <Typography fontWeight="800" textAlign="center" color="white" variant="h1" sx={{ mb: "2.5rem" }}>
              Welcome to GreenRoute!
            </Typography>
                
            </Box>
            <Box mt={20} 
            display="flex" 
            justifyContent="space-between" 
            width="40%">
            <Button 
            type="button"
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={handleLogin}
            sx={{ height: "60px", width: "200px",  backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "17.5px" }} >
                Login
                </Button>
              <Button 
                type="button"
                variant="contained" 
                color="primary" 
                size="large" 
                onClick={handleRegister}
                sx={{ height: "60px", width: "200px", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "17.5px" }} >
                Register
                </Button>
            </Box> 
            {/* <Navbar /> */}
            </Box>
        );
};


export default HomePage;
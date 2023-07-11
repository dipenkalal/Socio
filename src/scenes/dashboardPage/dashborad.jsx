import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";

const DashboardPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const navigate = useNavigate();

    return (
        <Box className="background-container">
      <Box
        width="55%"
        p="1rem 6%"
        textAlign="center">
        <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
</Box>
{/* // right column */}
<Box flexDirection="column">

<Box 
        width={isNonMobileScreens ? "50%" : "93%"}
        p="3rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        display="flex"
        flexDirection="row" 
        justifyContent="flex-start" >
            {/* Top box */}
            <Box> 
                <Typography fontWeight="500" textAlign="left" variant="h3">
              Carpooling
            </Typography>
            </Box>
            <Box className="side-by-side">

            </Box>
            <Box>
               <Button variant="contained" 
                    color="primary" 
                    style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Book Ride
                </Button>
                <Button variant="contained" 
                    color="primary" 
                    style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Post Ride
                </Button>
                <Button variant="contained" 
                color="primary" 
                style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        View Rides
                </Button>
               </Box>
{/* 
            <Box>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-end" style={{marginTop: "1rem", marginRight: "1rem"}}>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Find Station
                    </Button>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Add Station
                    </Button>
                </Grid>
            </Box>

            <Box>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-end" style={{marginTop: "1rem", marginRight: "1rem"}}>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Get Started
                    </Button>
                </Grid>
            </Box> */}
        </Box>
        {/* Middle box */}
        <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}>
            <Box>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Add Station
                    </Button>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Find Station
                    </Button>
                </Box>
{/* 
            <Box>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-end" style={{marginTop: "1rem", marginRight: "1rem"}}>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Find Station
                    </Button>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Add Station
                    </Button>
                </Grid>
            </Box>

            <Box>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-end" style={{marginTop: "1rem", marginRight: "1rem"}}>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Get Started
                    </Button>
                </Grid>
            </Box> */}
        </Box>
        {/* Last box */}
        <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}>
            <Box>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Get Started
                    </Button>
                </Box>
{/* 
            <Box>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-end" style={{marginTop: "1rem", marginRight: "1rem"}}>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Find Station
                    </Button>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Add Station
                    </Button>
                </Grid>
            </Box>

            <Box>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-end" style={{marginTop: "1rem", marginRight: "1rem"}}>
                    <Button variant="contained" color="primary" style={{margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }}>
                        Get Started
                    </Button>
                </Grid>
            </Box> */}
        </Box>
</Box>

        </Box>
    );
};

export default DashboardPage;
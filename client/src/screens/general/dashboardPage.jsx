import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar";
import { useSelector } from 'react-redux';


const DashboardPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  //   Redirection of Pages
  const handleGetRide = () => {
    navigate("/passenger/searchride");
  };
  const handlePostRide = () => {
    navigate("/rider/postride");
  };
  const handleAddStation = () => {
    navigate("/admin/addstation");
  };
  const handleFindStation = () => {
    navigate("/viewallstation");
  };
  const handleTransitTerminal = () => {
    navigate("/transit/allroutes");
  };

  //returning the view
  return (
    <Box>
      <Navbar />
      <Box className="background-container">
        <Box width="55%" p="1rem 6%" textAlign="left">
          {/* <img
            src="/assets/GreenRouteLogo.png"
            alt="GreenRoute Logo"
            height="125px"
          /> */}
          <Typography variant="h2">
            Welcome,
          </Typography>
          <Typography variant="h1">
            {user.firstName} {user.lastName}!
          </Typography>
        </Box>
        <Box p="4rem"></Box>
        {/* // right column */}
        <Box flexDirection="column">
          <Box
            width={isNonMobileScreens ? "105%" : "105%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            {/* Top box */}
            <Box>
              <Typography fontWeight="700" textAlign="center" variant="h3" style={{ marginBottom: "1rem" }}>
                Carpooling
              </Typography>
            </Box>
            <Box className="side-by-side"></Box>
            <Box
              Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              style={{ height: "100%" }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{
                  margin: "0.5rem",
                  backgroundColor: "#C2E0D0",
                  height: "40px",
                  width: "150px",
                  fontWeight: "bold",
                }}
                onClick={handleGetRide}
              >
                Book Ride
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{
                  margin: "0.5rem",
                  backgroundColor: "#C2E0D0",
                  height: "40px",
                  width: "150px",
                  fontWeight: "bold",
                }}
                onClick={handlePostRide}
              >
                Post Ride
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
            width={isNonMobileScreens ? "105%" : "105%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
            <Box>
              <Typography fontWeight="700" textAlign="center" variant="h3" style={{ marginBottom: "1rem" }}>
                EV Station Finder
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                style={{ height: "100%" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "0.5rem",
                    backgroundColor: "#C2E0D0",
                    height: "40px",
                    width: "150px",
                    fontWeight: "bold",
                  }}
                  onClick={handleFindStation}
                >
                  Find Station
                </Button>
              </Box>
            </Box>
            {/* <Box>
                            <Typography fontWeight="700" textAlign="left" variant="h3" >
                                EV Station Finder
                            </Typography>
                            <Button variant="contained" color="primary" style={{ margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }} onClick={handleAddStation}>
                                Add Station
                            </Button>
                            <Button variant="contained" color="primary" style={{ margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }} onClick={handleFindStation}>
                                Find Station
                            </Button>
                        </Box> */}
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
            width={isNonMobileScreens ? "105%" : "105%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
            <Box>
              <Typography fontWeight="700" textAlign="center" variant="h3" style={{ marginBottom: "1rem" }}>
                Transit Scheduler
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                style={{ height: "100%" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "0.5rem",
                    backgroundColor: "#C2E0D0",
                    height: "40px",
                    width: "150px",
                    fontWeight: "bold",
                  }}
                  onClick={handleTransitTerminal}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
            {/* <Box>
                            <Typography fontWeight="700" textAlign="left" variant="h3" >
                                Transit Scheduler
                            </Typography>
                            <Button variant="contained" color="primary" style={{ margin: "0.5rem", backgroundColor: "#C2E0D0", height: "4ev", width: "15ev", fontWeight: "bold", }} onClick={handleTransitTerminal}>
                                Get Started
                            </Button>
                        </Box> */}
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
    </Box>
  );
};

export default DashboardPage;

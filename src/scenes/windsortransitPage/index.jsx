import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";

const WinsdorTransitPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  const handleRegister = (initialValues) => {
    // Insert logic to handle Register
    navigate("/login");
  };


  return (
    <Box className="background-container" >
      {/* flexDirection="column" > */}
      {/* <Box flexDirection="row"> */}
      <Navbar />

      <Box
        width="55%"
        p="1rem 6%"
        textAlign="center">
        <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
      </Box>


      <Box
        width={isNonMobileScreens ? "50%" : "80%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
          Welcome to GreenRoute!
        </Typography>
        <Typography fontWeight="400" variant="h4" sx={{ mb: "1rem" }}>
          Register Page
        </Typography>

        {/* // new content here */}
        {/* First Name input */}
        <TextField
          label="First Name"
          name="first name"
          type="fname"
          fullWidth
          required
          sx={{ mt: "1rem" }}
        />

        {/* Last Name input */}
        <TextField
          label="Last Name"
          name="Last name"
          type="lname"
          fullWidth
          required
          sx={{ mt: "1rem" }}
        />


        {/* Email input */}
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
          sx={{ mt: "1rem" }}
        />

        {/* Password input */}
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          required
          sx={{ mt: "1rem" }} // Adding top margin for spacing
        />

        {/* Confirm Password input */}
        <TextField
          label="Confirm Password"
          name="confirm password"
          type="password"
          fullWidth
          required
          sx={{ mt: "1rem" }} // Adding top margin for spacing
        />

        {/* Register Button */}
        <Button
          sx={{ mt: "1rem", height: "6ev", width: "10ev", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "15px" }}
          type="button"
          variant="contained"
          color="primary"
          size="medium"
          onClick={handleRegister}
        // sx={{ mt: "2rem" }} // Adding top margin for spacing
        >
          Register
        </Button>

        {/* Link to register page */}
        <Typography sx={{ mt: "1rem", textAlign: "center" }}>
          Already a user? <Link to="/login">Login here.</Link>
        </Typography>


      </Box>
      <Box p="2rem">

      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default WinsdorTransitPage;
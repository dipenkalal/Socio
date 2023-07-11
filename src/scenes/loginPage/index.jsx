import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Insert logic to handle login
        navigate("/welcome");
  };


  return (
    <Box className="background-container">
      <Box
        width="55%"
        p="1rem 6%"
        textAlign="center">
        <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
</Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
          Welcome to GreenRoute!
        </Typography>
        <Typography fontWeight="400" variant="h4" sx={{ mb: "1rem" }}>
          Login Page
        </Typography>
        
        {/* // new content here */}
        {/* Email input */}
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
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

        {/* Login Button */}
        <Button 
          type="button"
          variant="contained"
          color="primary"
          size="large" 
          onClick={handleLogin}
          sx={{ mt: "1rem", height: "6ev", width: "10ev",  backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "15px" }} >
          Login
        </Button>

        {/* Link to register page */}
        <Typography sx={{ mt: "1rem", textAlign: "center" }}>
          Not a user? <Link to="/register">Register here.</Link>
        </Typography>


      </Box>
      <Box p="2rem">
      </Box>
    </Box>
  );
};

export default LoginPage;
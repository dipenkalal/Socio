import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLogin } from "state";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const loginUser = async () => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: Email,
        password: Password,
      }),
    });
    const loggedIn = await loggedInResponse.json();
    if (loggedIn) {
      setShowSuccessDialog(true); // Show the dialog
      setTimeout(() => {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/dashboard");
      }, 2000); // Navigate after 2 seconds
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser();
    console.log(Email, Password);
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
        <Box sx={{ mt: "1rem", mb: "1rem", color: "#FF0000", fontWeight: "normal", fontSize: "15px" }}>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </Box>
        <Box>
          <form className="registration" onSubmit={handleSubmit}>
            {/* // new content here */}
            {/* Email input */}
            <TextField
              label="Email"
              name="Email"
              type="Email"
              fullWidth
              required
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />

            {/* Password input */}
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
              sx={{ mt: "1rem" }} // Adding top margin for spacing
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
            />

            {/* Login Button */}
            <Button
              type="button"
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
              sx={{ mt: "1rem", height: "6ev", width: "10ev", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "15px" }} >
              Login
            </Button>

            {/* Link to register page */}
            <Typography sx={{ mt: "1rem", textAlign: "center" }}>
              Not a user? <Link to="/register">Register here.</Link>
            </Typography>

          </form>
        </Box>
      </Box>
      <Box p="2rem">
      </Box>
      <Dialog open={showSuccessDialog}>
        <DialogTitle>Login Successful</DialogTitle>
        <DialogContent>
          <Typography className="success-animation">Redirecting to the dashboard...</Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default LoginPage;

import React from "react";
import { useState } from "react";
import { Box, Button, TextField, useMediaQuery, Typography, useTheme, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const RegisterForm = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Phone, setPhone] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [register, setRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  function registerUser() {
    fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          firstName: FirstName,
          lastName: LastName,
          mobile: Phone,
          email: Email,
          password: Password,
        }),
      }
    ).then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw new Error('Server response: ' + response.statusText);
      } 
      navigate("/login");
    // }).then((data) => {
    //   console.log(data);
    }).catch((error) => {
      setErrorMessage('Email or Phone Already exists!');  // Show error message on frontend
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    registerUser();
    console.log(FirstName, LastName, Phone, Email, Password)
  }


  return (
    <Box>
      <Box className="background-container">
        <Box width="55%" p="1rem 6%" textAlign="center">
          <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
        </Box>

        <Box width={isNonMobileScreens ? "50%" : "80%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
          <div className="register-form">
            <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
              Welcome to GreenRoute!
            </Typography>
            <Typography fontWeight="400" variant="h4" sx={{ mb: "1rem" }}>
              Register Page
            </Typography>


            <Box>
              <form className="registration" onSubmit={(e) => handleSubmit(e)}>
                {/* New error message display */}
                <Box  sx={{mt:"1rem", mb:"1rem",color: "#FF0000", fontWeight: "normal", fontSize: "15px"}}>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                </Box>
                

                <TextField
                  label="First Name"
                  name="FirstName"
                  type="FirstName"
                  fullWidth
                  required
                  sx={{ mt: "1rem" }}
                  onChange={(e) => setFirstName(e.target.value)}
                  value={FirstName}
                />

                {/* Last Name input */}
                <TextField
                  label="Last Name"
                  name="LastName"
                  type="LastName"
                  fullWidth
                  required
                  sx={{ mt: "1rem" }}
                  onChange={(e) => setLastName(e.target.value)}
                  value={LastName}
                />

                {/* Phone input */}
                <TextField
                  label="Phone"
                  name="Phone"
                  type="Phone"
                  fullWidth
                  required
                  sx={{ mt: "1rem" }}
                  onChange={(e) => setPhone(e.target.value)}
                  value={Phone}
                />

                {/* Email input */}
                <TextField
                  label="Email"
                  name="Email"
                  type="Email"
                  fullWidth
                  required
                  sx={{ mt: "1rem" }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                />


                {/* Password input */}
                <TextField
                  label="Password"
                  name="Password"
                  type="Password"
                  fullWidth
                  required
                  sx={{ mt: "1rem" }} // Adding top margin for spacing
                  onChange={(e) => setPassword(e.target.value)}
                  value={Password}
                />


                {/* Confirm Password input */}
                <TextField
                  label="Confirm Password"
                  name="confirmpassword"
                  type="password"
                  fullWidth
                  required
                  sx={{ mt: "1rem", mb: "1rem", }} // Adding top margin for spacing
                />


                <input
                  name="acceptTerms"
                  type="checkbox"
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  I have read and agree to the Terms
                </label>

                <div>
                  {/* Register Button */}
                  <Button
                    sx={{ mt: "1rem", height: "6ev", width: "10ev", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "15px" }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={(e) => handleSubmit(e)}
                  // sx={{ mt: "2rem" }} // Adding top margin for spacing
                  >
                    Register
                    {/* <Link to="/login">Register</Link> */}
                  </Button>
                  {/* display success message */}

                  {/* Link to register page */}
                  <Typography sx={{ mt: "1rem", textAlign: "center" }}>
                    Already a user? <Link to="/login">Login here.</Link>
                  </Typography>

                </div>

              </form>
            </Box>
          </div>
        </Box>
        <Box p="2rem"></Box>
      </Box>
    </Box>

  );
};
export default RegisterForm;



import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CarpoolingPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  const handleRegister = (initialValues) => {
    // Insert logic to handle Register
    navigate("/login");
  };


  return (
    <Box className="background-container" >
    </Box>
  );
};

export default CarpoolingPage;
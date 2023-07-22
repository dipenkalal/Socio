import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar3";

const WinsdorTransitPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  return (
    <Box>
      
      <Box className="background-container"  flexDirection="column-reverse">
      <Navbar />
        {/* flexDirection="column" > */}
        {/* <Box flexDirection="row"> */}
        <Box
          width="55%"
          p="1rem 6%"
          textAlign="center">
          <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
        </Box>
        <Box p="2rem">
        </Box>
      </Box>
    </Box>

  );
};

export default WinsdorTransitPage;
import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar";
//import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';



const PostRidePage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  const handlePostRide = () => {
    // Insert logic to handle login
    navigate("/viewrides");
  };


  return (
    <Box >
       <Navbar />
      <Box className="background-container" >
        <Box
          width="55%"
          p="1rem 6%"
          textAlign="center">
        </Box>


        <Box
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
            Post your ride share details here 😃
          </Typography>
          <Typography fontWeight="400" variant="h5" sx={{ mb: "1rem" }}>
            Please fill the details with maximum accuracy to help ride takers find your ride!
          </Typography>

          {/* // new content here */}
          <TextField
            label="Where To?"
            name="To?"
            type="text"
            fullWidth
            required
          />

          <TextField
            label="Where From?"
            name="From?"
            type="text"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
          />

          <TextField
            label="Car Type"
            name="cartype"
            type="text"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
          />

          <TextField
            label="Date?"
            name="date"
            type="date"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
          />

          <TextField
            label="Time"
            name="time"
            type="time"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
          />

          <TextField
            // InputProps={{
            // startAdornment: (
            // <InputAdornment position="start">
            // <DraftsOutlinedIcon />
            // </InputAdornment>
            // ),
            // }}
            label="Price"
            name="price"
            type="integer"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
          />

          <TextField
            label="Number of seats"
            name="seatcount"
            type="integer"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
          />

          <TextField
            label="Ride Description"
            name="desc"
            type="text"
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
            onClick={handlePostRide}
            sx={{ mt: "1rem", height: "6ev", width: "10ev", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "15px" }} >
            Post Ride
          </Button>

          {/* Link to register page */}
          <Typography sx={{ mt: "1rem", textAlign: "center" }}>
            Not a Rider? <Link to="/getride">Search rides here.</Link>
          </Typography>


        </Box>
        <Box p="2rem">
        </Box>
      </Box>



    </Box>
  );
};

export default PostRidePage;
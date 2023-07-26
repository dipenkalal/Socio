import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"; 
import Navbar from "components/NavBar";
import { useState } from "react";
//import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';



const PostRidePage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const userid = useSelector((state) => state._id);
  const [From, setCityFrom] = useState('')
  const [To, setCityTo] = useState('')
  const [Date, setDate] = useState('')
  const [Time, setTime] = useState('')
  const [Price, setPrice] = useState('')
  const [Seat, setSeat] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);
  const error = [];

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  function postRide() {
    fetch(
      "http://localhost:3001/rides/rider/postRide",
      {
        method: "POST",
        headers: { 
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`},
        body: JSON.stringify({
          from: From,
          to: To,
          date: Date,
          time: Time,
          price: Price,
          seat: Seat,
        }),
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Server response: ' + response.statusText);
      }
      else {
        alert("Your Ride has been posted successfully!");
      }
    }).catch((error) => {
      setErrorMessage(error);  // Show error message on frontend
    });
  }


  const handlePostRide = (e) => {
    e.preventDefault()
    postRide();
    console.log(From, To, Date, Time, Price, Seat)
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
          <Autocomplete
            options={citynames}
            getOptionLabel={(option) => option.title || 'No title'}
            fullWidth
            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
            value={From}
            onChange={(e, newValue) => {
              setCityFrom(newValue || '');
            }}
            renderInput={(params) => <TextField {...params} label="Where From?" />}
          />
          <Autocomplete
            options={citynames}
            getOptionLabel={(option) => option.title || 'No title'}
            fullWidth
            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
            value={To}
            onChange={(e, newValue) => {
              setCityTo(newValue || '');
            }}
            renderInput={(params) => <TextField {...params} label="Where To?" />}
          />

          <TextField
            label="Date"
            name="Date"
            type="Date"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
            onChange={(e) => setDate(e.target.value)}
            value={Date}
          />

          <TextField
            label="Time"
            name="time"
            type="time"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
            onChange={(e) => setTime(e.target.value)}
            value={Time}
          />

          <TextField
            label="Price"
            name="price"
            type="integer"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
            onChange={(e) => setPrice(e.target.value)}
            value={Price}
          />

          <TextField
            label="Number of seats"
            name="seatcount"
            type="integer"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
            onChange={(e) => setSeat(e.target.value)}
            value={Seat}
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
            Not a Rider? <Link to="/passenger/searchride">Search rides here.</Link>
          </Typography>


        </Box>
        <Box p="2rem">
        </Box>
      </Box>



    </Box>
  );
};


const citynames = [
  { title: '' },
  { title: 'Barrie' },
  { title: 'Belleville' },
  { title: 'Brampton' },
  { title: 'Brant' },
  { title: 'Brantford' },
  { title: 'Brockville' },
  { title: 'Burlington' },
  { title: 'Cambridge' },
  { title: 'Cambridge' },
  { title: 'Cornwall' },
  { title: 'Dryden' },
  { title: 'Elliot Lake' },
  { title: 'Greater Sudbury' },
  { title: 'Guelph' },
  { title: 'Haldimand County' },
  { title: 'Hamilton' },
  { title: 'Kawartha Lakes' },
  { title: 'Kenora' },
  { title: 'Kingston' },
  { title: 'Kitchene' },
  { title: 'London' },
  { title: 'Markham' },
  { title: 'Mississauga' },
  { title: 'Niagara' },
  { title: 'Norfolk' },
  { title: 'NorthBay' },
  { title: 'Orillia' },
  { title: 'Oshawa' },
  { title: 'Ottawa' },
  { title: 'Owen Sound' },
  { title: 'Pembroke' },
  { title: 'Peterborough' },
  { title: 'Pickering' },
  { title: 'Port Colborne' },
  { title: 'Prince Edward' },
  { title: 'Quinte West' },
  { title: 'Richmond Hill' },
  { title: 'Sarnia' },
  { title: 'Sault Ste. Marie' },
  { title: 'St. Catharines' },
  { title: 'St. Thomas' },
  { title: 'Stratford' },
  { title: 'Temiskaming Shores' },
  { title: 'Thorold' },
  { title: 'Thunder Bay' },
  { title: 'Timmins' },
  { title: 'Toronto' },
  { title: 'Vaughan' },
  { title: 'Waterloo' },
  { title: 'Waterloo' },
  { title: 'Windsor' },
  { title: 'Woodstock' },


];

export default PostRidePage;
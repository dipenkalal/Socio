import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Autocomplete, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
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
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          from: From,
          to: To,
          date: Date,
          time: Time,
          riderID: user._id,
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
        clearFields();
      }
    }).catch((error) => {
      setErrorMessage(error);  // Show error message on frontend
    });
  }
  const clearFields = () => {
    setCityFrom('');
    setCityTo('');
    setDate('');
    setTime('');
    setPrice('');
    setSeat('');
  };



  const handlePostRide = (e) => {
    e.preventDefault()
    postRide();
    console.log(user._id, From, To, Date, Time, Price, Seat)
  };


  return (
    <Box >
      <Navbar />
      <Box className="background-container" >
        <Box
          width="50%"
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


          <FormControl fullWidth sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}>
            <InputLabel htmlFor="from-city">Where From?</InputLabel>
            <Select
              label="Where From?"
              value={From}
              onChange={(e) => setCityFrom(e.target.value)}
              id="from-city"
            >
              {citynames.map((city, index) => (
                <MenuItem key={index} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}>
            <InputLabel htmlFor="to-city">Where To?</InputLabel>
            <Select
              label="Where To?"
              value={To}
              onChange={(e) => setCityTo(e.target.value)}
              id="to-city"
            >
              {citynames.map((city, index) => (
                <MenuItem key={index} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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

          <Typography sx={{ mt: "1rem", textAlign: "center" }}>
            Want to see your rides? <Link to="/rider/viewpostedride">View Posted Rides.</Link>
          </Typography>
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


const citynames = [
  'Barrie',
  'Belleville',
  'Brampton',
  'Brant',
  'Brantford',
  'Brockville',
  'Burlington',
  'Cambridge',
  'Cornwall',
  'Dryden',
  'Elliot Lake',
  'Greater Sudbury',
  'Guelph',
  'Haldimand County',
  'Hamilton',
  'Kawartha Lakes',
  'Kenora',
  'Kingston',
  'Kitchener',
  'London',
  'Markham',
  'Mississauga',
  'Niagara',
  'Norfolk',
  'NorthBay',
  'Orillia',
  'Oshawa',
  'Ottawa',
  'Owen Sound',
  'Pembroke',
  'Peterborough',
  'Pickering',
  'Port Colborne',
  'Prince Edward',
  'Quinte West',
  'Richmond Hill',
  'Sarnia',
  'Sault Ste. Marie',
  'St. Catharines',
  'St. Thomas',
  'Stratford',
  'Temiskaming Shores',
  'Thorold',
  'Thunder Bay',
  'Timmins',
  'Toronto',
  'Vaughan',
  'Waterloo',
  'Windsor',
  'Woodstock',
];

export default PostRidePage;
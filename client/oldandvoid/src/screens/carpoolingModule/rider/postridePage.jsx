import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Navbar from "components/NavBar";
import { useState } from "react";

const PostRidePage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const userid = useSelector((state) => state._id);
  const [from, setCityFrom] = useState('')
  const [to, setCityTo] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [price, setPrice] = useState('')
  const [seat, setSeat] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);
  const error = [];

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  async function postRide() {
    try {
      const response = await fetch(
        "http://localhost:3001/rides/rider/postRide",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            From: from.title,
            To: to.title,
            Date: date,
            Time: time,
            userid: userid,
            Price: price,
            Seat: seat,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Server response: ' + response.statusText);
      } else {
        alert("Your Ride has been posted successfully!");
      }

    } catch (error) {
      setErrorMessage(error);  // Show error message on frontend
    }
  }


  const handleCityChange = (e, cityType) => {
    if (cityType === "from") {
      setCityFrom(e.target.value);
    } else if (cityType === "to") {
      setCityTo(e.target.value);
    }
  }


  const handlePostRide = (e) => {
    e.preventDefault()
    postRide();
    console.log(from, to, date, time, userid, price, seat)
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

          <TextField
            select
            fullWidth
            label="From City"
            value={from}
            onChange={(event) => handleCityChange(event, "from")}
            variant="outlined"
            SelectProps={{
              native: true,
            }}
            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
          >
            {citynames.map((option, index) => (
              <option key={index} value={option.title}>
                {option.title}
              </option>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="To City"
            value={to}
            onChange={(event) => handleCityChange(event, "to")}
            variant="outlined"
            SelectProps={{
              native: true,
            }}
            sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }}
          >
            {citynames.map((option, index) => (
              <option key={index} value={option.title}>
                {option.title}
              </option>
            ))}
          </TextField>

          <TextField
            label="Date"
            name="Date"
            type="Date"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />

          <TextField
            label="Time"
            name="time"
            type="time"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />

          <TextField
            label="Price"
            name="price"
            type="integer"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />

          <TextField
            label="Number of seats"
            name="seatcount"
            type="integer"
            fullWidth
            required
            sx={{ mt: "1rem" }} // Adding top margin for spacing
            onChange={(e) => setSeat(e.target.value)}
            value={seat}
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



    </Box >
  );
};


const citynames = [
  { title: '', id: 0 },
  { title: 'Barrie', id: 1 },
  { title: 'Belleville', id: 2 },
  { title: 'Brampton', id: 3 },
  { title: 'Brant', id: 4 },
  { title: 'Brantford', id: 5 },
  { title: 'Brockville', id: 6 },
  { title: 'Burlington', id: 7 },
  { title: 'Cambridge', id: 8 },
  { title: 'Cambridge', id: 9 },
  { title: 'Cornwall', id: 10 },
  { title: 'Dryden', id: 11 },
  { title: 'Elliot Lake', id: 12 },
  { title: 'Greater Sudbury', id: 13 },
  { title: 'Guelph', id: 14 },
  { title: 'Haldimand County', id: 15 },
  { title: 'Hamilton', id: 16 },
  { title: 'Kawartha Lakes', id: 17 },
  { title: 'Kenora', id: 18 },
  { title: 'Kingston', id: 19 },
  { title: 'Kitchene', id: 20 },
  { title: 'London', id: 21 },
  { title: 'Markham', id: 22 },
  { title: 'Mississauga', id: 23 },
  { title: 'Niagara', id: 24 },
  { title: 'Norfolk', id: 25 },
  { title: 'NorthBay', id: 26 },
  { title: 'Orillia', id: 27 },
  { title: 'Oshawa', id: 28 },
  { title: 'Ottawa', id: 29 },
  { title: 'Owen Sound', id: 30 },
  { title: 'Pembroke', id: 31 },
  { title: 'Peterborough', id: 32 },
  { title: 'Pickering', id: 33 },
  { title: 'Port Colborne', id: 34 },
  { title: 'Prince Edward', id: 35 },
  { title: 'Quinte West', id: 36 },
  { title: 'Richmond Hill', id: 37 },
  { title: 'Sarnia', id: 38 },
  { title: 'Sault Ste. Marie', id: 39 },
  { title: 'St. Catharines', id: 40 },
  { title: 'St. Thomas', id: 41 },
  { title: 'Stratford', id: 42 },
  { title: 'Temiskaming Shores', id: 43 },
  { title: 'Thorold', id: 44 },
  { title: 'Thunder Bay', id: 45 },
  { title: 'Timmins', id: 46 },
  { title: 'Toronto', id: 47 },
  { title: 'Vaughan', id: 48 },
  { title: 'Waterloo', id: 49 },
  { title: 'Waterloo', id: 50 },
  { title: 'Windsor', id: 51 },
  { title: 'Woodstock', id: 52 },
];

export default PostRidePage;
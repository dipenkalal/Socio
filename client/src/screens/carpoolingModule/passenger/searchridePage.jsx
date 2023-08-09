import { Navigate, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Autocomplete, Select, MenuItem, FormControl, InputLabel, Card, CardContent, CardActions, Grid } from "@mui/material";
import { useState } from "react";
import Navbar from "components/NavBar";
import * as React from 'react';
import { useSelector } from 'react-redux';

const SearchRidePage = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const userid = useSelector((state) => state._id);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();


  const [From, setCityFrom] = useState('');
  const [To, setCityTo] = useState('');
  const [Date, setDate] = useState('');
  const [rides, setRides] = useState([]);
  const searchRide = () => {
    fetch("http://localhost:3001/rides/getRides", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userID: user._id,
        from: From,
        to: To,
        date: Date,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setRides(data.data);
        console.log(data.data); // Accessing the "data" property of the response
      })
      .catch(error => {
        console.error("Error fetching rides:", error);
      });
  };

  const bookRide = (rideID) => {
    console.log("Booking ride with ID:", rideID); // Log the ride ID
    fetch(
      "http://localhost:3001/rides/bookRides",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userid: user._id,
          rideID: rideID,
        }),
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Server response: ' + response.statusText);
      }
      else {
        alert("Your Ride is booked successfully!");
        console.log(user._id,rideID)
        navigate('/passenger/viewbookedride');
      }
    }).catch((error) => {
      setErrorMessage(error);  // Show error message on frontend
    });
  };

  return (
    <Box>
      <Navbar />
      <Box className="background-container" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }} />
        <Box
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
            Search for a ride 😃
          </Typography>

          <FormControl fullWidth sx={{ mt: "1rem", mb: "1.0rem" }}>
            <InputLabel htmlFor="from-city">Where From?</InputLabel>
            <Select sx={{ mt: "1rem", mb: "1.0rem" }}
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

          <FormControl fullWidth sx={{ mt: "1rem", mb: "1.0rem" }}>
            <InputLabel htmlFor="to-city">Where To?</InputLabel>
            <Select sx={{ mt: "1rem", mb: "1.0rem" }}
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
            type="Date"
            fullWidth
            required
            sx={{ mt: "1rem" }}
            onChange={(e) => setDate(e.target.value)}
            value={Date}
          />

          <Button
            type="button"
            variant="contained"
            color="primary"
            size="large"
            onClick={searchRide}
            sx={{ mt: "1rem" }}
          >
            Search Ride
          </Button>
        </Box>
        <Box sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }} />
        <Box
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>Search Results:</Typography>
          {rides.map((ride, index) => (
            <Card key={index} sx={{ mt: 2, boxShadow: 3, borderRadius: 2, backgroundColor: 'grey.100' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>From: {ride.from}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>To: {ride.to}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Date: {ride.date}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Time: {ride.time}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Price: {ride.price}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Seats Available: {ride.seat}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  onClick={() => bookRide(ride._id)}
                  sx={{
                    ml: "1rem",
                    mb: "1rem",
                    fontWeight: 'medium',
                    '&:focus': {
                      fontWeight: 'bold',
                      backgroundColor: 'secondary.main',
                    },
                  }}
                >
                  Book
                </Button>
              </CardActions>
            </Card>
          ))}

        </Box>
        <Box sx={{ mt: "1rem", mb: "1.0rem", mr: "1.0rem" }} />
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

export default SearchRidePage;

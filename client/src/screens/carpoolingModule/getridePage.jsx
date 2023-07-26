import { Box, Typography, useTheme, useMediaQuery, Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar";
import * as React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { useSelector } from 'react-redux';



function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}


const GetRidePage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
  const userid = useSelector((state) => state._id);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState(null);


  const handleGetRide = async () => {
    // const userId = userid; // Replace this with actual user id
    const payload = {
      from: fromCity,
      to: toCity,
      date: date.format('YYYY-MM-DD') // Assuming 'date' is in dayjs format
    };

    try {
      const response = await axios.post('http://localhost:3001/rides/getRides', payload);
      if (response.status === 200) {
        console.log(response.data);
        navigate("/getride");  // Assuming you want to navigate after successful API call
      }
    } catch (error) {
      console.error('Error during API call', error);
    }
  };
  const handleCityChange = (event, cityType) => {
    if (cityType === "from") {
      setFromCity(event.target.value);
    } else if (cityType === "to") {
      setToCity(event.target.value);
    }
  }


  return (
    <Box >
      <Navbar />
      <Box className="background-container" sx={{ flexGrow: 1 }} >
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
            Get list of available rides
          </Typography>
          <Box>
            <Box>
              <TextField
                select
                fullWidth
                label="From City"
                value={fromCity}
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
                value={toCity}
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
            </Box>
          </Box>
          <Box sx={{ mt: "1.0rem", mb: "0.7rem" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer
                components={[
                  'DatePicker',
                  'MobileDatePicker',
                  'DesktopDatePicker',
                  'StaticDatePicker',
                ]}
              >
                <DemoItem label="Select Ride Date">
                  <DatePicker defaultValue={dayjs('2023-07-01')} onChange={(newValue) => { setDate(newValue); }} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>

          </Box>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <item>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleGetRide}
                  sx={{ mt: "1.5rem", height: "6ev", width: "10ev", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "15px" }} >
                  Search Ride
                </Button>
              </item>
            </Grid>
          </Grid>

        </Box>


        <Box p="2rem">
        </Box>
      </Box>
    </Box>
  );
};

//dataset here 
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

export default GetRidePage;
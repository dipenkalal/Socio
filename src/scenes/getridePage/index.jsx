import { Box, Typography, useTheme, useMediaQuery, Grid, TextField, Autocomplete, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}


const GetRidePage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  const handleGetRide = () => {
    // Insert logic to handle login
    navigate("/viewrides");
  };

  const [openFrom, setOpenFrom] = React.useState(false);
  const [optionsFrom, setOptionsFrom] = React.useState([]);
  const loadingFrom = openFrom && optionsFrom.length === 0;

  const [openTo, setOpenTo] = React.useState(false);
  const [optionsTo, setOptionsTo] = React.useState([]);
  const loadingTo = openTo && optionsTo.length === 0;

  React.useEffect(() => {
    let active = true;
    if (!loadingFrom) {
      return undefined;
    }
    
    (async () => {
      await sleep(1e3); // For demo purposes.
    
      if (active) {
        setOptionsFrom([...citynames]);
      }
    })();
    
    return () => {
      active = false;
    };
  }, [loadingFrom]);

  React.useEffect(() => {
    if (!openFrom) {
      setOptionsFrom([]);
    }
  }, [openFrom]);

  React.useEffect(() => {
    let active = true;
    if (!loadingTo) {
      return undefined;
    }
    
    (async () => {
      await sleep(1e3); // For demo purposes.
    
      if (active) {
        setOptionsTo([...citynames]);
      }
    })();
    
    return () => {
      active = false;
    };
  }, [loadingTo]);

  React.useEffect(() => {
    if (!openTo) {
      setOptionsTo([]);
    }
  }, [openTo]);



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
              <Typography fontWeight="500" variant="h6" sx={{ mt: "1.0rem", mb: "0.7rem" }}>
                From:
              </Typography>
              <Autocomplete
                id="fromcitynames"
                open={openFrom}
                onOpen={() => {
                  setOpenFrom(true);
                }}
                onClose={() => {
                  setOpenFrom(false);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.title}
                options={optionsFrom}
                loading={loadingFrom}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select City"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loadingFrom ? <CircularProgress color="inherit" size={20} /> : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </Box>
            <Box>
              <Typography fontWeight="500" variant="h6" sx={{ mt: "1.0rem", mb: "0.7rem" }}>
                To:
              </Typography>
              <Autocomplete
                id="tocitynames"
                open={openTo}
                onOpen={() => {
                  setOpenTo(true);
                }}
                onClose={() => {
                  setOpenTo(false);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.title}
                options={optionsTo}
                loading={loadingTo}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select City"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loadingTo ? <CircularProgress color="inherit" size={20} /> : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
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
                  <DatePicker defaultValue={dayjs('2022-04-17')} />
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
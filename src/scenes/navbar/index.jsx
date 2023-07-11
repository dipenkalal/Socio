import { useState } from "react";
import {
  IconButton,
  Typography,
  useTheme,
  Box,
  Menu, 
  MenuItem,
  
//   useMediaQuery,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { useNavigate,  BrowserRouter as Router, Route, Link } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WinsdorTransitPage from "scenes/windsortransitPage";


const Navbar = () => {
    const windsorTransit = () => {
        // Insert logic to handle login
            navigate("/windsortransit");
      };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const dark = theme.palette.neutral.dark;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const [carpoolingAnchorEl, setCarpoolingAnchorEl] = useState(null);
    const [evStationAnchorEl, setEVStationAnchorEl] = useState(null);
  
    const handleCarpoolingClick = (event) => {
      setCarpoolingAnchorEl(event.currentTarget);
    };
  
    const handleCarpoolingClose = () => {
      setCarpoolingAnchorEl(null);
    };
  
    const handleEVStationClick = (event) => {
      setEVStationAnchorEl(event.currentTarget);
    };
  
    const handleEVStationClose = () => {
      setEVStationAnchorEl(null);
    };
  

    return(
        <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.75rem">
          <Box
            width="5%"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
            textAlign="left"
            onClick={() => navigate("/home")}
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              }}}>
            <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="60ev" />
            </Box>
        </FlexBetween>

        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          {/* <IconButton>
          <Typography fontWeight="500" variant="h6" >
          Carpooling
          <nav>
            <ul>
                <li>
                    <Link to="/carpooling">Book Ride</Link>
                </li>
                <li>
                    <Link to="/evstation">Post Ride</Link>
                </li>
                <li>
                    <Link to="/windsortransit">View Rides</Link>
                </li>
            </ul>
            </nav>
          </Typography>
          </IconButton>
          <IconButton>
          <Typography fontWeight="500" variant="h6" >
          EV Station
          <nav>
            <ul>
                <li>
                    <Link to="/carpooling">Add Station</Link>
                </li>
                <li>
                    <Link to="/evstation">Find Station</Link>
                </li>
            </ul>
            </nav>
        </Typography>
          </IconButton>
          <IconButton>
          <Typography fontWeight="500" variant="h6" >
          Windsor Transit
        </Typography>
          </IconButton>
         */}


          <div>
        <Button onClick={handleCarpoolingClick} sx={{ height: "6ev", width: "10ev", }}>
          <Typography fontWeight="500" variant="h6">
            Carpooling
          </Typography>
        </Button>
        <Menu
          id="carpooling-menu"
          anchorEl={carpoolingAnchorEl}
        //   keepMounted
          open={Boolean(carpoolingAnchorEl)}
          onClose={handleCarpoolingClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem onClick={handleCarpoolingClose}>
            <Link to="/bookride">Book Ride</Link>
          </MenuItem>
          <MenuItem onClick={handleCarpoolingClose}>
            <Link to="/postride">Post Ride</Link>
          </MenuItem>
          <MenuItem onClick={handleCarpoolingClose}>
            <Link to="/viewrides">View Rides</Link>
          </MenuItem>
        </Menu>
      </div>
{/* <div>
  <Button 
    onClick={handleCarpoolingClick}
    endIcon={<KeyboardArrowDownIcon />}
  >
    <Typography fontWeight="500" variant="h6">
      Carpooling
    </Typography>
  </Button>
  <Menu
    id="carpooling-menu"
    anchorEl={carpoolingAnchorEl}
    open={Boolean(carpoolingAnchorEl)}
    onClose={handleCarpoolingClose}
  >
    <MenuItem onClick={handleCarpoolingClose}>
      <Link to="/bookride">Book Ride</Link>
    </MenuItem>
    <MenuItem onClick={handleCarpoolingClose}>
      <Link to="/postride">Post Ride</Link>
    </MenuItem>
    <MenuItem onClick={handleCarpoolingClose}>
      <Link to="/viewrides">View Rides</Link>
    </MenuItem>
  </Menu>
</div> */}

      <div>
        <Button onClick={handleEVStationClick} sx={{ height: "6ev", width: "10ev",  }}>
          <Typography fontWeight="500" variant="h6">
            EV Station
          </Typography>
        </Button>
        <Menu
          id="ev-station-menu"
          anchorEl={evStationAnchorEl}
          keepMounted
          open={Boolean(evStationAnchorEl)}
          onClose={handleEVStationClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem onClick={handleEVStationClose}>
            <Link to="/addstation">Add Station</Link>
          </MenuItem>
          <MenuItem onClick={handleEVStationClose}>
            <Link to="/findstation">Find Station</Link>
          </MenuItem>
        </Menu>
      </div>

      <Button sx={{ height: "6ev", width: "10ev", }} onClick={windsorTransit}>
        <Typography fontWeight="500" variant="h6">
            Windsor Transit
        </Typography>
      </Button>
          </FlexBetween>
      </FlexBetween>
    );
}
export default Navbar;
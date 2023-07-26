import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const WinsdorTransitPage = () => {
  const [routes, setRoutes] = useState([]);
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const userid = useSelector((state) => state._id);

  const url = new URL('https://external.transitapp.com/v3/public/routes_for_network');
  const params = {
    network_id: 'Transit Windsor|Windsor',
    lat: '42.3174436',
    lon: '-83.038707'
  };
  url.search = new URLSearchParams(params).toString();

  useEffect(() => {
    fetch(url, {
      headers: {
        'apikey': 'xxxx',  //replace api key here
      }
    })
      .then(response => response.json())
      .then(data => setRoutes(data.routes))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Box>
      <Navbar />
      <Box className="background-container" flexDirection="column">

        <Box
          width="55%"
          p="1rem 6%"
          textAlign="center">
          <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
        </Box>
        <div>
          <h1>Routes</h1>
          {routes.map(route => (
            <div key={route.global_route_id}>
              <h2>{route.route_long_name || route.route_short_name}</h2>
              <p>{route.mode_name}</p>
              <p>Global Route ID: {route.global_route_id}</p>
            </div>
          ))}
        </div>
        <Box p="2rem">
        </Box>
      </Box>
    </Box>

  );
};

export default WinsdorTransitPage;
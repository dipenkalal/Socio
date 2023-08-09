import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Card, CardContent, CardActions, Button } from "@mui/material";
import Navbar from "components/NavBar";

const ViewBookedRidesPage = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [bookedRides, setBookedRides] = useState([]);

  useEffect(() => {
    fetchBookedRides();
  }, [token]);

  const fetchBookedRides = () => {
    console.log("Fetching booked rides for user ID:", user._id); // Log user ID
    fetch(`http://localhost:3001/rides/getMyBookedRides/${user._id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log("Server response:", data); // Log entire server response
        setBookedRides(data.rides);
        console.log("Booked rides:", data.rides); // Log booked rides
      })
      .catch(error => {
        console.error("Error fetching Booked rides:", error);
      });
  };
  
  const cancelRide = (rideId) => {
    fetch(`http://localhost:3001/rides/cancelRides`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: user._id,
        rideID: rideId
      }),
    })
      .then(response => response.json())
      .then(() => {
        console.log("Canceling ride with ID:", rideId);
        console.log("User ID:", user._id)
        fetchBookedRides(); // Refresh the booked rides after cancellation
      })
      .catch(error => {
        console.error("Error canceling ride:", error);
      });
  };

  return (
    <Box>
      <Navbar />
      <Box p="2rem" m="2rem auto" borderRadius="1.5rem">
        <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
          Your Booked Rides 🚗
        </Typography>
        {bookedRides.length === 0 ? (
          <Typography variant="h6">No Booked rides found.</Typography>
        ) : (
          bookedRides.map((ride, index) => (
            <Card key={index} sx={{ mt: 2, backgroundColor: '#f5f5f5' }}>
              {/* Display ride details here */}
              <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Ride id: {ride._id}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>From: {ride.from}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>To: {ride.to}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Date: {ride.date}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Time: {ride.time}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Price: $ {ride.price}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Seats: {ride.seat}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  onClick={() => cancelRide(ride._id)}
                  sx={{
                    ml: "1rem",
                    mb: "1rem",
                    fontWeight: 'medium',
                    '&:focus': {
                      fontWeight: 'bold',
                      backgroundColor: 'primary',
                    },
                  }}
                >Cancel Ride</Button>
              </CardActions>
            </Card>
          ))
        )}
      </Box>
    </Box>
  );
};

export default ViewBookedRidesPage;

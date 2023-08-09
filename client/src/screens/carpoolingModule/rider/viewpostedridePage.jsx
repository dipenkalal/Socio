import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Card, CardContent, CardActions, Button } from "@mui/material";
import Navbar from "components/NavBar";
import { Link } from "react-router-dom";

const ViewPostedRidesPage = () => {
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const userid = useSelector((state) => state.user._id);
    const [postedRides, setPostedRides] = useState([]);

    useEffect(() => {
        fetchPostededRides();
    }, [token]);

    const fetchPostededRides = () => {
        const userID = userid; // Assuming the user ID is stored in the user object
        fetch(`http://localhost:3001/rides/rider/getMyPostedRides/${user._id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                setPostedRides(data.rides);
                console.log(data.rides)
            })
            .catch(error => {
                console.error("Error fetching Posted rides:", error);
            });
    };

    const deleteRide = (rideId) => {
        fetch(`http://localhost:3001/rides/rider/deleteRide/${rideId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(() => {
                fetchPostededRides(); // Refresh the booked rides after deletion
            })
            .catch(error => {
                console.log(rideId);
                console.error("Error deleting ride:", error);
                console.error("Response:", error.response);
            });
    };

    return (
        <Box>
            <Navbar />
            <Box p="2rem" m="2rem auto" borderRadius="1.5rem">
                <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
                    Your Posted Rides 🚗
                </Typography>
                {postedRides.length === 0 ? (
                    <Typography variant="h6">No Posted rides found.</Typography>
                ) : (
                    postedRides.map((ride, index) => (
                        <Card key={index} sx={{ mt: 2, backgroundColor: '#f5f5f5' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Ride id: {ride._id}</Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>From: {ride.from}</Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>To: {ride.to}</Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Date: {ride.date}</Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Time: {ride.time}</Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Price: $ {ride.price}</Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Seats: {ride.seat}</Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'text.secondary', mb: 1 }} gutterBottom>Posted at: {ride.createdAt}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="medium"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => deleteRide(ride._id)}
                                    sx={{
                                        ml: "1rem",
                                        mb: "1rem",
                                        fontWeight: 'medium',
                                        '&:focus': {
                                            fontWeight: 'bold',
                                            backgroundColor: 'primary',
                                        },
                                    }}
                                >Delete Ride</Button>
                            </CardActions>
                        </Card>
                    ))
                )}           <Typography sx={{ mt: "1rem", textAlign: "center" }}>
                    Want to Post a Ride? <Link to="/rider/viewpostedride">Post Ride here.</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default ViewPostedRidesPage;

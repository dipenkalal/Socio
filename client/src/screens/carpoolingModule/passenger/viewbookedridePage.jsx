import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar";
import { Box, Typography, Card, CardContent } from "@mui/material";
import React, { useState } from 'react';

// Define the Card component
const TicketCard = ({ data }) => {
    return (
      <Card sx={{ minWidth: 275, m: 2, p: 2, backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ color: '#3f51b5' }}>{data.passenger}</Typography>
          <Typography variant="body2" sx={{ color: '#607d8b' }}>From: {data.from}</Typography>
          <Typography variant="body2" sx={{ color: '#607d8b' }}>To: {data.to}</Typography>
          <Typography variant="body2" sx={{ color: '#607d8b' }}>Date: {data.date}</Typography>
          <Typography variant="body2" sx={{ color: '#607d8b' }}>Time: {data.time}</Typography>
          <Typography variant="body2" sx={{ color: '#607d8b' }}>Price: {data.price}</Typography>
          <Typography variant="body2" sx={{ color: '#607d8b' }}>Seat: {data.seat}</Typography>
        </CardContent>
      </Card>
    );
};

// Main component
const App = () => {
    const [data, setData] = useState([
      { passenger: "John Doe", from: "New York", to: "Boston", date: "2023-07-30", time: "14:30", price: "$200", seat: "A1" },
      { passenger: "Jane Smith", from: "Los Angeles", to: "San Francisco", date: "2023-08-05", time: "10:00", price: "$150", seat: "B2" }
      // Add more data as needed
    ]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {data.map((item, index) => (
        <TicketCard key={index} data={item} />
      ))}
    </Box>
  );
};

export default App;

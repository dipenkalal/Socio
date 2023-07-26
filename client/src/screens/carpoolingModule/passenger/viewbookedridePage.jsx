import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar";
import { Box, Typography, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from 'react';

// Define the Card component
const TicketCard = ({ data }) => {
    return (
      <Card sx={{ minWidth: 275, marginTop: 2 }}>
        <CardContent>
          <Typography variant="h5">{data.passenger}</Typography>
          <Typography variant="body2">From: {data.from}</Typography>
          <Typography variant="body2">To: {data.to}</Typography>
          <Typography variant="body2">Date: {data.date}</Typography>
          <Typography variant="body2">Time: {data.time}</Typography>
          <Typography variant="body2">Price: {data.price}</Typography>
          <Typography variant="body2">Seat: {data.seat}</Typography>
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

  // Fetch data from the API
//   useEffect(() => {
//     fetch('https://your-api-url')
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }}}>
    {data.map((item, index) => (
      <TicketCard key={index} data={item} />
    ))}
  </Box>
    // <div>
    //   {data.map((item, index) => (
    //     <Card key={index} data={item} />
    //   ))}
    // </div>
  );
};

export default App;

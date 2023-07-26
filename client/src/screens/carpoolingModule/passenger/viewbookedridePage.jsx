import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import React, { useState } from 'react';

// Define the Card component
const TicketCard = ({ data }) => {
    return (
          <Card sx={{ minWidth: '20%', m: 5, p: 3, backgroundColor: '#f5f5f5' }}>
         {/* </Card> <Card sx={{ flex: '0 0 calc(33.33% - 16px)', m: 1, p: 2, backgroundColor: '#f5f5f5' }}> */}
        <CardContent>
          {/* <Typography variant="h5" component="div" sx={{ color: '#3f51b5' }}>{data.passenger}</Typography> */}
          <Typography variant="body2" sx={{ color: '#000000', fontSize: '20px' }}>From: {data.from}</Typography>
          <Typography variant="body2" sx={{ color: '#000000', fontSize: '20px' }}>To: {data.to}</Typography>
          <Typography variant="body2" sx={{ color: '#000000', fontSize: '20px' }}>Date: {data.date}</Typography>
          <Typography variant="body2" sx={{ color: '#000000', fontSize: '20px' }}>Time: {data.time}</Typography>
          <Typography variant="body2" sx={{ color: '#000000', fontSize: '20px' }}>Price: {data.price}</Typography>
          {/* <Typography variant="body2" sx={{ color: '#607d8b' }}>Seat: {data.seat}</Typography> */}
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
            Cancel
          </Button>
        </CardContent>
      </Card>
     
      
    );
};

// Main component
const App = () => {
    const [data, setData] = useState([
      { passenger: "John Doe", from: "Toronto", to: "Windsor", date: "2023-07-30", time: "14:30", price: "$200", seat: "A1" },
      { passenger: "Jane Smith", from: "Windsor", to: "London", date: "2023-08-05", time: "10:00", price: "$150", seat: "B2" },
      { passenger: "John Doe", from: "Toronto", to: "Windsor", date: "2023-07-30", time: "14:30", price: "$200", seat: "A1" },
      { passenger: "Jane Smith", from: "Windsor", to: "London", date: "2023-08-05", time: "10:00", price: "$150", seat: "B2" },
      { passenger: "John Doe", from: "Toronto", to: "Windsor", date: "2023-07-30", time: "14:30", price: "$200", seat: "A1" },
      { passenger: "Jane Smith", from: "Windsor", to: "London", date: "2023-08-05", time: "10:00", price: "$150", seat: "B2" },
      { passenger: "John Doe", from: "Toronto", to: "Windsor", date: "2023-07-30", time: "14:30", price: "$200", seat: "A1" },
      { passenger: "Jane Smith", from: "Windsor", to: "London", date: "2023-08-05", time: "10:00", price: "$150", seat: "B2" },
      { passenger: "John Doe", from: "Toronto", to: "Windsor", date: "2023-07-30", time: "14:30", price: "$200", seat: "A1" },
      { passenger: "John Doe", from: "Toronto", to: "Windsor", date: "2023-07-30", time: "14:30", price: "$200", seat: "A1" },
      { passenger: "Jane Smith", from: "Windsor", to: "London", date: "2023-08-05", time: "10:00", price: "$150", seat: "B2" },
      { passenger: "John Doe", from: "Toronto", to: "Windsor", date: "2023-07-30", time: "14:30", price: "$200", seat: "A1" },
      { passenger: "Jane Smith", from: "Windsor", to: "London", date: "2023-08-05", time: "10:00", price: "$150", seat: "B2" },
      
      
      // Add more data as needed
    ]);

    return (
      <Box>
        <Navbar/>
        <Box className="bg-container">
           
        
        <Box sx={{
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems:'center',
              justifyContent: 'space-between', 
              p: 1,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
             
            }}
          >
        
          {data.map((item, index) => (
            <TicketCard key={index} data={item} />
          ))}
        </Box>
        </Box>
      </Box>
    );
  };
  
  export default App;
  
  

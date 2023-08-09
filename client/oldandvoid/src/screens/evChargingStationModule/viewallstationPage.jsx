import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import React, { useState } from 'react';



// Main component
const App = () => {
    const navigate = useNavigate();

    // Define the Card component
    const TicketCard = ({ data }) => {
        return (
            <Card sx={{ minWidth: '20%', m: 5, p: 5, backgroundColor: '#f5f5f5' }}>
                {/* </Card> <Card sx={{ flex: '0 0 calc(33.33% - 16px)', m: 1, p: 2, backgroundColor: '#f5f5f5' }}> */}
                <CardContent>
                    {/* <Typography variant="h5" component="div" sx={{ color: '#3f51b5' }}>{data.passenger}</Typography> */}
                    {/* <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>ID: {data.ID}</Typography> */}
                    <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Name: {data.Name}</Typography>
                    <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Address: {data.Address}</Typography>
                    <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Phone: {data.Phone}</Typography>
                    {/* <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Link: {data.Link}</Typography> */}
                    {/* <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Price: {data.price}</Typography> */}
                    {/* <Typography variant="body2" sx={{ color: '#607d8b' }}>Seat: {data.seat}</Typography> */}
                    <Button variant="contained" color="primary" sx={{ mt: 2, bgcolor: '#DC6363', color: '#FFFFFF' }}
                        // onClick={handleGetRide}
                        onClick={event => window.location.href = data.Link}
                    >
                        Go To Maps
                    </Button>
                </CardContent>
            </Card>


        );
    };


    const [data, setData] = useState([
        { ID: "1", Name: "ChargePoint Charging Station", Address: "401 Pitt St W, Windsor, ON N9A 0B2", Phone: "+18887584389", Link: "https://goo.gl/maps/1imp7G2DmsUyy6Sx5" },
        { ID: "2", Name: "ChargePoint Charging Station", Address: "1030 Ouellette Ave, Windsor, ON N9A 1E1", Phone: "+18887584389", Link: "https://goo.gl/maps/mUXAXYy9cM16W9H17" },
        { ID: "3", Name: "ChargePoint Charging Station", Address: "406 Pelissier St, Windsor, ON N9A 4K9", Phone: "+18887584389", Link: "https://goo.gl/maps/7uYdctZre9v51qHL9" },
        { ID: "4", Name: "ChargePoint Charging Station", Address: "445 City Hall Square W, Windsor, ON N9A 6W5", Phone: "+18887584389", Link: "https://goo.gl/maps/YWcQziMVXB9pJ5Xr9" },
        { ID: "5", Name: "ChargePoint Charging Station", Address: "395 Mill St, Windsor, ON N9C 2R3", Phone: "+18887584389", Link: "https://goo.gl/maps/p1y7SBYw25kVRogw6" },
        { ID: "6", Name: "ChargePoint Charging Station", Address: "1031 Elsmere Ave, Windsor, ON N9A 2B1", Phone: "+18887584389", Link: "https://goo.gl/maps/bdHweZoD2nzvVEQm6" },
        { ID: "7", Name: "EVlink Charging Station", Address: "2175 Parent Ave, Windsor, ON N8X 4K2", Phone: "+18773425173", Link: "https://goo.gl/maps/fyyzPcvvTnsoRyz47" },
        { ID: "8", Name: "ChargePoint Charging Station", Address: "2238 Byng Rd, Windsor, ON N8W 3E3", Phone: "+18887584389", Link: "https://goo.gl/maps/FfSuHmmKvia5dcFt9" },
        { ID: "9", Name: "Flo Charging Station", Address: "860 Tecumseh Rd E, Windsor, ON N8X 2S5", Phone: "+18448253356", Link: "https://goo.gl/maps/Ewp1fGkJBao6UUH58" },
        { ID: "10", Name: "Flo Charging Station", Address: "298 Walker Rd, Windsor, ON N8Y 2M9", Phone: "+18448253356", Link: "https://goo.gl/maps/qH33ACk4pTWNLU5F7" },
        { ID: "11", Name: "Ivy Charging Station", Address: "3155 Howard Ave, Windsor, ON N8X 4Y8", Phone: "+18003011950", Link: "https://goo.gl/maps/XPYWWTaBmFVwgiej9" },
        { ID: "12", Name: "ChargePoint Charging Station", Address: "1319 Lincoln Rd, Windsor, ON N8Y 2J2", Phone: "+18887584389", Link: "https://goo.gl/maps/bGw86bJNFA8XP8PbA" },
        { ID: "13", Name: "Sun Country Highway Charging Station", Address: "2595 Ouellette Ave, Windsor, ON N8X 4V8", Phone: "+18664676920", Link: "https://goo.gl/maps/PiBBEnKe3LYpe5Hm9" },
        { ID: "14", Name: "ChargePoint Charging Station", Address: "1125 Prince Rd, Windsor, ON N9C 1Z2", Phone: "+18887584389", Link: "https://goo.gl/maps/wnuT43R25UaHUyFe6" },
        { ID: "15", Name: "ChargePoint Charging Station", Address: "2551 Howard Ave Diversion, Windsor, ON N9A 6J3", Phone: "+18887584389", Link: "https://goo.gl/maps/fuPBmFh3VMMQv2W26" },
        { ID: "16", Name: "ChargePoint Charging Station", Address: "9425 Tecumseh Rd E, Windsor, ON N8R 1A1", Phone: "+18887584389", Link: "https://goo.gl/maps/zGCaK4HW2u2iVPvA9" },
        { ID: "17", Name: "ChargePoint Charging Station", Address: "650 Division Rd, Windsor, ON N8X 5E7", Phone: "+18887584389", Link: "https://goo.gl/maps/PoeK9Sk8i3wqgzxC6" },
        { ID: "18", Name: "ChargePoint Charging Station", Address: "2555 Pulford St, Windsor, ON N9E 3J6", Phone: "+18887584389", Link: "https://goo.gl/maps/SMdwQguMFNHsWzWZ8" },
        { ID: "19", Name: "Flo Charging Station", Address: "4150 Walker Rd, Windsor, ON N8W 3T5", Phone: "+18448253356", Link: "https://goo.gl/maps/XtDugrgWi5HffB3z7" },
        { ID: "20", Name: "ChargePoint Charging Station", Address: "1155 Provincial Rd, Windsor, ON N8W 5V9", Phone: "+18887584389", Link: "https://goo.gl/maps/zzpte8hCbv2qozP58" },
        { ID: "21", Name: "FLO Charging Station", Address: "500 Division Rd, Windsor, ON N8X 0A7", Phone: "+18448253356", Link: "https://goo.gl/maps/QG81owitmddD681i7" },
        { ID: "22", Name: "ChargePoint Charging Station", Address: "3200 County Rd 42, Windsor, ON N8V 1A1", Phone: "+18887584389", Link: "https://goo.gl/maps/41W1GWvaVJjzBvgv8" },
        { ID: "23", Name: "Sun Country Highway Charging Station", Address: "Tecumseh Rd E #8155, Windsor, ON N8R 1A2", Phone: "+18664676920", Link: "https://goo.gl/maps/ZcASgTKFFvSxvbgs9" },
        { ID: "24", Name: "ChargePoint Charging Station", Address: "8787 McHugh St, Windsor, ON N8S 0A1", Phone: "+18887584389", Link: "https://goo.gl/maps/pgBF5W6LA97xyk247" },
        { ID: "25", Name: "Shell Recharge Charging Station", Address: "5501 Ojibway Pkwy, Windsor, ON N9C 4J5", Phone: "+31880109500", Link: "https://goo.gl/maps/ygUfHSuyTF8PBay1A" },
        { ID: "26", Name: "Tesla Supercharger", Address: "4150 Walker Rd, Windsor, ON N8W 3T5", Phone: "+18887584389", Link: "https://goo.gl/maps/6UzUmGQ49FMgthBf7" },
        { ID: "27", Name: "ChargePoint Charging Station", Address: "2121 Laurier Pkwy, Windsor, ON N9J 3K7", Phone: "+18887584389", Link: "https://goo.gl/maps/EAgWd2YsiY1XAFN78" },
        { ID: "28", Name: "ChargePoint Charging Station", Address: "1620 Sylvestre Dr, Windsor, ON N8N 2L9", Phone: "+18887584389", Link: "https://goo.gl/maps/DUUjYGn1h5LRPQ5q9" },
        { ID: "29", Name: "Flo Charging Station", Address: "1655 Manning Rd, Windsor, ON N8N 5B5", Phone: "+18448253356", Link: "https://goo.gl/maps/M6Wv7gij8juTajheA" },
        { ID: "30", Name: "FLO Charging Station", Address: "500 Front Rd, Windsor, ON N9J 1Z9", Phone: "+18448253356", Link: "https://goo.gl/maps/caJc9fmQqAywqXfGA" },
        { ID: "31", Name: "FLO Charging Station", Address: "1602 Sylvestre Dr, Windsor, ON N8N 1Y3", Phone: "+18448253356", Link: "https://goo.gl/maps/fT1n5PCMP25pYFJf6" },
        { ID: "32", Name: "FLO Charging Station", Address: "917 Lesperance Rd, Tecumseh, ON N8N 1W9", Phone: "+18448253356", Link: "https://goo.gl/maps/XQVx5iTMaZ5JujTF8" },
        { ID: "33", Name: "FLO Charging Station", Address: "13451 Riverside Dr E, Tecumseh, ON N8N 2M8", Phone: "+18448253356", Link: "https://goo.gl/maps/JJsgGaxf5Dcap9dq7" },


        // Add more data as needed
    ]);

    // const handleGetRide = ({ data }) => {
    //     if (data.ID === "1") {
    //         navigate("https://www.google.com/maps/place/ChargePoint+Charging+Station/@42.3009984,-83.0651106,14z/data=!4m10!1m2!2m1!1scharging+station+near+me!3m6!1s0x883b2d19bc2a4f1f:0xf2ee4109f7e08c28!8m2!3d42.317118!4d-83.045191!15sChhjaGFyZ2luZyBzdGF0aW9uIG5lYXIgbWUiA5ABAZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11rvhzr88m?entry=ttu")
    //     }
    // };

    return (
        <Box>
            <Navbar />
            <Box className="bg-container">


                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
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



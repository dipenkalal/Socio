import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "components/NavBar";
import CardMedia from '@mui/material/CardMedia';
import { Box, Typography, Card, CardContent, Button, CardActionArea, CardActions } from "@mui/material";
import React, { useState } from 'react';


// Main component
const App = () => {
    const navigate = useNavigate();

    const openLinkInNewTab = (data) => {
        window.open(data, "_blank", "noreferrer");
    };

    // Define the Card component
    const TicketCard = ({ data }) => {
        return (
            <Card sx={{ maxWidth: 500, m: 2, p: 2, backgroundColor: '#f5f5f5' }}>
                {/* <CardActionArea onClick={event => window.location.href = data.Link}> */}
                {/* <CardActionArea onClick={event => window.open(window.location.href = data.Link, '_blank')}> */}

                {/* <div className="google-map-code"> */}
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11808.826699939014!2d-83.02642011284179!3d42.2741114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2dbd9cd38d2f%3A0xb34472a5e9d6dee0!2sIvy%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691014048566!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11808.826699939014!2d-83.02642011284179!3d42.2741114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2dbd9cd38d2f%3A0xb34472a5e9d6dee0!2sIvy%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691014048566!5m2!1sen!2sca"
                        width="480"
                        height="200"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    /> */}
                {/* </div> */}

                <CardActionArea onClick={() => openLinkInNewTab(data.Link)}>
                    {/* <CardMedia
                        component="img"
                        height="140"
                        image="/assets/GreenRouteLogo.png"
                    /> */}
                    <div className="google-map-code">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11808.826699939014!2d-83.02642011284179!3d42.2741114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2dbd9cd38d2f%3A0xb34472a5e9d6dee0!2sIvy%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691014048566!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe
                            src={data.MapLink}
                            width="480"
                            height="200"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                    <CardContent>
                        <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Name: {data.Name}</Typography>
                        <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Address: {data.Address}</Typography>
                        <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Phone: {data.Phone}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            // <Card sx={{ minWidth: '20%', m: 5, p: 5, backgroundColor: '#f5f5f5' }}>
            //     {/* </Card> <Card sx={{ flex: '0 0 calc(33.33% - 16px)', m: 1, p: 2, backgroundColor: '#f5f5f5' }}> */}
            //     <CardActionArea>
            //         <CardMedia
            //             component="img"
            //             height="60ev"
            //             image="/assets/GreenRouteLogo.png"
            //             alt="green iguana"
            //             onClick={event => window.location.href = data.Link}
            //         />


            //         <CardContent>
            //             {/* <Typography variant="h5" component="div" sx={{ color: '#3f51b5' }}>{data.passenger}</Typography> */}
            //             {/* <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>ID: {data.ID}</Typography> */}
            //             <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Name: {data.Name}</Typography>
            //             <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Address: {data.Address}</Typography>
            //             <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Phone: {data.Phone}</Typography>
            //             {/* <Typography variant="body2" sx={{ color: '#000000', fontSize: '17px' }}>Link: {data.Link}</Typography> */}
            //             {/* <Button variant="contained" color="primary" sx={{ mt: 2, bgcolor: '#DC6363', color: '#FFFFFF' }}
            //                 onClick={event => window.location.href = data.Link}
            //             >
            //                 Go To Maps
            //             </Button> */}
            //         </CardContent>
            //     </CardActionArea>
            // </Card>


        );
    };

    const [data, setData] = useState([
        { ID: "1", Name: "ChargePoint Charging Station", Address: "401 Pitt St W, Windsor, ON N9A 0B2", Phone: "+18887584389", Link: "https://goo.gl/maps/1imp7G2DmsUyy6Sx5", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47209.663600008505!2d-83.10850065136722!3d42.30831499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d19bc2a4f1f%3A0xf2ee4109f7e08c28!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022643995!5m2!1sen!2sca" },
        { ID: "2", Name: "ChargePoint Charging Station", Address: "1030 Ouellette Ave, Windsor, ON N9A 1E1", Phone: "+18887584389", Link: "https://goo.gl/maps/mUXAXYy9cM16W9H17", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47209.663600008505!2d-83.10850065136722!3d42.30831499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cfceda7dd91%3A0x3345d1a07a06e40!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022498973!5m2!1sen!2sca" },
        { ID: "3", Name: "ChargePoint Charging Station", Address: "406 Pelissier St, Windsor, ON N9A 4K9", Phone: "+18887584389", Link: "https://goo.gl/maps/7uYdctZre9v51qHL9", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47209.663600008505!2d-83.10850065136722!3d42.30831499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d1e8863cd55%3A0x12bdc70af98d5eeb!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022524600!5m2!1sen!2sca" },
        { ID: "4", Name: "ChargePoint Charging Station", Address: "445 City Hall Square W, Windsor, ON N9A 6W5", Phone: "+18887584389", Link: "https://goo.gl/maps/YWcQziMVXB9pJ5Xr9", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47209.663600008505!2d-83.10850065136722!3d42.30831499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2ce1dda54de9%3A0x64a022ed15e399b2!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022665926!5m2!1sen!2sca" },
        { ID: "5", Name: "ChargePoint Charging Station", Address: "395 Mill St, Windsor, ON N9C 2R3", Phone: "+18887584389", Link: "https://goo.gl/maps/p1y7SBYw25kVRogw6", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47214.84703685669!2d-83.1506306513672!3d42.301402999999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d81927dd119%3A0x8ba112e2c73cb5b7!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022368017!5m2!1sen!2sca" },
        { ID: "6", Name: "ChargePoint Charging Station", Address: "1031 Elsmere Ave, Windsor, ON N9A 2B1", Phone: "+18887584389", Link: "https://goo.gl/maps/bdHweZoD2nzvVEQm6", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47206.49358084636!2d-83.0980549513672!3d42.3125417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2ceeee37dc2d%3A0xaecfb9a9e9d26069!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022854099!5m2!1sen!2sca" },
        { ID: "7", Name: "EVlink Charging Station", Address: "2175 Parent Ave, Windsor, ON N8X 4K2", Phone: "+18773425173", Link: "https://goo.gl/maps/fyyzPcvvTnsoRyz47", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47247.13503953747!2d-83.11154365136719!3d42.25832700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c61e7fcfc2b%3A0x51bf07fd11a511c6!2sEVlink%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022832093!5m2!1sen!2sca" },
        { ID: "8", Name: "ChargePoint Charging Station", Address: "2238 Byng Rd, Windsor, ON N8W 3E3", Phone: "+18887584389", Link: "https://goo.gl/maps/FfSuHmmKvia5dcFt9", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47247.13503953747!2d-83.11154365136719!3d42.25832700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c80560b48bb%3A0x873dc0fc9bd42c5f!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022807082!5m2!1sen!2sca" },
        { ID: "9", Name: "Flo Charging Station", Address: "860 Tecumseh Rd E, Windsor, ON N8X 2S5", Phone: "+18448253356", Link: "https://goo.gl/maps/Ewp1fGkJBao6UUH58", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47216.257514665944!2d-83.08831565136721!3d42.29952200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c8a87b0cab7%3A0x8aa4af177b80b09e!2sFlo%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023154639!5m2!1sen!2sca" },
        { ID: "10", Name: "Flo Charging Station", Address: "298 Walker Rd, Windsor, ON N8Y 2M9", Phone: "+18448253356", Link: "https://goo.gl/maps/qH33ACk4pTWNLU5F7", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47209.663600008505!2d-83.10850065136722!3d42.30831499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cbbba08890f%3A0x13ae78255618501d!2sFlo%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022724294!5m2!1sen!2sca" },
        { ID: "11", Name: "Ivy Charging Station", Address: "3155 Howard Ave, Windsor, ON N8X 4Y8", Phone: "+18003011950", Link: "https://goo.gl/maps/XPYWWTaBmFVwgiej9", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47235.30679975606!2d-83.08358335136725!3d42.2741114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2dbd9cd38d2f%3A0xb34472a5e9d6dee0!2sIvy%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691021867058!5m2!1sen!2sca" },
        { ID: "12", Name: "ChargePoint Charging Station", Address: "1319 Lincoln Rd, Windsor, ON N8Y 2J2", Phone: "+18887584389", Link: "https://goo.gl/maps/bGw86bJNFA8XP8PbA", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11801.97658053883!2d-83.01934913927967!3d42.31065808376423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c9189e001c7%3A0x937e91e6aab829a0!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023423806!5m2!1sen!2sca" },
        { ID: "13", Name: "Sun Country Highway Charging Station", Address: "2595 Ouellette Ave, Windsor, ON N8X 4V8", Phone: "+18664676920", Link: "https://goo.gl/maps/PiBBEnKe3LYpe5Hm9", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47228.14544982237!2d-83.0589579816615!3d42.283665663478494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c410449b6cb%3A0x77cf3cd6c05e6525!2sSun%20Country%20Highway%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023506164!5m2!1sen!2sca" },
        { ID: "14", Name: "ChargePoint Charging Station", Address: "1125 Prince Rd, Windsor, ON N9C 1Z2", Phone: "+18887584389", Link: "https://goo.gl/maps/wnuT43R25UaHUyFe6", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47209.663600008505!2d-83.10850065136722!3d42.30831499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d8b93803f9f%3A0x81f92184b48aa842!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022693239!5m2!1sen!2sca" },
        { ID: "15", Name: "ChargePoint Charging Station", Address: "2551 Howard Ave Diversion, Windsor, ON N9A 6J3", Phone: "+18887584389", Link: "https://goo.gl/maps/fuPBmFh3VMMQv2W26", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47270.67645356659!2d-83.07118135136719!3d42.2268975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2ed2e242ed13%3A0xd49fe5b6ca74ed15!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022243747!5m2!1sen!2sca" },
        { ID: "16", Name: "ChargePoint Charging Station", Address: "9425 Tecumseh Rd E, Windsor, ON N8R 1A1", Phone: "+18887584389", Link: "https://goo.gl/maps/zGCaK4HW2u2iVPvA9", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47205.46332743343!2d-83.00057385136725!3d42.3139153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2abfd232d71b%3A0x4aceed68e0e0663c!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022106492!5m2!1sen!2sca" },
        { ID: "17", Name: "ChargePoint Charging Station", Address: "650 Division Rd, Windsor, ON N8X 5E7", Phone: "+18887584389", Link: "https://goo.gl/maps/PoeK9Sk8i3wqgzxC6", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47228.061301525195!2d-83.0589580284318!3d42.28377791890938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c0f4d960bf3%3A0x9c959a580b652ae7!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023553684!5m2!1sen!2sca" },
        { ID: "18", Name: "ChargePoint Charging Station", Address: "2555 Pulford St, Windsor, ON N9E 3J6", Phone: "+18887584389", Link: "https://goo.gl/maps/SMdwQguMFNHsWzWZ8", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47247.13503953747!2d-83.11154365136719!3d42.25832700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2e808f1968b3%3A0x1bf01cc88e3792a5!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022776444!5m2!1sen!2sca" },
        { ID: "19", Name: "Flo Charging Station", Address: "4150 Walker Rd, Windsor, ON N8W 3T5", Phone: "+18448253356", Link: "https://goo.gl/maps/XtDugrgWi5HffB3z7", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94547.27622187133!2d-83.13548677659607!3d42.22294212686998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2ddad545fefd%3A0x92dcbc1e208e667d!2sFlo%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023682153!5m2!1sen!2sca" },
        { ID: "20", Name: "ChargePoint Charging Station", Address: "1155 Provincial Rd, Windsor, ON N8W 5V9", Phone: "+18887584389", Link: "https://goo.gl/maps/zzpte8hCbv2qozP58", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47244.87831098265!2d-83.06072755136725!3d42.2613389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2bfcf1c62d33%3A0xd9391b4114c82bf9!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022466354!5m2!1sen!2sca" },
        { ID: "21", Name: "FLO Charging Station", Address: "500 Division Rd, Windsor, ON N8X 0A7", Phone: "+18448253356", Link: "https://goo.gl/maps/QG81owitmddD681i7", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47216.257514665944!2d-83.08831565136721!3d42.29952200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c0f141654b9%3A0x41d45326af3854cf!2sFLO%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023190911!5m2!1sen!2sca" },
        { ID: "22", Name: "ChargePoint Charging Station", Address: "3200 County Rd 42, Windsor, ON N8V 1A1", Phone: "+18887584389", Link: "https://goo.gl/maps/41W1GWvaVJjzBvgv8", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47241.864465543185!2d-83.03593365136713!3d42.26536099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2bd015b43b91%3A0x39bd832f720a51cb!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022875446!5m2!1sen!2sca" },
        { ID: "23", Name: "Sun Country Highway Charging Station", Address: "Tecumseh Rd E #8155, Windsor, ON N8R 1A2", Phone: "+18664676920", Link: "https://goo.gl/maps/ZcASgTKFFvSxvbgs9", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47205.13397963605!2d-83.00066405136717!3d42.31435440000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2abe151dbce9%3A0x9bc09a8fae462878!2sSun%20Country%20Highway%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023062825!5m2!1sen!2sca" },
        { ID: "24", Name: "ChargePoint Charging Station", Address: "8787 McHugh St, Windsor, ON N8S 0A1", Phone: "+18887584389", Link: "https://goo.gl/maps/pgBF5W6LA97xyk247", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47205.13397963605!2d-83.00066405136717!3d42.31435440000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2ab8825b10ad%3A0x88bd24272ded446!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023083703!5m2!1sen!2sca" },
        { ID: "25", Name: "Shell Recharge Charging Station", Address: "5501 Ojibway Pkwy, Windsor, ON N9C 4J5", Phone: "+31880109500", Link: "https://goo.gl/maps/ygUfHSuyTF8PBay1A", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47245.89051697781!2d-83.1611535513672!3d42.25998799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b31f94e4bff87%3A0xbd0508c5610650f7!2sShell%20Recharge%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691021785668!5m2!1sen!2sca" },
        { ID: "26", Name: "Tesla Supercharger", Address: "4150 Walker Rd, Windsor, ON N8W 3T5", Phone: "+18887584389", Link: "https://goo.gl/maps/6UzUmGQ49FMgthBf7", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378188.3005244816!2d-83.3827331082!3d42.22307641285928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2b7ad046fd05%3A0x85901b4a025cc69e!2sTesla%20Supercharger!5e0!3m2!1sen!2sca!4v1691023709565!5m2!1sen!2sca" },
        { ID: "27", Name: "ChargePoint Charging Station", Address: "2121 Laurier Pkwy, Windsor, ON N9J 3K7", Phone: "+18887584389", Link: "https://goo.gl/maps/EAgWd2YsiY1XAFN78", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47205.13397963605!2d-83.00066405136717!3d42.31435440000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ad5174b683725%3A0x9650d8b341f37b7!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023103985!5m2!1sen!2sca" },
        { ID: "28", Name: "ChargePoint Charging Station", Address: "1620 Sylvestre Dr, Windsor, ON N8N 2L9", Phone: "+18887584389", Link: "https://goo.gl/maps/DUUjYGn1h5LRPQ5q9", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47205.13397963605!2d-83.00066405136717!3d42.31435440000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ad5174b683725%3A0x9650d8b341f37b7!2sChargePoint%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023103985!5m2!1sen!2sca" },
        { ID: "29", Name: "Flo Charging Station", Address: "1655 Manning Rd, Windsor, ON N8N 5B5", Phone: "+18448253356", Link: "https://goo.gl/maps/M6Wv7gij8juTajheA", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47209.211366552714!2d-82.94683365136717!3d42.30891800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ad518be898597%3A0x44bfdb462252612f!2sFlo%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023130424!5m2!1sen!2sca" },
        { ID: "30", Name: "FLO Charging Station", Address: "500 Front Rd, Windsor, ON N9J 1Z9", Phone: "+18448253356", Link: "https://goo.gl/maps/caJc9fmQqAywqXfGA", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47259.804281423014!2d-83.1783416513672!3d42.24141499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b31bf39a35c45%3A0x744ad5a503114876!2sFlo%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691022745316!5m2!1sen!2sca" },
        { ID: "31", Name: "FLO Charging Station", Address: "1602 Sylvestre Dr, Windsor, ON N8N 1Y3", Phone: "+18448253356", Link: "https://goo.gl/maps/fT1n5PCMP25pYFJf6", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47211.53622583986!2d-82.9552216513672!3d42.305818000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ad516b5d7d325%3A0x2d2622d038150d39!2sFlo%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023208079!5m2!1sen!2sca" },
        { ID: "32", Name: "FLO Charging Station", Address: "917 Lesperance Rd, Tecumseh, ON N8N 1W9", Phone: "+18448253356", Link: "https://goo.gl/maps/XQVx5iTMaZ5JujTF8", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47196.93982014646!2d-82.94341165136717!3d42.325278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ad540d6d14d37%3A0x858ec59012149a16!2sFLO%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023256064!5m2!1sen!2sca" },
        { ID: "33", Name: "FLO Charging Station", Address: "13451 Riverside Dr E, Tecumseh, ON N8N 2M8", Phone: "+18448253356", Link: "https://goo.gl/maps/JJsgGaxf5Dcap9dq7", MapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47196.93982014646!2d-82.94341165136717!3d42.325278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ad52bcec94fcf%3A0x1906c44c18710c74!2sFLO%20Charging%20Station!5e0!3m2!1sen!2sca!4v1691023235051!5m2!1sen!2sca" },
        // Add more data as needed
    ]);

    //     if (data.ID === "1") {
    //         navigate("https://www.google.com/maps/place/ChargePoint+Charging+Station/@42.3009984,-83.0651106,14z/data=!4m10!1m2!2m1!1scharging+station+near+me!3m6!1s0x883b2d19bc2a4f1f:0xf2ee4109f7e08c28!8m2!3d42.317118!4d-83.045191!15sChhjaGFyZ2luZyBzdGF0aW9uIG5lYXIgbWUiA5ABAZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11rvhzr88m?entry=ttu")
    //     }
    // };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Box>
            <Navbar />
            <Box className="background-container">


                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',

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



import { useEffect, useState } from "react";
import * as React from 'react';
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {
    DarkMode,
    LightMode,
    Menu,
    Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import Dropdown from "./DropDown";

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const fullName = `${user?.firstName}`;
    
    useEffect(() => {
        if (!user) {
            navigate('/welcome');
        }
    }, [user, navigate]);
    
    const carpoolingItems = [
        { name: 'Passenger',
        subItems: [
            { name: '-Book Ride', to: '/passenger/searchride' },
            { name: '-View Booked Rides', to: '/passenger/viewbookedride' },
          ],},
        { name: 'Rider', 
        subItems: [
            { name: '-Post Ride', to: '/rider/postride' },
            { name: '-View Posted Rides', to: '/rider/viewpostedride' },
          ],},
    ];
    const evChargingStationItems = [
        { name: 'Find a Station', to: '/viewallstation' },
        { name: 'Add a Station', to: '/admin/addstation' },
    ];
    const windsorTerminalItems = [
        { name: 'Find Bus', to: '/transit/searchnearbystation' },
        { name: 'View All', to: '/transit/allroutes' },
    ];
    const userProfileItems = [
        { name: 'Profile', to: '/' },
        { name: 'Settings', to: '/' },
        { name: 'Lougout', to: '/' },
    ];




    return (
        <FlexBetween padding="1rem" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <Box
                    width="5%"
                    borderRadius="1.5rem"
                    backgroundColor={theme.palette.background.alt}
                    textAlign="left"
                    onClick={() => navigate("/dashboard")}
                    sx={{
                        "&:hover": {
                            color: primaryLight,
                            cursor: "pointer",
                        }
                    }}>
                    <img src="/assets/GreenRouteLogo_DarkMode.png" alt="GreenRoute Logo" height="60ev" />
                </Box>
            </FlexBetween>

            {/* DESKTOP NAV */}
            {isNonMobileScreens ? (
                <FlexBetween gap="2rem">
                    <div className="button-container" >
                        <Dropdown menuItems={carpoolingItems} label="Carpooling" />
                        <Dropdown menuItems={evChargingStationItems} label="EV Charging Station" />
                        <Dropdown menuItems={windsorTerminalItems} label="Windsor Transit" />
                    </div>
                    <FormControl variant="standard" value={fullName}>
                        <Select
                            value={fullName}
                            sx={{
                                backgroundColor: neutralLight,
                                width: "150px",
                                borderRadius: "0.25rem",
                                p: "0.25rem 1rem",
                                "& .MuiSvgIcon-root": {
                                    pr: "0.25rem",
                                    width: "3rem",
                                },
                                "& .MuiSelect-select:focus": {
                                    backgroundColor: neutralLight,
                                },
                            }}
                            input={<InputBase />}
                        >
                            <MenuItem value={fullName}>
                                <Typography>{fullName}</Typography>
                            </MenuItem>

                        </Select>
                    </FormControl>
                </FlexBetween>
            ) : (
                <IconButton
                    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                    <Menu />
                </IconButton>
            )}

            {/* MOBILE NAV */}
            {!isNonMobileScreens && isMobileMenuToggled && (
                <Box
                    position="fixed"
                    right="0"
                    bottom="0"
                    height="100%"
                    zIndex="10"
                    maxWidth="500px"
                    minWidth="300px"
                    backgroundColor={background}
                >
                    {/* CLOSE ICON */}
                    <Box display="flex" justifyContent="flex-end" p="1rem">
                        <IconButton
                            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                        >
                            <Close />
                        </IconButton>
                    </Box>

                    {/* MENU ITEMS */}
                    <FlexBetween
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        gap="3rem"
                    >
                        <IconButton
                            onClick={() => dispatch(setMode())}
                            sx={{ fontSize: "25px" }}
                        >
                            {theme.palette.mode === "dark" ? (
                                <DarkMode sx={{ fontSize: "25px" }} />
                            ) : (
                                <LightMode sx={{ color: dark, fontSize: "25px" }} />
                            )}
                        </IconButton>
                        <div className="button-container">
                            <Dropdown menuItems={carpoolingItems} label="Carpooling" />
                            <Dropdown menuItems={evChargingStationItems} label="EV Charging Station" />
                            <Dropdown menuItems={windsorTerminalItems} label="Windsor Transit" />
                        </div>

                        <FormControl variant="standard" value={fullName}>
                            <Select
                                value={fullName}
                                sx={{
                                    backgroundColor: neutralLight,
                                    width: "150px",
                                    borderRadius: "0.25rem",
                                    p: "0.25rem 1rem",
                                    "& .MuiSvgIcon-root": {
                                        pr: "0.25rem",
                                        width: "3rem",
                                    },
                                    "& .MuiSelect-select:focus": {
                                        backgroundColor: neutralLight,
                                    },
                                }}
                                input={<InputBase />}
                            >
                                <MenuItem value={fullName}>
                                    <Typography>{fullName}</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => dispatch(setLogout())}>
                                    Log Out
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </FlexBetween>
                </Box>
            )}
        </FlexBetween>
    );
};

export default Navbar;

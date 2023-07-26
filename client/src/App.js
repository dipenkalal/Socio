import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

//general
import HomePage from "screens/general/homePage";
import LoginPage from "screens/auth/loginPage";
import RegisterPage from "screens/auth/registerPage";
import WelcomePage from "screens/general/welcomePage";
import DashboardPage from "screens/general/dashboardPage";
import ProfilePage from "screens/auth/profilePage";

import CarpoolingPage from "screens/carpoolingModule/carpoolingPage";
//passenger
import SearchRidePage from "screens/carpoolingModule/passenger/searchridePage";
import ViewBookedRide from "screens/carpoolingModule/passenger/viewbookedridePage";

//rider
import PostRidePage from "screens/carpoolingModule/rider/postridePage";
import ViewPostedRide from "screens/carpoolingModule/rider/viewpostedridePage";

import EVStationPage from "screens/evChargingStationModule/evstationPage";

import WinsdorTransitPage from "screens/transitModule/windsortransitPage";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return ( <div className = "app" >
    <BrowserRouter >
    < ThemeProvider theme = { theme } >
    < CssBaseline / >
    < Routes >
    < Route path = "/" element = {< HomePage/> } /> 
    < Route path = "/welcome" element = { <WelcomePage/> } /> 
    < Route path = "/login" element = { <LoginPage/> } /> 
    < Route path = "/register" element = { <RegisterPage/> } /> 
    < Route path = "/dashboard" element = { <DashboardPage/> } /> 
    < Route path = "/profile" element = { <ProfilePage/> } />


    < Route path = "/carpooling" element = { <CarpoolingPage/> } /> 
{/* passenger */}
    < Route path = "/searchride" element = { <SearchRidePage/> } />
    < Route path = "/viewbookedride" element = { <ViewBookedRide/> } />
{/* Rider */}
    < Route path = "/postride" element = { <PostRidePage/> } /> 
    < Route path = "/viewpostedride" element = { <ViewPostedRide/> } /> 

    
    < Route path = "/evstation" element = { <EVStationPage/> } /> 
    
    
    < Route path = "/view-all" element = { <WinsdorTransitPage/> } /> 
    
    {
       <Route
                    path="/home"
                    element={isAuth ? <DashboardPage /> : <HomePage />}
                  /> 
    } 
    </Routes> 
    </ThemeProvider> 
    </BrowserRouter> 
    </div>
  );
}

export default App;
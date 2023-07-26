import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "screens/general/homePage";
import LoginPage from "screens/auth/loginPage";
import RegisterPage from "screens/auth/registerPage";
import CarpoolingPage from "screens/carpoolingModule/carpoolingPage";
import EVStationPage from "screens/evChargingStationModule/evstationPage";
import WinsdorTransitPage from "screens/transitModule/windsortransitPage";
import PostRidePage from "screens/carpoolingModule/postridePage";
import GetRidePage from "screens/carpoolingModule/getridePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import WelcomePage from "screens/general/welcomePage";
import DashboardPage from "screens/general/dashboardPage";
import ProfilePage from "screens/auth/profilePage";

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
    < Route path = "/carpooling" element = { <CarpoolingPage/> } /> 
    < Route path = "/evstation" element = { <EVStationPage/> } /> 
    < Route path = "/view-all" element = { <WinsdorTransitPage/> } /> 
    < Route path = "/dashboard" element = { <DashboardPage/> } /> 
    < Route path = "/postride" element = { <PostRidePage/> } /> 
    < Route path = "/getride" element = { <GetRidePage/> } />
    < Route path = "/profile" element = { <ProfilePage/> } />

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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import RegisterPage from "scenes/registerPage";
import CarpoolingPage from "scenes/carpoolingPage";
import EVStationPage from "scenes/evstationPage";
import WinsdorTransitPage from "scenes/windsortransitPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import WelcomePage from "scenes/welcomePage";
import DashboardPage from "scenes/dashboardPage/dashborad";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/carpooling" element={<CarpoolingPage />} />
            <Route path="/evstation" element={<EVStationPage />} />
            <Route path="/windsortransit" element={<WinsdorTransitPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* <Route
              path="/home"
              element={isAuth ? <HomePage /> : <HomePage />}
            /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";
import Cp from "./scenes/cp/index";
import AppDev from "./scenes/appdev";
import WebDev from "./scenes/webdev";
import Ml from "./scenes/ml";
import Foss from "./scenes/foss";
import Design from "./scenes/design";
import Blockchain from "./scenes/blockchain";
import InfoSec from "./scenes/infosec";
import Form from "./scenes/form";
// import Displayer from "./scenes/displayer";
import gitDisplayer from "./scenes/gitdisplayer";

function Dashboard() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  useEffect(() => {
    // Displayer();
    gitDisplayer();

  }, [isSidebar])

  return (
    <div>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {/* <Sidebar isSidebar={isSidebar} /> */}
            <main className="dashboard--content">
              <Topbar setIsSidebar={setIsSidebar} />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default Dashboard;

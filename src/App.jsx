
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import RoutePlannerMain from "./components/RoutePlanner/RouteplannerMain";
import HostStationRegistration from "./pages/HostStationRegistration";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/route-planner" element={<RoutePlannerMain />} />
          <Route path="/host-station-registration" element={<HostStationRegistration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

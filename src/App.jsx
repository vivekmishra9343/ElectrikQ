import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import RoutePlannerMain from "./components/RoutePlanner/RouteplannerMain";
import HostStationRegistration from "./pages/HostStationRegistration";
import HostDashboard from "./pages/HostDashboard";
import StationFinder from "./pages/StationFinder";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/route-planner' element={<RoutePlannerMain />} />
          <Route
            path='/host-station-registration'
            element={<HostStationRegistration />}
          />
          <Route path='/dashboard' element={<HostDashboard />} />
          <Route path='/station-finder' element={<StationFinder />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import RoutePlannerMain from "./components/RoutePlanner/RouteplannerMain";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/route-planner" element={<RoutePlannerMain />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

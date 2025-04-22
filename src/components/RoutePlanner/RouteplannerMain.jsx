import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaCar, FaWifi, FaCoffee, FaUser } from "react-icons/fa";
import MapComponent from "./MapComponent";
import { getCoordinates } from "@/services/getCoordinates";

const RoutePlannerMain = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentLocationAddress, setCurrentLocationAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setOrigin(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
          setLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoadingLocation(false);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row min-h-[80vh] bg-gray-100 rounded-xl shadow-lg p-4 gap-4">
      
      {/* Left Sidebar: Form Fields */}
      <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-4 flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1">Origin</label>
          <input className="w-full border rounded px-2 py-1 mb-2 text-xs" placeholder="Enter starting point" />
          <label className="block text-xs font-semibold mb-1">Destination</label>
          <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Enter destination" />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">Vehicle Model</label>
          <select className="w-full border rounded px-2 py-1 mb-1 text-xs">
            <option>Tesla Model 3</option>
            <option>Tesla Model S</option>
            <option>Tesla Model X</option>
          </select>
          <div className="flex items-center gap-1 text-xs mb-1">
            <span className="font-semibold">Battery: 80%</span>
            <input type="range" min="0" max="100" value="80" readOnly className="flex-1" />
          </div>
          <div className="flex gap-1 mb-1">
            <div className="flex-1">
              <label className="text-xs">Persons:</label>
              <input className="w-full border rounded px-1 py-0.5 text-xs" type="number" min="1" value="1" readOnly />
            </div>
            <div className="flex-1">
              <label className="text-xs">Battery health:</label>
              <input className="w-full border rounded px-1 py-0.5 text-xs" type="text" value="100%" readOnly />
            </div>
          </div>
          <div className="flex gap-1">
            <Button className="flex-1 bg-green-500 hover:bg-green-600 text-xs py-1">Now</Button>
            <input className="flex-1 border rounded px-1 py-0.5 text-xs" type="time" />
          </div>
          <Button className="w-full mt-1 bg-emerald-600 hover:bg-emerald-700 text-xs py-1.5">Plan My Route</Button>
        </div>

        <div>
          <div className="font-semibold mb-1 text-xs">Route Preferences</div>
          <div className="flex flex-col gap-0.5 text-xs">
            <label><input type="radio" name="route" defaultChecked /> Fastest Route</label>
            <label><input type="radio" name="route" /> Most Efficient</label>
            <label><input type="radio" name="route" /> Fewest Stops</label>
            <label><input type="radio" name="route" /> Cheapest</label>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-1 text-xs">Recommended Charging Stops</div>
          <div className="bg-gray-50 rounded p-2 flex flex-col gap-1 border">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-xs">SuperCharger Station A</div>
                <div className="text-[10px] text-gray-500">Arrival: 10:30 AM - 25% Battery</div>
              </div>
              <span className="text-green-600 font-semibold text-[10px]">Available</span>
            </div>
            <div className="flex gap-1 text-[10px] text-gray-500 mt-1">
              <FaCar /> <FaWifi /> <FaCoffee /> <FaUser />
            </div>
            <div className="text-[10px] text-gray-600">30 min charging recommended</div>
            <Button className="w-full mt-1 bg-emerald-600 hover:bg-emerald-700 text-[10px] py-1">Reserve</Button>
          </div>
        </div>
      </div>

      {/* Right Section: Map and Summary */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        <div className="bg-blue-100 rounded-lg flex-1 min-h-[300px]">
          {currentLocation ? (
            <MapComponent currentLocation={currentLocation} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-lg text-blue-400 font-bold">
                {loadingLocation ? "Loading map..." : "Enable location to view map"}
              </span>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow flex flex-wrap items-center justify-between p-2 gap-2">
          {/* Summary Bar placeholder */}
          <p className="text-sm text-gray-600">Route summary will appear here after planning.</p>
        </div>
      </div>
    </div>
  );
};

export default RoutePlannerMain;

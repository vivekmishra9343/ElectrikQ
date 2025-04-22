import React from "react";
import { Button } from "@/components/ui/button";
import { FaCar, FaWifi, FaCoffee, FaUser } from "react-icons/fa";

const RoutePlannerMain = () => (
  <div className="flex flex-col lg:flex-row w-full min-h-[60vh] bg-gray-100 rounded-xl shadow-lg p-2 gap-2">
    {/* Sidebar */}
    <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-3 flex flex-col gap-3">
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

    {/* Map and Summary */}
    <div className="flex-1 flex flex-col gap-2">
      {/* Map Placeholder */}
      <div className="bg-blue-100 rounded-lg flex-1 min-h-[220px] flex items-center justify-center">
        <span className="text-lg text-blue-400 font-bold">[Map Here]</span>
      </div>
      {/* Summary Bar */}
      <div className="bg-white rounded-lg shadow flex flex-wrap items-center justify-between p-2 gap-2">
        <div>
          <div className="text-[10px] text-gray-500">Total Distance</div>
          <div className="font-bold text-sm">324 miles</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-500">Travel Time</div>
          <div className="font-bold text-sm">5h 30m</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-500">Charging Stops</div>
          <div className="font-bold text-sm">2 stops</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-500">Arrival Battery</div>
          <div className="font-bold text-sm">45%</div>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 px-2 py-1 text-xs">Start Navigation</Button>
      </div>
    </div>
  </div>
);

export default RoutePlannerMain;
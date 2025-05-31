import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  existingStations,
  potentialStations,
  bangaloreCenter,
} from "@/data/bangaloreStations";
import PeakHoursInfo from "./PeakHoursInfo";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom icons for different types of locations
const createCustomIcon = (color) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });
};

const redIcon = createCustomIcon("red");
const greenIcon = createCustomIcon("green");
const blueIcon = createCustomIcon("blue");

// Circle style for 3km radius
const circleStyle = {
  color: "#F97316",
  fillColor: "#F97316",
  fillOpacity: 0.15,
  weight: 3,
  dashArray: "8, 12",
  className: "radius-circle",
};

const LocationMap = ({ onLocationSelect, selectedLocation }) => {
  // Default center (Bangalore)
  const defaultCenter = [bangaloreCenter.latitude, bangaloreCenter.longitude];

  // State for filters
  const [selectedFilters, setSelectedFilters] = useState({
    showDCFast: true,
    showLevel2AC: true,
    showTesla: true,
  });

  // Filter stations based on type
  const filteredExistingStations = existingStations.filter((station) => {
    if (station.type === "DC Fast Charging" && !selectedFilters.showDCFast)
      return false;
    if (station.type === "Level 2 AC" && !selectedFilters.showLevel2AC)
      return false;
    if (station.type === "Tesla Compatible" && !selectedFilters.showTesla)
      return false;
    return true;
  });

  const filteredPotentialStations = potentialStations.filter((station) => {
    if (station.type === "DC Fast Charging" && !selectedFilters.showDCFast)
      return false;
    if (station.type === "Level 2 AC" && !selectedFilters.showLevel2AC)
      return false;
    if (station.type === "Tesla Compatible" && !selectedFilters.showTesla)
      return false;
    return true;
  });

  return (
    <div className='relative h-[500px] w-full'>
      {/* Filter Controls - Top Right */}
      <div className='absolute top-2 right-2 z-[1000] bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200'>
        <div className='text-sm font-semibold mb-2 text-gray-800'>
          Filter by Type:
        </div>
        <div className='space-y-2'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={selectedFilters.showDCFast}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  showDCFast: e.target.checked,
                }))
              }
              className='mr-2 h-4 w-4 text-[#F97316] rounded border-gray-600 focus:ring-[#F97316]'
            />
            <span className='text-sm text-gray-800'>DC Fast Charging</span>
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={selectedFilters.showLevel2AC}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  showLevel2AC: e.target.checked,
                }))
              }
              className='mr-2 h-4 w-4 text-[#F97316] rounded border-gray-600 focus:ring-[#F97316]'
            />
            <span className='text-sm text-gray-800'>Level 2 AC</span>
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={selectedFilters.showTesla}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  showTesla: e.target.checked,
                }))
              }
              className='mr-2 h-4 w-4 text-[#F97316] rounded border-gray-600 focus:ring-[#F97316]'
            />
            <span className='text-sm text-gray-800'>Tesla Compatible</span>
          </label>
        </div>
      </div>

      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* 3km radius circle for selected location */}
        {selectedLocation && (
          <Circle
            center={[selectedLocation.latitude, selectedLocation.longitude]}
            radius={3000}
            pathOptions={circleStyle}
          />
        )}

        {/* Existing stations (red markers) */}
        {filteredExistingStations.map((station, index) => (
          <Marker
            key={`existing-${index}`}
            position={[station.latitude, station.longitude]}
            icon={redIcon}
            eventHandlers={{
              click: () => onLocationSelect(station),
            }}
          >
            <Popup className='custom-popup' maxWidth={250}>
              <div className='p-3 min-w-[200px] max-w-[250px] bg-white rounded-lg shadow-lg'>
                <div className='border-b border-gray-200 pb-2'>
                  <div className='flex items-center justify-between'>
                    <p className='font-bold text-base text-gray-800'>
                      {station.name}
                    </p>
                    <span className='px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium'>
                      Existing
                    </span>
                  </div>
                  <div className='flex items-center gap-2 mt-1'>
                    <span className='px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium'>
                      {station.type}
                    </span>
                  </div>
                </div>

                <div className='mt-2 space-y-2'>
                  <div className='bg-gray-50 rounded p-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-xs text-gray-600'>Base Rate</span>
                      <span className='text-xs font-medium text-gray-800'>
                        ₹{station.ratePerKWh}/kWh
                      </span>
                    </div>
                    <div className='flex justify-between items-center mt-1'>
                      <span className='text-xs text-gray-600'>
                        Peak Surcharge
                      </span>
                      <span className='text-xs font-medium text-gray-800'>
                        +₹{station.peakHourSurcharge}/kWh
                      </span>
                    </div>
                    <div className='flex justify-between items-center mt-1'>
                      <span className='text-xs text-gray-600'>
                        Member Discount
                      </span>
                      <span className='text-xs font-medium text-gray-800'>
                        -₹{station.membershipDiscount}/kWh
                      </span>
                    </div>
                  </div>

                  <div className='bg-gray-50 rounded p-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-xs text-gray-600'>Coordinates</span>
                      <span className='text-xs font-medium text-gray-800'>
                        {station.latitude.toFixed(4)},{" "}
                        {station.longitude.toFixed(4)}
                      </span>
                    </div>
                  </div>

                  <div className='bg-gray-50 rounded p-2'>
                    <p className='text-xs font-medium text-gray-700 mb-1'>
                      Peak Hours
                    </p>
                    <div className='grid grid-cols-2 gap-2'>
                      <div className='bg-white rounded p-1 border border-gray-200'>
                        <p className='text-xs text-gray-600'>Morning</p>
                        <p className='text-xs font-medium text-gray-800'>
                          7:00 - 10:00
                        </p>
                      </div>
                      <div className='bg-white rounded p-1 border border-gray-200'>
                        <p className='text-xs text-gray-600'>Evening</p>
                        <p className='text-xs font-medium text-gray-800'>
                          17:00 - 20:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Potential locations (green markers) */}
        {filteredPotentialStations.map((location, index) => (
          <Marker
            key={`potential-${index}`}
            position={[location.latitude, location.longitude]}
            icon={greenIcon}
            eventHandlers={{
              click: () => onLocationSelect(location),
            }}
          >
            <Popup className='custom-popup' maxWidth={250}>
              <div className='p-3 min-w-[200px] max-w-[250px] bg-white rounded-lg shadow-lg'>
                <div className='border-b border-gray-200 pb-2'>
                  <div className='flex items-center justify-between'>
                    <p className='font-bold text-base text-gray-800'>
                      {location.name}
                    </p>
                    <span className='px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium'>
                      Potential
                    </span>
                  </div>
                  <div className='flex items-center gap-2 mt-1'>
                    <span className='px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium'>
                      {location.type}
                    </span>
                    <span className='px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium'>
                      Score: {(location.score * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className='mt-2 space-y-2'>
                  <div className='bg-gray-50 rounded p-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-xs text-gray-600'>Base Rate</span>
                      <span className='text-xs font-medium text-gray-800'>
                        ₹{location.proposedRatePerKWh}/kWh
                      </span>
                    </div>
                    <div className='flex justify-between items-center mt-1'>
                      <span className='text-xs text-gray-600'>
                        Peak Surcharge
                      </span>
                      <span className='text-xs font-medium text-gray-800'>
                        +₹{location.peakHourSurcharge}/kWh
                      </span>
                    </div>
                    <div className='flex justify-between items-center mt-1'>
                      <span className='text-xs text-gray-600'>
                        Member Discount
                      </span>
                      <span className='text-xs font-medium text-gray-800'>
                        -₹{location.membershipDiscount}/kWh
                      </span>
                    </div>
                  </div>

                  <div className='bg-gray-50 rounded p-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-xs text-gray-600'>
                        Est. Traffic
                      </span>
                      <span className='text-xs font-medium text-gray-800'>
                        {location.estimatedDailyTraffic} vehicles
                      </span>
                    </div>
                    <div className='flex justify-between items-center mt-1'>
                      <span className='text-xs text-gray-600'>Coordinates</span>
                      <span className='text-xs font-medium text-gray-800'>
                        {location.latitude.toFixed(4)},{" "}
                        {location.longitude.toFixed(4)}
                      </span>
                    </div>
                  </div>

                  <div className='bg-gray-50 rounded p-2'>
                    <p className='text-xs font-medium text-gray-700 mb-1'>
                      Peak Hours
                    </p>
                    <div className='grid grid-cols-2 gap-2'>
                      <div className='bg-white rounded p-1 border border-gray-200'>
                        <p className='text-xs text-gray-600'>Morning</p>
                        <p className='text-xs font-medium text-gray-800'>
                          7:00 - 10:00
                        </p>
                      </div>
                      <div className='bg-white rounded p-1 border border-gray-200'>
                        <p className='text-xs text-gray-600'>Evening</p>
                        <p className='text-xs font-medium text-gray-800'>
                          17:00 - 20:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Selected location (blue marker) */}
        {selectedLocation && (
          <Marker
            position={[selectedLocation.latitude, selectedLocation.longitude]}
            icon={blueIcon}
          >
            <Popup className='custom-popup'>
              <div className='p-3 min-w-[200px] max-w-[250px] bg-white rounded-lg shadow-lg'>
                <div className='border-b border-gray-200 pb-2'>
                  <div className='flex items-center justify-between'>
                    <p className='font-bold text-base text-gray-800'>
                      {selectedLocation.name}
                    </p>
                    <span className='px-2 py-0.5 bg-blue-500 text-white rounded-full text-xs font-medium'>
                      Selected
                    </span>
                  </div>
                  <div className='flex items-center gap-2 mt-1'>
                    <span className='px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium'>
                      {selectedLocation.type}
                    </span>
                    {selectedLocation.score && (
                      <span className='px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium'>
                        Score: {(selectedLocation.score * 100).toFixed(1)}%
                      </span>
                    )}
                  </div>
                </div>
                <div className='mt-2 p-2 bg-gray-50 rounded'>
                  <p className='text-xs text-gray-500'>
                    Base Rate: ₹
                    {selectedLocation.ratePerKWh ||
                      selectedLocation.proposedRatePerKWh}
                    /kWh
                  </p>
                  <p className='text-xs text-gray-500'>
                    Peak Hour Surcharge: +₹{selectedLocation.peakHourSurcharge}
                    /kWh
                  </p>
                  <p className='text-xs text-gray-500'>
                    Member Discount: -₹{selectedLocation.membershipDiscount}/kWh
                  </p>
                  <p className='text-xs text-gray-500 mt-1'>
                    Coordinates: {selectedLocation.latitude.toFixed(4)},{" "}
                    {selectedLocation.longitude.toFixed(4)}
                  </p>
                </div>
                <PeakHoursInfo station={selectedLocation} />
              </div>
            </Popup>
          </Marker>
        )}

        {/* Legend */}
        <div className='absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 text-sm z-[1000]'>
          <div className='flex items-center mb-2'>
            <div className='w-4 h-4 bg-blue-500 mr-2 rounded-full'></div>
            <span className='font-medium text-gray-800'>Selected Location</span>
          </div>
          <div className='flex items-center mb-2'>
            <div className='w-4 h-4 bg-red-500 mr-2 rounded-full'></div>
            <span className='font-medium text-gray-800'>
              Existing Station ({filteredExistingStations.length})
            </span>
          </div>
          <div className='flex items-center'>
            <div className='w-4 h-4 bg-green-500 mr-2 rounded-full'></div>
            <span className='font-medium text-gray-800'>
              Potential Location ({filteredPotentialStations.length})
            </span>
          </div>
          <div className='mt-2 pt-2 border-t border-gray-200'>
            <div className='flex items-center'>
              <div className='w-4 h-4 border-2 border-[#F97316] border-dashed mr-2 rounded-full'></div>
              <span className='font-medium text-gray-800'>
                3km Service Radius
              </span>
            </div>
          </div>
        </div>
      </MapContainer>
    </div>
  );
};

export default LocationMap;

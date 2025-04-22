import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { existingStations, potentialStations, bangaloreCenter } from '@/data/bangaloreStations';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons for different types of locations
const createCustomIcon = (color) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });
};

const redIcon = createCustomIcon('red');
const greenIcon = createCustomIcon('green');
const blueIcon = createCustomIcon('blue');

// Circle style for 3km radius
const circleStyle = {
  color: '#F97316',
  fillColor: '#F97316',
  fillOpacity: 0.15,
  weight: 3,
  dashArray: '8, 12',
  className: 'radius-circle'
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
  const filteredExistingStations = existingStations.filter(station => {
    if (station.type === 'DC Fast Charging' && !selectedFilters.showDCFast) return false;
    if (station.type === 'Level 2 AC' && !selectedFilters.showLevel2AC) return false;
    if (station.type === 'Tesla Compatible' && !selectedFilters.showTesla) return false;
    return true;
  });

  const filteredPotentialStations = potentialStations.filter(station => {
    if (station.type === 'DC Fast Charging' && !selectedFilters.showDCFast) return false;
    if (station.type === 'Level 2 AC' && !selectedFilters.showLevel2AC) return false;
    if (station.type === 'Tesla Compatible' && !selectedFilters.showTesla) return false;
    return true;
  });

  return (
    <div className="relative h-[500px] w-full">
      {/* Filter Controls - Top Right */}
      <div className="absolute top-2 right-2 z-[1000] bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200">
        <div className="text-sm font-semibold mb-2 text-gray-800">Filter by Type:</div>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedFilters.showDCFast}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, showDCFast: e.target.checked }))}
              className="mr-2 h-4 w-4 text-[#F97316] rounded border-gray-600 focus:ring-[#F97316]"
            />
            <span className="text-sm text-gray-800">DC Fast Charging</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedFilters.showLevel2AC}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, showLevel2AC: e.target.checked }))}
              className="mr-2 h-4 w-4 text-[#F97316] rounded border-gray-600 focus:ring-[#F97316]"
            />
            <span className="text-sm text-gray-800">Level 2 AC</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedFilters.showTesla}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, showTesla: e.target.checked }))}
              className="mr-2 h-4 w-4 text-[#F97316] rounded border-gray-600 focus:ring-[#F97316]"
            />
            <span className="text-sm text-gray-800">Tesla Compatible</span>
          </label>
        </div>
      </div>

      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
              click: () => onLocationSelect(station)
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[200px]">
                <p className="font-bold text-base text-gray-800">{station.name}</p>
                <p className="text-sm text-gray-600 mt-1">{station.type}</p>
                <div className="mt-2 p-2 bg-gray-50 rounded">
                  <p className="text-xs text-gray-500">
                    Coordinates: {station.latitude.toFixed(4)}, {station.longitude.toFixed(4)}
                  </p>
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
              click: () => onLocationSelect(location)
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[200px]">
                <p className="font-bold text-base text-gray-800">{location.name}</p>
                <p className="text-sm text-gray-600 mt-1">{location.type}</p>
                <p className="text-sm font-medium text-emerald-600 mt-1">
                  Score: {(location.score * 100).toFixed(1)}%
                </p>
                <div className="mt-2 p-2 bg-gray-50 rounded">
                  <p className="text-xs text-gray-500">
                    Coordinates: {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
                  </p>
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
            <Popup className="custom-popup">
              <div className="p-2 min-w-[200px]">
                <p className="font-bold text-base text-gray-800">{selectedLocation.name}</p>
                <p className="text-sm text-gray-600 mt-1">{selectedLocation.type}</p>
                {selectedLocation.score && (
                  <p className="text-sm font-medium text-emerald-600 mt-1">
                    Score: {(selectedLocation.score * 100).toFixed(1)}%
                  </p>
                )}
                <div className="mt-2 p-2 bg-gray-50 rounded">
                  <p className="text-xs text-gray-500">
                    Coordinates: {selectedLocation.latitude.toFixed(4)}, {selectedLocation.longitude.toFixed(4)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Service Radius: 3km
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        )}
        
        {/* Legend */}
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 text-sm z-[1000]">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-blue-500 mr-2 rounded-full"></div>
            <span className="font-medium text-gray-800">Selected Location</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-red-500 mr-2 rounded-full"></div>
            <span className="font-medium text-gray-800">Existing Station ({filteredExistingStations.length})</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 mr-2 rounded-full"></div>
            <span className="font-medium text-gray-800">Potential Location ({filteredPotentialStations.length})</span>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-[#F97316] border-dashed mr-2 rounded-full"></div>
              <span className="font-medium text-gray-800">3km Service Radius</span>
            </div>
          </div>
        </div>
      </MapContainer>
    </div>
  );
};

export default LocationMap; 

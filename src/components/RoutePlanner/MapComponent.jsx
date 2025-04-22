import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icons
const defaultIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

const MapComponent = ({ currentLocation }) => {
  useEffect(() => {
    // Initialize map
    const map = L.map('map').setView(
      [currentLocation.lat, currentLocation.lng], 
      13
    );

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker for current location
    L.marker([currentLocation.lat, currentLocation.lng])
      .addTo(map)
      .bindPopup('Your current location')
      .openPopup();

    // Cleanup function
    return () => {
      map.remove();
    };
  }, [currentLocation]);

  return <div id="map" style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }} />;
};

export default MapComponent;
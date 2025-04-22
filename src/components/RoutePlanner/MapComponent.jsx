import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaChargingStation } from "react-icons/fa";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const myIcon = L.icon({
    iconUrl: "/icons/charging-station.png",
    iconSize: [19, 47],
    iconAnchor: [11, 47],
    popupAnchor: [-1.5, -38],
    shadowUrl: '/icons/charging-station.png',
    shadowSize: [34, 47],
    shadowAnchor: [11, 47]
});

const chargingStations = [
    [12.975668, 77.6413089], [13.0415766, 77.6204588], [12.9947371, 77.6993007], [12.9775829, 77.6389895], [12.9733967, 77.6357561], [12.9733738, 77.6357554], [12.9137732, 77.6441735], [12.9712776, 77.6078832], [12.9764825, 77.6268299], [12.9154635, 77.6158909], [12.9576825, 77.5684466], [12.9805484, 77.5978893], [12.9322172, 77.6142725], [12.916907, 77.6102709], [12.9710109, 77.597788], [12.9736666, 77.5830855], [12.9301946, 77.6148303], [12.9362684, 77.6076884], [12.9337755, 77.6236693], [12.9285835, 77.6241904], [12.9311453, 77.6238461], [12.977855, 77.5812757], [13.027001, 77.5425776], [12.9810756, 77.5966804], [13.0000143, 77.5499059], [12.965406, 77.6002473], [12.9781045, 77.6389105], [12.8894274, 77.5563647], [12.9383537, 77.5802162], [12.9217078, 77.5805052], [13.0330528, 77.533757], [12.993427, 77.7043141], [12.993427, 77.7043141], [12.97254135, 77.70781045000001], [12.951750605252137, 77.70245823562607]
];

const MapComponent = ({ start, destination }) => {
    // functions layer
    function haversineDistance(coord1, coord2) {
        const R = 6371e3; // meters
        // console.log("coord1:",coord1)
        const lat1 = coord1[1] * Math.PI / 180;
        const lon1 = coord1[0] * Math.PI / 180;
        const lat2 = coord2[0] * Math.PI / 180;
        const lon2 = coord2[1] * Math.PI / 180;

        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;

        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    let nearestStations = [];
    let nearestStationsEnd = [];
    // nearest stations from the start
    // console.log(start);
    // console.log(destination);
    chargingStations.forEach(cs => {
        const distance = haversineDistance(start, cs);
        nearestStations.push({ coords: cs, distance: distance });
    });

    // nearest stations from the end
    chargingStations.forEach(cs => {
        const distance = haversineDistance(destination, cs); // Assuming 'cs' is a [lat, lng] array
        nearestStationsEnd.push({ coords: cs, distance: distance });
    });
    nearestStations.sort((a, b) => a.distance - b.distance);
    nearestStationsEnd.sort((a, b) => a.distance - b.distance);

    let nearestStation = nearestStations[3].coords;
    // console.log("Nearest station: ", nearestStation);
    console.log(nearestStations);

    let nearestStationEnd = nearestStationsEnd[3].coords;
    // console.log("Nearest Station at the end", nearestStationEnd);
    // console.log("Bhai please hoga", start);

    let control;
    let control2;

    useEffect(() => {
        const map = L.map('map').setView([start[1], start[0]], 13);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        L.marker([start[1], start[0]]).addTo(map).bindPopup('Your current location').openPopup();
        L.marker([destination[1], destination[0]]).addTo(map).bindPopup('Your final location').openPopup();

        control = L.Routing.control({
            waypoints: [
                L.latLng(start[1], start[0]),               // lat, lng
                L.latLng(nearestStationEnd[0], nearestStationEnd[1]),
                L.latLng(destination[1], destination[0])
            ],
            lineOptions: {
                styles: [
                    { color: 'blue', opacity: 0.8, weight: 6 }
                ]
            },
            routeWhileDragging: true,
        })
            .on('routesfound', function (e) {
                const summary = e.routes[0].summary;
                console.log('Total Distance:', (summary.totalDistance / 1000).toFixed(2), 'km');
                console.log('Total Time:', (summary.totalTime / 60).toFixed(2), 'minutes');
            })
            .addTo(map);

        control2 = L.Routing.control({
            waypoints: [
                L.latLng(start[1], start[0]),               // lat, lng
                L.latLng(nearestStation[0], nearestStation[1]),
                L.latLng(destination[1], destination[0])
            ],
            
            routeWhileDragging: true,
        })
            .on('routesfound', function (e) {
                const summary = e.routes[0].summary;
                console.log('Total Distance:', (summary.totalDistance / 1000).toFixed(2), 'km');
                console.log('Total Time:', (summary.totalTime / 60).toFixed(2), 'minutes');
            })
            .addTo(map);

        L.marker(nearestStation, { icon: myIcon }).addTo(map).bindPopup("EV Charging Station");
        L.marker(nearestStationEnd, { icon: myIcon }).addTo(map).bindPopup("EV Charging Station");

        return () => {
            map.remove(); // Cleans up map on re-render
        };
    }, [start, destination]);

    return <div id="map" style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }} />;
};

export default MapComponent;
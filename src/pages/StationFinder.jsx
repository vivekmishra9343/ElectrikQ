import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BookingModal from "@/components/BookingModal";
import { stations } from "@/data/stations";
import {
  FaChargingStation,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaWifi,
  FaCoffee,
  FaRestroom,
} from "react-icons/fa";

const StationFinder = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);

  const filteredStations = stations.filter((station) => {
    const typeMatch = selectedType === "all" || station.type === selectedType;
    const amenitiesMatch =
      selectedAmenities.length === 0 ||
      selectedAmenities.every((amenity) => station.amenities.includes(amenity));
    return typeMatch && amenitiesMatch;
  });

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleBookSlot = (bookingData) => {
    // Here you would typically make an API call to save the booking
    console.log("Booking data:", bookingData);
    // For now, we'll just show an alert
    alert("Slot booked successfully!");
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-[#1a0c02] to-[#F97316]'>
      <Navbar />
      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pt-24'>
        {/* Page Title */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>
            Find Charging Stations
          </h1>
          <p className='text-gray-300'>Discover charging stations near you</p>
        </div>

        {/* Filters */}
        <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Station Type Filter */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>Station Type</h3>
              <div className='flex flex-wrap gap-2'>
                <button
                  onClick={() => setSelectedType("all")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedType === "all"
                      ? "bg-[#F97316] text-white"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  All Types
                </button>
                <button
                  onClick={() => setSelectedType("DC Fast Charging")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedType === "DC Fast Charging"
                      ? "bg-[#F97316] text-white"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  DC Fast Charging
                </button>
                <button
                  onClick={() => setSelectedType("Level 2 AC")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedType === "Level 2 AC"
                      ? "bg-[#F97316] text-white"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  Level 2 AC
                </button>
              </div>
            </div>

            {/* Amenities Filter */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>Amenities</h3>
              <div className='flex flex-wrap gap-2'>
                {["Restroom", "Cafe", "WiFi", "Rest Area", "24/7 Access"].map(
                  (amenity) => (
                    <button
                      key={amenity}
                      onClick={() => handleAmenityToggle(amenity)}
                      className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                        selectedAmenities.includes(amenity)
                          ? "bg-[#F97316] text-white"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      {amenity === "Restroom" && <FaRestroom />}
                      {amenity === "Cafe" && <FaCoffee />}
                      {amenity === "WiFi" && <FaWifi />}
                      {amenity === "Rest Area" && <FaChargingStation />}
                      {amenity === "24/7 Access" && <FaClock />}
                      {amenity}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stations List */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredStations.map((station) => (
            <div
              key={station.id}
              className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white hover:bg-white/15 transition-colors'
            >
              <div className='flex items-start justify-between mb-4'>
                <div>
                  <h3 className='text-xl font-semibold mb-1'>{station.name}</h3>
                  <div className='flex items-center gap-2 text-gray-300'>
                    <FaMapMarkerAlt />
                    <span>{station.location}</span>
                  </div>
                </div>
                <div className='flex items-center gap-1'>
                  <FaStar className='text-yellow-400' />
                  <span>{station.rating}</span>
                  <span className='text-gray-400'>({station.reviews})</span>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-300'>Type</span>
                  <span className='font-medium'>{station.type}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-300'>Power Output</span>
                  <span className='font-medium'>{station.powerOutput}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-300'>Rate per kWh</span>
                  <span className='font-medium'>₹{station.ratePerKWh}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-300'>Available Chargers</span>
                  <span className='font-medium'>
                    {station.availableChargers}/{station.totalChargers}
                  </span>
                </div>

                <div className='pt-4 border-t border-white/10'>
                  <h4 className='text-sm font-semibold mb-2'>Amenities</h4>
                  <div className='flex flex-wrap gap-2'>
                    {station.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className='px-2 py-1 bg-white/5 rounded text-sm'
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='pt-4 border-t border-white/10'>
                  <h4 className='text-sm font-semibold mb-2'>
                    Connector Types
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {station.connectorTypes.map((type) => (
                      <span
                        key={type}
                        className='px-2 py-1 bg-white/5 rounded text-sm'
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedStation(station);
                    setIsBookingModalOpen(true);
                  }}
                  className='w-full mt-4 bg-[#F97316] text-white py-2 px-4 rounded-md hover:bg-[#EA580C] transition-colors'
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        station={selectedStation}
        onBook={handleBookSlot}
      />
    </div>
  );
};

export default StationFinder;

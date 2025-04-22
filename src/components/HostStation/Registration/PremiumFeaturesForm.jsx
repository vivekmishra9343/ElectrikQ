import React from "react";
import { FaWifi, FaRestroom, FaParking, FaChargingStation } from "react-icons/fa";

const PremiumFeaturesForm = () => {
  const amenities = [
    { icon: <FaWifi />, label: "Free Wi-Fi" },
    { icon: <FaRestroom />, label: "Restrooms" },
    { icon: <FaParking />, label: "Parking" },
    { icon: <FaChargingStation />, label: "Multiple Ports" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Essential Features</h3>
      
      {/* Amenities */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 text-gray-300">Available Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {amenities.map((amenity, index) => (
            <label 
              key={index}
              className="flex items-center p-3 bg-white/5 border border-gray-600 rounded-lg cursor-pointer hover:border-[#F97316] transition-colors group"
            >
              <input type="checkbox" className="hidden" />
              <div className="flex items-center space-x-3">
                <div className="text-gray-400 group-hover:text-[#F97316] transition-colors">
                  {amenity.icon}
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {amenity.label}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Pricing Options */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 text-gray-300">Pricing Options</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Base Rate (per kWh)</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">₹</span>
              <input 
                type="number" 
                className="w-full bg-white/5 border border-gray-600 rounded-lg pl-8 pr-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
                placeholder="0.00"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Peak Hours Rate</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">₹</span>
              <input 
                type="number" 
                className="w-full bg-white/5 border border-gray-600 rounded-lg pl-8 pr-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Operating Hours */}
      <div>
        <label className="block text-sm font-medium mb-3 text-gray-300">Operating Hours</label>
        <div className="space-y-3">
          <label className="flex items-center p-3 bg-white/5 border border-gray-600 rounded-lg cursor-pointer hover:border-[#F97316] transition-colors">
            <input type="radio" name="operatingHours" className="form-radio h-4 w-4 text-[#F97316] border-gray-600 bg-transparent focus:ring-[#F97316]" />
            <span className="ml-3">
              <span className="block text-sm text-white">24/7 Access</span>
              <span className="block text-xs text-gray-400">Available around the clock</span>
            </span>
          </label>
          <label className="flex items-center p-3 bg-white/5 border border-gray-600 rounded-lg cursor-pointer hover:border-[#F97316] transition-colors">
            <input type="radio" name="operatingHours" className="form-radio h-4 w-4 text-[#F97316] border-gray-600 bg-transparent focus:ring-[#F97316]" />
            <span className="ml-3">
              <span className="block text-sm text-white">Limited Hours</span>
              <span className="block text-xs text-gray-400">Available during specific times</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeaturesForm;
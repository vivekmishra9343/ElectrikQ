import React, { useState } from "react";

const StationDetailsForm = ({ onFormDataChange }) => {
  const [formData, setFormData] = useState({
    stationName: "",
    stationType: "",
    numberOfChargers: 1,
    powerOutput: "",
    connectorTypes: [],
    amenities: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    onFormDataChange?.(formData);
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
    onFormDataChange?.(formData);
  };

  const handleStationTypeSelect = (type) => {
    setFormData((prev) => ({
      ...prev,
      stationType: type,
    }));
    onFormDataChange?.(formData);
  };

  return (
    <div className='space-y-6'>
      <div>
        <label className='block text-sm font-medium text-gray-300 mb-2'>
          Station Name
        </label>
        <input
          type='text'
          name='stationName'
          value={formData.stationName}
          onChange={handleInputChange}
          className='w-full bg-white/10 border border-gray-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]'
          placeholder='Enter your station name'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-300 mb-2'>
          Number of Chargers
        </label>
        <input
          type='number'
          name='numberOfChargers'
          value={formData.numberOfChargers}
          onChange={handleInputChange}
          min='1'
          className='w-full bg-white/10 border border-gray-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-300 mb-2'>
          Power Output (kW)
        </label>
        <input
          type='text'
          name='powerOutput'
          value={formData.powerOutput}
          onChange={handleInputChange}
          className='w-full bg-white/10 border border-gray-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]'
          placeholder='e.g., 50kW'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-300 mb-2'>
          Connector Types
        </label>
        <div className='space-y-2'>
          {["Type 2", "CCS", "CHAdeMO", "Tesla"].map((type) => (
            <label key={type} className='flex items-center space-x-2'>
              <input
                type='checkbox'
                name='connectorTypes'
                value={type}
                checked={formData.connectorTypes.includes(type)}
                onChange={handleCheckboxChange}
                className='h-4 w-4 text-[#F97316] rounded border-gray-600 focus:ring-[#F97316]'
              />
              <span className='text-sm text-gray-300'>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-300 mb-2'>
          Amenities
        </label>
        <div className='space-y-2'>
          {["Restroom", "Cafe", "WiFi", "Rest Area", "24/7 Access"].map(
            (amenity) => (
              <label key={amenity} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  name='amenities'
                  value={amenity}
                  checked={formData.amenities.includes(amenity)}
                  onChange={handleCheckboxChange}
                  className='h-4 w-4 text-[#F97316] rounded border-gray-600 focus:ring-[#F97316]'
                />
                <span className='text-sm text-gray-300'>{amenity}</span>
              </label>
            )
          )}
        </div>
      </div>

      <h3 className='text-xl font-bold mt-6 mb-4'>Charging Options</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {[
          {
            type: "Level 2 AC",
            power: "Up to 19 kW",
            features: [
              "Most common for residential",
              "4-8 hours charging time",
            ],
          },
          {
            type: "DC Fast Charging",
            power: "50+ kW",
            features: ["Rapid charging solution", "30-60 minutes charging"],
          },
          {
            type: "Tesla Compatible",
            power: "With adapter",
            features: ["Tesla adapter support", "Access larger customer base"],
          },
        ].map((option) => (
          <div
            key={option.type}
            className={`bg-white/5 border ${
              formData.stationType === option.type
                ? "border-[#F97316]"
                : "border-gray-600"
            } rounded-lg p-4 hover:border-[#F97316] transition-colors cursor-pointer`}
            onClick={() => handleStationTypeSelect(option.type)}
          >
            <div className='font-semibold text-white mb-1'>{option.type}</div>
            <div className='text-sm text-gray-400'>{option.power}</div>
            <div className='mt-2 text-xs text-gray-300'>
              {option.features.map((feature, index) => (
                <div key={index}>✓ {feature}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationDetailsForm;

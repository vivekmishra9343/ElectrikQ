import React, { useState } from "react";

const PeakHoursInfo = ({ station }) => {
  const [selectedHour, setSelectedHour] = useState(new Date().getHours());

  const peakHours = {
    morning: { start: 7, end: 10 },
    evening: { start: 17, end: 20 },
  };

  const isPeakHour = (hour) => {
    return (
      (hour >= peakHours.morning.start && hour < peakHours.morning.end) ||
      (hour >= peakHours.evening.start && hour < peakHours.evening.end)
    );
  };

  const calculateRate = (hour) => {
    const baseRate = station.ratePerKWh || station.proposedRatePerKWh;
    const surcharge = isPeakHour(hour) ? station.peakHourSurcharge || 0 : 0;
    const memberDiscount = station.membershipDiscount || 0;
    return baseRate + surcharge - memberDiscount;
  };

  return (
    <div className='bg-gray-50 rounded-lg p-3'>
      <h4 className='text-sm font-semibold text-gray-700 mb-3'>
        Peak Hours & Rates
      </h4>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div className='bg-white rounded-lg p-2 border border-gray-200'>
          <p className='text-xs font-medium text-gray-600'>Morning Peak</p>
          <p className='text-sm font-semibold text-gray-800'>
            {peakHours.morning.start}:00 - {peakHours.morning.end}:00
          </p>
        </div>
        <div className='bg-white rounded-lg p-2 border border-gray-200'>
          <p className='text-xs font-medium text-gray-600'>Evening Peak</p>
          <p className='text-sm font-semibold text-gray-800'>
            {peakHours.evening.start}:00 - {peakHours.evening.end}:00
          </p>
        </div>
      </div>

      <div className='mb-4'>
        <label className='block text-xs font-medium text-gray-600 mb-2'>
          Select Hour to Check Rate
        </label>
        <select
          value={selectedHour}
          onChange={(e) => setSelectedHour(parseInt(e.target.value))}
          className='w-full bg-white border border-gray-300 rounded-lg p-2 text-sm text-gray-800 focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]'
        >
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i} className='bg-white text-gray-800'>
              {i.toString().padStart(2, "0")}:00
            </option>
          ))}
        </select>
      </div>

      <div className='bg-white rounded-lg p-3 border border-gray-200'>
        <div className='flex justify-between items-center mb-1'>
          <p className='text-sm text-gray-600'>
            Rate at {selectedHour.toString().padStart(2, "0")}:00
          </p>
          {isPeakHour(selectedHour) && (
            <span className='px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium'>
              Peak Hour
            </span>
          )}
        </div>
        <p className='text-xl font-bold text-[#F97316]'>
          ₹{calculateRate(selectedHour).toFixed(2)}/kWh
        </p>
        {isPeakHour(selectedHour) && (
          <p className='text-xs text-yellow-600 mt-1'>
            Includes peak hour surcharge
          </p>
        )}
      </div>
    </div>
  );
};

export default PeakHoursInfo;

import React from "react";
import { FaCar, FaChartLine, FaCalendarAlt } from "react-icons/fa";

const VehicleStats = () => {
  // Dummy data - replace with actual data from your backend
  const statsData = {
    totalVehicles: 45,
    todayVehicles: 12,
    averageChargingTime: "45 min",
    popularModels: [
      { model: "Tesla Model 3", count: 15 },
      { model: "Nexon EV", count: 10 },
      { model: "MG ZS EV", count: 8 },
    ],
    peakHours: [
      { hour: "9:00 AM", count: 5 },
      { hour: "2:00 PM", count: 7 },
      { hour: "6:00 PM", count: 8 },
    ],
  };

  return (
    <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
      <h2 className='text-2xl font-bold mb-4'>Vehicle Statistics</h2>

      <div className='space-y-6'>
        {/* Summary Stats */}
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <FaCar className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Total Vehicles</span>
            </div>
            <p className='text-2xl font-bold'>{statsData.totalVehicles}</p>
          </div>

          <div className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <FaCalendarAlt className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Today</span>
            </div>
            <p className='text-2xl font-bold'>{statsData.todayVehicles}</p>
          </div>

          <div className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <FaChartLine className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Avg. Time</span>
            </div>
            <p className='text-2xl font-bold'>
              {statsData.averageChargingTime}
            </p>
          </div>
        </div>

        {/* Popular Models */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Popular Models</h3>
          <div className='space-y-2'>
            {statsData.popularModels.map((model, index) => (
              <div
                key={index}
                className='flex items-center justify-between bg-white/5 rounded-lg p-3'
              >
                <span className='text-sm'>{model.model}</span>
                <span className='text-sm font-medium'>
                  {model.count} vehicles
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hours */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Peak Hours</h3>
          <div className='space-y-2'>
            {statsData.peakHours.map((peak, index) => (
              <div
                key={index}
                className='flex items-center justify-between bg-white/5 rounded-lg p-3'
              >
                <span className='text-sm'>{peak.hour}</span>
                <span className='text-sm font-medium'>
                  {peak.count} vehicles
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleStats;

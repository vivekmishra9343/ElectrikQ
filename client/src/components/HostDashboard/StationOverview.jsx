import React from "react";
import {
  FaChargingStation,
  FaCar,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

const StationOverview = () => {
  // Dummy data - replace with actual data from your backend
  const stationData = {
    name: "Tata Power Charging Station",
    type: "DC Fast Charging",
    status: "Active",
    totalChargers: 4,
    availableChargers: 2,
    currentVehicles: 2,
    todayEarnings: 2500,
    todayChargingTime: "8.5 hours",
  };

  return (
    <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
      <h2 className='text-2xl font-bold mb-4'>Station Overview</h2>

      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-lg font-semibold'>{stationData.name}</h3>
            <p className='text-sm text-gray-300'>{stationData.type}</p>
          </div>
          <span className='px-3 py-1 bg-green-500 text-white rounded-full text-sm'>
            {stationData.status}
          </span>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <FaChargingStation className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Chargers</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-2xl font-bold'>
                {stationData.availableChargers}
              </span>
              <span className='text-sm text-gray-400'>
                / {stationData.totalChargers}
              </span>
            </div>
          </div>

          <div className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <FaCar className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Current Vehicles</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-2xl font-bold'>
                {stationData.currentVehicles}
              </span>
              <span className='text-sm text-gray-400'>charging</span>
            </div>
          </div>

          <div className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <FaClock className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Today's Usage</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-2xl font-bold'>
                {stationData.todayChargingTime}
              </span>
            </div>
          </div>

          <div className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <FaMoneyBillWave className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Today's Earnings</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-2xl font-bold'>
                ₹{stationData.todayEarnings}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationOverview;

import React from "react";
import { FaBolt, FaClock, FaExclamationTriangle } from "react-icons/fa";

const StationStatus = () => {
  // Dummy data - replace with actual data from your backend
  const chargingPoints = [
    {
      id: 1,
      name: "Point A",
      status: "In Use",
      currentUser: "John D.",
      timeRemaining: "15 min",
      power: "50 kW",
      type: "CCS",
    },
    {
      id: 2,
      name: "Point B",
      status: "Available",
      power: "50 kW",
      type: "CHAdeMO",
    },
    {
      id: 3,
      name: "Point C",
      status: "Maintenance",
      issue: "Hardware fault",
      type: "Type 2",
    },
    {
      id: 4,
      name: "Point D",
      status: "Available",
      power: "22 kW",
      type: "Type 2",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Use":
        return "bg-blue-500";
      case "Available":
        return "bg-green-500";
      case "Maintenance":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "In Use":
        return <FaBolt />;
      case "Available":
        return <FaClock />;
      case "Maintenance":
        return <FaExclamationTriangle />;
      default:
        return null;
    }
  };

  return (
    <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
      <h2 className='text-2xl font-bold mb-4'>Charging Points Status</h2>

      <div className='space-y-4'>
        {chargingPoints.map((point) => (
          <div key={point.id} className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center justify-between mb-2'>
              <div className='flex items-center gap-2'>
                <div
                  className={`p-2 rounded-lg ${getStatusColor(point.status)}`}
                >
                  {getStatusIcon(point.status)}
                </div>
                <div>
                  <h3 className='font-semibold'>{point.name}</h3>
                  <p className='text-sm text-gray-300'>{point.type}</p>
                </div>
              </div>
              <span className='text-sm font-medium'>{point.status}</span>
            </div>

            {point.status === "In Use" && (
              <div className='mt-2 grid grid-cols-2 gap-4 text-sm'>
                <div>
                  <p className='text-gray-300'>Current User</p>
                  <p className='font-medium'>{point.currentUser}</p>
                </div>
                <div>
                  <p className='text-gray-300'>Time Remaining</p>
                  <p className='font-medium'>{point.timeRemaining}</p>
                </div>
              </div>
            )}

            {point.status === "Available" && (
              <div className='mt-2 text-sm'>
                <p className='text-gray-300'>Power Output</p>
                <p className='font-medium'>{point.power}</p>
              </div>
            )}

            {point.status === "Maintenance" && (
              <div className='mt-2 text-sm'>
                <p className='text-gray-300'>Issue</p>
                <p className='font-medium text-yellow-400'>{point.issue}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationStatus;

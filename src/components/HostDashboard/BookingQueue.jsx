import React from "react";
import { FaCar, FaClock, FaBatteryThreeQuarters, FaUser } from "react-icons/fa";

const BookingQueue = () => {
  // Dummy data - replace with actual data from your backend
  const queueData = [
    {
      id: 1,
      vehicleModel: "Tesla Model 3",
      licensePlate: "KA 01 AB 1234",
      estimatedArrival: "10:30 AM",
      batteryLevel: 25,
      chargingTime: "30 min",
      customerName: "John Doe",
      status: "In Queue",
    },
    {
      id: 2,
      vehicleModel: "Nexon EV",
      licensePlate: "KA 02 CD 5678",
      estimatedArrival: "11:00 AM",
      batteryLevel: 35,
      chargingTime: "45 min",
      customerName: "Jane Smith",
      status: "Scheduled",
    },
    {
      id: 3,
      vehicleModel: "MG ZS EV",
      licensePlate: "KA 03 EF 9012",
      estimatedArrival: "11:30 AM",
      batteryLevel: 20,
      chargingTime: "60 min",
      customerName: "Mike Johnson",
      status: "Scheduled",
    },
  ];

  return (
    <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
      <h2 className='text-2xl font-bold mb-4'>Booking Queue</h2>

      <div className='space-y-4'>
        {queueData.map((booking) => (
          <div key={booking.id} className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center justify-between mb-3'>
              <div className='flex items-center gap-2'>
                <FaCar className='text-[#F97316]' />
                <div>
                  <h3 className='font-semibold'>{booking.vehicleModel}</h3>
                  <p className='text-sm text-gray-300'>
                    {booking.licensePlate}
                  </p>
                </div>
              </div>
              <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm'>
                {booking.status}
              </span>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex items-center gap-2'>
                <FaClock className='text-[#F97316]' />
                <div>
                  <p className='text-sm text-gray-300'>Arrival</p>
                  <p className='font-medium'>{booking.estimatedArrival}</p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <FaBatteryThreeQuarters className='text-[#F97316]' />
                <div>
                  <p className='text-sm text-gray-300'>Battery Level</p>
                  <p className='font-medium'>{booking.batteryLevel}%</p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <FaClock className='text-[#F97316]' />
                <div>
                  <p className='text-sm text-gray-300'>Charging Time</p>
                  <p className='font-medium'>{booking.chargingTime}</p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <FaUser className='text-[#F97316]' />
                <div>
                  <p className='text-sm text-gray-300'>Customer</p>
                  <p className='font-medium'>{booking.customerName}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingQueue;

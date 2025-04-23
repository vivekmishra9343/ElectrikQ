import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {
  FaStar,
  FaHistory,
  FaMapMarkerAlt,
  FaChargingStation,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

const UserDashboard = () => {
  // Dummy data - replace with actual data from your backend
  const userData = {
    name: "John Doe",
    memberSince: "January 2024",
    totalChargingSessions: 45,
    totalKWhCharged: 850,
    averageRating: 4.8,
    totalSpent: 12500,
  };

  const recentBookings = [
    {
      id: 1,
      stationName: "Tata Power Charging Station",
      location: "Koramangala, Bangalore",
      date: "2024-03-15",
      time: "14:30 - 15:45",
      energyCharged: "45 kWh",
      amount: "₹810",
      status: "Completed",
    },
    {
      id: 2,
      stationName: "EV Station Hub",
      location: "Indiranagar, Bangalore",
      date: "2024-03-14",
      time: "10:15 - 11:30",
      energyCharged: "35 kWh",
      amount: "₹525",
      status: "Completed",
    },
    {
      id: 3,
      stationName: "Green Energy Station",
      location: "Whitefield, Bangalore",
      date: "2024-03-13",
      time: "16:00 - 17:15",
      energyCharged: "50 kWh",
      amount: "₹1000",
      status: "Completed",
    },
  ];

  const recentStations = [
    {
      id: 1,
      name: "Tata Power Charging Station",
      location: "Koramangala, Bangalore",
      lastVisited: "2024-03-15",
      visits: 12,
      rating: 4.5,
    },
    {
      id: 2,
      name: "EV Station Hub",
      location: "Indiranagar, Bangalore",
      lastVisited: "2024-03-14",
      visits: 8,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Green Energy Station",
      location: "Whitefield, Bangalore",
      lastVisited: "2024-03-13",
      visits: 5,
      rating: 4.8,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-[#1a0c02] to-[#F97316]'>
      <Navbar />
      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pt-24'>
        {/* Page Title */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>User Dashboard</h1>
          <p className='text-gray-300'>Welcome back, {userData.name}</p>
        </div>

        {/* User Stats */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <div className='flex items-center gap-2 mb-2'>
              <FaChargingStation className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Total Sessions</span>
            </div>
            <p className='text-2xl font-bold'>
              {userData.totalChargingSessions}
            </p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <div className='flex items-center gap-2 mb-2'>
              <FaClock className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Total kWh Charged</span>
            </div>
            <p className='text-2xl font-bold'>{userData.totalKWhCharged} kWh</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <div className='flex items-center gap-2 mb-2'>
              <FaStar className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Average Rating</span>
            </div>
            <p className='text-2xl font-bold'>{userData.averageRating}</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <div className='flex items-center gap-2 mb-2'>
              <FaMoneyBillWave className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Total Spent</span>
            </div>
            <p className='text-2xl font-bold'>₹{userData.totalSpent}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Recent Bookings */}
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <h2 className='text-2xl font-bold mb-4'>Recent Bookings</h2>
            <div className='space-y-4'>
              {recentBookings.map((booking) => (
                <div key={booking.id} className='bg-white/5 rounded-lg p-4'>
                  <div className='flex items-start justify-between mb-2'>
                    <div>
                      <h3 className='font-semibold'>{booking.stationName}</h3>
                      <div className='flex items-center gap-2 text-gray-300 text-sm'>
                        <FaMapMarkerAlt />
                        <span>{booking.location}</span>
                      </div>
                    </div>
                    <span className='px-3 py-1 bg-green-500 text-white rounded-full text-sm'>
                      {booking.status}
                    </span>
                  </div>
                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div>
                      <p className='text-gray-300'>Date</p>
                      <p className='font-medium'>{booking.date}</p>
                    </div>
                    <div>
                      <p className='text-gray-300'>Time</p>
                      <p className='font-medium'>{booking.time}</p>
                    </div>
                    <div>
                      <p className='text-gray-300'>Energy Charged</p>
                      <p className='font-medium'>{booking.energyCharged}</p>
                    </div>
                    <div>
                      <p className='text-gray-300'>Amount</p>
                      <p className='font-medium'>{booking.amount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Stations */}
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <h2 className='text-2xl font-bold mb-4'>
              Recently Visited Stations
            </h2>
            <div className='space-y-4'>
              {recentStations.map((station) => (
                <div key={station.id} className='bg-white/5 rounded-lg p-4'>
                  <div className='flex items-start justify-between mb-2'>
                    <div>
                      <h3 className='font-semibold'>{station.name}</h3>
                      <div className='flex items-center gap-2 text-gray-300 text-sm'>
                        <FaMapMarkerAlt />
                        <span>{station.location}</span>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400' />
                      <span>{station.rating}</span>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div>
                      <p className='text-gray-300'>Last Visited</p>
                      <p className='font-medium'>{station.lastVisited}</p>
                    </div>
                    <div>
                      <p className='text-gray-300'>Total Visits</p>
                      <p className='font-medium'>{station.visits}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;

import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StationOverview from "@/components/HostDashboard/StationOverview";
import BookingQueue from "@/components/HostDashboard/BookingQueue";
import EarningsChart from "@/components/HostDashboard/EarningsChart";
import VehicleStats from "@/components/HostDashboard/VehicleStats";
import StationStatus from "@/components/HostDashboard/StationStatus";
import {
  FaChargingStation,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";

const HostDashboard = () => {
  // Dummy data - replace with actual data from your backend
  const hostData = {
    name: "EV Station Hub",
    totalStations: 3,
    totalBookings: 45,
    averageRating: 4.5,
    totalRevenue: 25000,
  };

  const [bookedSlots, setBookedSlots] = useState([
    {
      id: 1,
      stationName: "EV Station Hub - Main",
      location: "Indiranagar, Bangalore",
      date: "2024-03-20",
      time: "14:30 - 15:45",
      user: "John Doe",
      status: "Pending",
    },
    {
      id: 2,
      stationName: "EV Station Hub - Branch 1",
      location: "Koramangala, Bangalore",
      date: "2024-03-21",
      time: "10:15 - 11:30",
      user: "Jane Smith",
      status: "Confirmed",
    },
    {
      id: 3,
      stationName: "EV Station Hub - Branch 2",
      location: "Whitefield, Bangalore",
      date: "2024-03-22",
      time: "16:00 - 17:15",
      user: "Mike Johnson",
      status: "Pending",
    },
  ]);

  const handleUpdateStatus = (bookingId, newStatus) => {
    setBookedSlots(
      bookedSlots.map((slot) =>
        slot.id === bookingId ? { ...slot, status: newStatus } : slot
      )
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-[#1a0c02] to-[#F97316]'>
      <Navbar />
      <div className='max-w-[1440px] mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        {/* Page Title with Icon */}
        <div className='text-center mb-8 pt-16'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <FaChargingStation className='text-4xl text-[#F97316]' />
            <h1 className='text-4xl md:text-5xl font-bold text-white'>
              Host Dashboard
            </h1>
          </div>
          <p className='text-xl text-gray-300'>
            Manage your charging station and monitor performance
          </p>
        </div>

        {/* Host Stats */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <div className='flex items-center gap-2 mb-2'>
              <FaChargingStation className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Total Stations</span>
            </div>
            <p className='text-2xl font-bold'>{hostData.totalStations}</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <div className='flex items-center gap-2 mb-2'>
              <FaClock className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Total Bookings</span>
            </div>
            <p className='text-2xl font-bold'>{hostData.totalBookings}</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <div className='flex items-center gap-2 mb-2'>
              <FaStar className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Average Rating</span>
            </div>
            <p className='text-2xl font-bold'>{hostData.averageRating}</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <div className='flex items-center gap-2 mb-2'>
              <FaMoneyBillWave className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Total Revenue</span>
            </div>
            <p className='text-2xl font-bold'>₹{hostData.totalRevenue}</p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className='grid grid-cols-1 xl:grid-cols-12 gap-6'>
          {/* Left Column - Station Overview and Status */}
          <div className='xl:col-span-4 space-y-6'>
            <div className='sticky top-24'>
              <StationOverview />
              <div className='mt-6'>
                <StationStatus />
              </div>
            </div>
          </div>

          {/* Middle Column - Booking Queue and Vehicle Stats */}
          <div className='xl:col-span-4 space-y-6'>
            <div className='h-full'>
              <BookingQueue />
              <div className='mt-6'>
                <VehicleStats />
              </div>
            </div>
          </div>

          {/* Right Column - Earnings and Charts */}
          <div className='xl:col-span-4 space-y-6'>
            <div className='sticky top-24'>
              <EarningsChart />
            </div>
          </div>
        </div>

        {/* Booked Slots */}
        <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
          <h2 className='text-2xl font-bold mb-4'>Booked Slots</h2>
          <div className='space-y-4'>
            {bookedSlots.map((slot) => (
              <div key={slot.id} className='bg-white/5 rounded-lg p-4'>
                <div className='flex items-start justify-between mb-2'>
                  <div>
                    <h3 className='font-semibold'>{slot.stationName}</h3>
                    <div className='flex items-center gap-2 text-gray-300 text-sm'>
                      <FaMapMarkerAlt />
                      <span>{slot.location}</span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      slot.status === "Confirmed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {slot.status}
                  </span>
                </div>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                    <p className='text-gray-300'>Date</p>
                    <p className='font-medium'>{slot.date}</p>
                  </div>
                  <div>
                    <p className='text-gray-300'>Time</p>
                    <p className='font-medium'>{slot.time}</p>
                  </div>
                  <div>
                    <p className='text-gray-300'>User</p>
                    <p className='font-medium'>{slot.user}</p>
                  </div>
                </div>
                {slot.status === "Pending" && (
                  <div className='mt-4 flex gap-2'>
                    <button
                      onClick={() => handleUpdateStatus(slot.id, "Confirmed")}
                      className='flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors'
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(slot.id, "Cancelled")}
                      className='flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors'
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className='fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 p-4 lg:hidden'>
          <div className='flex justify-around max-w-md mx-auto'>
            <button className='flex flex-col items-center text-white/80 hover:text-[#F97316]'>
              <FaChargingStation className='text-xl' />
              <span className='text-xs mt-1'>Overview</span>
            </button>
            <button className='flex flex-col items-center text-white/80 hover:text-[#F97316]'>
              <FaChargingStation className='text-xl' />
              <span className='text-xs mt-1'>Bookings</span>
            </button>
            <button className='flex flex-col items-center text-white/80 hover:text-[#F97316]'>
              <FaChargingStation className='text-xl' />
              <span className='text-xs mt-1'>Earnings</span>
            </button>
          </div>
        </div>
      </div>
      <div className='pb-20 lg:pb-0'>
        <Footer />
      </div>
    </div>
  );
};

export default HostDashboard;

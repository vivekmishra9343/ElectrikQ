import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StationOverview from "@/components/HostDashboard/StationOverview";
import BookingQueue from "@/components/HostDashboard/BookingQueue";
import EarningsChart from "@/components/HostDashboard/EarningsChart";
import VehicleStats from "@/components/HostDashboard/VehicleStats";
import StationStatus from "@/components/HostDashboard/StationStatus";
import { FaChargingStation } from "react-icons/fa";

const HostDashboard = () => {
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

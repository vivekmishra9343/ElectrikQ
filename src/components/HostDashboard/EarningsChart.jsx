import React from "react";
import { FaMoneyBillWave, FaChartBar, FaArrowUp } from "react-icons/fa";

const EarningsChart = () => {
  // Dummy data - replace with actual data from your backend
  const earningsData = {
    totalEarnings: 25000,
    weeklyEarnings: 8500,
    monthlyEarnings: 32000,
    weeklyGrowth: 15,
    dailyBreakdown: [
      { day: "Mon", amount: 3500 },
      { day: "Tue", amount: 4200 },
      { day: "Wed", amount: 3800 },
      { day: "Thu", amount: 4500 },
      { day: "Fri", amount: 5000 },
      { day: "Sat", amount: 4800 },
      { day: "Sun", amount: 3200 },
    ],
  };

  // Calculate the maximum amount for the chart scaling
  const maxAmount = Math.max(
    ...earningsData.dailyBreakdown.map((day) => day.amount)
  );

  return (
    <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
      <h2 className='text-2xl font-bold mb-4'>Earnings Overview</h2>

      <div className='space-y-6'>
        {/* Summary Cards */}
        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <FaMoneyBillWave className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Weekly Earnings</span>
            </div>
            <p className='text-2xl font-bold'>₹{earningsData.weeklyEarnings}</p>
            <div className='flex items-center gap-1 mt-2 text-green-400'>
              <FaArrowUp className='text-xs' />
              <span className='text-sm'>{earningsData.weeklyGrowth}%</span>
            </div>
          </div>

          <div className='bg-white/5 rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <FaChartBar className='text-[#F97316]' />
              <span className='text-sm text-gray-300'>Monthly Earnings</span>
            </div>
            <p className='text-2xl font-bold'>
              ₹{earningsData.monthlyEarnings}
            </p>
          </div>
        </div>

        {/* Bar Chart */}
        <div className='bg-white/5 rounded-lg p-4'>
          <h3 className='text-lg font-semibold mb-4'>Weekly Breakdown</h3>
          <div className='flex items-end justify-between h-48 gap-2'>
            {earningsData.dailyBreakdown.map((day, index) => (
              <div key={index} className='flex flex-col items-center flex-1'>
                <div
                  className='w-full bg-[#F97316] rounded-t'
                  style={{
                    height: `${(day.amount / maxAmount) * 100}%`,
                    transition: "height 0.3s ease-in-out",
                  }}
                ></div>
                <div className='mt-2 text-xs text-gray-300'>{day.day}</div>
                <div className='text-xs font-medium'>₹{day.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-white/5 rounded-lg p-4'>
            <p className='text-sm text-gray-300'>Most Profitable Day</p>
            <p className='text-lg font-semibold'>Friday</p>
            <p className='text-sm text-[#F97316]'>₹5,000</p>
          </div>
          <div className='bg-white/5 rounded-lg p-4'>
            <p className='text-sm text-gray-300'>Average Daily Earnings</p>
            <p className='text-lg font-semibold'>₹4,142</p>
            <p className='text-sm text-[#F97316]'>+12% vs last week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;

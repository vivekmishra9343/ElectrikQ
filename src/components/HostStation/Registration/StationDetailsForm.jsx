import React from "react";

const StationDetailsForm = () => (
  <div>
    <h3 className="text-xl font-bold mb-4">Basic Information</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-300">Station Name</label>
        <input 
          className="w-full bg-white/5 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]" 
          placeholder="Enter station name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-300">Contact Number</label>
        <input 
          className="w-full bg-white/5 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]" 
          placeholder="Enter contact number"
          type="tel"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1 text-gray-300">Address</label>
        <input 
          className="w-full bg-white/5 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]" 
          placeholder="Enter complete address"
        />
      </div>
    </div>

    <h3 className="text-xl font-bold mt-6 mb-4">Charging Options</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white/5 border border-gray-600 rounded-lg p-4 hover:border-[#F97316] transition-colors cursor-pointer">
        <div className="font-semibold text-white mb-1">Level 2 AC</div>
        <div className="text-sm text-gray-400">Up to 19 kW</div>
        <div className="mt-2 text-xs text-gray-300">
          ✓ Most common for residential
          <br />
          ✓ 4-8 hours charging time
        </div>
      </div>
      <div className="bg-white/5 border border-gray-600 rounded-lg p-4 hover:border-[#F97316] transition-colors cursor-pointer">
        <div className="font-semibold text-white mb-1">DC Fast Charging</div>
        <div className="text-sm text-gray-400">50+ kW</div>
        <div className="mt-2 text-xs text-gray-300">
          ✓ Rapid charging solution
          <br />
          ✓ 30-60 minutes charging
        </div>
      </div>
      <div className="bg-white/5 border border-gray-600 rounded-lg p-4 hover:border-[#F97316] transition-colors cursor-pointer">
        <div className="font-semibold text-white mb-1">Tesla Compatible</div>
        <div className="text-sm text-gray-400">With adapter</div>
        <div className="mt-2 text-xs text-gray-300">
          ✓ Tesla adapter support
          <br />
          ✓ Access larger customer base
        </div>
      </div>
    </div>
  </div>
);

export default StationDetailsForm;
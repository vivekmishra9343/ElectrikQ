import React from "react";

const StationDetailsForm = () => (
  <div className="mb-6">
    <h2 className="font-bold mb-4 text-lg">Station Details</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-semibold mb-1">Station Name</label>
        <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Enter station name" />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">Location</label>
        <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Enter address" />
      </div>
    </div>
    <div className="mt-4 flex gap-4">
      <div className="flex-1 bg-gray-50 rounded p-2 flex flex-col items-center border">
        <div className="font-semibold text-xs">Level 2 AC</div>
        <div className="text-[10px] text-gray-500">Up to 19 kW</div>
      </div>
      <div className="flex-1 bg-gray-50 rounded p-2 flex flex-col items-center border">
        <div className="font-semibold text-xs">DC Fast Charging</div>
        <div className="text-[10px] text-gray-500">50+ kW</div>
      </div>
      <div className="flex-1 bg-gray-50 rounded p-2 flex flex-col items-center border">
        <div className="font-semibold text-xs">Tesla Compatible</div>
        <div className="text-[10px] text-gray-500">With adapter</div>
      </div>
    </div>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-semibold mb-1">Operating Hours</label>
        <input className="w-full border rounded px-2 py-1 text-xs" placeholder="24/7 Access" />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">Additional Hours Info</label>
        <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Additional hours info" />
      </div>
    </div>
    <div className="mt-4">
      <label className="block text-xs font-semibold mb-1">Station Photos</label>
      <div className="border rounded p-4 text-xs text-gray-400 text-center">Drag and drop photos here or <span className="text-emerald-500 underline cursor-pointer">choose files</span></div>
    </div>
  </div>
);

export default StationDetailsForm;
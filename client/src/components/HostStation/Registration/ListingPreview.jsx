import React from "react";

const ListingPreview = () => (
  <div>
    <h2 className="font-bold mb-4 text-lg">Preview Your Listing</h2>
    <div className="flex gap-4">
      <div className="bg-gray-200 rounded w-40 h-32"></div>
      <div>
        <div className="font-bold text-sm mb-1">Station Name</div>
        <div className="text-xs text-gray-600 mb-1">123 Main Street, City, State</div>
        <div className="text-xs text-emerald-600 mb-1">Open 24/7</div>
        <div className="flex gap-2 text-xs mb-1">
          <span className="bg-emerald-100 text-emerald-700 rounded px-2 py-0.5">Level 2</span>
          <span className="bg-blue-100 text-blue-700 rounded px-2 py-0.5">DC Fast</span>
        </div>
        <div className="text-xs text-gray-700">Amenities</div>
      </div>
    </div>
    <div className="flex gap-2 mt-4">
      <div className="bg-gray-200 rounded w-16 h-8"></div>
      <div className="bg-gray-200 rounded w-16 h-8"></div>
      <div className="bg-gray-200 rounded w-16 h-8"></div>
      <div className="bg-gray-200 rounded w-16 h-8"></div>
    </div>
  </div>
);

export default ListingPreview;
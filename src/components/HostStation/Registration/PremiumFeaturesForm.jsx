import React from "react";

const PremiumFeaturesForm = () => (
  <div className="mb-6">
    <h2 className="font-bold mb-2 text-lg">Premium Features</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
      <label className="flex items-center gap-1 text-xs">
        <input type="checkbox" /> WiFi
      </label>
      <label className="flex items-center gap-1 text-xs">
        <input type="checkbox" /> Restroom
      </label>
      <label className="flex items-center gap-1 text-xs">
        <input type="checkbox" /> Restaurant
      </label>
      <label className="flex items-center gap-1 text-xs">
        <input type="checkbox" /> Shopping
      </label>
    </div>
    <div className="mb-2">
      <label className="block text-xs font-semibold mb-1">Custom Welcome Message</label>
      <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Enter a welcome message for your visitors" />
    </div>
    <div>
      <label className="block text-xs font-semibold mb-1">Special Offers</label>
      <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Add special offer or promotion" />
    </div>
  </div>
);

export default PremiumFeaturesForm;
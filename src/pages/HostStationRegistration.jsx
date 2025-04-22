import React from "react";
import Navbar from "@/components/common/Navbar";
import PriceComparison from "@/components/HostStation/PriceComparison";
import StationDetailsForm from "@/components/HostStation/Registration/StationDetailsForm";
import PremiumFeaturesForm from "@/components/HostStation/Registration/PremiumFeaturesForm";
import ListingPreview from "@/components/HostStation/Registration/ListingPreview";
import Footer from "@/components/common/Footer";

const HostStationRegistration = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <div className="max-w-5xl mx-auto py-8">
      {/* Stepper */}
      {/* <div className="flex justify-between items-center mb-6">
        <div className="flex-1 text-center">
          <div className="rounded-full bg-green-500 text-white w-8 h-8 flex items-center justify-center mx-auto font-bold">1</div>
          <div className="text-xs mt-2">Plan Selection</div>
        </div>
        <div className="flex-1 text-center">
          <div className="rounded-full bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center mx-auto font-bold">2</div>
          <div className="text-xs mt-2">Station Details</div>
        </div>
        <div className="flex-1 text-center">
          <div className="rounded-full bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center mx-auto font-bold">3</div>
          <div className="text-xs mt-2">Preview & Settings</div>
        </div>
        <div className="flex-1 text-center">
          <div className="rounded-full bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center mx-auto font-bold">4</div>
          <div className="text-xs mt-2">Confirmation</div>
        </div>
      </div> */}
      {/* Plan Selection */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <PriceComparison />
      </div>
      {/* Station Details & Premium Features */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <StationDetailsForm />
        <PremiumFeaturesForm />
        <div className="flex justify-end mt-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded">Continue</button>
        </div>
      </div>
      {/* Preview */}
      <div className="bg-white rounded-lg shadow p-6">
        <ListingPreview />
      </div>
    </div>
    <Footer />
  </div>
);

export default HostStationRegistration;
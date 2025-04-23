import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import PriceComparison from "@/components/HostStation/PriceComparison";
import StationDetailsForm from "@/components/HostStation/Registration/StationDetailsForm";
import PremiumFeaturesForm from "@/components/HostStation/Registration/PremiumFeaturesForm";
import LocationMap from "@/components/HostStation/Registration/LocationMap";
import Footer from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import { addNewStation } from "@/data/newStations";
import { useNavigate } from "react-router-dom";

const HostStationRegistration = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hotspotScore, setHotspotScore] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleFormDataChange = (data) => {
    setFormData(data);
  };

  const handleSetupStation = async () => {
    if (!selectedLocation) {
      alert("Please select a location first");
      return;
    }

    if (!formData) {
      alert("Please fill in the station details");
      return;
    }

    setIsSubmitting(true);
    try {
      // Combine location and form data
      const newStation = {
        name: formData.stationName || selectedLocation.name,
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
        type: formData.stationType || selectedLocation.type,
        ratePerKWh: selectedLocation.proposedRatePerKWh,
        peakHourSurcharge: selectedLocation.peakHourSurcharge,
        membershipDiscount: selectedLocation.membershipDiscount,
        estimatedDailyTraffic: selectedLocation.estimatedDailyTraffic,
        numberOfChargers: formData.numberOfChargers,
        powerOutput: formData.powerOutput,
        connectorTypes: formData.connectorTypes,
        amenities: formData.amenities,
      };

      // Add the new station to our dummy data
      addNewStation(newStation);

      // Show success message
      alert("Station setup request submitted successfully!");

      // Navigate to dashboard or confirmation page
      navigate("/dashboard");
    } catch (error) {
      console.error("Error setting up station:", error);
      alert("Failed to setup station. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Plan Selection" },
    { number: 2, title: "Station Details" },
    { number: 3, title: "Location Selection" },
    { number: 4, title: "Preview & Settings" },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-[#1a0c02] to-[#F97316]'>
      <Navbar />
      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        {/* Page Title */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>
            Host Your Charging Station
          </h1>
          <p className='text-gray-300'>
            Join our network and earn by providing charging solutions
          </p>
        </div>

        {/* Stepper */}
        <div className='flex justify-between items-center mb-8 relative'>
          <div className='absolute h-1 bg-gray-600 top-1/2 transform -translate-y-1/2 left-0 right-0 z-0'></div>
          {steps.map((step) => (
            <div
              key={step.number}
              className='relative z-10 flex flex-col items-center'
            >
              <div
                className={`rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm
                  ${
                    currentStep >= step.number
                      ? "bg-[#F97316] text-white"
                      : "bg-gray-600 text-gray-300"
                  }`}
              >
                {step.number}
              </div>
              <div
                className={`mt-2 text-sm ${
                  currentStep >= step.number ? "text-white" : "text-gray-400"
                }`}
              >
                {step.title}
              </div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className='space-y-6'>
          {/* Plan Selection */}
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <h2 className='text-2xl font-bold mb-4'>Select Your Plan</h2>
            <PriceComparison />
          </div>

          {/* Location Selection - Full Width Map */}
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <h2 className='text-2xl font-bold mb-4'>Select Location</h2>
            <div className='bg-white/5 rounded-lg p-4'>
              <p className='text-sm text-gray-300 mb-4'>
                Red markers show existing charging stations. Green markers show
                potential locations for new stations. Click on a location to
                select it.
              </p>
              <div className='rounded-lg overflow-hidden'>
                <LocationMap
                  onLocationSelect={handleLocationSelect}
                  selectedLocation={selectedLocation}
                  hotspotScore={hotspotScore}
                />
              </div>
            </div>
          </div>

          {/* Station Details */}
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <h2 className='text-2xl font-bold mb-4'>Station Details</h2>
            <StationDetailsForm onFormDataChange={handleFormDataChange} />
          </div>

          {/* Essential Features */}
          <div className='bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 text-white'>
            <h2 className='text-2xl font-bold mb-4'>Essential Features</h2>
            <PremiumFeaturesForm />
          </div>

          {/* Setup Button */}
          <div className='flex justify-center'>
            <Button
              onClick={handleSetupStation}
              disabled={!selectedLocation || !formData || isSubmitting}
              className='bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-8 py-6 text-lg rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? "Setting up..." : "Setup Station"}
            </Button>
          </div>

          {/* Navigation Buttons */}
          <div className='flex justify-between pt-6'>
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              className='px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors'
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              className='px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg transition-colors'
            >
              {currentStep === 4 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HostStationRegistration;

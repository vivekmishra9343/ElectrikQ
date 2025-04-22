import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const EVChargingHero = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-16 text-white bg-[linear-gradient(90deg,_black_0%,_#1a0c02_50%,_#F97316_75%,_#FFD600_100%)]">
      {/* Lighter overlay for readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between relative z-20">
        <div className="max-w-xl z-20 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Unlock the Future of EV Charging
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Experience the power of our cutting-edge EV charging platform, designed to revolutionize the way you charge your electric vehicle
          </p>
          <div className=" flex gap-4">
          <Button  onClick={() => navigate("/route-planner")}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-8 py-6 text-lg rounded-md"
          >
            Search for destination
          </Button>
          <Button 
            className=" bg-green-500 hover:bg-green-700 text-white font-medium px-8 py-6 text-lg rounded-md"
          >
            Host the charging station
          </Button> 
          </div>
         

        </div>
        <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end z-20">
          
        </div>
      </div>
    </div>
  );
};

export default EVChargingHero;
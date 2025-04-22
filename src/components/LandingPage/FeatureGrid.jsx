import { BatteryCharging, Zap, Clock, Leaf } from "lucide-react";

const features = [
  {
    title: "Fast Charging",
    description: "Charge your vehicle up to 80% in just 30 minutes with our high-speed charging stations",
    icon: <Zap className="h-10 w-10 text-[#F97316]" />
  },
  {
    title: "Wide Compatibility",
    description: "Support for all major EV models with adapters for every connector type",
    icon: <BatteryCharging className="h-10 w-10 text-[#F97316]" />
  },
  {
    title: "24/7 Availability",
    description: "Access our charging stations any time of day or night, whenever you need a boost",
    icon: <Clock className="h-10 w-10 text-[#F97316]" />
  },
  {
    title: "Eco-Friendly",
    description: "100% renewable energy sources power our charging network for a greener future",
    icon: <Leaf className="h-10 w-10 text-[#F97316]" />
  }
];

const FeatureGrid = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our EV Charging Platform</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
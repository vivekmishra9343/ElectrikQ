import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-black/90 text-white fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-[#F97316] rounded-full p-1.5">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl">ElectrikQ</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-[#F97316] transition-colors">Dashboard</a>
          <a href="#" className="hover:text-[#F97316] transition-colors">My Bookings</a>
          <a href="#" className="hover:text-[#F97316] transition-colors">Route Planner</a>
          <a href="#" className="hover:text-[#F97316] transition-colors">Profile</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-[#F97316] text-[#F97316] hidden md:flex">
            Sign In
          </Button>
          <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const Zap = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  FaChargingStation,
  FaUser,
  FaMapMarkerAlt,
  FaRoute,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className='bg-black/90 text-white fixed w-full z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link
          to='/'
          className='flex items-center space-x-2 hover:opacity-80 transition-opacity'
        >
          <div className='bg-[#F97316] rounded-full p-1.5'>
            <Zap className='h-5 w-5 text-white' />
          </div>
          <span className='font-bold text-xl'>ElectrikQ</span>
        </Link>

        <nav className='hidden md:flex items-center space-x-6'>
          <Link
            to='/dashboard'
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isActive("/dashboard")
                ? "bg-[#F97316] text-white"
                : "hover:bg-white/10"
            }`}
          >
            <FaChargingStation />
            <span>Host Dashboard</span>
          </Link>
          <Link
            to='/station-finder'
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isActive("/station-finder")
                ? "bg-[#F97316] text-white"
                : "hover:bg-white/10"
            }`}
          >
            <FaMapMarkerAlt />
            <span>Station Finder</span>
          </Link>
          <Link
            to='/route-planner'
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isActive("/route-planner")
                ? "bg-[#F97316] text-white"
                : "hover:bg-white/10"
            }`}
          >
            <FaRoute />
            <span>Route Planner</span>
          </Link>
          <Link
            to='/user-dashboard'
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isActive("/user-dashboard")
                ? "bg-[#F97316] text-white"
                : "hover:bg-white/10"
            }`}
          >
            <FaUser />
            <span>User Dashboard</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className='md:hidden p-2 hover:bg-white/10 rounded-lg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

const Zap = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2' />
  </svg>
);

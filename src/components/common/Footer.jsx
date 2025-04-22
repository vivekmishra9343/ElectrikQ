const Footer = () => {
    return (
      <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EVCharge</h3>
              <p className="text-gray-400">
                Leading the future of electric vehicle charging technology with innovative solutions and nationwide coverage.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#F97316]">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F97316]">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F97316]">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F97316]">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#F97316]">Charging Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F97316]">Station Locator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F97316]">Support Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F97316]">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">hello@evcharge.com</li>
                <li className="text-gray-400">+1 (888) EV-POWER</li>
                <li className="text-gray-400">123 Electric Ave, San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 EVCharge. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#F97316]">Terms</a>
              <a href="#" className="text-gray-400 hover:text-[#F97316]">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-[#F97316]">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
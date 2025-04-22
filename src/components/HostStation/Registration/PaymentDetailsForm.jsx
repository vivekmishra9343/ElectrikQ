import React from "react";
import { FaCreditCard, FaBank, FaWallet, FaFileAlt } from "react-icons/fa";

const PaymentDetailsForm = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Payment Details</h3>

      {/* Bank Account Details */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 text-gray-300">Bank Account Information</label>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Account Holder Name</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
              placeholder="Enter account holder name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Account Number</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
              placeholder="Enter account number"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">IFSC Code</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
                placeholder="Enter IFSC code"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Bank Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
                placeholder="Enter bank name"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 text-gray-300">Payment Schedule</label>
        <div className="space-y-3">
          <label className="flex items-center p-3 bg-white/5 border border-gray-600 rounded-lg cursor-pointer hover:border-[#F97316] transition-colors">
            <input type="radio" name="paymentSchedule" className="form-radio h-4 w-4 text-[#F97316] border-gray-600 bg-transparent focus:ring-[#F97316]" />
            <span className="ml-3">
              <span className="block text-sm text-white">Weekly</span>
              <span className="block text-xs text-gray-400">Get paid every week</span>
            </span>
          </label>
          <label className="flex items-center p-3 bg-white/5 border border-gray-600 rounded-lg cursor-pointer hover:border-[#F97316] transition-colors">
            <input type="radio" name="paymentSchedule" className="form-radio h-4 w-4 text-[#F97316] border-gray-600 bg-transparent focus:ring-[#F97316]" />
            <span className="ml-3">
              <span className="block text-sm text-white">Monthly</span>
              <span className="block text-xs text-gray-400">Get paid once a month</span>
            </span>
          </label>
        </div>
      </div>

      {/* Tax Information */}
      <div>
        <label className="block text-sm font-medium mb-3 text-gray-300">Tax Information</label>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">GST Number (Optional)</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
              placeholder="Enter GST number if applicable"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">PAN Number</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]"
              placeholder="Enter PAN number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsForm; 
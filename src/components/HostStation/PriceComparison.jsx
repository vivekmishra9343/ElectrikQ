import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PriceComparison = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '₹999',
      period: 'per month',
      description: 'Perfect for individual hosts with 1-2 charging stations',
      features: [
        { text: 'Up to 2 charging stations', included: true },
        { text: 'Basic analytics dashboard', included: true },
        { text: 'Standard support', included: true },
        { text: 'Payment processing', included: true },
        { text: 'Priority listing in search results', included: false },
        { text: 'Advanced analytics and reporting', included: false },
        { text: '24/7 premium support', included: false },
        { text: 'Custom branding options', included: false },
      ],
      highlight: false,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹1,999',
      period: 'per month',
      description: 'Ideal for businesses with multiple charging stations',
      features: [
        { text: 'Up to 5 charging stations', included: true },
        { text: 'Advanced analytics dashboard', included: true },
        { text: 'Priority support', included: true },
        { text: 'Payment processing', included: true },
        { text: 'Priority listing in search results', included: true },
        { text: 'Advanced analytics and reporting', included: true },
        { text: '24/7 premium support', included: true },
        { text: 'Custom branding options', included: false },
      ],
      highlight: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large-scale operations with custom requirements',
      features: [
        { text: 'Unlimited charging stations', included: true },
        { text: 'Custom analytics solutions', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Payment processing', included: true },
        { text: 'Priority listing in search results', included: true },
        { text: 'Advanced analytics and reporting', included: true },
        { text: '24/7 premium support', included: true },
        { text: 'Custom branding options', included: true },
      ],
      highlight: false,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`relative rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
              plan.highlight 
                ? 'bg-gradient-to-br from-[#F97316] to-[#EA580C] shadow-xl border-2 border-[#F97316]' 
                : 'bg-white/10 backdrop-blur-sm border border-gray-700'
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
            )}
            
            <div className="p-6">
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-white'}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className={`text-3xl font-bold ${plan.highlight ? 'text-white' : 'text-white'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/90' : 'text-gray-300'}`}>
                {plan.description}
              </p>
              
              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 px-4 rounded-lg font-medium mb-6 transition-colors ${
                  selectedPlan === plan.id
                    ? plan.highlight
                      ? 'bg-white text-[#F97316]'
                      : 'bg-[#F97316] text-white'
                    : plan.highlight
                      ? 'bg-white/20 text-white hover:bg-white/30'
                      : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
              </button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`mr-3 mt-1 ${feature.included ? 'text-green-400' : 'text-gray-500'}`}>
                      {feature.included ? <FaCheck /> : <FaTimes />}
                    </span>
                    <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-400'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-300 text-sm">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Need a custom plan? <a href="#" className="text-[#F97316] hover:underline">Contact our sales team</a>
        </p>
      </div>
    </div>
  );
};

export default PriceComparison;

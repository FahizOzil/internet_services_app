import React, { useState } from 'react';
import PlanCard from './PlanCard';

// Complete plans data with more details
const internetPlans = [
  {
    id: 'basic',
    title: 'Basic',
    price: 29.99,
    popular: false,
    speed: '50 Mbps',
    features: [
      { text: 'Up to 50 Mbps download', included: true },
      { text: '10 Mbps upload speed', included: true },
      { text: 'Unlimited data', included: true },
      { text: 'Connect up to 5 devices', included: true },
      { text: 'Free modem rental', included: false },
      { text: 'Smart Home compatibility', included: false }
    ],
    cta: 'Get Started'
  },
  {
    id: 'premium',
    title: 'Premium',
    price: 59.99,
    popular: true,
    speed: '300 Mbps',
    features: [
      { text: 'Up to 300 Mbps download', included: true },
      { text: '30 Mbps upload speed', included: true },
      { text: 'Unlimited data', included: true },
      { text: 'Connect up to 12 devices', included: true },
      { text: 'Free modem rental', included: true },
      { text: 'Smart Home compatibility', included: false }
    ],
    cta: 'Most Popular'
  },
  {
    id: 'ultimate',
    title: 'Ultimate',
    price: 89.99,
    popular: false,
    speed: '1 Gbps',
    features: [
      { text: 'Up to 1 Gbps download', included: true },
      { text: '100 Mbps upload speed', included: true },
      { text: 'Unlimited data', included: true },
      { text: 'Unlimited device connections', included: true },
      { text: 'Free modem & router rental', included: true },
      { text: 'Smart Home compatibility', included: true }
    ],
    cta: 'Go Ultimate'
  }
];

const bundlePlans = [
  {
    id: 'basic-bundle',
    title: 'Basic Bundle',
    price: 49.99,
    popular: false,
    speed: '50 Mbps',
    features: [
      { text: 'Up to 50 Mbps internet', included: true },
      { text: '50+ Cable TV channels', included: true },
      { text: 'On-demand content', included: true },
      { text: 'Free standard installation', included: true },
      { text: 'DVR service', included: false },
      { text: 'Premium channels', included: false }
    ],
    cta: 'Get Bundle'
  },
  {
    id: 'premium-bundle',
    title: 'Premium Bundle',
    price: 79.99,
    popular: true,
    speed: '300 Mbps',
    features: [
      { text: 'Up to 300 Mbps internet', included: true },
      { text: '150+ Cable TV channels', included: true },
      { text: 'On-demand content', included: true },
      { text: 'Free premium installation', included: true },
      { text: 'DVR service', included: true },
      { text: '2 Premium channel packs', included: false }
    ],
    cta: 'Best Value'
  },
  {
    id: 'ultimate-bundle',
    title: 'Ultimate Bundle',
    price: 119.99,
    popular: false,
    speed: '1 Gbps',
    features: [
      { text: 'Up to 1 Gbps internet', included: true },
      { text: '250+ Cable TV channels', included: true },
      { text: 'Unlimited on-demand content', included: true },
      { text: 'Free priority installation', included: true },
      { text: 'Advanced DVR service', included: true },
      { text: 'All Premium channels', included: true }
    ],
    cta: 'Go All In'
  }
];

export default function Plans() {
  const [planType, setPlanType] = useState('internet');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const activePlans = planType === 'internet' ? internetPlans : bundlePlans;

  const discountRate = billingCycle === 'annual' ? 0.15 : 0;

  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Flexible Options</h2>
          <h3 className="text-4xl font-bold mb-4 text-gray-900">Plans Tailored For Your Needs</h3>
          <p className="text-lg text-gray-600">Choose the perfect plan with the speed and features that match your lifestyle.</p>
        </div>

        {/* Plan Type Tabs */}
        <div className="max-w-lg mx-auto mb-10">
          <div className="bg-white p-1 rounded-lg shadow-md flex">
            <button
              className={`flex-1 py-3 rounded-md transition-colors font-medium ${
                planType === 'internet'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setPlanType('internet')}
            >
              Internet Only
            </button>
            <button
              className={`flex-1 py-3 rounded-md transition-colors font-medium ${
                planType === 'bundle'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setPlanType('bundle')}
            >
              Internet + TV Bundles
            </button>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="max-w-xs mx-auto mb-12 flex items-center justify-center">
          <span className={`mr-4 font-medium ${billingCycle === 'monthly' ? 'text-blue-600' : 'text-gray-500'}`}>
            Monthly
          </span>
          <div
            className="w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                billingCycle === 'annual' ? 'translate-x-7' : ''
              }`}
            ></div>
          </div>
          <div className="ml-4">
            <span className={`font-medium ${billingCycle === 'annual' ? 'text-blue-600' : 'text-gray-500'}`}>
              Annual
            </span>
            <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              Save 15%
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {activePlans.map((plan) => {
            const discountedPrice = billingCycle === 'annual'
              ? (plan.price * (1 - discountRate)).toFixed(2)
              : plan.price;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'border-2 border-blue-500 relative transform md:-translate-y-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-1 font-medium text-sm">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-1 text-gray-900">{plan.title}</h4>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">${discountedPrice}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                    {billingCycle === 'annual' && (
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md">
                        ${(plan.price * discountRate).toFixed(2)} saved
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="h-1 w-full bg-gray-200 rounded-full mb-2">
                      <div
                        className="h-1 bg-blue-500 rounded-full"
                        style={{
                          width: plan.speed === '50 Mbps' ? '25%' :
                                 plan.speed === '300 Mbps' ? '60%' : '100%'
                        }}
                      ></div>
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      Speed: <span className="text-blue-600">{plan.speed}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        {feature.included ? (
                          <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-gray-300 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-bold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            All plans come with a 30-day money-back guarantee. No hidden fees. Prices shown exclude applicable taxes and fees.
          </p>
          <div className="mt-6">
            <a href="#contact" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
              Need help choosing? Contact our experts
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

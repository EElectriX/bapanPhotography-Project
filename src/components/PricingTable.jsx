import React, { useState } from "react";
import { Check, X, Zap } from "lucide-react";

const PricingTable = ({ plans }) => {

  const [hoveredPlan, setHoveredPlan] = useState(null);
  const defaultPlans=[];

  const plansData = plans || defaultPlans;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black p-4 sm:p-6 lg:p-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-[0_0_8px_#0ff]">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Scale your business with our flexible pricing options
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 p-6 sm:p-8 bg-slate-950 transition-all duration-300 ${
                hoveredPlan === plan.id
                  ? "border-cyan-400 shadow-[0_0_25px_#0ff] scale-105"
                  : "border-gray-800"
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">{plan.description}</p>

                {/* Neon Price */}
                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_#0ff]">
                    ₹{plan.price}
                  </span>
                  <span className="text-lg sm:text-xl text-gray-400 ml-1">/month</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="w-full py-3 px-6 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-200 bg-gray-900 text-white border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_20px_#0ff] mb-6 sm:mb-8"
              >
                {plan.buttonText}
              </button>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-semibold text-base sm:text-lg border-b border-gray-700 pb-2">
                  What's included:
                </h4>
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-200 ${
                      hoveredPlan === plan.id ? "translate-x-1" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included
                          ? "bg-green-400 text-black shadow-[0_0_10px_#0f0]"
                          : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <X className="w-3 h-3" />
                      )}
                    </div>
                    <span
                      className={`text-xs sm:text-sm ${
                        feature.included ? "text-gray-100" : "text-gray-500"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
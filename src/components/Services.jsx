import React from 'react';
// import HorizontalSlideBar from './HorizontalSlideBar';
// import HeroServices from './HeroServices';
import ContactPage from './ContactPage';
import PricingTable from './PricingTable';
import ImageCarousel from './ImageCarousel';
import UserReviews from './UserReviews';
import TimedCardCarousel from './TimedCardCarousel';
import MobileRotation from './MobileRotation';
const Services = () => {

    const planData = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for individuals getting started",
      price: 749, // INR
      popular: false,
      features: [
        { name: "5 Projects", included: true },
        { name: "10GB Storage", included: true },
        { name: "Basic Support", included: true },
        { name: "API Access", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "Custom Integrations", included: false },
        { name: "Priority Support", included: false },
      ],
      buttonText: "Get Started",
      color: "blue",
    },
    {
      id: "professional",
      name: "Professional",
      description: "Best for growing teams and businesses",
      price: 2499, // INR
      popular: true,
      features: [
        { name: "Unlimited Projects", included: true },
        { name: "100GB Storage", included: true },
        { name: "Priority Support", included: true },
        { name: "API Access", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Custom Integrations", included: false },
        { name: "White Label", included: false },
      ],
      buttonText: "Start Free Trial",
      color: "purple",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: 7999, // INR
      popular: false,
      features: [
        { name: "Unlimited Everything", included: true },
        { name: "Unlimited Storage", included: true },
        { name: "Dedicated Support", included: true },
        { name: "API Access", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Custom Integrations", included: true },
        { name: "White Label", included: true },
      ],
      buttonText: "Contact Sales",
      color: "emerald",
    },
  ];

    return (
        <div className="m-0 p-0 overflow-x-hidden">
            <main className="m-0 p-0">
                  <div >
                  <MobileRotation />
                  {/* Your other content */}
                   {/* <HeroServices /> */}
                {/* <HorizontalSlideBar /> */}
                <TimedCardCarousel />
               {/* it will work porperly upto width 820px */}
                <ImageCarousel />
                <PricingTable plans={planData} />
                {/* <UserReviews review={[]} /> */}
                <UserReviews />
                <ContactPage />
                </div>

                
               
            </main>
        </div>
    );
};

export default Services;

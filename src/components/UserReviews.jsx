import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Star, User } from 'lucide-react';

const UserReviews = ({ review }) => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  
  const defaultReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely amazing service! The team went above and beyond my expectations. Highly recommend to anyone looking for quality work.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e5c8bf?w=150&h=150&fit=crop&crop=face",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      text: "Great experience overall. Fast delivery and professional communication throughout the entire process.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      text: "Outstanding results! They understood exactly what I needed and delivered perfectly. Will definitely work with them again.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 4,
      text: "Professional service with attention to detail. The final product exceeded my expectations in every way.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Jessica Wu",
      rating: 5,
      text: "Incredible work! The team was responsive, creative, and delivered exactly what was promised. Five stars!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      date: "2 months ago"
    },
    {
      id: 6,
      name: "Robert Martinez",
      rating: 4,
      text: "Very satisfied with the service. Good communication and timely delivery. Would recommend to others.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      date: "3 days ago"
    },
    {
      id: 7,
      name: "Amanda Lee",
      rating: 5,
      text: "Exceptional quality and customer service. They really care about their clients and it shows in their work.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      date: "1 month ago"
    },
    {
      id: 8,
      name: "Christopher Davis",
      rating: 4,
      text: "Great value for money. The team delivered exactly what was discussed and the quality is top-notch.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      date: "2 weeks ago"
    },
    {
      id: 9,
      name: "Rachel Kim",
      rating: 5,
      text: "Amazing experience from start to finish! Professional, reliable, and the results speak for themselves.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      date: "4 days ago"
    },
    {
      id: 10,
      name: "Kevin Brown",
      rating: 5,
      text: "Could not be happier with the service! They exceeded all my expectations and delivered outstanding results.",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      date: "1 week ago"
    }
  ];

  const reviews = review || defaultReviews;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Duplicate reviews for seamless infinite scroll
    const reviewCards = container.querySelectorAll('.review-card');
    const cardWidth = reviewCards[0]?.offsetWidth + 24; // 24px for gap
    const totalWidth = cardWidth * reviews.length;

    // Create infinite scroll animation
    timelineRef.current = gsap.timeline({ repeat: -1 });
    
    timelineRef.current.to(container, {
      x: -totalWidth,
      duration: 20,
      ease: "none"
    });

    // Check if device is mobile
    const isMobile = () => window.innerWidth <= 768;

    // Desktop hover functionality
    const handleMouseEnter = () => {
      if (!isMobile()) {
        timelineRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (!isMobile()) {
        timelineRef.current.resume();
      }
    };

    // Mobile touch functionality
    const handleTouchStart = (e) => {
      if (isMobile()) {
        timelineRef.current.pause();
        e.stopPropagation();
      }
    };

    const handleDocumentClick = (e) => {
      if (isMobile() && timelineRef.current && timelineRef.current.paused()) {
        // Resume scrolling on any click/touch anywhere on the page
        timelineRef.current.resume();
      }
    };

    // Add event listeners
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('click', handleDocumentClick);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [reviews.length]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const ReviewCard = ({ review }) => (
    <div className="review-card flex-shrink-0 w-80 bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:shadow-xl hover:border-gray-600 transition-all duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={review.avatar} 
          alt={review.name}
          className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-gray-600"
        />
        <div>
          <h3 className="font-semibold text-white">{review.name}</h3>
          <p className="text-sm text-gray-400">{review.date}</p>
        </div>
      </div>
      <div className="flex items-center mb-3">
        {renderStars(review.rating)}
      </div>
      <p className="text-gray-300 leading-relaxed">{review.text}</p>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say about their experience
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient fade effects */}
          {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div> */}
          
          {/* Reviews container */}
          <div 
            ref={containerRef}
            className="flex gap-6 cursor-pointer"
          >
            {/* First set of reviews */}
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
            {/* Duplicate set for seamless loop */}
            {reviews.map((review) => (
              <ReviewCard key={`duplicate-${review.id}`} review={review} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            <span className="hidden md:inline">Hover over the reviews to pause scrolling</span>
            <span className="md:hidden">Tap on reviews to pause • Tap anywhere on page to continue</span>
            <span className="hidden md:inline"> • </span>Reviews auto-scroll infinitely
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
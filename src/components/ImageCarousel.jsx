import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ImageCarousel = () => {
  // Random images from Unsplash with portrait orientation
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1418065460487-3956ef6c4387?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=800&fit=crop',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&h=800&fit=crop'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);

  // Initialize Swiper
  useEffect(() => {
    const loadSwiper = async () => {
      // Load Swiper CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css';
      document.head.appendChild(link);

      // Load Swiper JS
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js';
      script.onload = () => {
        if (window.Swiper && swiperRef.current) {
          const swiper = new window.Swiper(swiperRef.current, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 15,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            },
            autoplay: isPlaying ? {
              delay: 4000,
              disableOnInteraction: false,
            } : false,
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            on: {
              slideChange: function() {
                setCurrentIndex(this.realIndex);
              }
            }
          });
          setSwiperInstance(swiper);
        }
      };
      document.head.appendChild(script);
    };

    loadSwiper();

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  // Update autoplay when isPlaying changes
  useEffect(() => {
    if (swiperInstance) {
      if (isPlaying) {
        swiperInstance.autoplay.start();
      } else {
        swiperInstance.autoplay.stop();
      }
    }
  }, [isPlaying, swiperInstance]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPrevious = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-5xl mx-auto py-16 px-5">
        
        {/* Custom Controls */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-30">
          {/* Slide counter */}
          <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
            {currentIndex + 1} of {images.length}
          </div>
          
          {/* Play/Pause button */}
          <button
            onClick={togglePlayPause}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-white/20"
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>
        </div>

        {/* Swiper Container */}
        <div 
          ref={swiperRef}
          className="swiper relative h-[800px] overflow-visible"
          style={{ perspective: '1000px' }}
        >
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div key={index} className="swiper-slide" style={{ width: '500px' }}>
                <div className="w-[500px] h-[700px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt={`Card ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/500x800/4f46e5/ffffff?text=Card+${index + 1}`;
                      }}
                    />
                    
                    {/* Card overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Card number badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Active card indicator */}
                    {index === currentIndex && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-center font-medium">
                          Active Card
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
          >
            <ChevronLeft size={20} />
            
          </button>
          
          <button
            onClick={goToNext}
            className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
          >
            <ChevronRight size={28} />
            
          </button>
        </div>
            {/* <button
          className={`${isMobile ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-base'} rounded-full border-2 border-white text-white bg-black/20 backdrop-blur-sm font-bold transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center disabled:opacity-50`}
          onClick={() => handleNavigation('next')}
          disabled={isTransitioning}
        >
          →
        </button> */}

        {/* Bottom navigation and controls */}
        <div className="mt-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl px-6 py-4 mx-auto max-w-lg">
          {/* Custom Navigation dots */}
          <div className="flex justify-center space-x-3 mb-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-white rounded-full shadow-lg'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full'
                }`}
              />
            ))}
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-white/20 rounded-full h-1">
            <div 
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
            />
          </div>

          {/* Card stack preview */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.slice(Math.max(0, currentIndex - 2), currentIndex + 3).map((_, idx) => {
              const actualIndex = Math.max(0, currentIndex - 2) + idx;
              return (
                <div
                  key={actualIndex}
                  className={`w-2 h-8 rounded-full transition-all duration-300 ${
                    actualIndex === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        // // .swiper-button-next:after,
        // // .swiper-button-prev:after {
        // //   display: none;
        // // }
        
        // .swiper-slide {
        //   transition: all 0.7s ease-out;
        // }
        
        // .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) .card {
        //   opacity: 0.3;
        //   transform: scale(0.8) rotateY(45deg);
        // }
        
        // .swiper-pagination {
        //   display: none;
        // }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
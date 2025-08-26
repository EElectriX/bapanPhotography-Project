import React, { useState, useEffect } from 'react';
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

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const isActive = index === currentIndex;
    
    if (Math.abs(diff) > 2) {
      return {
        opacity: 0,
        transform: `translateX(${diff > 0 ? '400px' : '-400px'}) scale(0.8) rotateY(${diff > 0 ? '45deg' : '-45deg'})`,
        zIndex: 0
      };
    }
    
    if (isActive) {
      return {
        opacity: 1,
        transform: 'translateX(0px) scale(1) rotateY(0deg)',
        zIndex: 10
      };
    }
    
    return {
      opacity: 0.6,
      transform: `translateX(${diff * 120}px) scale(${1 - Math.abs(diff) * 0.1}) rotateY(${diff * 15}deg)`,
      zIndex: 5 - Math.abs(diff)
    };
  };

  return (
     <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
    <div className="max-w-5xl mx-auto py-16 px-5">
      {/* Main carousel container with perspective */}
      <div className="relative h-[800px] overflow-hidden" style={{ perspective: '1000px' }}>
        
        {/* Cards container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-[500px] h-[700px] transition-all duration-700 ease-out cursor-pointer"
              style={{
                ...getCardStyle(index),
                transformStyle: 'preserve-3d'
              }}
              onClick={() => goToSlide(index)}
            >
              {/* Card wrapper with shadow and border */}
              <div className="w-full h-full bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
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

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
        >
          <ChevronLeft size={28} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
        >
          <ChevronRight size={28} />
        </button>

        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-20 border border-white/20"
        >
          {isPlaying ? <Pause size={22} /> : <Play size={22} />}
        </button>

        {/* Slide counter */}
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium z-20 border border-white/20">
          {currentIndex + 1} of {images.length}
        </div>
      </div>

      {/* Bottom navigation and controls */}
      <div className="mt-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl px-6 py-4 mx-auto max-w-lg">
        {/* Navigation dots */}
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
    </div>
  );
};

export default ImageCarousel;
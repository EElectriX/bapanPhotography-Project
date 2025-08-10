import React, { useState, useRef } from 'react';

const HorizontalSlideBar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e, index) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, title: 'Main Slide', content: 'Primary Content Area', image: "/HorizontalSlideBarImage/image1.jpg" },
    { id: 2, title: 'Slide 2', content: 'Secondary Content', image: "/HorizontalSlideBarImage/image2.jpg" },
    { id: 3, title: 'Slide 3', content: 'Tertiary Content', image: "/HorizontalSlideBarImage/image3.jpg" },
    { id: 4, title: 'Slide 4', content: 'Fourth Content', image: "/HorizontalSlideBarImage/image4.jpg" },
    { id: 5, title: 'Slide 5', content: 'Fifth Content', image: "/HorizontalSlideBarImage/image5.jpg" },
    { id: 6, title: 'Slide 6', content: 'Sixth Content', image: "/HorizontalSlideBarImage/image6.jpg" },
    { id: 7, title: 'Slide 7', content: 'Seventh Content', image: "/HorizontalSlideBarImage/image7.jpg" },
    { id: 8, title: 'Slide 8', content: 'Eighth Content', image: "/HorizontalSlideBarImage/image8.jpg" },
    { id: 9, title: 'Slide 9', content: 'Ninth Content', image: "/HorizontalSlideBarImage/image9.jpg" },
    { id: 10, title: 'Slide 10', content: 'Tenth Content', image: "/HorizontalSlideBarImage/image10.jpg" },
    
  

  ];

  const handleSlideClick = (clickedIndex) => {
    if (clickedIndex !== 0) {
      // Calculate the new main slide position
      const newMainSlide = currentSlide + clickedIndex;
      if (newMainSlide < slides.length) {
        setCurrentSlide(newMainSlide);
      }
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden p-8 flex items-center justify-center">
      {/* Animated Neon Orbs */}
      <div className="absolute inset-0">
        {/* Cyan Orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '3s' }} />
        
        {/* Purple Orb */}
        <div className="absolute top-3/4 right-1/3 w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '4s', animationDelay: '1s' }} />
        
        {/* Pink Orb */}
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '3.5s', animationDelay: '2s' }} />
      </div>

      {/* Neon Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div 
        ref={containerRef}
        className="relative w-full max-w-9xl h-64 md:h-80 lg:h-[500px] flex overflow-hidden rounded-2xl z-10"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 40px rgba(0, 255, 255, 0.2)'
        }}
      >
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 15}%)`,
            width: `${slides.length * 15}%`
          }}
        >
          {slides.map((slide, index) => {
            const isMain = index === currentSlide;
            const isVisible = index >= currentSlide && index < currentSlide + 5;
            const relativeIndex = index - currentSlide;
            
            return (
              // <div
              //   key={slide.id}
              //   className={`
              //     relative h-full transition-all duration-700 ease-in-out cursor-pointer
              //     bg-gradient-to-br ${slide.color}
              //     overflow-hidden border-r border-gray-800 last:border-r-0
              //     ${hoveredIndex === index ? 'z-10' : 'z-0'}
              //   `}
              //   style={{ 
              //     width: isMain ? '55%' : '15%',
              //     minWidth: isMain ? '55%' : '15%',
              //     boxShadow: hoveredIndex === index 
              //       ? `0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 255, 255, 0.3)` 
              //       : 'none',
              //     transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
              //   }}
              //   onMouseMove={(e) => handleMouseMove(e, index)}
              //   onMouseLeave={handleMouseLeave}
              //   onClick={() => handleSlideClick(relativeIndex)}
              // >
              <div
                key={slide.id}
                className={`
                  relative h-full transition-all duration-700 ease-in-out cursor-pointer
                  bg-gradient-to-br
                  overflow-hidden border-r border-gray-800 last:border-r-0
                  ${hoveredIndex === index ? 'z-10' : 'z-0'}
                `}
                style={{ 
                  width: isMain ? '55%' : '15%',
                  minWidth: isMain ? '55%' : '15%',
                  boxShadow: hoveredIndex === index 
                    ? `0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 255, 255, 0.3)` 
                    : 'none',
                  transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSlideClick(relativeIndex)}
              >
                 <img src={slide.image} alt="" className="object-cover w-full h-full" />
              {/* Glow overlay that follows mouse */}
              {hoveredIndex === index && (
                <div
                  className="absolute pointer-events-none opacity-40"
                  style={{
                    left: mousePosition.x - 100,
                    top: mousePosition.y - 100,
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, rgba(0, 255, 255, 0.3) 50%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(20px)',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )}
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-white">
                <h3 className={`font-bold mb-2 text-center ${isMain ? 'text-2xl' : 'text-lg'}`}>
                  {slide.title}
                </h3>
                <p className={`text-center opacity-90 ${isMain ? 'text-base' : 'text-sm'}`}>
                  {slide.content}
                </p>
              </div>
              
              {/* Border glow effect */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-cyan-400 opacity-60"></div>
                  <div className="absolute inset-0 border border-cyan-300 opacity-40"></div>
                </div>
              )}
              
              {/* Subtle ambient glow */}
              <div className={`
                absolute inset-0 transition-opacity duration-300
                ${hoveredIndex === index ? 'opacity-20' : 'opacity-0'}
              `}
              style={{
                background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.3) 0%, transparent 70%)',
              }}
              />
            </div>
          );
        })}
        </div>
        
        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`
            absolute left-4 top-1/2 transform -translate-y-1/2 z-20
            w-12 h-12 rounded-full bg-black bg-opacity-50 backdrop-blur-sm
            flex items-center justify-center text-white text-xl font-bold
            transition-all duration-300 hover:bg-opacity-70
            ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}
          `}
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          }}
        >
          ←
        </button>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide >= slides.length - 1}
          className={`
            absolute right-4 top-1/2 transform -translate-y-1/2 z-20
            w-12 h-12 rounded-full bg-black bg-opacity-50 backdrop-blur-sm
            flex items-center justify-center text-white text-xl font-bold
            transition-all duration-300 hover:bg-opacity-70
            ${currentSlide >= slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}
          `}
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          }}
        >
          →
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${currentSlide === i 
                  ? 'bg-cyan-400 shadow-lg' 
                  : 'bg-gray-500 hover:bg-gray-400'
                }
              `}
              style={{
                boxShadow: currentSlide === i ? '0 0 10px rgba(0, 255, 255, 0.8)' : 'none'
              }}
            />
          ))}
        </div>
        
        {/* Background ambient effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: i % 3 === 0 ? '#22D3EE' : i % 3 === 1 ? '#A78BFA' : '#F472B6',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </div>

      
      
    </div>
  );
};

export default HorizontalSlideBar;
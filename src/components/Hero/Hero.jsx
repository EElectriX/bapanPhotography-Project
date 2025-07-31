import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HorizontalImageScroll = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  // Real images from various sources
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop', alt: 'Mountain Vista' },
    { id: 2, src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=200&fit=crop', alt: 'Ocean Waves' },
    { id: 3, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=200&fit=crop', alt: 'Starry Night' },
    { id: 4, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop', alt: 'Forest Path' },
    { id: 5, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop', alt: 'City Skyline' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop', alt: 'Desert Dunes' },
    { id: 7, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop', alt: 'Aurora Lights' },
    { id: 8, src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&h=200&fit=crop', alt: 'Cosmic Nebula' },
    { id: 9, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop', alt: 'Tropical Beach' },
    { id: 10, src: 'https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=300&h=200&fit=crop', alt: 'Snowy Peaks' },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    if (scrollRef.current) {
      const totalWidth = scrollRef.current.scrollWidth / 2; // Half because we duplicated
      
      // Create the infinite scroll animation
      const scrollAnimation = gsap.to(scrollRef.current, {
        x: -totalWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      // Add hover pause functionality
      const container = containerRef.current;
      if (container) {
        const handleMouseEnter = () => scrollAnimation.pause();
        const handleMouseLeave = () => scrollAnimation.resume();
        
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup event listeners
        return () => {
          container.removeEventListener('mouseenter', handleMouseEnter);
          container.removeEventListener('mouseleave', handleMouseLeave);
          scrollAnimation.kill();
        };
      }
    }
  }, []);

  return (
   
    <div className="w-full bg-black min-h-screen relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      {/* Animated neon background effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>
      
      {/* Neon grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Header Section */}
      <header className="text-center mb-12 relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 drop-shadow-2xl">
          NEON GALLERY
        </h1>
        <div className="text-cyan-300 text-lg font-light tracking-wider">
          <span className="inline-block animate-pulse">◆</span>
          <span className="mx-3">Hover to pause the experience</span>
          <span className="inline-block animate-pulse">◆</span>
        </div>
      </header>
      
      {/* Image Gallery */}
      <section 
        ref={containerRef}
        className="overflow-hidden cursor-pointer relative z-10 -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16"
        role="region"
        aria-label="Horizontal scrolling image gallery"
      >
        <div 
          ref={scrollRef}
          className="flex gap-8 w-max pl-4 sm:pl-6 lg:pl-8 xl:pl-12 2xl:pl-16"
        >
          {duplicatedImages.map((image, index) => (
            <article
              key={`${image.id}-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/60 transform transition-all duration-500 border-2 border-transparent group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-cyan-400/50 group-hover:shadow-2xl">
                {/* Neon glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500 shadow-2xl" />
                
                {/* Additional shadow layer */}
                <div className="absolute -inset-1 bg-black/20 rounded-2xl shadow-2xl shadow-black/80" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/50">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-64 h-40 object-cover transition-all duration-700 group-hover:brightness-110 group-hover:contrast-110"
                    loading="lazy"
                  />
                  
                  {/* Dark overlay with neon accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="text-sm font-bold text-cyan-400 tracking-wide">{image.alt}</h3>
                      <p className="text-xs text-gray-300 mt-1">Digital Art</p>
                    </div>
                  </div>
                  
                  {/* Neon corner accent */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-cyan-400/20 backdrop-blur-sm rounded-full p-2 border border-cyan-400/50">
                      <svg 
                        className="w-4 h-4 text-cyan-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
     
    
     
    </div>
  );
};

export default HorizontalImageScroll;
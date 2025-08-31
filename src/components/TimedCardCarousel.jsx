import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Play, Pause,Image,Video  } from 'lucide-react';

const GSAPCardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const carouselRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const thumbnailsRef = useRef([]);
  const videoRef = useRef(null);

  // Slide data
  const slides = [
    {
      id: 1,
      title: "SUNRISE ON PEAKS",
      name: "Sunrise",
      description: "Witness the serene beauty of the sunrise over majestic mountain peaks. A moment of pure tranquility.",
      media: "/ServicesImages/image1.jpg",
      type: "image",
    },
    {
      id: 2,
      title: "RUGGED ROCKS",
      name: "Rocky",
      description: "Explore the rugged beauty of barren rocky mountains. A testament to nature's raw power.",
      media: "/ServicesImages/image2.jpg",
      type: "image",
    },
    {
      id: 3,
      title: "FOREST PATHWAY",
      name: "Forest",
      description: "A peaceful trail through dense green forests. Perfect for reconnecting with nature.",
      media: "/ServicesImages/image3.jpg",
      type: "image",
    },
    {
      id: 4,
      title: "COLORFUL MEADOW",
      name: "Meadow",
      description: "A colorful meadow filled with butterflies and blooming flowers. Nature at its best.",
      media: "/ServicesImages/image4.jpg",
      type: "image",
    },
    {
      id: 5,
      title: "COLORFUL MEADOW",
      name: "My video",
      description: "A colorful meadow filled with butterflies and blooming flowers. Nature at its best.",
      media: "/ClassVideo1.mp4",
      type: "video",
      poster: "/ServicesImages/image5.jpg"
    },
  ];

  // Initialize GSAP on component mount
  useEffect(() => {
    // Set initial states for GSAP animations
    if (backgroundRef.current) {
      gsap.set(backgroundRef.current, { scale: 1, opacity: 1 });
    }
    if (contentRef.current) {
      gsap.set(contentRef.current, { y: 0, opacity: 1 });
    }
    if (thumbnailsRef.current.length > 0) {
      gsap.set(thumbnailsRef.current, { x: 0, opacity: 1 });
    }
  }, [currentSlide]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP Animation Function
  const animateSlideChange = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Pause any playing video before transition
    if (videoRef.current) {
      videoRef.current.pause();
    }
    
    const tl = gsap.timeline({
      onComplete: () => setIsTransitioning(false)
    });

    // Animate out current content
    tl.to(backgroundRef.current, {
      scale: 1.1,
      opacity: 0.3,
      duration: 0.2,
      ease: "power2.inOut"
    })
    .to(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.1,
      ease: "power2.out"
    }, "-=0.2")
    .to(thumbnailsRef.current, {
      x: direction === 'next' ? -100 : 100,
      opacity: 0,
      duration: 0.2,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.2");

    // Change slide
    tl.call(() => {
      if (direction === 'next') {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      } else {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
      }
    });

    // Animate in new content
    tl.to(backgroundRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
      ease: "power2.inOut"
    })
    .fromTo(contentRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" },
      "-=0.2"
    )
    .fromTo(thumbnailsRef.current,
      { x: direction === 'next' ? 100 : -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.2,
        stagger: 0.1,
        ease: "back.out(1.2)"
      },
      "-=0.2"
    );
  };

  const handleNavigation = (direction) => {
    animateSlideChange(direction);
  };

  const getOrderedSlides = () => {
    const ordered = [slides[currentSlide]];
    for (let i = 1; i < slides.length; i++) {
      const index = (currentSlide + i) % slides.length;
      ordered.push(slides[index]);
    }
    return ordered;
  };

  const orderedSlides = getOrderedSlides();
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const currentMedia = orderedSlides[0];

  // Media component for rendering video or image
  const MediaComponent = ({ slide, isMain = false, className = "" }) => {
    if (slide.type === 'video') {
      return (
        <video
          ref={isMain ? videoRef : null}
          className={`w-full h-full object-cover ${className}`}
          autoPlay={isMain}
          muted
          loop
          playsInline
        >
          <source src={slide.media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <div
          className={`w-full h-full bg-cover bg-center bg-no-repeat ${className}`}
          style={{ backgroundImage: `url(${slide.media})` }}
        />
      );
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden relative" ref={carouselRef}>
      {/* Background Media */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
      >
        <MediaComponent slide={currentMedia} isMain={true} />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        
        {/* Media Type Indicator */}
        {/* <div className="absolute top-4 right-4 z-20">
          <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
            currentMedia.type === 'video' ? 'bg-red-600' : 'bg-blue-600'
          }`}>
            {currentMedia.type === 'video' ? '📹 VIDEO' : '🖼️ IMAGE'}
          </div>
        </div>
         */}
        {/* Main slide content */}
        <div 
          ref={contentRef}
          className={`absolute text-left text-white z-10 transform -translate-y-1/2 top-1/2 ${
            isMobile ? 'left-5 w-11/12' : isTablet ? 'left-12 w-auto' : 'left-24 w-auto'
          }`}
        >
          <div 
            className={`relative font-bold uppercase mb-4 ${
              isMobile ? 'text-2xl' : isTablet ? 'text-4xl' : 'text-5xl'
            } before:content-[''] before:block before:h-0.5 ${
              isMobile ? 'before:w-8 before:mb-2' : 'before:w-12 before:mb-4'
            } before:bg-white after:content-[attr(data-item)] after:absolute ${
              isMobile ? 'after:-top-6 after:left-1 after:text-base' : 'after:-top-10 after:left-4 after:text-2xl'
            } after:text-white`}
            data-item={currentMedia.id.toString().padStart(2, '0')}
          >
            {currentMedia.title}
          </div>
          <div className={`uppercase font-medium mb-4 text-orange-400 ${
            isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-xl'
          }`}>
            {currentMedia.name}
          </div>
          <div className={`${isMobile ? 'text-xs w-11/12' : 'text-base w-96'} leading-relaxed`}>
            {currentMedia.description}
          </div>
        </div>
      </div>

      {/* Thumbnail slides */}
      <div className="absolute inset-0 pointer-events-none">
        {orderedSlides.slice(1).map((slide, index) => {
          const leftOffset = index === 0 ? 0 : 
                           index === 1 ? (isMobile ? 120 : isTablet ? 160 : 200) :
                           index === 2 ? (isMobile ? 240 : isTablet ? 320 : 400) :
                           (isMobile ? 360 : isTablet ? 480 : 600);
          
          const leftPosition = isMobile ? '0%' : isTablet ? '40%' : '55%';
          
          return (
            <div
              key={`${slide.id}-thumb-${index}`}
              ref={el => thumbnailsRef.current[index] = el}
              className={`absolute overflow-hidden rounded-2xl shadow-2xl ${
                isMobile ? 'w-32 h-40 bottom-24' : isTablet ? 'w-40 h-52 bottom-36' : 'w-48 h-64 bottom-36'
              }`}
              style={{ 
                left: index === 0 ? leftPosition : `calc(${leftPosition} + ${leftOffset}px + 3%)`
              }}
            >
              <MediaComponent slide={slide} />
              
              {/* Media type indicator for thumbnails */}
              <div className="absolute top-2 right-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  slide.type === 'video' ? 'bg-red-600' : 'bg-blue-600'
                }`}>
                  {slide.type === 'video' ? <Video  size={16} /> : <Image size={16} />}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute left-0 top-full transform -translate-y-full w-full p-2">
                <div className={`relative font-bold uppercase mb-2 text-white ${
                  isMobile ? 'text-xs' : 'text-sm'
                } before:content-[''] before:block before:h-px before:w-5 before:bg-white before:mb-2 after:content-[attr(data-item)] after:absolute after:-top-5 after:left-0 ${
                  isMobile ? 'after:text-xs' : 'after:text-sm'
                } after:text-white`}
                data-item={slide.id.toString().padStart(2, '0')}>
                  {slide.title}
                </div>
                <div className={`uppercase font-medium text-orange-400 ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>
                  {slide.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className={`absolute z-30 flex items-center gap-4 ${
        isMobile ? 'bottom-5 left-1/2 transform -translate-x-1/2' : 
        isTablet ? 'bottom-12 left-2/5 right-8' : 
        'bottom-12 left-1/2 right-8'
      }`}>
        <button
          className={`${isMobile ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-base'} rounded-full border-2 border-white text-white bg-black/20 backdrop-blur-sm font-bold transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center disabled:opacity-50`}
          onClick={() => handleNavigation('prev')}
          disabled={isTransitioning}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          className={`${isMobile ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-base'} rounded-full border-2 border-white text-white bg-black/20 backdrop-blur-sm font-bold transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center disabled:opacity-50`}
          onClick={() => handleNavigation('next')}
          disabled={isTransitioning}
        >
          <ChevronRight size={24} />
        </button>

        <div className={`text-white font-normal tracking-widest ml-4 ${isMobile ? 'text-base' : 'text-xl'}`}>
          {String(currentSlide + 1).padStart(2, '0')}/{slides.length.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Video Controls (only show for video slides) */}
      {currentMedia.type === 'video' && (
        <div className="absolute bottom-20 left-24 z-20">
          <button
            className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300"
            onClick={() => {
              if (videoRef.current) {
                if (videoRef.current.paused) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
              }
            }}
          >
            {videoRef.current?.paused ? '▶ Play' : '⏸ Pause'}
          </button>
        </div>
      )}
    </div>
  );
};

export default GSAPCardCarousel;
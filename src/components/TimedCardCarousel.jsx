import React, { useState, useEffect, useRef } from 'react';

const TimedCardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const carouselRef = useRef(null);
  const autoNextTimeoutRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const runningTimeBarRef = useRef(null);

  // Timing configurations
  const TIME_RUNNING = 1500; // Animation duration for the transition
  const TIME_AUTO_NEXT = 3500; // Auto-slide duration

  // Slide data
  const slides = [
    {
      id: 1,
      title: "SUNRISE ON PEAKS",
      name: "Sunrise",
      description: "Witness the serene beauty of the sunrise over majestic mountain peaks. A moment of pure tranquility.",
      image: "/ServicesImages/image1.jpg"
    },
    {
      id: 2,
      title: "RUGGED ROCKS",
      name: "Rocky",
      description: "Explore the rugged beauty of barren rocky mountains. A testament to nature's raw power.",
      image: "/ServicesImages/image2.jpg"
    },
    {
      id: 3,
      title: "FOREST PATHWAY",
      name: "Forest",
      description: "A peaceful trail through dense green forests. Perfect for reconnecting with nature.",
      image: "/ServicesImages/image3.jpg"
    },
    {
      id: 4,
      title: "COLORFUL MEADOW",
      name: "Meadow",
      description: "A colorful meadow filled with butterflies and blooming flowers. Nature at its best.",
      image: "/ServicesImages/image4.jpg"
    },
    {
      id: 5,
      title: "SERENE LAKE",
      name: "Lake",
      description: "A calm and serene lake surrounded by towering trees and mountains. A perfect escape.",
      image: "/ServicesImages/image5.jpg"
    },
    {
      id: 6,
      title: "PEAKS IN THE CLOUDS",
      name: "Clouds",
      description: "Mountain peaks wrapped in clouds. A dreamy sight that inspires awe and wonder.",
      image: "/ServicesImages/image6.jpg"
    },
    {
      id: 7,
      title: "RIVERBANK PARADISE",
      name: "Riverbank",
      description: "A picturesque riverbank flowing through lush greenery and vibrant landscapes.",
      image: "/ServicesImages/image7.jpg"
    },
    {
      id: 8,
      title: "MYSTIC RIDGES",
      name: "Ridges",
      description: "Discover the mystic beauty of mountain ridges under a cloudy sky. Perfect for adventurers.",
      image: "/ServicesImages/image8.jpg"
    },
    {
      id: 9,
      title: "GOLDEN CLIFFS",
      name: "Cliffs",
      description: "Golden cliffs basking in sunlight. A stunning view that captures the heart of nature.",
      image: "/ServicesImages/image9.jpg"
    },
    {
      id: 10,
      title: "PEACEFUL VALLEY",
      name: "Valley",
      description: "A peaceful valley surrounded by towering mountains. A perfect destination for solitude.",
      image: "/ServicesImages/image10.jpg"
    }
  ];

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pause animation
  const pauseAnimation = () => {
    if (runningTimeBarRef.current) {
      const computedStyle = window.getComputedStyle(runningTimeBarRef.current);
      const width = parseFloat(computedStyle.getPropertyValue('width'));
      runningTimeBarRef.current.style.animation = 'none';
      runningTimeBarRef.current.style.width = `${width}px`;
    }
  };

  // Reset animation for the running time bar
  const resetAnimation = () => {
    if (runningTimeBarRef.current) {
      runningTimeBarRef.current.style.animation = "none";
      runningTimeBarRef.current.offsetHeight; // Trigger reflow
      runningTimeBarRef.current.style.animation = `runningTime ${TIME_AUTO_NEXT / 1000}s linear forwards`;
    }
  };

  // Handle navigation
  const handleNavigation = (direction) => {
    // if (isTransitioning) return;

    setIsTransitioning(true);
    
    if (carouselRef.current) {
      carouselRef.current.classList.add(direction);
    }

    if (direction === 'next') {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    } else {
      setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    }

    // Clear existing timeouts
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    if (autoNextTimeoutRef.current) clearTimeout(autoNextTimeoutRef.current);

    // Remove transition class after animation
    transitionTimeoutRef.current = setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove('next', 'prev');
      }
      setIsTransitioning(false);
    }, TIME_RUNNING);

    // Set up next auto-slide if not paused
    if (!isPaused) {
      autoNextTimeoutRef.current = setTimeout(() => {
        handleNavigation('next');
      }, TIME_AUTO_NEXT);
    }

    // Reset running time animation if not paused
    if (!isPaused) {
      resetAnimation();
    }
  };

  // Toggle pause/play
  const togglePause = () => {
    const newPaused = !isPaused;
    setIsPaused(newPaused);
    
    if (newPaused) {
      // Pause
      if (autoNextTimeoutRef.current) clearTimeout(autoNextTimeoutRef.current);
      pauseAnimation();
    } else {
      // Resume
      autoNextTimeoutRef.current = setTimeout(() => {
        handleNavigation('next');
      }, TIME_AUTO_NEXT);
      resetAnimation();
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      autoNextTimeoutRef.current = setTimeout(() => {
        handleNavigation('next');
      }, TIME_AUTO_NEXT);
      resetAnimation();
    }

    return () => {
      if (autoNextTimeoutRef.current) clearTimeout(autoNextTimeoutRef.current);
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, [isPaused]);

  // Get ordered slides based on current slide
  const getOrderedSlides = () => {
    const ordered = [];
    for (let i = 0; i < slides.length; i++) {
      const index = (currentSlide + i) % slides.length;
      ordered.push(slides[index]);
    }
    return ordered;
  };

  const orderedSlides = getOrderedSlides();
  const progressPercentage = ((currentSlide + 1) / slides.length) * 100;
  const slideNumber = String(currentSlide + 1).padStart(2, '0');

  // Calculate responsive values
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  // Responsive left position
  const leftPosition = isMobile ? '0%' : isTablet ? '40%' : '55%';
  
  // Responsive item width
  const itemWidth = isMobile ? '120px' : isTablet ? '150px' : '180px';
  
  // Responsive item height
  const itemHeight = isMobile ? '160px' : isTablet ? '200px' : '250px';

  return (
    <div className="w-full h-screen overflow-hidden relative bg-gray-900" ref={carouselRef}>
      <style jsx>{`
        :root {
          --left-position: ${leftPosition};
          --transition-time: 1.2s cubic-bezier(0.25, 1, 0.5, 1);
          --item-width: ${itemWidth};
          --item-height: ${itemHeight};
        }

        .carousel-item {
          width: var(--item-width);
          height: var(--item-height);
          position: absolute;
          bottom: ${isMobile ? '100px' : '150px'};
          left: calc(var(--left-position) + 3%);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
          background-position: center;
          background-size: cover;
          z-index: 100;
          transform: translate(0, 0px);
          transition: all var(--transition-time);
        }

        .carousel-item::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(33, 33, 33, 0.5);
          z-index: 1;
        }

        .carousel-item:nth-child(1),
        .carousel-item:nth-child(2) {
          bottom: 0px;
          left: 0;
          border-radius: 0;
          transform: translate(0, 0px);
          width: 100%;
          height: 100%;
        }

        .carousel-item:nth-child(3) {
          left: var(--left-position);
        }

        .carousel-item:nth-child(4) {
          transition-delay: 0.1s;
          left: calc(var(--left-position) + ${isMobile ? '120px' : isTablet ? '160px' : '200px'});
        }

        .carousel-item:nth-child(5) {
          transition-delay: 0.2s;
          left: calc(var(--left-position) + ${isMobile ? '240px' : isTablet ? '320px' : '400px'});
        }

        .carousel-item:nth-child(6) {
          transition-delay: 0.3s;
          left: calc(var(--left-position) + ${isMobile ? '360px' : isTablet ? '480px' : '600px'});
        }

        .carousel-item:nth-child(n + 7) {
          transition-delay: 0.4s;
          left: calc(var(--left-position) + ${isMobile ? '480px' : isTablet ? '640px' : '800px'});
        }

        .item-content {
          position: absolute;
          text-align: left;
          color: #fff;
          z-index: 3;
          left: 0;
          top: 100%;
          transform: translateY(-100%);
          width: 100%;
          padding: 10px;
          transition: all var(--transition-time);
        }

        .content-title::before {
          content: "";
          display: block;
          height: 1px;
          width: 20px;
          background-color: #fff;
          margin-bottom: 10px;
        }

        .content-title {
          font-size: ${isMobile ? '10px' : '12px'};
          text-transform: uppercase;
          color: #ffffff;
          font-weight: bold;
          line-height: 1;
          margin-bottom: 10px;
          transition: all var(--transition-time);
          position: relative;
        }

        .content-title::after {
          content: attr(data-item);
          border-radius: 50%;
          color: #fff;
          font-size: ${isMobile ? '10px' : '12px'};
          position: absolute;
          top: -20px;
          left: 0px;
          z-index: 2;
          font-weight: 400;
        }

        .content-name {
          font-size: ${isMobile ? '8px' : '10px'};
          text-transform: uppercase;
          font-weight: 500;
          line-height: 1;
          transition: all var(--transition-time);
          margin-bottom: 10px;
          color: #d36e10;
        }

        .content-description {
          font-size: ${isMobile ? '12px' : '16px'};
          font-weight: 400;
          transition: all var(--transition-time);
          opacity: 0;
          display: none;
        }

        .carousel-item:nth-child(1) .item-content,
        .carousel-item:nth-child(2) .item-content {
          transform: translateY(-50%);
          left: ${isMobile ? '20px' : isTablet ? '50px' : '100px'};
          width: ${isMobile ? '90%' : isTablet ? '500px' : '600px'};
          top: 50%;
          padding: 0;
        }

        .carousel-item:nth-child(1) .content-title::before,
        .carousel-item:nth-child(2) .content-title::before {
          width: ${isMobile ? '30px' : '50px'};
          height: 3px;
          margin-bottom: ${isMobile ? '10px' : '20px'};
        }

        .carousel-item:nth-child(1) .content-title::after,
        .carousel-item:nth-child(2) .content-title::after {
          font-size: ${isMobile ? '16px' : '25px'};
          top: ${isMobile ? '-25px' : '-40px'};
          left: ${isMobile ? '5px' : '15px'};
        }

        .carousel-item:nth-child(1) .content-title,
        .carousel-item:nth-child(2) .content-title {
          font-size: ${isMobile ? '24px' : isTablet ? '36px' : '50px'};
          margin-bottom: ${isMobile ? '10px' : '20px'};
        }

        .carousel-item:nth-child(1) .content-name,
        .carousel-item:nth-child(2) .content-name {
          font-size: ${isMobile ? '14px' : isTablet ? '16px' : '20px'};
          margin-bottom: ${isMobile ? '10px' : '20px'};
        }

        .carousel-item:nth-child(1) .content-description,
        .carousel-item:nth-child(2) .content-description {
          font-size: ${isMobile ? '12px' : '16px'};
          opacity: 1;
          display: block;
          width: ${isMobile ? '90%' : isTablet ? '350px' : '400px'};
        }

        @keyframes animate {
          from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translate(0);
            filter: blur(0);
          }
        }

        @keyframes runningTime {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .slide-number {
          animation: animate 0.5s ease-in-out 0.3s 1 forwards;
          opacity: 0;
          font-size: ${isMobile ? '16px' : '24px'};
        }

        .arrows {
          position: absolute;
          bottom: ${isMobile ? '20px' : '50px'};
          left: var(--left-position);
          width: calc(100% - var(--left-position) - 2%);
          z-index: 100;
          display: flex;
          gap: 5%;
          align-items: center;
          padding-right: ${isMobile ? '10px' : '0'};
        }

        .pause-btn {
          width: ${isMobile ? '30px' : '40px'};
          height: ${isMobile ? '30px' : '40px'};
          border-radius: 50%;
          border: 2px solid rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          background-color: transparent;
          outline: none;
          font-size: ${isMobile ? '14px' : '16px'};
          font-weight: bold;
          transition: all var(--transition-time);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pause-btn:hover {
          border: 2px solid #ffffff;
          color: #ffffff;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .arrow-btn {
          width: ${isMobile ? '30px' : '40px'};
          height: ${isMobile ? '30px' : '40px'};
          border-radius: 50%;
          border: 2px solid rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          background-color: transparent;
          outline: none;
          font-size: ${isMobile ? '14px' : '16px'};
          font-weight: bold;
          transition: all var(--transition-time);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow-btn:hover {
          border: 2px solid #ffffff;
          color: #ffffff;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .progress-bar-container {
          width: ${isMobile ? '40%' : '60%'};
          height: 3px;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background-color: #d36e10;
          transition: all var(--transition-time);
        }

        .time-running {
          position: fixed;
          z-index: 1000;
          width: 0%;
          height: 4px;
          background-color: #ffffff;
          left: 0;
          top: 0;
          animation: runningTime ${TIME_AUTO_NEXT / 1000}s linear 1 forwards;
        }

        @media (max-width: 480px) {
          .arrows {
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            bottom: 10px;
          }
          
          .progress-bar-container {
            order: 3;
            width: 100%;
            margin-top: 10px;
          }
          
          .slide-number {
            order: 2;
            margin-left: auto;
          }
        }
      `}</style>

      {/* Carousel Items */}
      <div className="relative w-full h-full">
        {orderedSlides.map((slide, index) => (
          <div
            key={`${slide.id}-${index}`}
            className="carousel-item"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="item-content">
              <div className="content-title" data-item={slide.id.toString().padStart(2, '0')}>
                {slide.title}
              </div>
              <div className="content-name">{slide.name}</div>
              <div className="content-description">{slide.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows and Progress */}
      <div className="arrows">
        <button
          className="pause-btn"
          onClick={togglePause}
        >
          {isPaused ? '▶' : '⏸'}
        </button>

        <button
          className="arrow-btn"
          onClick={() => handleNavigation('prev')}
          disabled={isTransitioning}
        >
          ←
        </button>
        <button
          className="arrow-btn"
          onClick={() => handleNavigation('next')}
          disabled={isTransitioning}
        >
          →
        </button>

        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="slide-number text-white font-normal tracking-widest">
          {slideNumber}/{slides.length.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Time Running Bar */}
      <div className="time-running" ref={runningTimeBarRef} />
    </div>
  );
};

export default TimedCardCarousel;
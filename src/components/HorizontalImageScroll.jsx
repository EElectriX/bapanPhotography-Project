import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HorizontalImageScroll = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const images = [
    { id: 1, src: '/HorizontalImageScrollImages/image1.jpg', alt: 'Mountain Vista' },
    { id: 2, src: '/HorizontalImageScrollImages/image2.jpg', alt: 'Ocean Waves' },
    { id: 3, src: '/HorizontalImageScrollImages/image3.jpg', alt: 'Starry Night' },
    { id: 4, src: '/HorizontalImageScrollImages/image4.jpg', alt: 'Forest Path' },
    { id: 5, src: '/HorizontalImageScrollImages/image5.jpg', alt: 'City Skyline' },
    { id: 6, src: '/HorizontalImageScrollImages/image6.jpg', alt: 'Desert Dunes' },
    { id: 7, src: '/HorizontalImageScrollImages/image7.jpg', alt: 'Aurora Lights' },
    { id: 8, src: '/HorizontalImageScrollImages/image8.jpg', alt: 'Cosmic Nebula' },
    { id: 9, src: '/HorizontalImageScrollImages/image9.jpg', alt: 'Tropical Beach' },
    { id: 10, src: '/HorizontalImageScrollImages/image10.jpg', alt: 'Mountain and tress' },

  ];

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const totalWidth = scrollRef.current.scrollWidth / 2;

    const animation = gsap.to(scrollRef.current, {
      x: -totalWidth,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });

    const container = containerRef.current;
    if (container) {
      const pauseScroll = () => gsap.globalTimeline.pause();
      const resumeScroll = () => gsap.globalTimeline.resume();

      container.addEventListener('mouseenter', pauseScroll);
      container.addEventListener('mouseleave', resumeScroll);

      return () => {
        container.removeEventListener('mouseenter', pauseScroll);
        container.removeEventListener('mouseleave', resumeScroll);
        animation.kill();
      };
    }
  }, []);

  return (
  
   <div className=" bg-black min-h-screen relative overflow-hidden  py-10 px-5 md:px-20 ">

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 drop-shadow-2xl">
          Welcome to Bapan Photography
        </h2>
        <div className="text-cyan-300 text-lg font-light tracking-wider">
          <span className="inline-block animate-pulse">◆</span>
          <span className="mx-3">Capturing moments, creating memories. Explore our neon gallery below! Hover to pause the experience</span>
          <span className="inline-block animate-pulse">◆</span>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden cursor-pointer relative z-10">
        <div ref={scrollRef} className="flex gap-8 w-max">
          {duplicatedImages.map((image, index) => (
            <div key={`${image.id}-${index}`} className="flex-shrink-0 group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-110 border-2 border-transparent group-hover:border-cyan-400 group-hover:shadow-cyan-400/50 group-hover:shadow-2xl shadow-black/60">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500 shadow-2xl"></div>
                <div className="absolute -inset-1 bg-black/20 rounded-2xl shadow-2xl shadow-black/80"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/50">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-64 h-40 object-cover transition-all duration-700 group-hover:brightness-110 group-hover:contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="text-sm font-bold text-cyan-400 tracking-wide">{image.alt}</h3>
                      <p className="text-xs text-gray-300 mt-1">Digital Art</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  

    
    </div>
    </div>
  );
};

export default HorizontalImageScroll;

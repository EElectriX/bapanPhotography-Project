import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GSAPScrollGallery = () => {
  const containerRef = useRef();
  const imageRefs = useRef([]);

  // Sample images with descriptions
  const images = [
    {
      src: 'https://picsum.photos/800/600?random=1',
      title: 'Mountain Vista',
      description: 'Breathtaking mountain landscapes that stretch endlessly into the horizon, where earth meets sky in perfect harmony.'
    },
    {
      src: 'https://picsum.photos/800/600?random=2',
      title: 'Ocean Dreams',
      description: 'Crystal clear waters reflecting the azure sky, with gentle waves creating a symphony of nature\'s rhythm.'
    },
    {
      src: 'https://picsum.photos/800/600?random=3',
      title: 'Forest Serenity',
      description: 'Ancient trees standing tall like guardians of time, their canopy filtering golden sunlight into dancing shadows.'
    },
    {
      src: 'https://picsum.photos/800/600?random=4',
      title: 'Urban Pulse',
      description: 'The vibrant energy of city life captured in a single frame, where architecture tells stories of human ambition.'
    },
    {
      src: 'https://picsum.photos/800/600?random=5',
      title: 'Desert Solitude',
      description: 'Vast expanses of sand dunes sculpted by wind and time, creating patterns of incredible beauty and isolation.'
    },
    {
      src: 'https://picsum.photos/800/600?random=6',
      title: 'Sunset Glory',
      description: 'The daily masterpiece painted across the sky, where colors blend in ways that inspire wonder and contemplation.'
    },
    {
      src: 'https://picsum.photos/800/600?random=7',
      title: 'Winter Wonderland',
      description: 'Snow-covered landscapes that transform the familiar into something magical, pure, and peacefully silent.'
    },
    {
      src: 'https://picsum.photos/800/600?random=8',
      title: 'Spring Awakening',
      description: 'Nature\'s renewal captured in blooming flowers and fresh green leaves, symbolizing hope and new beginnings.'
    },
    {
      src: 'https://picsum.photos/800/600?random=9',
      title: 'Architectural Marvel',
      description: 'Human creativity and engineering prowess displayed in structures that challenge the limits of imagination.'
    },
    {
      src: 'https://picsum.photos/800/600?random=10',
      title: 'Cosmic Wonder',
      description: 'The infinite beauty of the night sky, reminding us of our place in the vast tapestry of the universe.'
    }
  ];

//   useEffect(() => {
//     // Register ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger);

//     // Set initial states for all gallery items
//     imageRefs.current.forEach((ref, index) => {
//       if (ref) {
//         gsap.set(ref, { 
//           opacity: 0, 
//           y: 50,
//           scale: 0.95
//         });
//       }
//     });

//     // Create scroll animations for each gallery item
//     imageRefs.current.forEach((ref, index) => {
//   if (ref) {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ref,
//         start: "top 85%",
//         end: "top 15%", 
//         scrub: 1,
//         markers: false // set to true for debugging
//       }
//     });

//     tl.fromTo(ref, 
//       {
//         opacity: 0,
//         x: 50,
//         scale: 0.95
//       }, 
//       {
//         opacity: 1,
//         x: 0,
//         scale: 1,
//         ease: "power4.out",  // nice smooth easing
//         delay: index * 0.1, // stagger based on index
//         duration: 1.5,  // takes 1s to complete once started
//       }
//     );

//     // overlay animation (fades in very lightly)
//     const overlay = ref.querySelector(".image-overlay");
//     if (overlay) {
//       tl.to(overlay, { opacity: 0.12, ease: "power1.out" }, "<"); 
//       // "<" means start at same time as previous
//     }
//   }
// });


//     // Cleanup function
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

useEffect(() => {
 gsap.registerPlugin(ScrollTrigger);

 const triggers = [];

 imageRefs.current.forEach((ref, index) => {
   if (ref) {
     gsap.set(ref, { 
       opacity: 0, 
       y: 100,
       scale: 0.95
     });

     const tween = gsap.to(ref, {
       opacity: 1,
       y: 0,
       scale: 1,
       ease: "power3.out",
       scrollTrigger: {
         trigger: ref,
         start: "top 90%",
         end: "bottom 10%",
         scrub: 3,
         markers: false,
         onEnter: () => gsap.to(ref, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }),
         onLeave: () => gsap.to(ref, { opacity: 0, y: -100, scale: 0.95, duration: 1, ease: "power3.in" }),
         onEnterBack: () => gsap.to(ref, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }),
         onLeaveBack: () => gsap.to(ref, { opacity: 0, y: 100, scale: 0.95, duration: 1, ease: "power3.in" })
       }
     });

     triggers.push(tween.scrollTrigger);
   }
 });

 return () => {
   triggers.forEach(trigger => trigger.kill());
 };
}, []);

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden" ref={containerRef}>
      {/* Animated background blobs */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            GSAP ScrollTrigger Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 px-4">
            Smooth scroll-based animations powered by GSAP
          </p>
          <div className="mt-8 animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="space-y-20 sm:space-y-32 lg:space-y-40">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="gallery-item relative"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className={`relative overflow-hidden rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl w-full ${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-black bg-opacity-60 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div 
                    className="image-overlay absolute inset-0 rounded-lg sm:rounded-xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.12))',
                      opacity: 0
                    }}
                  />
                </div>

                <div className={`space-y-3 sm:space-y-4 w-full ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                    {image.title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* More Images Button */}
        <div className="flex justify-center mt-20 sm:mt-32 lg:mt-40">
          <a 
            href="#" 
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-500 hover:via-blue-500 hover:to-indigo-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 ease-out"
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            
            {/* Button content */}
            <div className="relative flex items-center space-x-3">
              {/* Google Drive icon */}
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.71 3.5L1.15 15L4.58 21L11.13 9.5M9.73 15L6.3 21H19.42L22.85 15M22.28 14L15.42 2H8.58L8.57 2L15.43 13.5"/>
              </svg>
              
              <span className="text-lg font-bold tracking-wide">View More Images</span>
              
              {/* Arrow icon */}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100"></div>
          </a>
        </div>
      </div>

      <div className="h-20 sm:h-32"></div>
    </div>
  );
};

export default GSAPScrollGallery;
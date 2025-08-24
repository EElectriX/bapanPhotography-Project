import React, { useState, useEffect, useRef, useCallback } from 'react';

const MobileScrollFadeGallery = () => {
  const [imageOpacities, setImageOpacities] = useState(Array(10).fill(0));
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

  // Unified scroll handler (same animation for all screens)
  const handleScroll = useCallback(() => {
    const newOpacities = imageRefs.current.map((ref) => {
      if (!ref) return 0;

      const rect = ref.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const fadeInStart = windowHeight * 0.85;
      const fullOpacityStart = windowHeight * 0.65;
      const fullOpacityEnd = windowHeight * 0.35;
      const fadeOutEnd = windowHeight * 0.15;

      if (rect.top > windowHeight) return 0;
      if (rect.bottom < 0) return 0;

      const imageTop = rect.top;
      const imageBottom = rect.bottom;
      const imageCenter = imageTop + rect.height / 2;

      let opacity = 0;

      if (imageTop <= fadeInStart && imageTop > fullOpacityStart) {
        const fadeInProgress = (fadeInStart - imageTop) / (fadeInStart - fullOpacityStart);
        opacity = fadeInProgress < 0.5 
          ? 2 * fadeInProgress * fadeInProgress
          : 1 - Math.pow(-2 * fadeInProgress + 2, 2) / 2;
      } else if (imageCenter >= fullOpacityEnd && imageCenter <= fullOpacityStart) {
        opacity = 1;
      } else if (imageBottom < fullOpacityEnd && imageBottom >= fadeOutEnd) {
        const fadeOutProgress = (imageBottom - fadeOutEnd) / (fullOpacityEnd - fadeOutEnd);
        opacity = fadeOutProgress < 0.5 
          ? 2 * fadeOutProgress * fadeOutProgress
          : 1 - Math.pow(-2 * fadeOutProgress + 2, 2) / 2;
      } else if (imageTop <= fullOpacityStart && imageBottom >= fullOpacityEnd) {
        opacity = 1;
      }

      return Math.max(0, Math.min(1, opacity));
    });

    setImageOpacities(newOpacities);
  }, []);

  useEffect(() => {
    handleScroll();

    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', smoothScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">

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
            Journey Through Images
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 px-4">
            Experience smooth scroll-based animations
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
              className="relative"
              style={{
                opacity: imageOpacities[index],
                transform: `translateY(${(1 - imageOpacities[index]) * 50}px)`,
                transition: 'none',
                willChange: 'opacity, transform'
              }}
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
                    className="absolute inset-0 rounded-lg sm:rounded-xl pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent, rgba(255,255,255,${imageOpacities[index] * 0.12}))`,
                      opacity: imageOpacities[index]
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
                  <div className="flex items-center space-x-3 mt-4 sm:mt-6">
                    <div className="w-12 sm:w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300"
                        style={{ width: `${imageOpacities[index] * 100}%` }}
                      />
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      {Math.round(imageOpacities[index] * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-20 sm:h-32"></div>
    </div>
  );
};

export default MobileScrollFadeGallery;

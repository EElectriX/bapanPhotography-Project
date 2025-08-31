import React, { useState, useEffect } from 'react';

const MobileOrientationPrompt = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  // Check if device is mobile and orientation
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    const checkOrientation = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      setIsPortrait(portrait);
      setShowPrompt(isMobile && portrait);
    };

    // Initial checks
    checkMobile();
    checkOrientation();

    // Event listeners
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [isMobile]);

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center z-50">
      <div className="text-center p-5 max-w-[80%]">
        {/* Animated phone icon */}
        <div className="mx-auto mb-8 w-32 h-48 perspective-1000">
          <div className="w-full h-full bg-gray-800 rounded-2xl relative border-4 border-gray-600 shadow-lg animate-pulse">
            <div className="absolute top-5 -right-10 text-5xl text-green-500 animate-spin-slow">↻</div>
            <div className="absolute top-8 left-3 right-3 bottom-8 bg-black rounded-xl flex justify-center items-center">
              <div className="w-16 h-1 bg-green-500 rounded-full relative">
                <div className="absolute -top-2 w-5 h-5 bg-green-500 rounded-full animate-move"></div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-white text-xl mt-6">Please rotate your device to landscape for a better experience</p>
      </div>
    </div>
  );
};

export default MobileOrientationPrompt;
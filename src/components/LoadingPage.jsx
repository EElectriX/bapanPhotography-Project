import { useState, useEffect } from 'react';

const LoadingPage = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: 'Loading components...', delay: 300 },
      { progress: 40, text: 'Fetching resources...', delay: 500 },
      { progress: 60, text: 'Preparing interface...', delay: 400 },
      { progress: 80, text: 'Almost ready...', delay: 300 },
      { progress: 100, text: 'Complete!', delay: 200 }
    ];

    let currentStep = 0;
    
    const progressInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setTimeout(() => {
          setProgress(loadingSteps[currentStep].progress);
          setLoadingText(loadingSteps[currentStep].text);
          
          if (currentStep === loadingSteps.length - 1) {
            setTimeout(() => {
              onLoadComplete();
            }, 500);
          }
          
          currentStep++;
        }, loadingSteps[currentStep]?.delay || 0);
      }
    }, 400);

    return () => clearInterval(progressInterval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Neon Grid Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Animated Neon Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-30 blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-cyan-400/20 border border-cyan-400/50 rounded-full flex items-center justify-center shadow-cyan-400/50 shadow-lg">
            <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
          
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex justify-between text-sm text-cyan-300 mb-2">
            <span>{loadingText}</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-800 border border-cyan-400/30 rounded-full h-3 shadow-black/60">
            <div 
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 h-3 rounded-full transition-all duration-500 ease-out shadow-lg shadow-cyan-400/50"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-200 shadow-lg shadow-purple-400/50"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-400 shadow-lg shadow-pink-400/50"></div>
        </div>

        {/* Status Indicators */}
        
      </div>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
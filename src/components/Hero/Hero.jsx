import React from "react";

export default function Hero() {
  const images = Array(6).fill("/bapanImage.jpg");

  return (
    <section
      className="bg-black text-white min-h-screen flex flex-col justify-start items-center 
                 px-4 pt-20 sm:pt-24 md:pt-32 relative"
    >
      {/* Title */}
      <h1 className="font-brone text-4xl sm:text-5xl md:text-7xl text-center mb-4 leading-tight">
        We exists
      </h1>

      {/* Tagline */}
      <p
        className="font-royal text-xl sm:text-2xl md:text-4xl 
                   text-gray-100 text-center max-w-3xl leading-relaxed mb-12"
      >
        Because Every Moment Deserves to Last Forever.
      </p>

      {/* Infinite Scrolling Gallery with Fade */}
      <div className="relative w-full max-w-7xl mb-12 overflow-hidden">
        {/* Fade left */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        {/* Fade right */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        <div className="flex animate-marquee gap-6">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0 rounded-xl overflow-hidden 
                         border border-gray-700 shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-4 sm:gap-6">
        <button className="px-5 py-3 sm:px-6 sm:py-3 rounded-lg border border-blue-500 
                           text-blue-400 text-base sm:text-lg font-semibold 
                           hover:bg-blue-600 hover:text-white transition">
          Courses
        </button>
        <button className="px-5 py-3 sm:px-6 sm:py-3 rounded-lg border border-blue-500 
                           text-blue-400 text-base sm:text-lg font-semibold 
                           hover:bg-blue-600 hover:text-white transition">
          Event Booking
        </button>
      </div>
    </section>
  );
}

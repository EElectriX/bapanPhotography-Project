import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      className="font-brone tracking-wide fixed 
                 bottom-4 md:top-4 md:bottom-auto 
                 left-1/2 -translate-x-1/2 
                 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 
                 backdrop-blur-lg text-white
                 rounded-full shadow-lg px-4 py-2 flex items-center justify-between
                 w-[95%] max-w-sm md:max-w-3xl 
                 z-50 border border-blue-600/50"
    >
      {/* Left Logo (Hidden on mobile) */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hidden md:flex w-12 h-12 rounded-full overflow-hidden items-center justify-center 
          bg-gradient-to-r from-blue-700 to-blue-900 
          shadow-md hover:shadow-lg transition duration-300
          ${isActive ? "ring-2 ring-blue-400" : ""}`
        }
      >
        <img
          src="/bapanImage.jpg"
          alt="Brand Logo"
          className="w-full h-full object-cover"
        />
      </NavLink>

      {/* Middle Buttons */}
      <div className="flex gap-2 md:gap-4 font-bold w-full justify-center">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base 
            bg-gray-800 text-gray-300 hover:text-blue-400 
            hover:bg-gray-700 transition duration-300 
            ${isActive ? "text-blue-400 font-semibold" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base 
            bg-gray-800 text-gray-300 hover:text-blue-400 
            hover:bg-gray-700 transition duration-300 
            ${isActive ? "text-blue-400 font-semibold" : ""}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base 
            bg-gray-800 text-gray-300 hover:text-blue-400 
            hover:bg-gray-700 transition duration-300 
            ${isActive ? "text-blue-400 font-semibold" : ""}`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Right Circle Button (WhatsApp) */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                   bg-green-600 shadow-md hover:shadow-lg transition duration-300"
      >
        <img
          src="/whatsapp-icon.svg"
          alt="WhatsApp"
          className="w-6 h-6 md:w-7 md:h-7 object-contain"
        />
      </a>
    </nav>
  );
}

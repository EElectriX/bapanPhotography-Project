import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhone, 
  FaEnvelope,
  FaMapMarkerAlt 
} from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Tagline */}
          <div>
            <h1 className="text-2xl font-bold">bapanPhotography</h1>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-gray-400">Made by Saptarshi</p>
              <a
                href="https://www.linkedin.com/in/saptorshi-mondol-9a474a1a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-gray-400">Made by Sagnik</p>
              <a
                href="https://www.linkedin.com/in/sagnik-bera/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-sm">
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">
                <a href="#CAREERS">CAREERS</a>
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                <a href="#INDUSTRIES">INDUSTRIES</a>
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                <a href="#SERVICES">OUR SERVICES</a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">
                <a href="#TRAINING">our classes</a>
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                <a href="#contact">CONTACT US</a>
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                <a href="#ABOUT">ABOUT US</a>
              </li>
            </ul>
          </div>

          {/* Social Media & Language Selector */}
          <div className="flex flex-col items-start md:items-end space-y-3">
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <FaFacebookF className="cursor-pointer hover:text-gray-400"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/bapan.mondal.7792052",
                    "_blank"
                  )
                }
              />
             
              <FaYoutube className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400"
              onClick={() =>
                  window.open(
                    "https://www.instagram.com/bapanphotography/?hl=en",
                    "_blank"
                  )
                } />
              <FaMapMarkerAlt className="cursor-pointer hover:text-gray-400"
            onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/r9VhmsQuGPNhQFZi9",
                  "_blank"
                )
              } />
            </div>
            <div className="flex space-x-1">
              
              <FaPhone className="cursor-pointer hover:text-gray-400" />
              <p>+91 xxxxxxxxxx</p>
             
            </div>
            <div className="flex space-x-1">
               <FaEnvelope  className="cursor-pointer hover:text-gray-400" />
               <p>bapanmondal@ghamil.com</p>
            </div>
            
              


            {/* Language Selector
            <select className="bg-gray-800 text-white px-3 py-1 border border-gray-600 rounded-md">
              <option>EN</option>
              <option>FR</option>
              <option>DE</option>
            </select> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-10 pt-5 flex justify-between items-center text-sm text-gray-400">
          <p>© 2025 bapanPhotography LTD</p>
          <div className="flex space-x-5">
            <span className="cursor-pointer hover:text-white">
              <a href="#terms">TERMS OF USE</a>
            </span>
            <span className="cursor-pointer hover:text-white">
              <a href="#privacy">PRIVACY</a>
            </span>
            <span className="cursor-pointer hover:text-white">
              <a href="#cookie">COOKIE</a>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-5 right-5 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoIosArrowUp className="text-white text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
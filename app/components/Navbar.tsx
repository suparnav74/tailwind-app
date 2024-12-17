"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  // State for toggling the mobile menu (hamburger menu)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for handling the profile dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // State for handling search input
  const [searchTerm, setSearchTerm] = useState("");

  // State for notification count
  const [notificationCount, setNotificationCount] = useState(3);

  // State for navbar background color on scroll
  const [bgColor, setBgColor] = useState("bg-blue-600");

  // Handle scrolling to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-blue-800");
      } else {
        setBgColor("bg-blue-600");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search input change
  const handleSearchChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  // Toggle mobile menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle profile dropdown
  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className={`${bgColor} text-white p-4 shadow-xl fixed w-full z-10`}>
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section: Logo and Facebook text */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook Logo"
            className="w-8 h-8 transition-transform transform hover:scale-110"
          />
          <div className="font-bold text-2xl tracking-wider hover:text-gray-300 transition duration-300">
            Facebook
          </div>
        </div>

        {/* Center section: Text buttons for Home, Video, Marketplace, and Friends */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
          <button className="bg-gradient-to-r px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700">
            <i className="fas fa-home mr-2"></i>
            Home
          </button>
          <button className="bg-gradient-to-r px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700">
            <i className="fas fa-video mr-2"></i>
            Video
          </button>
          <button className="bg-gradient-to-r px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700">
            <i className="fas fa-store mr-2"></i>
            Marketplace
          </button>
          <button className="bg-gradient-to-r px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700">
            <i className="fas fa-users mr-2"></i>
            Friends
          </button>
        </div>

        {/* Right section: Search Box, Notifications, and Profile */}
        <div className="flex items-center space-x-6 w-full md:w-auto justify-center md:justify-end">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-full w-64 text-black md:w-40 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />

          <button className="bg-blue-700 p-2 rounded-full relative hover:bg-blue-800 transition duration-300">
            <span className="text-white">🔔</span>
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>

          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile Photo"
              className="w-8 h-8 rounded-full border-2 border-white cursor-pointer transition-transform transform hover:scale-110"
              onClick={handleProfileToggle}
            />

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 opacity-0 transition-all duration-300 transform translate-y-2 hover:opacity-100 hover:translate-y-0">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle (Hamburger) */}
      <div className="md:hidden flex justify-between items-center mt-4">
        <button onClick={handleMenuToggle} className="p-2 text-white">
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="bg-blue-600 text-white p-4 md:hidden rounded-b-xl">
          <button className="w-full py-3 text-left hover:bg-blue-700 transition duration-200">
            Home
          </button>
          <button className="w-full py-3 text-left hover:bg-blue-700 transition duration-200">
            Video
          </button>
          <button className="w-full py-3 text-left hover:bg-blue-700 transition duration-200">
            Marketplace
          </button>
          <button className="w-full py-3 text-left hover:bg-blue-700 transition duration-200">
            Friends
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

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
  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
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
    <nav className={`${bgColor} text-white p-4 shadow-md fixed w-full z-10`}>
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section: Logo and Facebook text */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook Logo"
            className="w-8 h-8"
          />
          <div className="font-bold text-xl">Facebook</div>
        </div>

        {/* Center section: Text buttons for Home, Video, Marketplace, and Friends */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
          <button className="bg-blue-700 px-4 py-3 rounded text-white mb-2 md:mb-0 w-auto">
            Home
          </button>

          <button className="bg-blue-700 px-4 py-3 rounded text-white mb-2 md:mb-0 w-auto">
            Video
          </button>

          <button className="bg-blue-700 px-4 py-3 rounded text-white mb-2 md:mb-0 w-auto">
            Marketplace
          </button>

          <button className="bg-blue-700 px-4 py-3 rounded text-white mb-2 md:mb-0 w-auto">
            Friends
          </button>
        </div>

        {/* Right section: Search Box, Notifications, and Profile */}
        <div className="flex items-center space-x-6 w-full md:w-auto justify-center md:justify-end">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-full w-64 text-black md:w-40"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {/* Notification Button */}
          <button className="bg-blue-700 p-2 rounded-full relative">
            <span className="text-white">🔔</span>
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>

          {/* Profile Button with Photo */}
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile Photo"
              className="w-8 h-8 rounded-full border-2 border-white"
              onClick={handleProfileToggle}
            />

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-md w-48">
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
        <button onClick={handleMenuToggle} className="p-2">
          <span className="text-white">☰</span>
        </button>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="bg-blue-600 text-white p-4 md:hidden">
          <button className="w-full py-3 text-left">Home</button>
          <button className="w-full py-3 text-left">Video</button>
          <button className="w-full py-3 text-left">Marketplace</button>
          <button className="w-full py-3 text-left">Friends</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

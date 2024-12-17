"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("Friends"); // Track active button
  const [isSeeMoreOpen, setIsSeeMoreOpen] = useState(false); // Toggle for "See More" section

  // Handle active button change
  const handleButtonClick = (buttonName: React.SetStateAction<string>) => {
    setActiveButton(buttonName);
  };

  // Toggle "See More" section visibility
  const toggleSeeMore = () => {
    setIsSeeMoreOpen(!isSeeMoreOpen);
  };

  return (
    <div className="w-full sm:w-64 bg-gray-50 p-6 sm:p-10 rounded-xl border border-gray-50 shadow-lg lg:fixed sm:relative">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-blue-500"
        />
        <h2 className="mt-2 text-xl font-semibold">John Doe</h2>
        <p className="text-sm text-gray-500">Software Engineer</p>
      </div>

      {/* Navigation Buttons */}
      <div className="space-y-4 text-black">
        {/* Friends Button */}
        <button
          className={`w-full py-3 text-left bg-gray-200 rounded-lg hover:bg-blue-200 transition-all duration-300 ease-in-out shadow-md ${
            activeButton === "Friends" ? "bg-blue-500 text-gray-600" : "text-black"
          }`}
          onClick={() => handleButtonClick("Friends")}
        >
          <div className="flex items-center space-x-2 ms-2">
            <i className="fas fa-users"></i>{" "}
            <span>Friends</span>
          </div>
        </button>

        {/* Feeds Button */}
        <button
          className={`w-full py-3 text-left bg-gray-200 rounded-lg hover:bg-blue-200 transition-all duration-300 ease-in-out shadow-md ${
            activeButton === "Feeds" ? "bg-blue-500 text-gray-600" : "text-black"
          }`}
          onClick={() => handleButtonClick("Feeds")}
        >
          <div className="flex items-center space-x-2 ms-2">
            <i className="fas fa-rss"></i>
            <span>Feeds</span>
          </div>
        </button>

        {/* Groups Button */}
        <button
          className={`w-full py-3 text-left bg-gray-200 rounded-lg hover:bg-blue-200 transition-all duration-300 ease-in-out shadow-md ${
            activeButton === "Groups" ? "bg-blue-500 text-gray-600" : "text-black"
          }`}
          onClick={() => handleButtonClick("Groups")}
        >
          <div className="flex items-center space-x-2 ms-2">
            <i className="fas fa-users-cog"></i>
            <span>Groups</span>
          </div>
        </button>

        {/* Marketplace Button */}
        <button
          className={`w-full py-3 text-left bg-gray-200 rounded-lg hover:bg-blue-200 transition-all duration-300 ease-in-out shadow-md ${
            activeButton === "Marketplace"
              ? "bg-blue-500 text-gray-600"
              : "text-black"
          }`}
          onClick={() => handleButtonClick("Marketplace")}
        >
          <div className="flex items-center space-x-2 ms-2">
            <i className="fas fa-store"></i> {/* Icon for Marketplace */}
            <span>Marketplace</span>
          </div>
        </button>

        {/* Events Button */}
        <button
          className={`w-full py-3 text-left bg-gray-200 rounded-lg hover:bg-blue-200 transition-all duration-300 ease-in-out shadow-md ${
            activeButton === "Events" ? "bg-blue-500 text-gray-600" : "text-black"
          }`}
          onClick={() => handleButtonClick("Events")}
        >
          <div className="flex items-center space-x-2 ms-2">
            <i className="fas fa-calendar-alt"></i>
            <span>Events</span>
          </div>
        </button>

        {/* See More Button */}
        <button
          className={`w-full py-3 text-left bg-gray-200 rounded-lg hover:bg-blue-200 transition-all duration-300 ease-in-out shadow-md ${
            activeButton === "See More"
              ? "bg-blue-500 text-gray-600"
              : "text-black"
          }`}
          onClick={toggleSeeMore}
        >
          <div className="flex items-center space-x-2 ms-2">
            <i className="fas fa-plus-circle"></i>
            <span>{isSeeMoreOpen ? "See Less" : "See More"}</span>
          </div>
        </button>

        {/* Expanded Sections for 'See More' */}
        {isSeeMoreOpen && (
          <div className="space-y-4 mt-4">
            <button
              className={`w-full py-3 text-left bg-gray-200 rounded-lg hover:bg-blue-200 transition-all duration-300 ease-in-out shadow-md ${
                activeButton === "Option 1"
                  ? "bg-blue-500 text-gray-600"
                  : "text-black"
              }`}
              onClick={() => handleButtonClick("Option 1")}
            >
              <div className="flex items-center space-x-2 ms-2">
                <i className="fas fa-cogs"></i>
                <span>Option 1</span>
              </div>
            </button>

            <button
              className={`w-full py-3 text-left bg-gray-200 rounded-lg hover:bg-blue-200 transition-all duration-300 ease-in-out shadow-md ${
                activeButton === "Option 2"
                  ? "bg-blue-500 text-gray-600"
                  : "text-black"
              }`}
              onClick={() => handleButtonClick("Option 2")}
            >
              <div className="flex items-center space-x-2 ms-2">
                <i className="fas fa-cogs"></i>
                <span>Option 2</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

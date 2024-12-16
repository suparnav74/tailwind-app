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
    <div className="w-full sm:w-64 bg-gray-50 p-6 sm:p-10">
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
        <button
          className={`w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300 ${
            activeButton === "Friends" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleButtonClick("Friends")}
        >
          Friends
        </button>
        <button
          className={`w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300 ${
            activeButton === "Feeds" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleButtonClick("Feeds")}
        >
          Feeds
        </button>
        <button
          className={`w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300 ${
            activeButton === "Groups" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleButtonClick("Groups")}
        >
          Groups
        </button>
        <button
          className={`w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300 ${
            activeButton === "Marketplace" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleButtonClick("Marketplace")}
        >
          Marketplace
        </button>
        <button
          className={`w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300 ${
            activeButton === "Events" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleButtonClick("Events")}
        >
          Events
        </button>

        {/* See More Button */}
        <button
          className={`w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300 ${
            activeButton === "See More" ? "bg-blue-200" : ""
          }`}
          onClick={toggleSeeMore}
        >
          {isSeeMoreOpen ? "See Less" : "See More"}
        </button>

        {/* Expanded Sections for 'See More' */}
        {isSeeMoreOpen && (
          <div className="space-y-4 mt-4">
            <button
              className={`w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300 ${
                activeButton === "Option 1" ? "bg-blue-200" : ""
              }`}
              onClick={() => handleButtonClick("Option 1")}
            >
              Option 1
            </button>
            <button
              className={`w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300 ${
                activeButton === "Option 2" ? "bg-blue-200" : ""
              }`}
              onClick={() => handleButtonClick("Option 2")}
            >
              Option 2
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
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
          {/* Home Button */}
          <button className="bg-blue-700 px-4 py-3 rounded text-white mb-2 md:mb-0 w-auto">
            Home
          </button>

          {/* Video Button */}
          <button className="bg-blue-700 px-4 py-3 rounded text-white mb-2 md:mb-0 w-auto">
            Video
          </button>

          {/* Marketplace Button */}
          <button className="bg-blue-700 px-4 py-3 rounded text-white mb-2 md:mb-0 w-auto">
            Marketplace
          </button>

          {/* Friends Button */}
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
          />

          {/* Notification Button */}
          <button className="bg-blue-700 p-2 rounded-full">
            <span className="text-white">🔔</span>
          </button>

          {/* Profile Button with Photo */}
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile Photo"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

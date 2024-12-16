const Sidebar = () => {
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
        <button className="w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300">
          Friends
        </button>
        <button className="w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300">
          Feeds
        </button>
        <button className="w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300">
          Groups
        </button>
        <button className="w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300">
          Marketplace
        </button>
        <button className="w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300">
          Events
        </button>
        <button className="w-full py-2 text-left bg-gray-200 rounded hover:bg-gray-300">
          See More
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

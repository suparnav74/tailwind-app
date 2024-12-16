const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-100 p-4">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-blue-500"
          />
          <h2 className="mt-2 text-xl font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
        <div className="space-y-4">
          <button className="w-full py-2 text-left bg-gray-300 rounded">Friends</button>
          <button className="w-full py-2 text-left bg-gray-300 rounded">Groups</button>
          <button className="w-full py-2 text-left bg-gray-300 rounded">Marketplace</button>
          <button className="w-full py-2 text-left bg-gray-300 rounded">Events</button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
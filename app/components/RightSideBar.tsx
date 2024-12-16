const RightSideBar = () => {
  return (
    <div className="w-full sm:w-64 bg-gray-100 p-6 sm:p-10">
      <h2 className="text-xl font-semibold mb-8">Friends</h2>
      <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap justify-between gap-4 text-black">
        {/* Friend 1 */}
        <div className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-lg transition duration-200 ease-in-out w-full sm:w-auto lg:w-auto">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="Friend"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-sm sm:text-base">Jane Smith</span>
        </div>

        {/* Friend 2 */}
        <div className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-lg transition duration-200 ease-in-out w-full sm:w-auto lg:w-auto">
          <img
            src="https://randomuser.me/api/portraits/women/10.jpg"
            alt="Friend"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-sm sm:text-base">David Lee</span>
        </div>

        {/* Friend 3 */}
        <div className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-lg transition duration-200 ease-in-out w-full sm:w-auto lg:w-auto">
          <img
            src="https://randomuser.me/api/portraits/men/30.jpg"
            alt="Friend"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-sm sm:text-base">Emily Davis</span>
        </div>

        {/* Friend 4 */}
        <div className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-lg transition duration-200 ease-in-out w-full sm:w-auto lg:w-auto">
          <img
            src="https://randomuser.me/api/portraits/men/50.jpg"
            alt="Friend"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-sm sm:text-base">Michael Brown</span>
        </div>

        {/* Friend 5 */}
        <div className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-lg transition duration-200 ease-in-out w-full sm:w-auto lg:w-auto">
          <img
            src="https://randomuser.me/api/portraits/women/25.jpg"
            alt="Friend"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-sm sm:text-base">Sarah Wilson</span>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

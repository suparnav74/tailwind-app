import friendsData from "../jsonfile/friendsData.json";
const RightSideBar = () => {
  return (
    <div className="w-full sm:w-64 bg-gray-50 p-6 sm:p-10 rounded-xl lg:fixed border border-gray-50 shadow-lg sm:relative">
      <h2 className="text-xl font-semibold mb-8">Friends</h2>
      <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap justify-between gap-4 text-black">
        {friendsData.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-lg transition duration-200 ease-in-out w-full sm:w-auto lg:w-auto shadow-md hover:shadow-xl"
          >
            <img
              src={friend.image}
              alt={friend.name}
              className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
            />
            <span className="text-sm sm:text-base">{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;

const RightSideBar = () => {
  return (
    <div>
      <div className="w-64 bg-gray-100 p-4">
          <h2 className="text-xl font-semibold">Friends</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="Friend"
                className="w-10 h-10 rounded-full"
              />
              <span>Friend 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/10.jpg"
                alt="Friend"
                className="w-10 h-10 rounded-full"
              />
              <span>Friend 2</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt="Friend"
                className="w-10 h-10 rounded-full"
              />
              <span>Friend 3</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RightSideBar

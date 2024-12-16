const MidContent = () => {
  return (
    <div>
      {/* Post Creation */}
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <textarea
          className="w-full p-2 border rounded-md"
          rows={4}
          placeholder="What's on your mind?"
        ></textarea>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto">
          Post
        </button>
      </div>

      {/* Stories */}
      <div className="space-y-4 my-10">
        <h2 className="text-xl font-semibold">Stories</h2>
        <div className="flex flex-wrap justify-start sm:justify-start space-x-4">
          {/* Story 1 */}
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4 sm:mb-0">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Story 1"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Story 2 */}
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4 sm:mb-0">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Story 2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Story 3 */}
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4 sm:mb-0">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Story 3"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Story 4 */}
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4 sm:mb-0">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Story 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Feed</h2>

        {/* Post 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Doe"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-gray-500 text-sm">Just now</p>
            </div>
          </div>
          <p className="mt-3 text-gray-700">
            This is my first post! I've been feeling really motivated lately and
            wanted to share my thoughts. Excited for what’s ahead!
          </p>
        </div>

        {/* Post 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Jane Smith"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-semibold text-lg">Jane Smith</h3>
              <p className="text-gray-500 text-sm">5 minutes ago</p>
            </div>
          </div>
          <p className="mt-3 text-gray-700">
            Just finished reading a great book. It really made me reflect on
            life and how we should appreciate the little things. Highly
            recommend it!
          </p>
        </div>

        {/* Post 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="Emily Davis"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-semibold text-lg">Emily Davis</h3>
              <p className="text-gray-500 text-sm">10 minutes ago</p>
            </div>
          </div>
          <p className="mt-3 text-gray-700">
            Had a productive morning at work! It’s always such a great feeling
            when you check everything off your to-do list. Can’t wait to see
            what the rest of the day brings.
          </p>
        </div>

        {/* Post 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="Michael Brown"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-semibold text-lg">Michael Brown</h3>
              <p className="text-gray-500 text-sm">30 minutes ago</p>
            </div>
          </div>
          <p className="mt-3 text-gray-700">
            Just wanted to share how grateful I am for my friends and family.
            They really make life worth living. Feeling blessed today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidContent;

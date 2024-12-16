

const MidContent = () => {
  return (
    <div>
      {/* Post Creation */}
      <div className="bg-white p-4 rounded shadow-md">
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="What's on your mind?"
            ></textarea>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Post</button>
          </div>
          
          {/* Stories */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Stories</h2>
            <div className="flex space-x-4">
              {/* Story 1 */}
              <div className="w-32 h-32 bg-blue-200 rounded-full"></div>
              {/* Story 2 */}
              <div className="w-32 h-32 bg-green-200 rounded-full"></div>
              {/* Story 3 */}
              <div className="w-32 h-32 bg-red-200 rounded-full"></div>
            </div>
          </div>

          {/* Feed */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Feed</h2>
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-gray-500">Just now</p>
              <p className="mt-2">This is a post!</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-gray-500">5 minutes ago</p>
              <p className="mt-2">Another post!</p>
            </div>
          </div>
    </div>
  )
}

export default MidContent

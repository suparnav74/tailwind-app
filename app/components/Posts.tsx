import React from "react";
import postsData from "../jsonfile/posts.json";

const Posts = () => {
  return (
    <div className="space-y-6">
      {/* <h2 className="text-2xl font-semibold">Feed</h2> */}
      {postsData.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-4">
          <div className="flex items-center">
            <img
              src={post.image}
              alt={post.alt}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-semibold text-lg">{post.name}</h3>
              <p className="text-gray-500 text-sm">{post.time}</p>
            </div>
          </div>
          <p className="mt-3 text-gray-700">{post.content}</p>

          <div className="flex space-x-6 mt-4 text-gray-500">
            <button className="flex items-center space-x-2 hover:text-blue-500 transition duration-300">
              <span>👍</span>
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-500 transition duration-300">
              <span>💬</span>
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
              <span>🔗</span>
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

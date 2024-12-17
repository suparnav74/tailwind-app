"use client";
import { SetStateAction, useState } from "react";

const PostCreation = () => {
  const [postContent, setPostContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPostContent(event.target.value);
  };

  const handlePostSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!postContent.trim()) {
      setError("Post content cannot be empty.");
      return;
    }

    setIsPosting(true);
    setError(null);
    const name = "John Doe"; 
    const image = "https://randomuser.me/api/portraits/men/32.jpg"; 
    const alt = "Profile picture of John Doe";
    const time = new Date().toISOString();

    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          image,
          alt,
          content: postContent,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      setPostContent("");
      alert("Post created successfully!");
    } catch (error: any) {
      setError("Error posting: " + error.message);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
      
      <div className="flex items-center bg-gray-100 rounded-md p-2">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full mr-3"
        />
        <textarea
          className="w-full p-4 border-none outline-none bg-transparent resize-none placeholder-gray-500 text-gray-950"
          rows={2}
          placeholder="What's on your mind?"
          value={postContent}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        onClick={handlePostSubmit}
        className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-full w-full sm:w-auto transition duration-300 ease-in-out transform hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300 flex items-center justify-center"
        disabled={isPosting}
      >
        {isPosting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                d="M4 12a8 8 0 0 1 16 0"
              ></path>
            </svg>
            Posting...
          </span>
        ) : (
          <span className="flex items-center justify-center">Post</span>
        )}
      </button>
    </div>
  );
}

export default PostCreation;

import React from 'react';
import storiesData from '../jsonfile/story.json';

const Stories = () => {
  return (
    <div className="space-y-4 my-10">
    <h2 className="text-xl font-semibold text-gray-800">Stories</h2>
    <div className="flex flex-wrap justify-start sm:justify-start space-x-4">
      {storiesData.map((story) => (
        <div
          key={story.id}
          className="relative w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4 sm:mb-0 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
        >
          <img
            src={story.src}
            alt={story.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Stories;

import React from 'react';

const MovieCard = ({ title, image, rating, onClick }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-yellow-400 font-semibold">{rating} ★</span>
          <button 
            className="bg-red-600 px-3 py-1 text-sm rounded-md"
            onClick={onClick}
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

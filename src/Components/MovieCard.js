import React from 'react';

const MovieCard = ({ title, image, rating, onClick }) => {
  return (
    <div 
      className="relative group cursor-pointer transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-center">
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <span className="text-yellow-400 font-semibold">{rating} ★</span>
        </div>
      </div>
      <button 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 py-1 text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={onClick}
      >
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResults = ({ title, posterPath, rating, movieId }) => {
  const navigate = useNavigate();
  const imageUrl = `https://image.tmdb.org/t/p/w200${posterPath}`;

  const handleWatchNowClick = () => {
    if (movieId) {
        console.log(`Navigating to /details/${movieId}`);
      navigate(`/details/${movieId}`);
      window.location.reload();
    } else {
      console.error("Movie ID is undefined");
    }
  };

  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2 truncate">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-yellow-400 font-semibold text-sm">{rating} ★</span>
          <button 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            onClick={handleWatchNowClick}
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

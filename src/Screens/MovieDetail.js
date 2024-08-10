import React from 'react';

const MovieDetail = ({ movie }) => {
  if (!movie) return null;


  return (
    <div className="p-4 md:p-8 bg-black text-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img 
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
            alt={movie.title} 
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
        <div className="md:ml-8 md:w-2/3">
          <h2 className="text-5xl font-bold mb-4">{movie.title}</h2>
          <div className="mb-4">
            <p className="text-lg mb-2"><span className="font-semibold">Release Date:</span> {movie.release_date}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Runtime:</span> {movie.runtime} minutes</p>
            <p className="text-lg mb-2"><span className="font-semibold">Rating:</span> {movie.vote_average} ({movie.vote_count} votes)</p>
            <p className="text-lg mb-4"><span className="font-semibold">Overview:</span> {movie.overview}</p>
          </div>

          {movie.genres && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Genres:</h3>
              <ul className="list-disc list-inside pl-4">
                {movie.genres.map((genre) => (
                  <li key={genre.id} className="text-lg">{genre.name}</li>
                ))}
              </ul>
            </div>
          )}

          {movie.budget && (
            <p className="text-lg mb-4"><span className="font-semibold">Budget:</span> ${movie.budget.toLocaleString()}</p>
          )}

          {movie.revenue && (
            <p className="text-lg mb-4"><span className="font-semibold">Revenue:</span> ${movie.revenue.toLocaleString()}</p>
          )}

          {movie.homepage && (
            <a 
              href={movie.homepage} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:underline mb-4 inline-block text-lg bg-red-950 px-6 py-3 rounded-md text-white"
            >
              Whatch Now
            </a>
          )}
          <a href='/'>
            <button 
                className="bg-gray-900 text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800 transition-colors mx-10"
            >
                Back to Movies
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
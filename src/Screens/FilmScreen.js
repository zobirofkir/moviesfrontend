import React, { useCallback, useContext, useEffect } from 'react';
import HeroSection from '../Components/HeroSection';
import MovieCard from '../Components/MovieCard';
import MovieDetail from './MovieDetail';
import { MovieContext } from '../hooks/MovieProvider';
import axios from 'axios';

const FilmScreen = () => {
  const { film, setFilm, currentPage, setCurrentPage, featuredMovieIndex, setFeaturedMovieIndex, setSelectedMovie, selectedMovie } = useContext(MovieContext);

  const fetchData = useCallback(async (page) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_LINK}/api/movies/${page}`);
      setFilm(response.data.results);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  }, [setFilm]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedMovieIndex((prevIndex) => (prevIndex + 1) % film.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [film, setFeaturedMovieIndex]);

  const fetchMovieDetail = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_LINK}/api/movies/1/${id}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error("Failed to fetch movie detail", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleShowDetails = () => {
    const movie = film[featuredMovieIndex];
    fetchMovieDetail(movie.id);
  };

  return (
    <div className="bg-black text-white">
      {/* Movie Details */}
      {selectedMovie ? (
        <div className="p-4 md:p-20">
          <MovieDetail movie={selectedMovie} />
        </div>
      ) : (
        <>
          {film.length > 0 && (

            // Hero Section
            <HeroSection
              title={film[featuredMovieIndex].title}
              image={`https://image.tmdb.org/t/p/original${film[featuredMovieIndex].backdrop_path}`}
              description={film[featuredMovieIndex].overview}
              onClick={handleShowDetails}
            />
          )}
          <div className="p-2 md:p-20">
            <div className="mb-8">
              {/* Header Section */}
              <div className="flex flex-wrap justify-center">
                  <div className="mx-2 my-1">
                    <a
                      href="/"
                      className="block font-bold py-2 px-3 text-black rounded bg-white md:bg-transparent md:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </div>
                  <div className="mx-2 my-1">
                    <a
                      href="/tv"
                      className="block py-2 px-3 text-white rounded bg-gray-800 hover:bg-gray-700 md:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      TV
                    </a>
                  </div>
                  <div className="mx-2 my-1">
                    <a
                      href="/films"
                      className="block py-2 px-3 text-white rounded bg-gray-800 hover:bg-gray-700 md:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Film
                    </a>
                  </div>
                </div>

                {/* Movie Cards */}
              <h2 className="text-xl md:text-3xl font-bold m-5">Popular Movies</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {film.map((movie) => {
                  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                  return (
                    <MovieCard
                      key={movie.id}
                      title={movie.title}
                      image={imageUrl}
                      rating={movie.vote_average}
                      onClick={() => fetchMovieDetail(movie.id)}  // Pass the handler here
                    />
                  );
                })}
              </div>
            </div>

            {/* Pagintaion */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="bg-gray-700 text-white px-4 py-2 rounded-md"
              >
                Previous
              </button>
              <span className="text-xl">{currentPage}</span>
              <button
                onClick={handleNextPage}
                className="bg-gray-700 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilmScreen;

import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [film, setFilm] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredMovieIndex, setFeaturedMovieIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <MovieContext.Provider value={{ film, setFilm, currentPage, setCurrentPage, featuredMovieIndex, setFeaturedMovieIndex, selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

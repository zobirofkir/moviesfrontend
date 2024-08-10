import React, { useState, useEffect } from 'react';
import Logo from '../Images/logo.png';
import axios from 'axios';
import SearchResults from '../Screens/SearchResults';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const fetchData = async (query) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_LINK}/api/search/1?query=${query}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData(searchQuery);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredResults(searchResults.filter(result =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setFilteredResults([]);
    }
  }, [searchResults, searchQuery]);

  return (
    <div>
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          <a href="/" className="flex items-center space-x-3">
            <img src={Logo} className="h-8" alt="Logo" />
            <span className="text-2xl font-semibold text-white">CSW-MOVIES</span>
          </a>
          <button 
            onClick={toggleMenu} 
            type="button" 
            className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" 
            aria-controls="navbar-default" 
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:py-0 bg-black md:bg-transparent">
              <li><a href="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a></li>
              <li><a href="tv" className="text-gray-400 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">TV</a></li>
              <li><a href="films" className="text-gray-400 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Film</a></li>
              <li><a href="contacts" className="text-gray-400 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a></li>
              <li>
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search"
                    className="block px-3 bg-gray-800 text-white rounded-md w-full md:w-auto md:mr-2"
                  />
                  <button type="submit" className="absolute right-2 -top-2 mt-2 mr-2 text-gray-500 hover:text-gray-300">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4a6 6 0 100 12 6 6 0 000-12zm6 6h.01M21 21l-4.35-4.35"/>
                    </svg>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-black">
        {filteredResults.length > 0 && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredResults.map((film) => (
              <SearchResults 
                key={film.id}
                title={film.title}
                posterPath={film.poster_path}
                rating={film.vote_average}
                movieId={film.id}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from 'react'
import Logo from '../Images/logo.png'
import axios from 'axios'
import SearchResults from '../Screens/SearchResults'

const Header = () => {
  const [state, setState] = useState(false);
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

  const dropDown = () => {
    setState(!state);
  }

  return (
    <div>
      <nav class="bg-black border-gray-200 dark:bg-black">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Logo} class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">CSW-MOVIES</span>
          </a>
          <button data-collapse-toggle="navbar-default" onClick={dropDown} type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className={`${state ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">

              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
              <li>
                <a href="login" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
              </li>
              <li>
                <a href="register" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a>
              </li>
              <li>
              <form onSubmit={handleSearchSubmit} className="relative mt-3 md:mt-0">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search"
                    className="block w-full px-4 py-1 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button type="submit" className="absolute right-3 -mt-7 text-gray-400 hover:text-white">
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
  )
}

export default Header
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderAuth = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Perform logout logic
    localStorage.removeItem('access_token');
    navigate('/login'); 
  };

  if (!user) return null; // Optionally handle no user case

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="text-xl font-semibold">Dashboard</div>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-700 focus:outline-none"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="mr-2">{user.name}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <ul className="py-2">
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderAuth;

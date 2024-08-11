import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const data = {
      name : name,
      email : email,
      password : password
    };

    try {

    const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_LINK}/api/register`, data);
    console.log(response.data);
    if(response.data.data && response.data.data.name && response.data.data.email)
    {
      toast.success(`Success`, {
        position: 'top-right',
      });
    }
    else {
      toast.error('Registration failed. Please try again.', {
        position: 'top-right',
      });
    }
  }
    catch(error)
    {
      if (error.response)
      {
        if (error.response.status === 422)
        {
          toast.error('This Email Is Already Exist. Please Select Another One.', {
            position: 'top-right',
          });
        }
      }
    }
  };

  return (
    <>
    <ToastContainer/>
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/01/67/23/55/360_F_167235520_AFrB955JhCwhkpz1ev2L7X9SBcpVgAyg.jpg')" }}>
      <div className="bg-black bg-opacity-75 p-8 rounded-lg max-w-md w-full">
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
        <h1 className="text-3xl font-bold text-white mb-4">Sign Up</h1>
        <form onSubmit={handleRegister} className="flex flex-col">
        <input
            type="name"
            placeholder="Your Name"
            className="p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="p-3 mb-4 rounded bg-red-600 text-white font-bold hover:bg-red-700">
            Sign Up
          </button>
        </form>
        <p className="text-gray-400">
          Already have an account? <a href="/login" className="text-white hover:underline">Sign in now</a>.
        </p>
      </div>
    </div>
    </>
  );
};

export default RegisterScreen;

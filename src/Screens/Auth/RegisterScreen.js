import React, { useState } from 'react';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle the registration logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/01/67/23/55/360_F_167235520_AFrB955JhCwhkpz1ev2L7X9SBcpVgAyg.jpg')" }}>
      <div className="bg-black bg-opacity-75 p-8 rounded-lg max-w-md w-full">
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
  );
};

export default RegisterScreen;

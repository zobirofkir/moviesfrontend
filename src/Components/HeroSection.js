import React from 'react'

const HeroSection = ({title, image, description, onClick}) => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${image})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 drop-shadow-lg">{title}</h1>
          <p className="max-w-xl md:max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-600 text-white text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-md font-semibold hover:bg-red-500 transition-all duration-300 ease-in-out" onClick={onClick}>Play</button>
            <button className="bg-gray-700 text-white text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition-all duration-300 ease-in-out" onClick={onClick}>More Info</button>
          </div>
        </div>
    </div>
  )
}

export default HeroSection

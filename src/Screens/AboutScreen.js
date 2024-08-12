import React from 'react';

const AboutScreen = () => {
  return (
    // About Screen
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          Welcome to our platform! We are dedicated to providing the best service possible. Our team works tirelessly to ensure that you have an excellent experience with us. Our mission is to deliver quality content and outstanding support to all our users.
        </p>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          Our platform was created with the vision of connecting people with the resources they need. Whether you're here to learn, connect, or just explore, we're glad to have you with us.
        </p>
        <button className="bg-red-600 px-6 py-3 rounded-md text-lg font-semibold mt-6 hover:bg-red-500 transition-all duration-300">Learn More</button>
      </div>
    </div>
  );
}

export default AboutScreen;

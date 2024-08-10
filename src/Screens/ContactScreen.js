import React from 'react';

const ContactScreen = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>

      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500" 
              placeholder="Enter your name" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500" 
              placeholder="Enter your email" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
            <textarea 
              id="message" 
              rows="5" 
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500" 
              placeholder="Enter your message" 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-red-600 text-lg font-semibold px-6 py-3 rounded-md hover:bg-red-500 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg">You can also reach us at:</p>
        <p className="text-xl font-semibold">contact@yourwebsite.com</p>
        <p className="text-lg">+1 (234) 567-8901</p>
      </div>
    </div>
  );
}

export default ContactScreen;

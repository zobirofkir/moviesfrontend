import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const postData = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_LINK}/api/contacts`, data);
      setResponse(response.data.data);
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  useEffect(() => {
    if (response) {
      toast.success(`We will contact you soon, ${response.name} at ${response.email}.`, {
        position: 'top-right',
      });
    }
  }, [response]);

  useEffect(() => {
    // Dynamically load the AdSense script
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1038335302961000";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Cleanup function to remove script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>

        <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-8">
          <form className="space-y-6" onSubmit={postData}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500" 
                placeholder="Enter your message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
          <p className="text-xl font-semibold">contact@zobirofkir.com</p>
          <p className="text-lg">+212 619920942</p>
        </div>

        {/* Insert AdSense Ad Unit */}
        <div className="mt-12">
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1038335302961000"
            data-ad-slot="1234567890"
            data-ad-format="auto"></ins>
          <script>
            {(window.adsbygoogle = window.adsbygoogle || []).push({})}
          </script>
        </div>
      </div>
    </>
  );
}

export default ContactScreen;

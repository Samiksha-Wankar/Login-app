import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="text-center p-8 bg-white bg-opacity-75 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Application</h1>
        <p className="text-lg mb-6">
          Join us and start exploring the amazing features we offer. Sign up now and be a part of our community.
        </p>
        <button
          onClick={handleGetStarted}
          className="px-6 py-2 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroPage;

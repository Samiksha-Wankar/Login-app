import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Auth App</h1>
        <Link
          to="/register"
          className="block bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="block bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="text-center p-8 bg-white bg-opacity-75 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-lg mb-6">
          This is your dashboard where you can manage your account and explore our features.
        </p>
        <button
          className="px-6 py-2 bg-green-600 text-white text-lg rounded hover:bg-green-700 transition-colors"
        >
          Explore Features
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

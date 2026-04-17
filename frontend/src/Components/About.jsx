import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      
      <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-md text-center space-y-4">
        
        <h1 className="text-2xl font-bold text-gray-800">
          About This App
        </h1>

        <p className="text-gray-600 text-lg">
          Manage your tasks smarter. This TODO app helps you stay organized,
          focused, and productive by keeping all your tasks in one place with
          an intuitive and minimal interface.
        </p>

      </div>

    </div>
  );
}

export default About;
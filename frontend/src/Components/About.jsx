import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 space-y-6 animate-fadeIn">

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">
            About This App
          </h1>
          <p className="text-gray-500">
            Simple. Clean. Productive.
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg text-center leading-relaxed">
          Manage your tasks smarter. This TODO app helps you stay organized,
          focused, and productive by keeping all your tasks in one place
          with a clean and intuitive interface.
        </p>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-4 mt-4">

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 animate-stagger delay-100">
            <h3 className="font-semibold text-gray-800">Easy Task Management</h3>
            <p className="text-sm text-gray-500 mt-1">
              Add, delete, and organize tasks effortlessly.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 animate-stagger delay-200">
            <h3 className="font-semibold text-gray-800">Fast & Responsive</h3>
            <p className="text-sm text-gray-500 mt-1">
              Works smoothly on all devices.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 animate-stagger delay-300">
            <h3 className="font-semibold text-gray-800">Secure Login</h3>
            <p className="text-sm text-gray-500 mt-1">
              Authentication keeps your data safe.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 animate-stagger delay-400">
            <h3 className="font-semibold text-gray-800">Clean UI</h3>
            <p className="text-sm text-gray-500 mt-1">
              Minimal design for better focus.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;
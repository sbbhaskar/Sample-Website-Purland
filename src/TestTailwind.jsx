import React from 'react';

const TestTailwind = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-10 flex flex-col items-center justify-center gap-10">
      
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg animate-bounce">
        TailwindCSS Test Page 🎨
      </h1>

      {/* Flex Row */}
      <div className="flex gap-4">
        <div className="w-24 h-24 bg-white rounded-lg shadow-xl hover:scale-110 transition-transform duration-300"></div>
        <div className="w-24 h-24 bg-yellow-300 rounded-lg shadow-2xl hover:rotate-6 transition-all duration-300"></div>
        <div className="w-24 h-24 bg-red-400 rounded-lg shadow-inner hover:brightness-125 transition-all duration-300"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full max-w-4xl">
        {[...Array(8)].map((_, idx) => (
          <div
            key={idx}
            className="p-4 bg-white text-center rounded-lg shadow-md hover:shadow-pink-500/50 transition-shadow duration-500"
          >
            <p className="text-gray-800 font-semibold">Item {idx + 1}</p>
          </div>
        ))}
      </div>

      {/* Button Animation */}
      <button className="mt-10 px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-md hover:bg-indigo-100 transition-all duration-300 animate-pulse">
        Test Button
      </button>
    </div>
  );
};

export default TestTailwind;

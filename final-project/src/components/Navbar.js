import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="text-gray-600 font-bold hover:text-gray-900 px-3 py-4 rounded-md transition duration-300 ease-in-out">
          Job Finder
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900 px-3 py-4 rounded-md transition duration-300 ease-in-out"
          >
            Beranda
          </a>
          <a
            href="/job-vacancy"
            className="text-gray-600 hover:text-gray-900 px-3 py-4 rounded-md transition duration-300 ease-in-out"
          >
            Lowongan
          </a>
          <a
            href="/about"
            className="text-gray-600 hover:text-gray-900 px-3 py-4 rounded-md transition duration-300 ease-in-out"
          >
            About
          </a>
        </div>

        {/* Login Button */}
        <div>
          <a
            href="/login"
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            Login
          </a>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-100 w-full mx-auto flex justify-center px-6 py-20">

        <input
          type="text"
          className="rounded-full px-4 py-2 w-1/3" 
          placeholder="Cari lowongan pekerjaan..."
        />
        <button className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="text-2xl font-extrabold text-red-700">
        <Link to="/">Quick-Bites</Link>
      </div>
      <div className="w-1/3 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 transition duration-300 ease-in"
        />
      </div>
      <div className="flex space-x-2">
        <button className="px-4 py-2 text-black rounded-lg hover:bg-red-600 hover:text-white transition duration-300 ease-in">
          <Link to="/login">Login</Link>
        </button>
        <button className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300 ease-out">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;

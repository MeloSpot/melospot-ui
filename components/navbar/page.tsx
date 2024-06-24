import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          MeloSpot
        </a>
        <div className="space-x-4 hidden md:flex">
          <a href="/charts" className="hover:underline">
            Charts
          </a>
          <a href="/news" className="hover:underline">
            News
          </a>
          <a href="/videos" className="hover:underline">
            Videos
          </a>
          <a href="/photos" className="hover:underline">
            Photos
          </a>
          <a href="/newsletter" className="hover:underline">
            Newsletter
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="/charts" className="block px-4 py-2 hover:underline">
            Charts
          </a>
          <a href="/news" className="block px-4 py-2 hover:underline">
            News
          </a>
          <a href="/videos" className="block px-4 py-2 hover:underline">
            Videos
          </a>
          <a href="/photos" className="block px-4 py-2 hover:underline">
            Photos
          </a>
          <a href="/newsletter" className="block px-4 py-2 hover:underline">
            Newsletter
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

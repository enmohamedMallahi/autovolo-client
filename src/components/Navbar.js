"use client"
// components/Navbar.js
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" text-gray-600">
      <div className="px-4 py-4 md:px-8 lg:px-16 flex items-center justify-between">
        <a href="/" className="text-gray-800 text-xl font-bold">
          Car Rental
        </a>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className=" focus:outline-none"
            aria-label="Toggle menu"
          >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>

          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:underline hover:text-blue-400 underline-offset-8 transition duration-200">
            Home
          </a>
          <a href="/about" className="hover:underline hover:text-blue-400 underline-offset-8 transition duration-200">
            About
          </a>
          <a href="/contact" className="hover:underline hover:text-blue-400 underline-offset-8 transition duration-200">
            Contact
          </a>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed top-0 bottom-0 left-0 right-0 bg-gray-800 text-white z-50 ">
            <div className="py-4 px-4 md:px-8 lg:px-16 mb-4 flex items-center justify-between">
              <a href="/" className="text-white text-xl font-bold">
                Car Rental
              </a>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                  aria-label="Toggle menu"
                >

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                </button>
              </div>
            </div>
            <a
              href="/"
              className="block mb-2 py-2 px-4 md:px-8 lg:px-16 hover:bg-gray-700 rounded-md transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="block mb-2 py-2 px-4 md:px-8 lg:px-16 hover:bg-gray-700 rounded-md transition duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="block py-2 px-4 md:px-8 lg:px-16 hover:bg-gray-700 rounded-md transition duration-300"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

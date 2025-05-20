import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
          <img className="w-[140px] h-[55px]" src="/images/logo-2.png" alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium hover:text-blue-200 transition duration-300 border-b-2 border-transparent hover:border-blue-200 pb-1">Home</a>
            <a href="#features" className="font-medium hover:text-blue-200 transition duration-300 border-b-2 border-transparent hover:border-blue-200 pb-1">Features</a>
            <a href="#partners" className="font-medium hover:text-blue-200 transition duration-300 border-b-2 border-transparent hover:border-blue-200 pb-1">Our Partners</a>
            <a href="#about" className="font-medium hover:text-blue-200 transition duration-300 border-b-2 border-transparent hover:border-blue-200 pb-1">About</a>
            {/* <a href="#bundles" className="font-medium hover:text-blue-200 transition duration-300 border-b-2 border-transparent hover:border-blue-200 pb-1">Bundles</a>
            <a href="#promos" className="font-medium hover:text-blue-200 transition duration-300 border-b-2 border-transparent hover:border-blue-200 pb-1">Promotions</a> */}
            <a href="#contact" className="font-medium hover:text-blue-200 transition duration-300 border-b-2 border-transparent hover:border-blue-200 pb-1">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="tel:+1234567890" className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition duration-300">tel:+1234567890</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-2 pb-4 border-t border-blue-400">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="font-medium hover:bg-blue-600 px-3 py-2 rounded">Features</a>
              <a href="#partners" className="font-medium hover:bg-blue-600 px-3 py-2 rounded">Partners</a>
              <a href="#contact" className="font-medium hover:bg-blue-600 px-3 py-2 rounded">Contact</a>
              <a href="tel:+1234567890" className="bg-white text-blue-600 font-semibold px-3 py-2 rounded-lg shadow text-center">+1 (218) 756-6671</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

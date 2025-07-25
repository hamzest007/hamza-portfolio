import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; // ✅ ADD THIS

const NavSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ["Home", "Projects", "About", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="text-2xl font-bold text-white tracking-tight hover:text-indigo-400 transition-colors duration-200"
            aria-label="Home"
          >
            <span className="text-indigo-500">Hamza</span>
            <span className="text-gray-300">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavSection;

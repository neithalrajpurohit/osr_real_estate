import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ImageLogo from "../assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex h-[70px] sm:h-[80px] lg:h-[90px] items-center bg-[#2F2883] justify-between px-4 sm:px-8 lg:px-16 xl:px-30 w-full">
        {/* Logo */}
        <div className="relative h-[80px] w-[100px] sm:h-[90px] sm:w-[110px] lg:h-[100px] lg:w-[120px]">
          <img
            src={ImageLogo}
            className="h-[80px] w-[100px] sm:h-[90px] sm:w-[110px] lg:h-[100px] lg:w-[120px] absolute -top-2 sm:-top-1 lg:top-0 z-20"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-6 text-white text-sm lg:text-base">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <a href="#projects" className="hover:text-gray-300 transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-300 transition-colors">
            About us
          </a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[70px] sm:top-[80px] left-0 right-0 bg-[#2F2883] border-t border-gray-600 z-30 shadow-lg">
          <div className="flex flex-col py-3 sm:py-4 px-4 sm:px-6 space-y-3 sm:space-y-4 text-white">
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors py-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#projects"
              className="hover:text-gray-300 transition-colors py-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 transition-colors py-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors py-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

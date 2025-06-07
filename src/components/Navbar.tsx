"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full bg-black shadow-md top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo-white.png" alt="logo.png" width={150} height={100} />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-20 text-gray-300 font-medium text-sm">
            <a href="#about" className="hover:text-red-600 transition">About</a>
            <a href="about" className="hover:text-red-600 transition">Speakers</a>
            <a href="about" className="hover:text-red-600 transition">Event</a>
            <a href="about" className="hover:text-red-600 transition">Partners</a>
          </div>

          {/* Ticket Button */}
          <div className="hidden md:block">
            <a
              href="#tickets"
              className="bg-ted-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Book Tickets
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
              {isOpen ? (
                // Close Icon (SVG)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                // Hamburger Icon (SVG)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-lg px-4 pt-4 pb-6 space-y-4 text-gray-300 font-medium text-center text-sm">
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-red-600 transition">About</a>
          <a href="#speakers" onClick={() => setIsOpen(false)} className="block hover:text-red-600 transition">Speakers</a>
          <a href="#event" onClick={() => setIsOpen(false)} className="block hover:text-red-600 transition">Event</a>
          <a href="#partners" onClick={() => setIsOpen(false)} className="block hover:text-red-600 transition">Partners</a>
          <a
            href="#tickets"
            onClick={() => setIsOpen(false)}
            className="block bg-ted-red text-white text-center px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Book Tickets
          </a>
        </div>
      )}
    </nav>
  );
}

"use client";

import { HyperText } from "@/components/magicui/hyper-text";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full shadow-md top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo-white.png" alt="logo.png" width={150} height={100} />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-20 text-gray-300 font-medium text-sm">
            <Link href="#about" className="  cursor-none hover:text-red-600 transition"><HyperText className=" cursor-none">About</HyperText></Link>
            <Link href="#speakers" className="  cursor-none hover:text-red-600 transition"><HyperText>Speakers</HyperText></Link>
            <Link href="#event" className="  cursor-none hover:text-red-600 transition"><HyperText>Event</HyperText></Link>
            <Link href="#partners" className="  cursor-none hover:text-red-600 transition"><HyperText>Partners</HyperText></Link>
          </div>

          {/* Ticket Button */}
          <div className="hidden md:block">
            <Link
              href="/tickets"
              className="bg-ted-red text-white px-4 py-2 font-bold hover:bg-red-700 transition"
            >
              Book Tickets
            </Link>
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
          <Link href="#about" onClick={() => setIsOpen(false)} className="block hover:text-red-600 transition">About</Link>
          <Link href="#speakers" onClick={() => setIsOpen(false)} className="block hover:text-red-600 transition">Speakers</Link>
          <Link href="#event" onClick={() => setIsOpen(false)} className="block hover:text-red-600 transition">Event</Link>
          <Link href="#partners" onClick={() => setIsOpen(false)} className="block hover:text-red-600 transition">Partners</Link>
          <Link
            href="/tickets"
            onClick={() => setIsOpen(false)}
            className="block bg-ted-red text-white text-center px-4 py-2 rounded-md cursor-none hover:bg-red-700 transition"
          >
            Book Tickets
          </Link>
        </div>
      )}
    </nav>
  );
}

"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute w-full bg-black  shadow-md  top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 ">
           <Image src="/logo-white.png" alt="logo.png" width={100} height={100}/>
          </div>

          <div className="hidden md:flex space-x-8 text-gray-300  font-medium">
            <a href="#about" className="hover:text-ted-red-600 transition">About</a>
            <a href="#speakers" className="hover:text-ted-red-600 transition">Speakers</a>
            <a href="#event" className="hover:text-ted-red-600 transition">Event</a>
            <a href="#partners" className="hover:text-ted-red-600 transition">Partners</a>
          </div>

          <div>
            <a
              href="#tickets"
              className="bg-ted-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Book Tickets
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

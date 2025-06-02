"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 text-red-600 font-bold text-xl">
            TED<span className="text-black dark:text-white">xAIET</span>
          </div>

          <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 font-medium">
            <a href="#about" className="hover:text-red-600 transition">About</a>
            <a href="#speakers" className="hover:text-red-600 transition">Speakers</a>
            <a href="#event" className="hover:text-red-600 transition">Event</a>
            <a href="#partners" className="hover:text-red-600 transition">Partners</a>
          </div>

          <div>
            <a
              href="#tickets"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Book Tickets
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

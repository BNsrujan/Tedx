"use client";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function BookTicketPage() {
  return (
    <main className={`min-h-screen flex items-center justify-center bg-black ${orbitron.className}`}>
      <div className="relative p-8 w-[340px] md:w-[500px] aspect-video bg-gradient-to-r from-red-800 to-black rounded-2xl shadow-2xl border border-red-700 text-white overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-300 to-blue-500">
          LUXURY ELEMENTS
        </h1>

        <div className="mt-6 space-y-2 text-sm md:text-base">
          <p><span className="text-red-300">TIME:</span> 16:45 PM</p>
          <p><span className="text-red-300">DATE:</span> 15 MAY 2021</p>
          <p><span className="text-red-300">PRIZE:</span> Rolex Yacht-Master, 40 Slate Dial</p>
          <p><span className="text-red-300">CHARITY:</span> McMillan</p>
        </div>

        <div className="absolute bottom-4 right-4">
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm uppercase tracking-wide">
            Book Ticket
          </button>
        </div>

        {/* Decorative Lines and Barcode */}
        <div className="absolute top-0 right-0 h-full w-1 border-r border-dashed border-red-400 opacity-40"></div>
        <div className="absolute bottom-2 right-2 w-24 h-4 bg-gradient-to-r from-white to-red-200 opacity-20 rotate-[15deg]"></div>
      </div>
    </main>
  );
}

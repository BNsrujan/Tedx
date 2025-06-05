"use client";
import React from "react";

export default function Ticket() {
  return (
    <section className="bg-black h-screen px-4 py-12 flex justify-center items-center min-h-[300px]">
      <div className="w-full max-w-4xl">
        <h2 className="text-white text-lg font-semibold uppercase mb-6">Save Your Spot</h2>
        <div className="flex flex-col md:flex-row text-white rounded-md overflow-hidden">
          {/* Left side of ticket */}
          <div className="relative flex-1 bg-[#1f1f1f] px-6 py-8 border border-dashed border-white rounded-l-md">
            <h1 className="text-4xl font-bold text-ted-red-600 mb-4">TEDxAIET</h1>
            <p className="text-lg font-semibold">
              Date: <span className="text-white">16 August 2025</span>
            </p>
            <p className="text-lg font-semibold">Venue</p>

            {/* Left ticket shape corner */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-black rounded-full z-10 border-4 border-black"></div>
          </div>

          {/* Right side of ticket */}
          <div className="relative w-full md:w-[250px] flex items-center justify-center bg-[#2a2a2a] border border-dashed border-white rounded-r-md">
            {/* Right ticket shape corner */}
            <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-black rounded-full z-10 border-4 border-black"></div>

            <button className="bg-red-600 text-white px-6 py-2 font-semibold rounded hover:bg-red-700 transition">
              Save Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

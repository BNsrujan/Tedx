"use client";
import React from "react";

export default function SaveYourSpotTicket() {
  return (
    <div className="bg-black px-6 py-12 text-white flex flex-col items-center">
      <h2 className="text-lg font-semibold uppercase mb-6 text-white">
        Save Your Spot
      </h2>

      <div className="flex flex-col md:flex-row bg-[#1c1c1c] text-white rounded-lg overflow-hidden border border-dashed border-white">
        {/* Left Side: Event Info */}
        <div className="p-6 flex-1 min-w-[300px] flex flex-col justify-center gap-2 relative">
          <h3 className="text-3xl font-bold text-red-500">TEDxAIET</h3>
          <p className="text-white text-base">
            <span className="font-bold text-white">Date:</span> 16 August 2025
          </p>
          <p className="text-white text-base font-bold">Venue</p>
          {/* Perforated effect */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-0.5 bg-dashed bg-white z-10" />
        </div>

        <div className="p-6 flex items-center justify-center bg-[#2a2a2a] min-w-[200px]">
          <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-red-700 transition">
            Save Your Spot
          </button>
        </div>
      </div>
    </div>
  );
}

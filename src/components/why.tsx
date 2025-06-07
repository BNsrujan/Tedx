"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import { WorldMap } from "@/components/ui/worldmap";

export function WobbleCards() {
  return (
    <section id="about" className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full h-auto lg:h-screen px-4 md:px-6 py-6">

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-red-700 min-h-[300px] md:min-h-[400px] lg:min-h-[300px] relative overflow-hidden"
        >
          <video
            src="/cardimages/Tedx-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 max-w-xs p-4 md:p-6">
            <h2 className="text-left text-balance text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
              Inspiring Talks
            </h2>
            <p className="mt-2 md:mt-4 text-left text-sm md:text-base text-neutral-200">
              TEDx events bring the spirit of TED's mission of ideas worth
              spreading to local communities around the globe.
            </p>
          </div>
          <Image
            src="/tedx_stage.webp"
            width={500}
            height={500}
            alt="TEDx stage"
            className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain w-40 md:w-60 lg:w-80"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[250px] md:min-h-[300px] bg-white">
          <div className="p-4 md:p-6">
            <h2 className="max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-[0] text-ted-red">
              Be Part of the Movement
            </h2>
            <p className="mt-2 md:mt-4 max-w-[26rem] text-left text-sm md:text-base text-ted-red">
              Join a TEDx event near you and engage with powerful stories,
              innovative thinking, and passionate speakers.
            </p>
          </div>
        </WobbleCard>

     
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-900 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[500px] relative overflow-hidden">

         
          <div className="absolute inset-0 pointer-events-none z-10 opacity-50 w-full h-full overflow-hidden">
            <WorldMap
              dots={[
               {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
              ]}
              lineColor="#ef4444"
              className="
                w-full h-full 
                scale-[1] sm:scale-[1.2] md:scale-[1.4] lg:scale-[1.6] xl:scale-[1.8]
                transition-transform duration-500"
            />

         
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="select-none font-black text-white/5 tracking-tight hidden sm:block
                text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px]">
                MAP
              </h1>
            </div>
          </div>

         
          <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full relative z-20 p-4 md:p-6 lg:p-8 gap-6">
            <div className="max-w-sm lg:max-w-md text-white">
              <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em]">
                Local Voices, Global Impact
              </h2>
              <p className="mt-3 md:mt-4 max-w-[26rem] text-left text-sm md:text-base text-neutral-200">
                From science to art to global issues, TEDx speakers share
                transformative ideas that inspire and provoke thought.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[200px] md:h-[300px] lg:h-full"></div>
          </div>

        </WobbleCard>
      </div>
    </section>
  );
}

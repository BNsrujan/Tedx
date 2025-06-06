"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import { Globecontainer } from "./globalcontainer";

export function WobbleCards() {
  return (
    <section id="about" className="min-h-screen">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full h-screen">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-red-700 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Inspiring Talks
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            TEDx events bring the spirit of TED's mission of ideas worth spreading to local communities around the globe.
          </p>
        </div>
        <Image
          src="/tedx_stage.webp"
          width={500}
          height={500}
          alt="TEDx stage"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         
          Be Part of the Movement
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Join a TEDx event near you and engage with powerful stories, innovative thinking, and passionate speakers.
        </p>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">
          <div className="max-w-sm z-10">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Local Voices, Global Impact
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            From science to art to global issues, TEDx speakers share transformative ideas that inspire and provoke thought.

            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] lg:h-full">
            <Globecontainer/>
          </div>
        </div>
      </WobbleCard>
    </div>
    </section>
  );
}

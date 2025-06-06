"use client"

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { useState, useEffect } from "react";

const sponsors = [
  { img: "/sponser/alvas.png" },
  { img: "/sponser/alvas.png" },
  
];

const firstRow = sponsors.slice(0, sponsors.length / 2);
const secondRow = sponsors.slice(sponsors.length / 2);

const SponsorCard = ({ img }: { img: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative h-36 w-36 flex items-center justify-center overflow-hidden rounded-xl p-2 shadow-md",
        "bg-black border border-white/10 hover:border-red-500 transition-all duration-300",
        !isLoaded && "animate-pulse"
      )}
    >
     
      <img
        src={img}
        alt="Sponsor Logo"
        className={cn(
          "object-contain h-full w-full transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
        priority
      />
    </div>
  );
};

export default function MarqueeDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 bg-black">
        <div className="h-36 w-full animate-pulse bg-gray-800/20"></div>
      </div>
    );
  }

  return (
    <div className="relative h-screen flex w-full flex-col items-center justify-center overflow-hidden py-10 bg-black">
       <h3 className="text-white text-3xl font-bold pb-7">Sponsor</h3>
      <Marquee pauseOnHover className="[--duration:20s] gap-6">
        {firstRow.map((sponsor, i) => (
          <SponsorCard key={i} img={sponsor.img} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s] gap-6">
        {secondRow.map((sponsor, i) => (
          <SponsorCard key={i} img={sponsor.img} />
        ))}
      </Marquee> */}

      {/* Left and right fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black"></div>
    </div>
  );
}

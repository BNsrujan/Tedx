"use client"

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

import { useState, useEffect } from "react";
import Image from "next/image";



const sponsors = [
  { img: "/sponser/canara.png" },
  { img: "/sponser/alvas.png" },
];

const firstRow = sponsors.slice(0, sponsors.length );

const SponsorCard = ({ img }: { img: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="h-60 ">
      <div className=" h-full w-full flex grayscale hover:grayscale-0 duration-1000 items-center justify-center rounded-xl  backdrop-blur-sm p-4">
        <Image
          src={img}
          alt="Sponsor Logo"
          className={cn(
            "object-contain h-full w-full transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          priority
          width={200}
          height={200}
          />
      </div>
    </div>
  );
};

export default function MarqueeDemo() {
  const [mounted, setMounted] = useState(false);
  const [ismobile,setismobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      if(typeof window !== "undefined"){
        setismobile(window.innerWidth <= 768)
      }
    }
    checkMobile();
    window.addEventListener("resize",checkMobile);
    return () => window.removeEventListener("resize",checkMobile);  
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex w-full flex-col items-center justify-center  overflow-hidden py-10">
        <div className="h-96 w-96 animate-pulse bg-gray-800/20 rounded-xl"></div>
      </div>
    );
  }

  return (
    <div className="relative h-screen flex w-full flex-col items-center justify-center   overflow-hidden py-10">
    <h3 className="text-5xl sm:text-6xl md:text-4xl lg:text-6xl  text-white font-extrabold tracking-tight flex items-baseline justify-center gap-2 mb-10">Sponsor</h3>
    <div className=" relative max-w-7xl w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 z-10 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 z-10 bg-gradient-to-l from-black"></div>
      <Marquee pauseOnHover className="[--duration:30s] gap-10  w-full">
        {firstRow.map((sponsor, i) => (
          <SponsorCard key={i} img={sponsor.img} />
        ))}
      </Marquee>
      {ismobile &&
        <Marquee pauseOnHover reverse className="[--duration:30s] gap-10  w-full">
        {firstRow.map((sponsor, i) => (
          <SponsorCard key={i} img={sponsor.img} />
        ))}
      </Marquee>
      }
      </div>
    </div>
  );
}
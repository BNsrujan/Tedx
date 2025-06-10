"use client"

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { GlowingEffect } from "@/components/ui/glowing-effect";

import { useState, useEffect } from "react";
import Image from "next/image";

const sponsors = [
  { img: "/sponser/alvas.png" },
  { img: "/sponser/alvas.png" },
];

const firstRow = sponsors.slice(0, sponsors.length / 2);

const SponsorCard = ({ img }: { img: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-60 w-60">
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <GlowingEffect
          variant="default"
          glow={true}
          disabled={false}
          blur={0}
          spread={80}
          borderWidth={3}
          proximity={64}
          inactiveZone={0.01}
          className="rounded-xl"
        />
      </div>
      <div className="relative h-full w-full flex items-center justify-center rounded-xl bg-black/50 backdrop-blur-sm p-4">
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
        <div className="h-96 w-96 animate-pulse bg-gray-800/20 rounded-xl"></div>
      </div>
    );
  }

  return (
    <div className="relative h-screen flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <h3 className="text-white text-6xl font-bold pb-7">Sponsor</h3>
      <Marquee pauseOnHover className="[--duration:20s] gap-6">
        {firstRow.map((sponsor, i) => (
          <SponsorCard key={i} img={sponsor.img} />
        ))}
      </Marquee>
    </div>
  );
}
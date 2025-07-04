"use client";

import { Event } from "@/components/event";
import { ThreeDMarquees } from "@/components/slider";
import Speaker from "@/components/speaker";

import { TEDxhidden } from "@/components/tedhidden";

import Marquee from "@/components/secondmarquee";
import Ticket from "@/components/ticket";
import Timer from "@/components/timer";
import { WobbleCards } from "@/components/why";

export default function Home() {
  return (
    <div className="bg-black">

     
      <TEDxhidden />

      
     
        <WobbleCards />
     

      
     
        <Marquee />
    

     
      
        <ThreeDMarquees />
     

      
      <Event />
      <Speaker />
      <Timer />
      <Ticket />

      {/* Uncomment if needed later */}
      {/* <IntroSection /> */}
      {/* <MarqueeDemo /> */}
    </div>
  );
}

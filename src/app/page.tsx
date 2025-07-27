"use client";

import { Event } from "@/components/event";

import { ThreeDMarquees } from "@/components/slider";
import Speaker from "@/components/speaker";

import { TEDxhidden } from "@/components/tedhidden";

import Marquee from "@/components/secondmarquee";
import Ticket from "@/components/ticket";
import Timer from "@/components/timer";
import { WobbleCards } from "@/components/why";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Whatistedx from "@/components/whatistedx";
import MarqueeDemo from "@/components/sponser";

export default function Home() {
  return (
    <div className="bg-black flex flex-col  justify-center content-center">
      <TEDxhidden/>
      <WobbleCards/>
      <ThreeDMarquees/>
      <Event/>
      <Speaker/>
        <Marquee />
      <Timer />
      <MarqueeDemo/>

      <Whatistedx/>
      <Ticket />
      
      {/* <IntroSection /> */}
      {/* https://magicui.design/docs/components/hyper-text */}
      {/* {https://ui.aceternity.com/components/lamp-effect} */}
      {/* https://ui.aceternity.com/components/world-map*/}

      <Link href="/tickets" className="fixed bottom-2 px-4 w-full  z-50 md:hidden" aria-label="Book a Ticket">
        <Button className="bg-ted-red text-white  w-full py-6  rounded-sm text-lg font-bold flex items-center ">
          Book a Ticket
        </Button>
      </Link>
    </div>
  );
}

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


export default function Home() {
  return (
    <div className="bg-black">
      <TEDxhidden/>
      <WobbleCards/>
      <Whatistedx/>
      <Marquee />
      <ThreeDMarquees/>
      <Event/>
      <Speaker/>
        <Marquee />
      <Timer />
      <Whatistedx/>
      <Ticket />
      
      {/* <IntroSection /> */}
      {/* <MarqueeDemo/> */}
      {/* https://magicui.design/docs/components/hyper-text */}
      {/* {https://ui.aceternity.com/components/lamp-effect} */}
      {/* https://ui.aceternity.com/components/world-map*/}

      <Link href="/tickets" className="fixed bottom-0 w-full   z-50 md:hidden" aria-label="Book a Ticket">
        <Button className="bg-ted-red text-white  w-full py-2  text-lg font-bold flex items-center gap-2">
          Book a Ticket
        </Button>
      </Link>
    </div>
  );
}

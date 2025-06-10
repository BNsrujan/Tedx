
import {Event} from "@/components/event";
import { ThreeDMarquees } from "@/components/slider";
import Speaker from "@/components/speaker"
import MarqueeDemo from "@/components/sponser";
import { TEDxhidden } from "@/components/tedhidden";
import Ticket from "@/components/ticket";
import Timer from "@/components/timer";
import { WobbleCards } from "@/components/why";


export default function Home() {
  return (
    <div className="bg-black">
      <TEDxhidden/>
      <WobbleCards/>
      <ThreeDMarquees/>
      <Event/>
      <Speaker/>
      <Timer />
      <Ticket/>
      <MarqueeDemo/>
      {/* https://magicui.design/docs/components/hyper-text */}
      {/* {https://ui.aceternity.com/components/lamp-effect} */}
      {/* https://ui.aceternity.com/components/world-map*/}
    </div>
  );
}

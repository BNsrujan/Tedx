import {Event} from "@/components/event";
import { ThreeDMarquees } from "@/components/slider";
import Speaker from "@/components/speaker";
import { TEDxhidden } from "@/components/tedhidden";
import SaveYourSpotTicket from "@/components/ticket";
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
      <Timer/>
      <SaveYourSpotTicket/>
      {/* https://magicui.design/docs/components/hyper-text */}
      {/* {https://ui.aceternity.com/components/lamp-effect} */}
      {/* https://ui.aceternity.com/components/world-map */}
    </div>
  );
}

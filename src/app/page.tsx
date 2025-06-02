import Event from "@/components/event";
import { ThreeDMarquees } from "@/components/slider";
import { TEDxhidden } from "@/components/tedhidden";
import TimerCounter from "@/components/timer";
import { WobbleCards } from "@/components/why";

export default function Home() {
  return (
    <div className="bg-black">
      <TEDxhidden/>
      <ThreeDMarquees/>
      <TimerCounter/>
      <WobbleCards/>
      <Event/>
      {/* https://magicui.design/docs/components/hyper-text */}
    </div>
  );
}

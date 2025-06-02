import { ThreeDMarquees } from "@/components/slider";
import { TEDxhidden } from "@/components/tedhidden";
import TimerCounter from "@/components/timer";

export default function Home() {
  return (
    <div className="bg-black">
      <TEDxhidden/>
      <ThreeDMarquees/>
      <TimerCounter/>
    </div>
  );
}

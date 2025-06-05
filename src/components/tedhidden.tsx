"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function TEDxhidden() {
  return (
    <div className=" relative  h-screen flex justify-center items-center">
    <div className="flex h-screen w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="w-full max-w-full px-4 text-center text-4xl font-bold text-white dark:text-white leading-tight">
            An IDEA. A STORY. A <span className="text-ted-red">TRANSFORMATION.</span><br />
            {/* <span className="text-ted-red">TEDxAIET</span> */}
          </p>
        }
        className="h-screen w-full text-black  text-center"
      >
        <p className="text-9xl font-semibold leading-snug w-full px-4">
          <span className="text-ted-red">TEDx<span className="text-black">AIET</span></span>{" "}
         
        </p>
      </MaskContainer>
    </div>
    </div>
  );
}

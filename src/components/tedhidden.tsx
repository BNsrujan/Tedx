"use client";
import { useState, useEffect } from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { TypewriterEffect } from "@/components/ui/typewriter";

export function TEDxhidden() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="flex min-h-screen w-full items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <div className="w-full max-w-full px-4 text-center">
              {mounted && (
                <TypewriterEffect
                  words={[
                    { text: "An", className: "text-white" },
                    { text: "Ideas.", className: "text-white" },
                    { text: "A", className: "text-white" },
                    { text: "Story.", className: "text-white" },
                    { text: "A", className: "text-white" },
                    { text: "Transformation", className: "text-ted-red" },
                  ]}
                  className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-[6rem] xl:text-9xl leading-tight uppercase"
                  cursorClassName="bg-ted-red"
                />
              )}
            </div>
          }
          className="min-h-screen w-full text-black text-center"
        >
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-semibold leading-snug w-full px-4">
            <span className="text-ted-red">TEDx</span>
            <span className="text-black">AIET</span>
          </p>
        </MaskContainer>
      </div>
    </div>
  );
}

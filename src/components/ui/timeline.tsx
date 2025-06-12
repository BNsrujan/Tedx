"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-ted-red font-sans md:px-10 overflow-y-auto"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-[1800px] mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-3 md:pt-4 md:gap-4"
          >
            <div className="sticky  hidden sm:flex sm:flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Point */}
              <div className="h-6 w-6 absolute left-3 md:left-4 rounded-full bg-black flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-ted-red border-ted-red p-1" />
              </div>

              {/* Title time */}
              <h3 className="hidden md:block text-xl md:pl-20 font-bold text-white">
                {item.title}
              </h3>
            </div>

            <div className="relative  pr-4 md:pl-6 w-full">
              {/* Title for mobile */}
              <h3 className="md:hidden block text-2xl mb-2 text-left font-bold text-white">
                {item.title}
              </h3>

              {/* Event content */}
              <div className="text-lg md:text-xl text-white">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className=" hidden sm:flex absolute md:left-6 left-9 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-black via-red-600 to-transparent from-[0%] via-[20%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

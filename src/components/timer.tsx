"use client";
import React, { useState, useEffect } from "react";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
  variable: "--font-orbitron",
  weight: ["400", "700"],
});

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-16T00:00:00Z");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        console.log({ days, hours, minutes, seconds });

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center  items-center p-4 ${orbitron.className}`}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-[1100px] min-h-[300px] md:h-[700px] md:w-[1200px] bg-red-500  p-4 sm:p-6 md:p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold">
            Time is Ticking
          </h1>
        </div>
        <div className="grid  grid-cols-4 uppercase sm:grid-cols-4 gap-4 md:gap-9  md:w-full text-white">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <div key={index} className="flex  justify-between w-full  items-center">
              <div className="flex flex-col justify-center">
              <div className="text-3xl sm:text-5xl md:pl-6 flex text-center justify-center  md:text-7xl lg:text-8xl font-bold">
                {timeLeft[unit as keyof typeof timeLeft]
                  .toString()
                  .padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-lg flex  w-full justify-center text-center font-semibold mt-1">
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </div>
              </div>
              {index < 3 && (
                <div className="hidden sm:flex h-full justify-center  text-center text-4xl pb-9 md:text-6xl lg:text-7xl font-bold  items-center">
                  :
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timer;

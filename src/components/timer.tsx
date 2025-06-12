"use client";
import React, { useState, useEffect } from "react";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
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
    <div className={`min-h-screen flex flex-col justify-center items-center p-4 ${orbitron.className}`}>
      <div className="flex flex-col justify-center items-center w-full max-w-[1100px] min-h-[700px] md:h-[700px] md:w-[1200px] bg-red-500 rounded p-4 sm:p-6 md:p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Time's Ticking</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-8 w-full text-white">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <div className="text-center" key={index}>
              <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
                {timeLeft[unit as keyof typeof timeLeft]
                  .toString()
                  .padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-lg font-semibold mt-1">
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timer;

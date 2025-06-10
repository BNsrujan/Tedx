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
    <div className={`h-screen flex flex-col justify-center items-center  ${orbitron.className} `}>
      <div className="flex flex-col justify-center items-center h-[600px] w-[1100px] bg-red-500">
        <div className="text-center">
          <h1 className="text-4xl font ">Time's Ticking</h1>
        </div>
        <div className="flex flex-wrap gap-4  md:gap-9 justify-center items-center  md:p-9 w-full text-white">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <div className="text-center w-[120px] md:w-auto" key={index}>
              <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold">
                {timeLeft[unit as keyof typeof timeLeft]
                  .toString()
                  .padStart(2, "0")}
              </div>
              <div className="text-sm md:text-xl font-semibold ">
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

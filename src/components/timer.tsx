"use client";
import React, { useState, useEffect } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  // fallback: ["system-ui", "Arial", "sans-serif"],
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
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`w-full md:min-h-screen flex flex-col justify-center items-center px-4 py-8 ${orbitron.className}`}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-[1200px] min-h-[300px] md:h-[800px] bg-ted-red rounded shadow-2xl p-6 md:p-12">
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase text-black text-center mb-10 tracking-wide">
          Time is Ticking
        </h1>

     
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full text-white">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/10 rounded p-4 md:p-6 backdrop-blur-sm"
            >
             
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">
                {timeLeft[unit as keyof typeof timeLeft].toString().padStart(2, "0")}
              </div>

             
              <div className="text-sm sm:text-base md:text-lg uppercase tracking-widest font-semibold text-white/90">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timer;

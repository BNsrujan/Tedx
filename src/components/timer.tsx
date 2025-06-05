"use client"
import React, { useState, useEffect } from 'react'

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to August 16, 2024 at midnight UTC
    const targetDate = new Date('2024-08-16T00:00:00Z');

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
        // If the target date has passed, set all to 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    console.log("Timer tick:", new Date().toLocaleTimeString(), timeLeft);


    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-9 justify-center text-red-500 items-center p-9">
      <div className="text-center">
        <div className="text-9xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
        <div className="text-xl font-semibold mt-2">Days</div>
      </div>
      <div className="text-center">
        <div className="text-9xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="text-xl font-semibold mt-2">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-9xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="text-xl font-semibold mt-2">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-9xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className="text-xl font-semibold mt-2">Seconds</div>
      </div>
    </div>
  )
}

export default Timer
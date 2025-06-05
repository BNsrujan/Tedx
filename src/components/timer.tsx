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
    const targetDate = new Date('2024-08-16T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-9 justify-center items-center text-red-600 h-screen p-4">
      <div className="text-center">
        <div className="text-7xl font-bold">{timeLeft.days}</div>
      </div>
      <div className="text-center">
        <div className="text-7xl font-bold">{timeLeft.hours}</div>
      </div>
      <div className="text-center">
        <div className="text-7xl font-bold">{timeLeft.minutes}</div>
      </div>
      <div className="text-center">
        <div className="text-7xl font-bold">{timeLeft.seconds}</div>
      </div>
    </div>
  )
}

export default Timer
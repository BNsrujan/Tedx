// "use client";

// import React, { useState, useEffect } from "react";

// type FlipTimerProps = {
//   targetDate: string;
// };

// const FlipTimer: React.FC<FlipTimerProps> = ({ targetDate }) => {
//   const calculateTimeLeft = () => {
//     const target = new Date(targetDate);
//     const now = new Date();
//     const diff = target.getTime() - now.getTime();

//     return {
//       days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
//       hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
//       minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
//       seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//   const [prevTime, setPrevTime] = useState(timeLeft);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setPrevTime(timeLeft);
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft, targetDate]);

//   const formatDigit = (num: number) => num.toString().padStart(2, "0");

//   // FlipUnit with inline style animation fix
//   const FlipUnit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
//     const [flipping, setFlipping] = useState(false);

//     useEffect(() => {
//       if (digit !== prevDigit) {
//         setFlipping(true);
//         const timeout = setTimeout(() => setFlipping(false), 600);
//         return () => clearTimeout(timeout);
//       }
//     }, [digit, prevDigit]);

//     return (
//       <div className="relative w-16 h-20 mx-1" style={{ perspective: "1000px" }}>
//         {/* Static cards */}
//         <div className="absolute top-0 left-0 w-full h-10 overflow-hidden rounded-t-lg bg-gray-900 shadow-[inset_0_4px_6px_rgba(239,68,68,0.8)] text-red-500 text-6xl font-bold leading-10 text-center z-30">
//           {prevDigit}
//         </div>
//         <div className="absolute bottom-0 left-0 w-full h-10 overflow-hidden rounded-b-lg bg-gray-900 shadow-[inset_0_-4px_6px_rgba(239,68,68,0.7)] text-red-500 text-6xl font-bold leading-10 text-center z-10">
//           {digit}
//         </div>

//         {/* Flip animation */}
//         <div
//           className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
//           style={{
//             transformStyle: "preserve-3d",
//             transition: "transform 0.6s ease",
//             transformOrigin: "bottom",
//             transform: flipping ? "rotateX(180deg)" : "rotateX(0deg)",
//           }}
//         >
//           <div
//             className="absolute top-0 left-0 w-full h-10 overflow-hidden rounded-t-lg bg-gray-900 text-red-500 text-6xl font-bold leading-10 text-center"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             {prevDigit}
//           </div>
//           <div
//             className="absolute top-0 left-0 w-full h-10 overflow-hidden rounded-b-lg bg-gray-900 text-red-500 text-6xl font-bold leading-10 text-center"
//             style={{
//               transform: "rotateX(180deg) translateY(-100%)",
//               backfaceVisibility: "hidden",
//             }}
//           >
//             {digit}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="flex justify-center gap-4 bg-black p-8 rounded-xl shadow-[0_0_30px_rgb(239,68,68)]">
//       {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
//         <div key={unit} className="flex flex-col items-center text-red-500 font-bold">
//           <div className="flex">
//             <FlipUnit
//               digit={formatDigit(timeLeft[unit])[0]}
//               prevDigit={formatDigit(prevTime[unit])[0]}
//             />
//             <FlipUnit
//               digit={formatDigit(timeLeft[unit])[1]}
//               prevDigit={formatDigit(prevTime[unit])[1]}
//             />
//           </div>
//           <span className="mt-2 text-lg">{unit.toUpperCase()}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FlipTimer;

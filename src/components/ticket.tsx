"use client";

import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function BookTicketPage() {
  return (
    <main className={`relative min-h-screen flex items-center justify-center bg-black ${orbitron.className}`}>
     <div className=" relative flex w-[900px] mx-auto mt-10 font-sans shadow-lg   border border-gray-300">
      
      
      <div className="bg-black text-white w-9/12 relative p-6 flex  justify-between">
        <div className=" relative h-full">
          <h2 className="text-xl font-bold mb-1">TEDx</h2>
          <h1 className="text-3xl font-light mb-4">AIET</h1>
          <span className="inline-block bg-red-500 text-white px-3 py-1  text-sm mb-6">VIP EXPERIENCE</span>
          <p className="text-red-400 font-bold text-lg mb-4  ">ALL DAY</p>
        </div>

        {/* Event Info + QR */}
        <div>
          <p className="text-sm mb-1">Date: <span className="font-bold">FRIDAY</span> <br/> 12-</p>
          <p className="text-sm mb-4">Place Event: <span className="font-bold">20:00</span></p>
          {/* QR Code Placeholder */}
          <img src="https://via.placeholder.com/80" alt="QR Code" className="w-20 h-20"/>
        </div>

        {/* Image Overlay (optional) */}
        <div className="absolute inset-0 opacity-20">
          <img src="https://via.placeholder.com/300x400" alt="Background" className="w-full h-full object-cover"/>
        </div>
      </div>

     
      <div className="bg-white text-black w-3/12 p-6 flex flex-col justify-between border-l border-gray-300">
        {/* Ticket Title */}
        <div>
          <h2 className="text-xl font-light mb-1 text-red-500">Ticket</h2>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mockup</h1>
          <span className="inline-block bg-red-500 text-white px-3 py-1  text-sm mb-6">VIP EXPERIENCE</span>
        </div>

        {/* Event Info + QR */}
        <div>
          <p className="text-sm mb-1">Date: <span className="font-bold">FRIDAY</span> <br/> 11-03-2022</p>
          <p className="text-sm mb-4">Place Event: <span className="font-bold">20:00</span></p>
          {/* QR Code Placeholder */}
          <Image src="" alt="QR Code" className="w-20 h-20 mx-auto " width={50} height={50} ></Image>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-6/9 top-0 w-0  border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-b-black   h-20"></div>
      <div className="pointer-events-none absolute inset-x-8/12 bottom-0  w-1/6  bg-red-400 h-20"></div>
      <div className="pointer-events-none absolute  inset-6/16 rounded-full -left-10 w-14 bg-black h-14"></div>
      <div className="pointer-events-none absolute inset-y-6/16 rounded-full -right-10 w-14 bg-black h-14 "></div>
    </div>
    </main>
  );
}

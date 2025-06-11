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



// "use client";

// import { Orbitron } from "next/font/google";
// import Image from "next/image";

// const orbitron = Orbitron({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// export default function BookTicketPage() {
//   return (
//     <main className={`relative min-h-screen flex items-center justify-center bg-black ${orbitron.className}`}>
//       <div className="relative flex w-full max-w-3xl mx-4 shadow-2xl border border-gray-700 rounded-lg overflow-hidden">
//         {/* Black TEDx Section */}
//         <div className="bg-black text-white w-3/4 p-8 relative flex flex-col justify-between">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"></div>
//             <div className="absolute inset-0 bg-[url('/tedx-pattern.png')] bg-cover mix-blend-overlay"></div>
//           </div>

    
//           <div className="relative z-10">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-red-500 mb-1">TEDx</h2>
//               <h1 className="text-4xl font-light mb-4">AIET</h1>
//               <span className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-bold tracking-wider mb-6">
//                 VIP EXPERIENCE
//               </span>
//               <p className="text-red-400 font-bold text-xl mb-6">ALL DAY ACCESS</p>
//             </div>

//             <div className="flex justify-between items-end">
//               <div>
//                 <p className="text-gray-300 text-sm mb-1">DATE</p>
//                 <p className="font-bold text-lg">FRIDAY, 12 MARCH 2024</p>
//                 <p className="text-gray-300 text-sm mt-4 mb-1">VENUE</p>
//                 <p className="font-bold text-lg">AIET CAMPUS</p>
//                 <p className="text-gray-300 text-sm mt-4 mb-1">TIME</p>
//                 <p className="font-bold text-lg">10:00 AM - 8:00 PM</p>
//               </div>

//               <div className="bg-white p-2 rounded">
//                 <img 
//                   src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=TEDxAIET-VIP-001" 
//                   alt="QR Code" 
//                   className="w-24 h-24"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>


//         <div className="bg-white text-black w-1/4 p-6 flex flex-col justify-between border-l border-gray-300 relative">

//           <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-black rounded-r-full"></div>
//           <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-black rounded-l-full"></div>
          

//           <div>
//             <h2 className="text-xl font-light mb-1 text-red-600">Ticket</h2>
//             <h1 className="text-3xl font-bold text-gray-900 mb-4">#001</h1>
//             <span className="inline-block bg-red-600 text-white px-3 py-1 text-xs font-bold tracking-wider mb-6">
//               VIP EXPERIENCE
//             </span>
//           </div>

//           <div>
//             <div className="mb-4">
//               <p className="text-xs text-gray-500 mb-1">HOLDER NAME</p>
//               <p className="font-bold text-sm">JOHN DOE</p>
//             </div>
//             <div className="mb-4">
//               <p className="text-xs text-gray-500 mb-1">TICKET TYPE</p>
//               <p className="font-bold text-sm">VIP ALL ACCESS</p>
//             </div>
//             <div className="bg-black p-1 rounded inline-block">
//               <img 
//                 src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=TEDxAIET-VIP-001" 
//                 alt="QR Code" 
//                 className="w-16 h-16"
//               />
//             </div>
//           </div>

//           <div className="text-center">
//             <p className="text-xs text-gray-500">SCAN FOR ENTRY</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
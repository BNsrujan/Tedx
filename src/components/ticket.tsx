"use client";

import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function BookTicketPage() {
  return (
    <main
      className={`relative min-h-screen flex items-center justify-center bg-black ${orbitron.className} py-10 px-4`}
    >
      {/* Desktop View */}
      <div className="hidden md:flex relative w-full max-w-3xl h-full  border border-gray-700  ">
        {/* Black TEDx Section */}
        <div className="bg-black text-white w-3/4 pt-8 px-8 relative flex flex-col justify-between  border-r-3 border-dashed  border-ted-red">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-red-1800/20 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/tedx-pattern.png')] bg-cover mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 flex gap-8 w-full   bg-red">
            <div className=" h-full flex flex-col w-4/6 justify-between content-between ">
              <div className="flex flex-col items-center">
                <Image
                  src={"/logo-white.png"}
                  alt=""
                  width={180}
                  height={180}
                />
                <span className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-bold tracking-wider mb-6">
                  VIP EXPERIENCE
                </span>
              </div>
              <p className="text-ted-red font-black text-xl mb-6">ALL DAY </p>
            </div>
            <div className="flex flex-col w-full h-full  2/6">
              <div className="flex flex-col h-full justify-between items-end w-full">
                <div className="w-full h-full">
                  <p className="text-gray-300 text-sm ">DATE</p>
                  <p className="font-bold text-lg">SATURDAY, 16 AUG 2025</p>
                  <p className="text-gray-300 text-sm pt-4 ">VENUE</p>
                  <p className="font-bold text-lg">V.S ACHYARYA HALL,</p>
                  <p className=" text-sm">VIDYAGIRI NEAR MANGALORE</p>
                  <p className="text-gray-300 text-sm pt-4 ">TIME</p>
                  <p className="font-bold text-lg">09:30 AM - 5:00 PM</p>
                </div>

                <div className="bg-white">
                  <Image
                    src={"/QRcode/insta.png"}
                    alt="QR Code"
                    className="w-24 h-24 p-0 border-black border-2"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White Ticket Section */}
        <div className="bg-white text-black w-1/4 p-6 flex flex-col justify-between border-l border-gray-300 relative z-20">
          <div className="absolute hidden sm:block -top-0 -left-8 transform -translate-y-1/2 w-16 h-8 bg-black rounded-b-full z-20"></div>
          <div className="absolute hidden sm:block -bottom-8 -left-8 z-20 transform -translate-y-1/2 w-16 h-8 bg-black rounded-t-full"></div>
          <div className="absolute md:hidden -left-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-black rounded-r-full"></div>
          <div className="absolute md:hidden -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-black rounded-l-full"></div>

          <div>
            <h2 className="text-xl font-light mb-1 text-red-600">Ticket</h2>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">#001</h1>
            <span className="inline-block bg-red-600 text-white px-3 py-1 text-xs font-bold tracking-wider mb-6">
              VIP EXPERIENCE
            </span>
          </div>

          <div></div>
          <div>
            <div className="mb-4">
              <p className="text-xs text-gray-1800 mb-1">DATE</p>
              <p className="font-bold text-sm">16 AUG 2025</p>
            </div>
            <div className="mb-4">
              <p className="text-xs text-gray-1800 mb-1">TICKET TYPE</p>
              <p className="font-bold text-sm">VIP ALL ACCESS</p>
            </div>
            <div className="bg-black p-1 rounded inline-block">
              <Image
                src={"/QRcode/insta.png"}
                alt="QR Code"
                className="w-16 h-16"
                width={180}
                height={180}
              />
            </div>
          </div>

          <div className="text-center">
            {/* <p className="text-xs text-gray-1800">SCAN FOR ENTRY</p> */}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full max-w-sm border border-gray-700 ">
        {/* Black TEDx Section */}
        <div className="bg-black text-white p-6 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-red-1800/20 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/tedx-pattern.png')] bg-cover mix-blend-overlay"></div>
          </div>

          <div className="relative z-10">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-red-1800 mb-1 ">TEDx</h2>
              <h1 className="text-2xl font-light mb-3">AIET</h1>
              <span className="inline-block bg-red-600 text-white px-3 py-1 text-xs font-bold tracking-wider mb-4">
                VIP EXPERIENCE
              </span>
              <p className="text-ted-red font-bold text-lg mb-4">
                ALL DAY ACCESS
              </p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-300 text-xs mb-1">DATE</p>
                <p className="font-bold text-sm">FRIDAY, 12 MARCH 2024</p>
              </div>
              <div className="bg-white ">
                <Image
                  src={"/QRcode/insta.png"}
                  alt="QR Code"
                  className="w-16 h-16"
                  width={180}
                  height={180}
                />
              </div>
            </div>

            <div className="mb-2">
              <p className="text-gray-300 text-xs mb-1">VENUE</p>
              <p className="font-bold text-sm">AIET CAMPUS</p>
            </div>

            <div>
              <p className="text-gray-300 text-xs mb-1">TIME</p>
              <p className="font-bold text-sm">10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
        <div className=" hidden md:flex border-r-red-1800 h-full w-2"></div>
        {/* White Ticket Section */}
        <div className="bg-white text-black p-6 border-t-3 border-red-600 border-dashed relative">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-black rounded-r-full"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-black rounded-l-full"></div>

          <div className="mb-4">
            <h2 className="text-lg font-light mb-1 text-red-600">Ticket</h2>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">#001</h1>
            <span className="inline-block bg-red-600 text-white px-3 py-1 text-xs font-bold tracking-wider mb-4">
              VIP EXPERIENCE
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <div className="mb-3">
                {/* <p className="text-xs text-gray-1800 mb-1">HOLDER NAME</p>
                <p className="font-bold text-sm">JOHN DOE</p> */}
              </div>
              <div>
                <p className="text-xs text-gray-1800 mb-1">TICKET TYPE</p>
                <p className="font-bold text-sm">VIP ALL ACCESS</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-black   inline-block mb-1">
                <Image
                  src={"/QRcode/insta.png"}
                  alt="QR Code"
                  className="w-12 h-12"
                  width={180}
                  height={180}
                />
              </div>
              {/* <p className="text-xs text-gray-1800">SCAN FOR ENTRY</p> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

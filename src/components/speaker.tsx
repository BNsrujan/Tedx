"use client";

import { useState } from "react";
import Image from "next/image";

type Speaker = {
  name: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: "Pranay Sharma",
    image: "/speakers/pranay.jpg", // Replace with actual path
  },
  {
    name: "Aarushi Jain",
    image: "/speakers/aarushi.jpg",
  },
  {
    name: "Raj Mehta",
    image: "/speakers/raj.jpg",
  },
  {
    name: "Sneha Kapoor",
    image: "/speakers/sneha.jpg",
  },
  {
    name: "Ankit Rana",
    image: "/speakers/ankit.jpg",
  },
];

export default function Speaker() {
  const [active, setActive] = useState<Speaker>(speakers[0]);

  return (
    <div className="bg-black text-white py-12 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4 tracking-widest">SPEAKER</h2>

      <div className="flex flex-col items-center">
        {/* Main Display */}
        <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white mb-4">
          <Image
            src={active.image}
            alt={active.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-xl font-bold">{active.name.toUpperCase()}</div>
      </div>

      {/* Thumbnails */}
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        {speakers.map((speaker) => (
          <button
            key={speaker.name}
            onClick={() => setActive(speaker)}
            className={`w-16 h-16 rounded-full overflow-hidden border-2 ${
              speaker.name === active.name ? "border-white" : "border-gray-600"
            }`}
          >
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={64}
              height={64}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

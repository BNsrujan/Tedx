"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

type Speaker = {
  name: string;
  image: string;
  description: string;
};

const speakers: Speaker[] = [
  {
    name: "Lt Gen A Arun",
    image: "/speaker/arun.png",
    description: "Lieutenant General A Arun is a distinguished military officer with extensive experience in defense and strategic leadership."
  },
  {
    name: "Amoghavarsha J. S.",
    image: "/speaker/amogha.png",
    description: "Amoghavarsha J. S. is a renowned expert in technology and innovation, bringing unique insights to the TEDx stage."
  },
  {
    name: "Janaki Anand",
    image: "/speaker/janki.jpeg",
    description: "Janaki Anand is a celebrated figure in her field, known for her groundbreaking work and inspiring journey."
  },
  {
    name: "Dr. Achyuthan Eswar",
    image: "/speaker/text-ted-red.jpeg",
    description: "Dr. Achyuthan Eswar is a distinguished academic and researcher, bringing valuable perspectives to our event."
  },
  {
    name: "Arjun Deshpande",
    image: "/speaker/arjun.jpeg",
    description: "Arjun Deshpande is an accomplished professional known for his innovative approach and impactful contributions."
  }
];

export default function Speaker() {
  const [active, setActive] = useState<Speaker>(speakers[0]);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleSpeakerChange = (speaker: Speaker) => {
    const currentIndex = speakers.findIndex(s => s.name === active.name);
    const newIndex = speakers.findIndex(s => s.name === speaker.name);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActive(speaker);
  };

  return (
    <div className="bg-black h-screen flex-col justify-center content-center text-white py-12 px-4 max-w-7xl m-auto space-y-16 text-center">
      <h2 className="text-4xl font-bold mb-4 tracking-widest max-w-4xl  text-start">SPEAKERS</h2>

      <div className="flex flex-col ">
        {/* Main Display */}
        <div className="flex flex-row items-center gap-8 max-w-4xl">
          {/* Image Section */}
          <div className="relative w-64 h-72 rounded-lg overflow-hidden border-4 border-red-500">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={active.name}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-3xl font-bold text-ted-red">
                  {active.name.toUpperCase()}
                </h3>
                <p className="text-lg text-gray-300">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-8 flex justify-start cursor-nones gap-6 flex-wrap">
        {speakers.map((speaker) => (
          <motion.button
            key={speaker.name}
            onClick={() => handleSpeakerChange(speaker)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-20 h-20 overflow-hidden border-2 cursor-none transition-all duration-300 ${
              speaker.name === active.name ? "border-red-500 scale-110" : "border-white"
            }`}
          >
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={80}
              height={80}
              className="object-cover cursor-none"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

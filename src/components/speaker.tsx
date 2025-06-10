"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { animate, scroll } from '@motionone/dom';
import { motion, AnimatePresence } from 'framer-motion';

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
    image: "/speaker/achutank.jpeg",
    description: "Dr. Achyuthan Eswar is a distinguished academic and researcher, bringing valuable perspectives to our event."
  },
  {
    name: "Arjun Deshpande",
    image: "/speaker/arjun.jpeg",
    description: "Arjun Deshpande is an accomplished professional known for his innovative approach and impactful contributions."
  }
];

export default function Speaker() {
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker>(speakers[0]);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const imgGroupContainer = document.querySelector('.img-group-container');
    const imgGroup = document.querySelector('.img-group');
    const progress = document.querySelector('.progress');

    if (imgGroupContainer && imgGroup && progress) {
      scroll(
        animate(imgGroup, {
          transform: ['none', `translateX(-${speakers.length - 1}00vw)`],
        }),
        { target: imgGroupContainer }
      );

      scroll(animate(progress, { scaleX: [0, 1] }), {
        target: imgGroupContainer,
      });
    }
  }, []);

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
    const currentIndex = speakers.findIndex(s => s.name === activeSpeaker.name);
    const newIndex = speakers.findIndex(s => s.name === speaker.name);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveSpeaker(speaker);
  };

  return (
    <section id="speakers" className="bg-black text-white">
      {/* Horizontal Scrolling Gallery */}
      <article className="w-[98vw]">
        <header className="h-[70vh] flex justify-center items-center">
          <h2 className="text-6xl xl:text-9xl font-bold tracking-widest max-w-4xl text-start">
            SPEAKERS
          </h2>
        </header>

        <section className="img-group-container h-[500vh] relative">
          <div className="sticky top-0 overflow-hidden h-screen">
            <ul className="img-group flex">
              {speakers.map((speaker, index) => (
                <li
                  key={index}
                  className="img-container flex w-screen h-screen flex-shrink-0 flex-col items-center justify-center"
                >
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={500}
                    height={500}
                    className="w-[400px] h-[600px] object-cover"
                  />
                  <h3 className="text-[50px] font-extrabold tracking-tight leading-[1.2] relative -bottom-[30px] inline-block m-0 font-mono">
                    #{String(index + 1).padStart(3, "0")}
                  </h3>
                  <p className="text-white mt-4 text-xl">{speaker.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="h-[70vh] flex justify-center items-center">
          <p className="text-center">
            Photos by{" "}
            <a
              target="_blank"
              href="https://twitter.com/mattgperry"
              rel="noopener noreferrer"
              className="underline text-purple-700"
            >
              Matt Perry
            </a>
          </p>
        </footer>
      </article>

      <div className="progress fixed left-0 right-0 h-[5px] bg-[#9911ff] bottom-[50px] origin-left scale-x-0" />
    </section>
  );
}

{/* <div className="flex-col justify-center content-center text-white py-12 px-4 max-w-7xl m-auto space-y-16 text-center">
        <h2 className="text-6xl xl:text-9xl font-bold mb-4 tracking-widest max-w-4xl text-start">SPEAKERS</h2>

        <div className="flex flex-col">
         
          <div className="flex flex-row items-center gap-8 max-w-4xl">
          
            <div className="relative w-64 h-72 rounded-lg overflow-hidden border-4 border-red-500">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeSpeaker.name}
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
                    src={activeSpeaker.image}
                    alt={activeSpeaker.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            Content Section
            <div className="flex-1 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpeaker.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-3xl font-bold text-red-500">
                    {activeSpeaker.name.toUpperCase()}
                  </h3>
                  <p className="text-lg text-gray-300">
                    {activeSpeaker.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        Thumbnails
        <div className="mt-8 flex justify-start gap-6 flex-wrap">
          {speakers.map((speaker) => (
            <motion.button
              key={speaker.name}
              onClick={() => handleSpeakerChange(speaker)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-20 h-20 overflow-hidden border-2 transition-all duration-300 ${
                speaker.name === activeSpeaker.name ? "border-red-0 scale-110" : "border-white"
              }`}
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div> */}
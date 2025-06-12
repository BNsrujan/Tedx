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
    description: "A soldier, storyteller, and leader—Lt Gen A Arun turns battle scars into life lessons, inspiring youth with courage, clarity, and a spark for service."
  },
  // {
  //   name: "Amoghavarsha J. S.",
  //   image: "/speaker/amogha.png",
  //   description: "Amoghavarsha J. S. is a renowned expert in technology and innovation, bringing unique insights to the TEDx stage."
  // },
  {
    name: "Janaki Anand",
    image: "/speaker/janki.jpeg",
    description: "Zooming into history on skateboard, Janaki Anand is India's youngest skateboarding prodigy, proving that big dreams roll faster with fearless passion and grit."
  },
  {
    name: "Dr. Achyuthan Eswar",
    image: "/speaker/achutank.jpeg",
    description: "Doctor turned food rebel! Dr. Achyuthan serves up plant-based power through Sampoorna Ahara, mixing tradition, science, and tasty transformation on every plate."
  },
  {
    name: "Arjun Deshpande",
    image: "/speaker/arjun.jpeg",
    description: "Disrupting pharma at 16, Arjun Deshpande built Generic Aadhaar to make medicines affordable, youth-led innovation that's healing India one pill at a time."
  },
  {
    name: "Abhishek Mishra",
    image: "/speaker/abhishek-mishras.jpeg",
    description: "Creator of 'In Other Words', Abhishek decodes song lyrics and scenes with heart and depth making music more meaningful, one beautifully explained verse at a time."
  }
];

// Simple mobile view component
const MobileSpeakers = () => (
  <div className="md:hidden space-y-24 px-4 py-8">
    {speakers.map((speaker, index) => (
      <div key={index} className="flex flex-col items-center gap-6 border p-8 border-red-500">
        <div className="w-[250px] h-[250px] relative">
          <Image
            src={speaker.image}
            alt={speaker.name}
            width={250}
            height={250}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <h3 className="text-2xl font-mono font-bold mb-2">
            #{String(index + 1).padStart(3, "")}
          </h3>
          <h4 className="text-3xl font-bold mb-4">{speaker.name}</h4>
          <p className="text-gray-300 leading-relaxed">{speaker.description}</p>
        </div>
      </div>
    ))}
  </div>
);

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
    <section id="speakers" className="text-white">
      {/* Mobile Header */}
      <header className='flex flex-col md:hidden  px-4 py-8'>
        <h1 className="text-3xl font-bold text-white  ">SPEAKERS</h1>
        <div className="w-full h-1 bg-ted-red "></div>
      </header>

      {/* Mobile View */}
      <MobileSpeakers />

      {/* Desktop View */}
      <article className="w-[98vw] hidden md:block">
        <header className="md:h-[70vh] flex justify-center items-center p-9 md:p-0 border-b-ted-red">
          <h2 className="sm:text-xl md:text-6xl xl:text-9xl font-bold tracking-widest max-w-4xl text-start">
            SPEAKERS
          </h2>
        </header>

        <section className="img-group-container h-[500vh] relative">
          <div className="sticky top-0 overflow-hidden h-screen">
            <ul className="img-group flex">
              {speakers.map((speaker, index) => (
                <li
                  key={index}
                  className="img-container flex w-screen h-screen flex-shrink-0 flex-col items-center justify-center gap-8 px-8"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 max-w-7xl">
                    <div className='flex justify-center items-start w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]'>
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-[30px] sm:text-[40px] md:text-[50px] font-extrabold tracking-tight leading-[1.2] relative inline-block m-0 font-mono">
                        #{String(index + 1).padStart(3, "")}
                      </h3>
                      <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">{speaker.name}</h4>
                      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">{speaker.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>

      <div className="progress fixed left-0 right-0 h-[5px] bg-[#9911ff] bottom-[50px] origin-left scale-x-0 hidden md:block" />
    </section>
  );
}


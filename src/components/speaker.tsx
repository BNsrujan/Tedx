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
    image: "/speaker/abhishek-mishra.jpeg",
    description: "Creator of 'In Other Words', Abhishek decodes song lyrics and scenes with heart and depth making music more meaningful, one beautifully explained verse at a time."
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
    <section id="speakers" className=" text-white">
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
                  className="img-container  flex w-screen h-screen flex-shrink-0 flex-col items-center justify-center gap-8 px-8"
                >
                  <div className="flex  items-center gap-6 max-w-7xl">
                    <div className='flex justify-center items-center min-w-[600px] h-[600px]'>
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={500}
                      height={500}
                      className="w-600px] h-[600px] object-cover"
                    />
                    </div>
                    <div className="">
                      <h3 className="text-[50px] font-extrabold tracking-tight leading-[1.2] relative inline-block m-0 font-mono">
                        #{String(index + 1).padStart(3, "")}
                      </h3>
                      <h4 className="text-6xl  font-bold mt-4 mb-6">{speaker.name}</h4>
                      <p className="text-xl text-gray-300 leading-relaxed">{speaker.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

       
      </article>

      <div className="progress fixed left-0 right-0 h-[5px] bg-[#9911ff] bottom-[50px] origin-left scale-x-0" />
    </section>
  );
}


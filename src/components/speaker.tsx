"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, scroll } from "@motionone/dom";
import { useScroll, useTransform, motion } from "motion/react";

type Speaker = {
  name: string;
  image: string;
  description: string;
  links?: {
    href: string;
    icon: string;
    alt: string;
  }[];
};

const speakers: Speaker[] = [
  {
    name: "Lt Gen A Arun",
    image: "/speaker/arun.png",
    description:
      "A soldier, storyteller, and leader Lt Gen A Arun turns battle scars into life lessons, inspiring youth with courage, clarity, and a spark for service.",
    links: [
      {
        href: "https://www.linkedin.com/in/arun-ananthanarayan-20b514302",
        icon: "/logos/LinkedIn.svg",
        alt: "LinkedIn",
      },
      {
        href: "https://www.instagram.com/inspirationalarun",
        icon: "/logos/Instagram.svg",
        alt: "Instagram",
      },
      {
        href: "https://youtu.be/8Yi-Ry6d9-g?si=0C6CC12bvE8vLgF9",
        icon: "/logos/YouTube.svg",
        alt: "YouTube",
      },
    ],
  },
  {
    name: "Satish Patla",
    image: "/speaker/satish_patla.jpg",
    description:
      "Patla Satish Shetty, known as Yaksha Dhruva, is a celebrated Yakshagana Bhagavatha from the Tenkutittu tradition and lead singer of the Kateel Mela. He has performed globally and actively supports Yakshagana artists through his foundation.",
    links: [
      {
        href: "https://www.instagram.com/patla_sathishshetty",
        icon: "/logos/Instagram.svg",
        alt: "Instagram",
      },
      {
        href: "https://youtu.be/7WxArTbOtBQ?si=zGdDSgYf-OvSgHK2",
        icon: "/logos/YouTube.svg",
        alt: "YouTube",
      },
    ],
  },
 // {
  //   name: "Suyog Shetty",
  //   image: "/speaker/suyog_shetty.jpg",
  //   description:
  //     "He is the co-founder and CEO of Niveus Solutions, a top cloud engineering company. He has led the firm to win several awards, including 2024's Breakthrough Partner of the Year  Asia Pacific.",
  //   links: [
  //     {
  //       href: "https://www.linkedin.com/in/suyog-shetty-79693730",
  //       icon: "/logos/LinkedIn.svg",
  //       alt: "LinkedIn",
  //     },
  //     {
  //       href: "https://www.instagram.com/suyogshetty03",
  //       icon: "/logos/Instagram.svg",
  //       alt: "Instagram",
  //     },
  //   ],
  // },
  {
    name: "Arjun Deshpande",
    image: "/speaker/arjun.jpeg",
    description:
      "Disrupting pharma at 16, Arjun Deshpande built Generic Aadhaar to make medicines affordable, youth-led innovation that's healing India one pill at a time.",
    links: [
      {
        href: "https://www.linkedin.com/in/arjun-deshpande-50393b178",
        icon: "/logos/LinkedIn.svg",
        alt: "LinkedIn",
      },
      {
        href: "https://www.instagram.com/arjun.deshpande_official",
        icon: "/logos/Instagram.svg",
        alt: "Instagram",
      },
    ],
  },
  {
    name: "Abhishek Mishra",
    image: "/speaker/abhishek-mishras.jpeg",
    description:
      "Creator of 'In Other Words', Abhishek decodes song lyrics and scenes with heart and depth making music more meaningful, one beautifully explained verse at a time.",
    links: [
      {
        href: "https://www.linkedin.com/in/abhishekrmishra",
        icon: "/logos/LinkedIn.svg",
        alt: "LinkedIn",
      },
      {
        href: "https://www.instagram.com/doosre_shabdon_mein",
        icon: "/logos/Instagram.svg",
        alt: "Instagram",
      },
    ],
  },
  {
    name: "Janaki Anand",
    image: "/speaker/janki.png",
    description:
      "Zooming into history on skateboard, Janaki Anand is India's youngest skateboarding prodigy, proving that big dreams roll faster with fearless passion and grit.",
    links: [
      {
        href: "https://www.instagram.com/skate_janzz",
        icon: "/logos/Instagram.svg",
        alt: "Instagram",
      },
      {
        href: "https://youtu.be/r6wwqjgMf5c?si=bEczW756Nz5E4ab3",
        icon: "/logos/YouTube.svg",
        alt: "YouTube",
      },
    ],
  },
  {
    name: "Dr. Achyuthan Eswar",
    image: "/speaker/achutank.jpeg",
    description:
      "Doctor turned food rebel! Dr. Achyuthan serves up plant-based power through Sampoorna Ahara, mixing tradition, science, and tasty transformation on every plate.",
    links: [
      {
        href: "https://www.instagram.com/doc.eswar/",
        icon: "/logos/Instagram.svg",
        alt: "Instagram",
      },
      {
        href: "https://www.linkedin.com/in/achyuthan-eswar",
        icon: "/logos/LinkedIn.svg",
        alt: "LinkedIn",
      },
    ],
  },
  {
    name: "Sufiyan Alam",
    image: "/speaker/sufiyan_alam2.jpeg",
    description:
      "He is a physics content creator known for his clear and engaging explanations of complex concepts and he also explores his passion for acting, showcasing his versatility through creative performances.",
    links: [
      {
        href: "https://www.instagram.com/sufitramp/",
        icon: "/logos/Instagram.svg",
        alt: "Instagram",
      },
      {
        href: "https://www.youtube.com/@sufitramphere",
        icon: "/logos/YouTube.svg",
        alt: "YouTube",
      },
    ],
  },
 
];

const MobileSpeakers = () => (
  <div className="md:hidden space-y-24 px-4 py-8">
    {speakers.map((speaker, index) => (
      <div
        key={index}
        className="flex flex-col items-center gap-6 border p-8 border-ted-red rounded"
      >
        <div className="w-[250px] h-[250px] relative">
          <Image
            src={speaker.image}
            alt={speaker.name}
            width={250}
            height={250}
            className="w-full h-full object-contain grayscale"
          />
        </div>
        <div className=" relative ">
          <h3 className="text-2xl font-mono font-bold mb-1">
            #{String(index + 1).padStart(1, "")}
          </h3>
          <h4 className="text-3xl font-bold mb-3">{speaker.name}</h4>
          <p className="text-gray-300 leading-relaxed">{speaker.description}</p>
          <div className="  justify-end flex gap-3 lg:gap-4   content-between cursor-none">
            {speaker.links && speaker.links.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 p-2 bg-black border  duration-500 border-black hover:border-ted-red transition-all cursor-none "
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={24}
                  height={24}
                  className="w-5 h-5 lg:w-6 lg:h-6 cursor-none"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function Speaker() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Only for desktop header animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 1.5", "end 0.2"],
  });
  const progress = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const left = useTransform(progress, [0, 1], ["25%", "2rem"]);
  const top = useTransform(progress, [0, 1], ["25%", "2rem"]);
  const translate = useTransform(progress, [0, 1], ["-10%,-10%", "0%, 0%"]);
  const fontSizeProgress = useTransform(progress, [0, 1], ["12rem", "3rem"]);

  useEffect(() => {
    const imgGroupContainer = document.querySelector(".img-group-container");
    const imgGroup = document.querySelector(".img-group");
    const progress = document.querySelector(".progress");

    if (imgGroupContainer && imgGroup && progress) {
      scroll(
        animate(imgGroup, {
          transform: ["none", `translateX(-${speakers.length - 1}00vw)`],
        }),
        { target: imgGroupContainer }
      );

      scroll(animate(progress, { scaleX: [0, 1] }), {
        target: imgGroupContainer,
      });
    }
  }, []);

  return (
    <section id="speakers" className="text-white ">
      {/* Mobile Header */}
      <header className=" flex flex-col  md:hidden px-4 py-12">
        <h1 className="text-3xl font-bold text-white">SPEAKERS</h1>
        <div className="w-full h-1 bg-ted-red"></div>
      </header>

      {/* Mobile View */}
      <MobileSpeakers />

      {/* Desktop View */}
      <article className="w-[95vw] hidden md:block">
        <header className="sticky  top-10 w-full h-[100vh]  flex items-center justify-center p-[26px] md:p-0 text-center">
          <motion.span
            style={{
              position: "absolute",
              left,
              top,
              fontSize: fontSizeProgress,
              zIndex: 20,
              translate,
            }}
            className="text-4xl h-screen uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-[12rem] font-bold mt-1 leading-none origin-top-left"
          >
            Speakers
          </motion.span>
        </header>
        <section
          ref={containerRef}
          className="img-group-container mt-[100vh] h-[700vh] relative"
        >
          <div className="sticky top-0 overflow-hidden h-screen">
            <ul className="img-group flex">
              {speakers.map((speaker, index) => (
                <li
                  key={index}
                  className="img-container flex w-screen h-screen  flex-shrink-0 flex-col items-center justify-center gap-[32px] px-8"
                >
                  <div className="flex flex-col border border-ted-red p-[38px] md:flex-row items-center gap-6 max-w-7xl">
                    <div className="flex justify-center items-start w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[500px]">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <div className="relative text-center md:text-left  h-full  flex flex-col justify-center">
                      <h3 className="text-[30px] sm:text-[40px] md:text-[50px] font-extrabold tracking-tight leading-[1.2] relative inline-block m-0 font-mono">
                        #{String(index + 1).padStart(1, "")}
                      </h3>
                      <h4 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
                        {speaker.name}
                      </h4>
                      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                        {speaker.description}
                      </p>
                      <div className=" absolute  bottom-0 right-0 flex gap-3 lg:gap-4   content-between cursor-none">
                        {speaker.links && speaker.links.map((link) => (
                          <a
                            key={link.alt}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 p-2 bg-black border  duration-500 border-black hover:border-ted-red transition-all cursor-none "
                          >
                            <Image
                              src={link.icon}
                              alt={link.alt}
                              width={24}
                              height={24}
                              className="w-5 h-5 lg:w-6 lg:h-6 cursor-none"
                            />
                          </a>
                        ))}
                      </div>
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

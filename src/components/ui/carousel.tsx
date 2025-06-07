"use client";
import { useRef } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
}

const Slide = ({ slide }: SlideProps) => {
  const { src, button, title } = slide;

  return (
    <li
      className="flex flex-col items-center justify-center text-white relative text-center w-[70vmin] h-[70vmin] mx-[4vmin] flex-shrink-0"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
          alt={title}
          src={src}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
      </div>

      <article className="relative p-[4vmin] z-10">
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-4">
          {title}
        </h2>
        <button className="px-4 py-2 text-black bg-white h-12 border border-transparent text-xs flex items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)]">
          {button}
        </button>
      </article>
    </li>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function HorizontalCarousel({ slides }: CarouselProps) {
  const containerRef = useRef<HTMLUListElement>(null);

  return (
    <div className="relative w-full overflow-x-auto">
      <ul
        ref={containerRef}
        className="flex flex-nowrap gap-[4vmin] p-[2vmin] scroll-smooth snap-x snap-mandatory"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="snap-center">
            <Slide slide={slide} />
          </div>
        ))}
      </ul>
    </div>
  );
}




// "use client";
// import HeroSection from "@/components/HeroSection";
// import { HorizontalCarousel } from "@/components/HorizontalCarousel";

// export default function Home() {
//   const slides = [
//     {
//       title: "TEDx Event 1",
//       button: "Know More",
//       src: "/images/tedx1.jpg",
//     },
//     {
//       title: "TEDx Event 2",
//       button: "Explore",
//       src: "/images/tedx2.jpg",
//     },
//     {
//       title: "TEDx Event 3",
//       button: "Get Tickets",
//       src: "/images/tedx3.jpg",
//     },
//   ];

//   return (
//     <main className="bg-black text-white">
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Horizontal Scroll Carousel Section */}
//       <section className="pt-20">
//         <HorizontalCarousel slides={slides} />
//       </section>

//       {/* You can continue with other sections */}
//     </main>
//   );
// }

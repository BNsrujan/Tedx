"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarquees() {
  const images = [
    "/cardimages/AdobeStock_664471339_Preview.jpeg",
    "/cardimages/AdobeStock_1376361187_Preview.jpeg",
    "/cardimages/AdobeStock_765358143_Preview.jpeg",
    "/cardimages/AdobeStock_1256451111_Preview.jpeg",
    "/cardimages/AdobeStock_664471339_Preview.jpeg",
    "/cardimages/AdobeStock_982074408_Preview.jpeg",
    "/cardimages/AdobeStock_1258573374_Preview.jpeg",
    "/cardimages/AdobeStock_675525288_Preview.jpeg",
    "/cardimages/AdobeStock_664471339_Preview.jpeg",
    "/cardimages/AdobeStock_1376361187_Preview.jpeg",
    "/cardimages/AdobeStock_765358143_Preview.jpeg",
    "/cardimages/AdobeStock_1256451111_Preview.jpeg",
    "/cardimages/AdobeStock_664471339_Preview.jpeg",
    "/cardimages/AdobeStock_982074408_Preview.jpeg",
    "/cardimages/AdobeStock_1258573374_Preview.jpeg",
    "/cardimages/AdobeStock_675525288_Preview.jpeg",
    "/cardimages/AdobeStock_664471339_Preview.jpeg",
    "/cardimages/AdobeStock_1376361187_Preview.jpeg",
    "/cardimages/AdobeStock_765358143_Preview.jpeg",
    "/cardimages/AdobeStock_1256451111_Preview.jpeg",
    "/cardimages/AdobeStock_664471339_Preview.jpeg",
    "/cardimages/AdobeStock_982074408_Preview.jpeg",
    "/cardimages/AdobeStock_1258573374_Preview.jpeg",
    "/cardimages/AdobeStock_675525288_Preview.jpeg",
    "/cardimages/AdobeStock_664471339_Preview.jpeg",
    "/cardimages/AdobeStock_1376361187_Preview.jpeg",
    "/cardimages/AdobeStock_765358143_Preview.jpeg",
    "/cardimages/AdobeStock_1256451111_Preview.jpeg",
    "/cardimages/AdobeStock_664471339_Preview.jpeg",
    "/cardimages/AdobeStock_982074408_Preview.jpeg",
    "/cardimages/AdobeStock_1258573374_Preview.jpeg",
    "/cardimages/AdobeStock_675525288_Preview.jpeg",
  ];

  return (
    <div className="h-screen relative flex justify-center items-center overflow-hidden">
      <div className="absolute flex w-full h-full justify-center items-center">
        <h1 className=" relative text-white font-bold text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem]">
          <span className="text-ted-red">TED</span>
          <span className="absolute text-ted-red font-bold text-[0.4em] ">x</span>{"     "}
          <span className="font-medium">AIET</span>
        </h1>
      </div>
      <div className="mx-auto sm:w-full">
        <ThreeDMarquee 
          images={images} 
          className="opacity-30 h-[200px] sm:h-[250px] md:h-[600px]"
        
        />
      </div>
    </div>
  );
}
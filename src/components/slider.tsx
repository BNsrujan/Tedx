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
    <div className="h-screen relative flex  justify-center items-center">
      <div className="absolute flex w-full h-full justify-center items-center ">
        <h1 className="text-amber-50 font-bold text-9xl"><span className="text-ted-red">TEDx</span>AIET</h1>
      </div>{" "}
      <div className="mx-auto my-10  rounded-3xl bg-gray-950/5 p-2 ring-1   dark:bg-neutral-800">
        <ThreeDMarquee images={images} className=" opacity-30" />
      </div>
    </div>
  );
}

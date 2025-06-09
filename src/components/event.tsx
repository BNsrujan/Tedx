"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Timeline } from "@/components/ui/timeline";

export function Event() {
    const eventData = [
    { title: "09:30 AM", content: <p className="font-bold">INAUGURATION</p> },
    { title: "10:00 AM", content: <p className="font-bold">Speaker 1</p> },
    { title: "10:25 AM", content: <p className="font-bold">Speaker 2</p> },
    { title: "10:50 AM", content: <p className="font-bold">BREAK 1</p> },
    { title: "11:00 AM", content: <p className="font-bold">Speaker 3</p> },
    { title: "11:25 AM", content: <p className="font-bold">Speaker 4</p> },
    { title: "11:50 AM", content: <p className="font-bold">QnA - 1</p> },
    { title: "12:30 PM", content: <p className="font-bold">LUNCH BREAK</p> },
    { title: "01:55 PM", content: <p className="font-bold">Speaker 5</p> },
    { title: "02:20 PM", content: <p className="font-bold">BREAK 2</p> },
    { title: "02:30 PM", content: <p className="font-bold">Speaker 6</p> },
    { title: "03:20 PM", content: <p className="font-bold">QnA - 2</p> },
    { title: "04:00 PM", content: <p className="font-bold">VALEDICTORY CEREMONY</p> },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-5xl font-bold text-ted-red dark:text-white">
              Inspire. Execute. Connect. Transform. <br />
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-bold mt-1 leading-none">
                Events Schedule
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full max-w-5xl mx-auto space-y-6">
          {/* 👆 added space-y-6 for consistent vertical spacing */}
          <Timeline data={eventData} />
        </div>
      </ContainerScroll>
    </div>
  );
}

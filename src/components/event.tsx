"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Timeline } from "@/components/ui/timeline";

export function Event() {
    const eventData = [
    { title: "09:30 AM", content: <p className="font-bold">Inauguration & TEDx Rules</p> },
    { title: "10:00 AM", content: <p className="font-bold">Speaker 1</p> },
    { title: "10:25 AM", content: <p className="font-bold">Speaker 2</p> },
   
    { title: "11:00 AM", content: <p className="font-bold">Speaker 3</p> },
    { title: "11:25 AM", content: <p className="font-bold">Speaker 4</p> },
    { title: "12:00 PM", content: <p className="font-bold">Interactive Session 1</p> },
    { title: "12:40 PM", content: <p className="font-bold">Lunch Break</p> },
    { title: "02:00 PM", content: <p className="font-bold">Speaker 5</p> },
    { title: "02:25 PM", content: <p className="font-bold">Speaker 6</p> },
   
    { title: "03:00 PM", content: <p className="font-bold">Speaker 7</p> },
    { title: "03:25 PM", content: <p className="font-bold">Speaker 8</p> },
    { title: "03:50 PM", content: <p className="font-bold">Interactive Session 2</p> },
    { title: "04:30 PM", content: <p className="font-bold">Valedictory Ceremony</p> },
    // { title: "05:00 PM", content: <p className="font-bold">TEDxTeam Interaction with Speakers</p> }
  ];

  // Simple text version for mobile
  const SimpleSchedule = () => (
    <div className="md:hidden space-y-4 px-4">
      <h1 className="text-3xl font-bold text-white mb-1">Event Schedule</h1>
      <div className="w-fill  h-1 bg-ted-red mb-6"></div>
      {eventData.map((item, index) => (
        <div key={index} className="flex gap-4 items-start  ">
          <span className="text-ted-red text-3xl">•</span>
          <span className="text-white/80 min-w-[80px]">{item.title}</span>
          <div className="text-white">{item.content}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div id="event" className="flex flex-col overflow-hidden min-h-screen">
      {/* Mobile version */}
      <SimpleSchedule />
      
      {/* Desktop version with animation */}
      <div className="hidden md:block">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-white px-4 sm:px-6 md:px-8">
                <span className="text-4xl sm:text-5xl uppercase  md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-1 leading-none">
                  Event Schedule
                </span>
              </h1>
            </>
          }
        >
          <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8">
            <Timeline data={eventData} />
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
}

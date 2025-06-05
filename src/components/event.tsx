import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Event() {
  const eventData = [
    {
      title: "09:30 AM",
      content: <div><p className="text-sm font-semibold">START</p><p className="text-xs text-muted-foreground">INAUGURATION</p></div>,
    },
    {
      title: "10:00 AM",
      content: <p className="text-sm font-semibold">Speaker 1</p>,
    },
    {
      title: "10:35 AM",
      content: <p className="text-sm font-semibold">Speaker 2</p>,
    },
    {
      title: "11:10 AM",
      content: <div><p className="text-sm font-semibold">Performance</p><p className="text-sm font-semibold">Speaker 3</p></div>,
    },
    {
      title: "11:40 AM",
      content: <p className="text-sm font-semibold">Speaker 4</p>,
    },
    {
      title: "12:15 PM",
      content: <p className="text-sm font-semibold">Break</p>,
    },
    {
      title: "02:00 PM",
      content: <p className="text-sm font-semibold">Speaker 5</p>,
    },
    {
      title: "02:35 PM",
      content: <p className="text-sm font-semibold">Speaker 6</p>,
    },
    {
      title: "03:05 PM",
      content: <p className="text-sm font-semibold">Speaker 7</p>,
    },
    {
      title: "03:40 PM",
      content: <p className="text-sm font-semibold">Performance</p>,
    },
    {
      title: "04:15 PM",
      content: <p className="text-sm font-semibold">Speaker 8</p>,
    },
    {
      title: "04:40 PM",
      content: <p className="text-sm font-semibold">End</p>,
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl  shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-red-500">TEDxAIET</h2>
        <span className="text-sm font-semibold text-white ">Elements</span>
      </div>
      <h1 className="text-2xl font-bold mb-6 text-muted">Event Schedule</h1>
      <Timeline data={eventData} />
    </div>
  );
}

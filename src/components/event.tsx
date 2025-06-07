import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Event() {
  const eventData = [
    {
      title: "09:30 AM",
      content: <div><p className="text-3xl font-semibold">INAUGURATION</p></div>,
    },
    {
      title: "10:00 AM",
      content: <div><p className="text-3xl font-semibold">Speaker 1</p></div>,
    },
    {
      title: "10:25 AM",
      content: <div><p className="text-3xl font-semibold">Speaker 2</p></div>,
    },
    {
      title: "10:50 AM",
      content: <div><p className="text-3xl font-semibold">BREAK 1</p></div>,
    },
    {
      title: "11:00 AM",
      content: <div><p className="text-3xl font-semibold">Speaker 3</p></div>,
    },
    {
      title: "11:25 AM",
      content: <div><p className="text-3xl font-semibold">Speaker 4</p></div>,
    },
    {
      title: "11:50 AM",
      content: <div><p className="text-3xl font-semibold">QnA - 1</p></div>,
    },
    {
      title: "12:30 PM",
      content: <div><p className="text-3xl font-semibold">LUNCH BREAK</p></div>,
    },
    {
      title: "01:30 PM",
      content: <div><p className="text-3xl font-semibold">Speaker 5</p></div>,
    },
    {
      title: "01:55 PM",
      content: <div><p className="text-3xl font-semibold">Speaker 6</p></div>,
    },
    {
      title: "02:20 PM",
      content: <div><p className="text-3xl font-semibold">BREAK 2</p></div>,
    },
    {
      title: "02:30 PM",
      content: <div><p className="text-3xl font-semibold">Speaker 7</p></div>,
    },
    {
      title: "02:55 PM",
      content: <div><p className="text-3xl font-semibold">Speaker 8</p></div>,
    },
    {
      title: "03:20 PM",
      content: <div><p className="text-3xl font-semibold">QnA - 2</p></div>,
    },
    {
      title: "04:00 PM",
      content: <div><p className="text-3xl font-semibold">VALEDICTORY CEREMONY</p></div>,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto   shadow-3xl">
      <div className="flex justify-between items-center mb-4">
      </div>
      <h1 className="text-2xl font-bold mb-6 text-muted">Event Schedule</h1>
      <Timeline data={eventData} />
    </div>
  );
}

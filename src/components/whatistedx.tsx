"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const faqs = [
  {
    title: "What is TEDx?",
    content:
      "TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.",
  },
  {
    title: "How is TEDx different from TED?",
    content:
      "TEDx events are independently organized under a free license granted by TED, whereas TED events are organized by the main TED organization.",
  },
  {
    title: "Who organizes a TEDx event?",
    content:
      "A team of volunteers passionate about sharing ideas organizes each TEDx event within their community.",
  },
  {
    title: "Can anyone attend a TEDx event?",
    content:
      "Yes! Most TEDx events are open to the public, though some may require registration or tickets.",
  },
]

export default function Whatistedx() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase">
          FAQs About
        </h2>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-extrabold tracking-tight flex items-baseline justify-center gap-2">
          <span className="text-ted-red font-black">TED</span>
          <span className="absolute text-ted-red font-black text-[0.5em]">x</span>{" "}
          <span className="font-light text-black ml-4">AIET</span>
        </h2>
      </div>

   
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white hover:text-ted-red">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

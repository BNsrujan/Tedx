"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Whatistedx() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl  uppercase">
          FAQs About
        </h2>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-extrabold tracking-tight flex items-baseline justify-center gap-2">
           <span className="text-ted-red font-black">TED</span>
                <span className="absolute text-ted-red font-black text-[0.5em] ">x</span>{"     "}
                <span className="font-light text-black ml-4">AIET</span>
        </h2>
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white text-2xl font-semibold transition hover:text-ted-red">
            What is TEDx?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base leading-relaxed">
            TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-white text-2xl font-semibold transition hover:text-ted-red">
            How is TEDx different from TED?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base leading-relaxed">
            TEDx events are independently organized under a free license granted by TED, whereas TED events are organized by the main TED organization.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-white text-2xl font-semibold transition hover:text-ted-red">
            Who organizes a TEDx event?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base leading-relaxed">
            A team of volunteers passionate about sharing ideas organizes each TEDx event within their community.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-white text-2xl font-semibold transition hover:text-ted-red">
            Can anyone attend a TEDx event?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base leading-relaxed">
            Yes! Most TEDx events are open to the public, though some may require registration or tickets.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const faqs = [
  {
    title: "What is TED?",
    content:
      "TED stands for Technology, Entertainment, and Design, and it is a nonprofit organization that promotes new ideas and work in a wide variety of human endeavor.",
  },
  {
    title: "what is TEDx?",
    content:
      "A team of volunteers passionate about sharing ideas organizes each TEDx event within their community..",
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
      
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-extrabold tracking-tight flex items-baseline justify-center gap-2">
          <span className="text-ted-red font-black">TED</span>
          <span className="absolute text-ted-red font-black text-[0.5em]">x</span>{" "}
          <span className="font-light text-white ml-4">AIET</span>
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

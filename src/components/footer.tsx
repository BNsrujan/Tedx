import Image from "next/image";
import Link from "next/link";
import { HyperText } from "@/components/magicui/hyper-text";
import TooltipButton from "./ui/tooltipbutton";

export default function Footer() {
  return (
    <footer className="bg-black cursor-none text-white px-4 lg:px-12 py-10 lg:py-12 ">
      <div className="max-w-8xl mx-auto cursor-none">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-48 cursor-none">
          {/* Logo and Social - Always centered */}
          <div className="flex flex-col items-center lg:items-start lg:pl-20 cursor-none">
            <div className="mb-4 cursor-none">
              <Image
                src={"/image.png"}
                alt="logo"
                width={200}
                height={200}
                className="w-40 lg:w-48 -left-10 cursor-none"
              />
            </div>

            <div className="flex gap-3 lg:gap-4  content-between cursor-none">
              {[
                {
                  href: "https://www.instagram.com/tedxaiet/",
                  icon: "/logos/Instagram.svg",
                  alt: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/in/tedxaiet/",
                  icon: "/logos/LinkedIn.svg",
                  alt: "LinkedIn",
                },
                {
                  href: "https://twitter.com/tedxaiet27260",
                  icon: "/logos/X.svg",
                  alt: "X",
                },
              ].map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 p-2 bg-black border  duration-500 border-black hover:border-ted-red transition-all cursor-none "
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={24}
                    height={24}
                    className="w-5 h-5 lg:w-6 lg:h-6 cursor-none"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="w-full flex flex-col items-center space-y-8 md:hidden">
              <div className="text-center w-full">
                <p className="font-bold mb-4 text-lg text-ted-red ">Pages</p>
                <ul className="space-y-2 text-sm">
                  {[
                    { href: "/#about", text: "About TED & TEDx" },
                    { href: "/#event", text: "TEDx Event Schedule" },
                    { href: "/#speakers", text: "TEDx speaker" },
                    { href: "/#date", text: "TEDx Event Date" },
                  ].map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="hover:text-ted-red transition-colors "
                      >
                        <HyperText>{link.text}</HyperText>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center w-full">
                <p className="font-bold mb-4 text-lg text-ted-red">Community</p>
                <ul className="space-y-2 text-sm">
                  {[
                    {
                      href: "https://www.ted.com",
                      text: "TED",
                      external: true,
                    },
                    {
                      href: "#organizers",
                      text: "TEDx Organizers",
                      bold: true,
                    },
                  ].map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={`hover:text-ted-red transition-colors ${
                          link.bold ? "font-bold" : ""
                        }`}
                      >
                        <HyperText>{link.text}</HyperText>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="hidden md:grid md:grid-cols-3 w-full gap-8 lg:gap-12">
              <div className="text-left">
                <p className="font-bold mb-4 text-lg text-ted-red">Pages</p>
                <ul className="space-y-2 text-sm lg:text-base">
                  {[
                    { href: "/#about", text: "About TEDx" },
                    { href: "/#event", text: "TEDx Event Date" },
                    { href: "/#event", text: "TEDx Event Schedule" },
                    { href: "/#speakers", text: "TEDx speaker" },
                  ].map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="hover:text-ted-red cursor-none transition-colors"
                      >
                        <HyperText>{link.text}</HyperText>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left">
                <p className="font-bold mb-4 text-lg text-ted-red">Community</p>
                <ul className="space-y-2 text-sm   lg:text-base">
                  {[
                    {
                      href: "https://www.ted.com",
                      text: "TED",
                      external: true,
                    },
                    {
                      href: "/organizers",
                      text: "TEDx Organizers",
                      bold: true,
                    },
                  ].map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={`hover:text-ted-red transition-colors ${
                          link.bold ? "font-bold" : ""
                        }`}
                      >
                        <HyperText>{link.text}</HyperText>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left">
<<<<<<< HEAD
                
                
  <Link
    href="https://www.youtube.com/@TEDx"
    target="_blank"
    rel="noopener noreferrer"
    
  >
    <TooltipButton tooltip="Watch our TEDx videos on YouTube"
                hoverText="WATCH ON YOUTUBE">
    <span className="inline-block bg-ted-red text-white font-semibold hover:bg-ted-600 transition-colors text-sm lg:text-base">WATCH ON YOUTUBE</span>
  
</TooltipButton>
</Link>
=======
                <TooltipButton
                  tooltip="Watch our TEDx videos on YouTube"
                  hoverText="WATCH ON YOUTUBE"
                  hoverLink="https://www.youtube.com/ted"
                  className=" cursor-none"
              target="_blank"
>>>>>>> 7f78583704743b7dea7537473fbcfff947723f17

                >
                  <Link
                    href="https://www.youtube.com/ted"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-ted-red text-white font-semibold hover:bg-ted-600 cursor-none transition-colors text-sm lg:text-base"
                  >
                    WATCH ON YOUTUBE
                  </Link>
                </TooltipButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <hr className="border-gray-700 mx-auto w-full" />
          <div className="text-center text-sm text-gray-400 mt-6">
            © Copyright by TEDxAIET. This independent TEDx event is Operated
            under the license of TED.
          </div>
        </div>
      </div>
    </footer>
  );
}

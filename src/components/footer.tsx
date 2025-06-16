import Image from "next/image";
import Link from "next/link";
import { HyperText } from "@/components/magicui/hyper-text";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 lg:px-12 py-10 lg:py-12 ">
      <div className="max-w-8xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-48">
          {/* Logo and Social - Always centered */}
          <div className="flex flex-col items-center lg:items-start lg:pl-20">
            <div className="mb-4">
              <Image 
                src={'/image.png'} 
                alt="logo" 
                width={200} 
                height={200} 
                
                className="w-40 lg:w-48 -left-10"
              />
            </div>
            
            <div className="flex gap-3 lg:gap-4">
              {[
                { href: "https://www.instagram.com/tedxaiet/", icon: "/logos/Instagram.svg", alt: "Instagram" },
                { href: "https://www.linkedin.com/in/tedxaiet/", icon: "/logos/LinkedIn.svg", alt: "LinkedIn" },
                { href: "https://twitter.com/tedxaiet27260", icon: "/logos/X.svg", alt: "X" },
              ].map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 p-2 bg-black border  duration-500 border-black hover:border-red-400 transition-all "
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={24}
                    height={24}
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  />
                </a>
              ))}
            </div>
          </div>

      
          <div className="flex-1 flex flex-col items-center md:items-start">
  
            <div className="w-full flex flex-col items-center space-y-8 md:hidden">
              <div className="text-center w-full">
                <p className="font-bold mb-4 text-lg">Pages</p>
                <ul className="space-y-2 text-sm">
                  {[
                    { href: "/", text: "Home" },
                    { href: "#about", text: "About TED" },
                    { href: "#event", text: "TED Event Date" },
                    { href: "#event", text: "TED Event Schedule" },
                    { href: "#speakers", text: "TED speaker" },
                    { href: "#organizers", text: "TED Organisers" },
                    { href: "#community", text: "TED Community" }
                  ].map((link) => (
                    <li key={link.text}>
                      <a href={link.href} className="hover:text-ted-red transition-colors ">
                        <HyperText>{link.text}</HyperText>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center w-full">
                <p className="font-bold mb-4 text-lg">Community</p>
                <ul className="space-y-2 text-sm">
                  {[
                    { href: "https://www.ted.com", text: "TED", external: true },
                    { href: "#speakers", text: "TED Speakers", bold: true },
                    { href: "#organizers", text: "TEDx Organizers", bold: true }
                  ].map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={`hover:text-ted-red transition-colors ${link.bold ? "font-bold" : ""}`}
                      >
                        <HyperText>{link.text}</HyperText>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center w-full">
                <p className="font-bold mb-4 text-lg">Events & Incentives</p>
                <ul className="space-y-2 text-sm mb-4">
                  {[
                    { href: "#pre-event", text: "Pre-Ted Event", bold: true },
                    { href: "#athyudan", text: "Athyudan", bold: true },
                    { href: "#event", text: "TED" }
                  ].map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className={`hover:text-ted-red transition-colors ${link.bold ? "font-bold" : ""}`}
                      >
                        <HyperText>{link.text}</HyperText>
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.youtube.com/@tedxaiet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-ted-red text-black font-semibold px-6 py-3  hover:bg-red-600 transition-colors text-sm"
                >
                  <HyperText>Watch on YouTube</HyperText>
                </a>
              </div>
            </div>

          
            <div className="hidden md:grid md:grid-cols-3 w-full gap-8 lg:gap-12">
              <div className="text-left">
                <p className="font-bold mb-4 text-lg">Pages</p>
                <ul className="space-y-2 text-sm lg:text-base">
                  {[
                    { href: "/", text: "Home" },
                    { href: "#about", text: "About TED" },
                    { href: "#event", text: "TED Event Date" },
                    { href: "#event", text: "TED Event Schedule" },
                    { href: "#speakers", text: "TED speaker" },
                    { href: "#organizers", text: "TED Organisers" },
                    { href: "#community", text: "TED Community" }
                  ].map((link) => (
                    <li key={link.text}>
                      <a href={link.href} className="hover:text-ted-red transition-colors">
                        <HyperText>{link.text}</HyperText>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left">
                <p className="font-bold mb-4 text-lg">Community</p>
                <ul className="space-y-2 text-sm lg:text-base">
                  {[
                    { href: "https://www.ted.com", text: "TED", external: true },
                    { href: "#speakers", text: "TED Speakers", bold: true },
                    { href: "#organizers", text: "TEDx Organizers", bold: true }
                  ].map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={`hover:text-ted-red transition-colors ${link.bold ? "font-bold" : ""}`}
                      >
                        <HyperText>{link.text}</HyperText>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left">
                <div className="mb-6">
                  <p className="font-bold mb-4 text-lg">Events & Incentives</p>
                  <ul className="space-y-2 text-sm lg:text-base">
                    {[
                      { href: "#pre-event", text: "Pre-Ted Event", bold: true },
                      { href: "#athyudan", text: "Athyudan", bold: true },
                      { href: "#event", text: "TED" }
                    ].map((link) => (
                      <li key={link.text}>
                        <a
                          href={link.href}
                          className={`hover:text-ted-red transition-colors ${link.bold ? "font-bold" : ""}`}
                        >
                          <HyperText>{link.text}</HyperText>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="www.youtube.com/@TEDx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-ted-red text-white font-semibold px-6 py-3  hover:bg-ted-600 transition-colors text-sm lg:text-base"
                >
                  <HyperText>Watch on YouTube</HyperText>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <hr className="border-gray-700 mx-auto w-full" />
          <div className="text-center text-sm text-gray-400 mt-6">
            © Copyright by TEDxAIET. This independent TEDx event is Operated under
            the license of TED.
          </div>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";

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
                src={'/logo-white-tedxaiet.png'} 
                alt="logo" 
                width={200} 
                height={200} 
                className="w-40 lg:w-48"
              />
            </div>
            <p className="font-semibold text-center lg:text-left mb-6">
              <span className="text-ted-red-400">x{" "}=</span>{" "}
              <span className="font-light">Independently Organized TED Event</span>
            </p>
            <div className="flex gap-3 lg:gap-4">
              {[
                { href: "https://www.instagram.com/tedxaiet/", icon: "/logos/Instagram.svg", alt: "Instagram" },
                { href: "https://www.linkedin.com/company/tedxaiet", icon: "/logos/LinkedIn.svg", alt: "LinkedIn" },
                { href: "https://twitter.com/tedxaiet", icon: "/logos/X.svg", alt: "X" },
                // { href: "https://www.youtube.com/@tedxaiet", icon: "/logos/YouTube.svg", alt: "YouTube" }
              ].map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 p-2 bg-black border rounded-md border-black hover:border-red-400 transition-all duration-300"
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
                      <a href={link.href} className="hover:text-ted-red-400 transition-colors">
                        {link.text}
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
                        className={`hover:text-ted-red-400 transition-colors ${link.bold ? "font-bold" : ""}`}
                      >
                        {link.text}
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
                        className={`hover:text-ted-red-400 transition-colors ${link.bold ? "font-bold" : ""}`}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.youtube.com/@tedxaiet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-200 text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition-colors text-sm"
                >
                  Watch on YouTube
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
                      <a href={link.href} className="hover:text-ted-red-400 transition-colors">
                        {link.text}
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
                        className={`hover:text-ted-red-400 transition-colors ${link.bold ? "font-bold" : ""}`}
                      >
                        {link.text}
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
                          className={`hover:text-ted-red-400 transition-colors ${link.bold ? "font-bold" : ""}`}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://www.youtube.com/@tedxaiet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-200 text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition-colors text-sm lg:text-base"
                >
                  Watch on YouTube
                </a>
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
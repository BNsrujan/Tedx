import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 lg:px-12 py-8 lg:py-10 space-y-6">
      <div className="mx-auto flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">
        {/* Logo and Social */}
        <div className="flex flex-col items-center lg:items-start">
          <Image src={'/logo-white-tedxaiet.png'} alt="logo" className="" width={200} height={200} />
          <p className="font-semibold text-center lg:text-left">
            <span className="text-ted-red-400">x{" "}=</span> <span className="font-light">Independently Organized TED Event</span>
          </p>
          <div className="flex gap-2 lg:gap-4 mt-4">
            <a
              href="https://www.instagram.com/tedxaiet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 lg:p-4 bg-black border rounded-md border-black hover:border-red-400 duration-500 transition"
            >
              <Image
                src="/logos/Instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/tedxaiet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 lg:p-4 bg-black border rounded-md border-black hover:border-red-400 duration-500 transition"
            >
              <Image
                src="/logos/LinkedIn.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </a>

            <a
              href="https://twitter.com/tedxaiet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 lg:p-4 bg-black border rounded-md border-black hover:border-red-400 duration-500 transition"
            >
              <Image 
                src="/logos/X.svg" 
                alt="X" 
                width={24} 
                height={24}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </a>

            <a
              href="https://www.youtube.com/@tedxaiet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 lg:p-4 bg-black border rounded-md border-black hover:border-red-400 duration-500 transition"
            >
              <Image
                src="/logos/YouTube.svg"
                alt="YouTube"
                width={24}
                height={24}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full justify-around gap-8 sm:gap-4">
          {/* Pages */}
          <div className="text-center lg:text-left">
            <p className="font-bold mb-2">pages</p>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-ted-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-ted-red-400 transition-colors">About TED</a></li>
              <li><a href="#event" className="hover:text-ted-red-400 transition-colors">TED Event Date</a></li>
              <li><a href="#event" className="hover:text-ted-red-400 transition-colors">TED Event Schedule</a></li>
              <li><a href="#speakers" className="hover:text-ted-red-400 transition-colors">TED speaker</a></li>
              <li><a href="#organizers" className="hover:text-ted-red-400 transition-colors">TED Organisers</a></li>
              <li><a href="#community" className="hover:text-ted-red-400 transition-colors">TED Community</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="text-center lg:text-left">
            <p className="font-bold mb-2">Community</p>
            <ul className="space-y-1 text-sm">
              <li><a href="https://www.ted.com" target="_blank" rel="noopener noreferrer" className="hover:text-ted-red-400 transition-colors">TED</a></li>
              <li><a href="#speakers" className="hover:text-ted-red-400 transition-colors"><span className="font-bold">TED Speakers</span></a></li>
              <li><a href="#organizers" className="hover:text-ted-red-400 transition-colors"><span className="font-bold">TEDx Organizers</span></a></li>
            </ul>
          </div>

          {/* Events & Button */}
          <div className="flex flex-col items-center lg:items-start">
            <div>
              <p className="font-bold mb-2">Events & Incentives</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#pre-event" className="hover:text-ted-red-400 transition-colors"><span className="font-bold">Pre-Ted Event</span></a></li>
                <li><a href="#athyudan" className="hover:text-ted-red-400 transition-colors"><span className="font-bold">Athyudan</span></a></li>
                <li><a href="#event" className="hover:text-ted-red-400 transition-colors"><span>TED</span></a></li>
              </ul>
            </div>
            <a 
              href="https://www.youtube.com/@tedxaiet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 bg-gray-200 text-black font-semibold px-4 py-2 rounded-md w-full sm:w-auto hover:bg-gray-300 transition-colors"
            >
              Watch this in you tube
            </a>
          </div>
        </div>
      </div>
     
      {/* Bottom copyright */}
      <hr className="opacity-40" />
      <div className="text-center text-sm text-gray-300 px-4">
        © Copyright by TEDxAIET. This independent TEDx event is Operated under
        the license of TED.
      </div>
    </footer>
  );
}

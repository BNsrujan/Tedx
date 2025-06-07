import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 lg:px-12 py-8 lg:py-10 space-y-6">
      <div className="mx-auto flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">
        {/* Logo and Social */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-4xl lg:text-5xl font-bold">TedxAIET</h2>
          <p className="font-semibold text-center lg:text-left">
            <span className="text-ted-red-400">x=</span>independent insituste
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
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">Home</li>
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">About TED</li>
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">TED Event Date</li>
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">TED Event Schedule</li>
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">TED speaker</li>
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">TED Organisers</li>
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">TED Community</li>
            </ul>
          </div>

          {/* Community */}
          <div className="text-center lg:text-left">
            <p className="font-bold mb-2">Community</p>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">TED</li>
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">
                <span className="font-bold">TED Speakers</span>
              </li>
              <li className="hover:text-ted-red-400 cursor-pointer transition-colors">
                <span className="font-bold">TEDx Organizers</span>
              </li>
            </ul>
          </div>

          {/* Events & Button */}
          <div className="flex flex-col items-center lg:items-start">
            <div>
              <p className="font-bold mb-2">Events & Incentives</p>
              <ul className="space-y-1 text-sm">
                <li className="hover:text-ted-red-400 cursor-pointer transition-colors">
                  <span className="font-bold">Pre-Ted Event</span>
                </li>
                <li className="hover:text-ted-red-400 cursor-pointer transition-colors">
                  <span className="font-bold">Athyudan</span>
                </li>
                <li className="hover:text-ted-red-400 cursor-pointer transition-colors">
                  <span>TED</span>
                </li>
              </ul>
            </div>
            <button className="mt-6 bg-gray-200 text-black font-semibold px-4 py-2 rounded-md w-full sm:w-auto hover:bg-gray-300 transition-colors">
              Watch this in you tube
            </button>
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

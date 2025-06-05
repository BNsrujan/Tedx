import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-white lg:px-12 py-10 space-y-6 ">
     
        <div className=" mx-auto flex justify-between">
        {/* Logo and Social */}
        <div>
          <h2 className="text-5xl font-bold ">TedxAIET</h2>
          <p className="font-semibold  space-x-0.5"><span className=" text-ted-red-400 pl-1">x=</span>independent insituste</p>
          <div className="flex gap-3 ">
            <div className="flex gap-4 mt-4 ">
              <a
                href="https://www.instagram.com/tedxaiet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80  p-4 bg-black border rounded-md border-black hover:border-red-400 duration-500 transition"
              >
                <Image
                  src="/logos/Instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>

              <a
                href="https://www.linkedin.com/company/tedxaiet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80  p-4 bg-black border rounded-md border-black hover:border-red-400 duration-500 transition"
              >
                <Image
                  src="/logos/LinkedIn.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </a>

              <a
                href="https://twitter.com/tedxaiet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80  p-4 bg-black border rounded-md border-black hover:border-red-400 duration-500 transition"
              >
                <Image src="/logos/X.svg" alt="X" width={32} height={32} />
              </a>

              <a
                href="https://www.youtube.com/@tedxaiet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80  p-4 bg-black border rounded-md border-black hover:border-red-400 duration-500 transition"
              >
                <Image
                  src="/logos/YouTube.svg"
                  alt="YouTube"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-around">
        {/* Pages */}
        <div>
          <p className="font-bold mb-2">pages</p>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About TED</li>
            <li>TED Event Date</li>
            <li>TED Event Schedule</li>
            <li>TED speaker</li>
            <li>TED Organisers</li>
            <li>TED Community</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <p className="font-bold mb-2">Community</p>
          <ul className="space-y-1 text-sm">
            <li>TED</li>
            <li>
              <span className="font-bold  ">TED Speakers</span>
            </li>
            <li>
              <span className="font-bold  ">TEDx Organizers</span>
            </li>
          </ul>
        </div>

        {/* Events & Button */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold mb-2">Events & Incentives</p>
            <ul className="space-y-1 text-sm">
              <li>
                <span className="font-bold ">Pre-Ted Event</span>
              </li>
              <li>
                <span className="font-bold  ">Athyudan</span>
              </li>
              <li>
                <span className=" ">TED</span>
              </li>
            </ul>
          </div>
          <button className="mt-6 bg-gray-200 text-black  min-w-64 font-semibold px-4 py-2 rounded-md w-fit">
            Watch this in you tube
          </button>
        </div>
        </div>
      </div>
     
      {/* Bottom copyright */}
      <hr className="py-3  opacity-40 px-10" />
      <div className=" text-center text-sm text-gray-300 ">
        © Copyright by TEDxAIET. This independent TEDx event is Operated under
        the license of TED.
      </div>
    </footer>
  );
}

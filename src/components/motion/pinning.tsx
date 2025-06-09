"use client";

import React, { useEffect } from "react";

export default function Pinning() {
  useEffect(() => {
    import("https://cdn.jsdelivr.net/npm/motion@12.16.0/+esm").then(
      ({ animate, scroll }) => {
        const items = document.querySelectorAll(".img-container");

        // Horizontal gallery animation during vertical scroll
        scroll(
          animate(".img-group", {
            transform: ["none", `translateX(-${items.length - 1}00vw)`],
          }),
          { target: document.querySelector(".img-group-container") }
        );

        // Progress bar animation
        scroll(animate(".progress", { scaleX: [0, 1] }), {
          target: document.querySelector(".img-group-container"),
        });
      }
    );
  }, []);

  return (
    <>
      <article id="gallery" className="w-[98vw]">
        <header className="h-[70vh] flex justify-center items-center">
          <h2 className="text-[56px] font-extrabold tracking-tight leading-[1.2] text-center m-0">
            Lines of London
          </h2>
        </header>

        <section className="img-group-container h-[500vh] relative">
          <div className="sticky top-0 overflow-hidden h-screen">
            <ul className="img-group flex">
              {[1, 2, 3, 4, 5].map((num) => (
                <li
                  key={num}
                  className="img-container flex w-screen h-screen flex-shrink-0 flex-col items-center justify-center"
                >
                  <img
                    src={`/photos/cityscape/${num}.jpg`}
                    alt={`#00${num}`}
                    className="w-[300px] h-[400px] object-cover"
                  />
                  <h3 className="text-[50px] font-extrabold tracking-tight leading-[1.2] relative -bottom-[30px] inline-block m-0 font-mono">
                    #{String(num).padStart(3, "0")}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="h-[70vh] flex justify-center items-center">
          <p className="text-center">
            Photos by{" "}
            <a
              target="_blank"
              href="https://twitter.com/mattgperry"
              rel="noopener noreferrer"
              className="underline text-purple-700"
            >
              Matt Perry
            </a>
          </p>
        </footer>
      </article>

      <div className="progress fixed left-0 right-0 h-[5px] bg-[#9911ff] bottom-[50px] origin-left scale-x-0" />
    </>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  onHoverChange
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  onHoverChange?: boolean;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(" "),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (isInView && !hasAnimated) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
      setHasAnimated(true);
    }
  }, [isInView, animate, hasAnimated]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="w-full max-w-full break-words whitespace-normal">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline  text-wrap w-full max-w-full break-words whitespace-normal ">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black  opacity-0 hidden `,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
              {idx % 2 == 1 && <hr className="flex sm:hidden bg-black border-black text-black fill-black" style={{ borderColor: 'black', color: 'black', backgroundColor: 'black', height: '2px' }} />}
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-6xl font-bold text-center",
        className
      )}
    >
      {renderWords()}

    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div className="">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-wrap  text-black `, word.className)}
                >
                  
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="sm:text-xs md:text-xl lg:text:3xl xl:text-6xl font-bold "
          style={{
            whiteSpace: "nowrap ",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "hidden  md:block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 ",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

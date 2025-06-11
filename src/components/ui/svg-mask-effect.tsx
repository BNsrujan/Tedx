"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MousePosition {
  x: number | null;
  y: number | null;
}

export const MaskContainer = ({
  children,
  revealText,
  size = 18,
  revealSize = 800,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const updateMousePosition = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;
    
    currentRef.addEventListener("mousemove", updateMousePosition);
    return () => {
      currentRef.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen", className)}
      animate={{
        backgroundColor: "#000",
      }}
      transition={{
        backgroundColor: { duration: 0.3 },
      }}
    >
      {isHovered && <div
        className={`absolute inset-0 z-0 h-full w-full  transition-all duration-700  ${
          isHovered ? "bg-black opacity-50 blur-md  " : "blur-0"
        }`}
      />}

      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-white text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:50px] dark:bg-black"
        animate={{
          maskPosition: `${(mousePosition.x ?? 0) - maskSize / 2}px ${
            (mousePosition.y ?? 0) - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div className={`absolute inset-0 z-0 h-full w-full bg-white opacity-100 dark:bg-white`} />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={`relative z-20 mx-auto  max-w-4xl text-center text-4xl font-bold`}
        >
          {children}
        </div>
      </motion.div>

      <div className="flex h-full w-full items-center justify-center">
        {revealText}
      </div>
    </motion.div>
  );
};

"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Helix } from "ldrs/react";
import "ldrs/react/Helix.css";
interface LayoutWrapperProps {
  children: React.ReactNode;
  loadingTime?: number;
}

export default function LayoutWrapper({
  children,
  loadingTime = 1000,
}: LayoutWrapperProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), loadingTime);

    return () => {
      clearTimeout(timer);
    };
  }, [loadingTime]);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <Helix size="45" speed="2.5" color="red" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {!isMobile && <SmoothCursor /> }
      {children}
      <Footer />
    </>
  );
}

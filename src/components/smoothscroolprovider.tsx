"use client"
import { useLenis } from "@/hooks/useLenis"

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useLenis()
  return <>{children}</>
}

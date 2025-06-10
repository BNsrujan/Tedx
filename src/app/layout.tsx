import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import LayoutWrapper from "@/components/LayoutWrapper";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TedxAiet",
  description: "international tedx conference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <html>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="TedxAiet" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </html>
      <body className={`${inter.variable} font-light antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
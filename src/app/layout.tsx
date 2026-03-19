import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Chetan Chauhan | Luxury Architecture & Interior Design in Ahmedabad",
  description: "Award-winning interior designer & architect with 18+ years of experience. Specializing in luxury residential and commercial projects across Ahmedabad, Gandhinagar, and Kutch.",
  keywords: [
    "Interior Designer Ahmedabad", 
    "Luxury Architect Kutch", 
    "Residential Interior Design Gandhinagar", 
    "Commercial Architect Gujarat", 
    "Chetan Chauhan Interiors", 
    "Premium Home Design"
  ],
  openGraph: {
    title: "Chetan Chauhan | Luxury Architecture & Interior Design",
    description: "Exquisite living spaces designed by Chetan Chauhan. Modern editorial aesthetics with a focus on luxury residential and commercial interiors.",
    url: "https://kias.in",
    siteName: "Chetan Chauhan Interiors",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="selection:bg-yellow-600 selection:text-white">
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

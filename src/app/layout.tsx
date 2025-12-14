import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Caveat, Playfair_Display } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Taposi's Design Portfolio",
  description:
    "Professional graphic designer portfolio showcasing creative work and design expertise",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-handwritten",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${caveat.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}

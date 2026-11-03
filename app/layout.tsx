import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import NavBar from "./components/NavBar";
import "./globals.css";

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "800"],
});

export const metadata: Metadata = {
  title: "NextBites",
  description: "A small, tasty recipe collection built with Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

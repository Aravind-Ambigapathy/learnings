import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const chillax = localFont({
  src: [
    {
      path: "../public/fonts/Chillax-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Chillax-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Chillax-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-chillax",
});

export const metadata: Metadata = {
  title: "Rivexa",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${chillax.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
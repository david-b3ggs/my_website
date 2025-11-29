import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700", "900"],
});

const brigten = localFont({
  src: "../public/fonts/BrigtenRegular-pgvEv.ttf",
  variable: "--font-brigten",
});

export const metadata: Metadata = {
  title: "Engineering Manager Portfolio",
  description: "Portfolio website showcasing leadership and technical expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${brigten.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}

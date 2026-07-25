import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CookieBanner from "@/components/CookieBanner";
import StickyCtaBanner from "@/components/StickyCtaBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a192f", // JMW Navy
};

export const metadata: Metadata = {
  title: "JMW Intelligent Solutions | Professional Vehicle Tracking",
  description: "Approved by major insurance brands. Fast, seamless installation of premium tracking and dashcam systems for personal and business vehicles in South Africa.",
  applicationName: "JMW Intel",
  appleWebApp: {
    capable: true,
    title: "JMW Intel",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: false,
    email: false,
    address: false,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-brand-navy`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />
        <StickyCtaBanner />
      </body>
    </html>
  );
}

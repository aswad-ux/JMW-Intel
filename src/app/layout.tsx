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
  keywords: ["vehicle tracking", "dashcams", "stolen vehicle recovery", "Matrix tracking", "Beame", "fleet management", "South Africa", "car security"],
  authors: [{ name: "JMW Intelligent Solutions" }],
  applicationName: "JMW Intel",
  metadataBase: new URL('https://jmwintel.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "JMW Intelligent Solutions | Professional Vehicle Tracking",
    description: "Fast, seamless installation of premium tracking and dashcam systems for personal and business vehicles in South Africa.",
    url: "https://jmwintel.co.za",
    siteName: "JMW Intelligent Solutions",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JMW Intelligent Solutions | Professional Vehicle Tracking",
    description: "Premium tracking and dashcam systems in South Africa.",
  },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JMW Intelligent Solutions",
  "image": "https://jmwintel.co.za/logo.svg",
  "description": "Professional installation of premium vehicle tracking and dashcam systems for personal and business vehicles in South Africa.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Johannesburg",
    "addressCountry": "ZA"
  },
  "telephone": "010 500 9626",
  "email": "admin@jmwintel.com",
  "url": "https://jmwintel.co.za",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "areaServed": "South Africa",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

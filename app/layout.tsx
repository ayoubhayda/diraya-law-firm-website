import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display, Cairo, Aref_Ruqaa, Amiri } from "next/font/google";
import { ClientLayout } from "@/components/client-layout";
import { LocaleProvider } from "@/hooks/use-locale-context";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref-ruqaa",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diraya | مكتب محاماة بالرباط",
  description:
    "Diraya (دراية) - مكتب الأستاذ محمد صادق للمحاماة بالرباط. خدمات قانونية متخصصة في القانون المغربي.",

  metadataBase: new URL("https://diraya-law.vercel.app"),

  keywords: [
    "Law Firm Website",
    "Legal Website Design",
    "Next.js Law Firm",
    "Consultation Booking Website",
    "Corporate Website",
    "Multilingual Website",
    "Tailwind CSS",
    "TypeScript",
  ],

  openGraph: {
    title: "Diraya | مكتب محاماة",
    description:
      "A professional law firm website with consultation booking, blog system, dark mode, and multilingual support.",
    url: "https://diraya-law.vercel.app",
    siteName: "Diraya",
    images: [
      {
        url: "https://diraya-law.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Diraya - مكتب محمد صادق للمحاماة بالرباط",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diraya | مكتب محاماة",
    description:
      "Professional law firm website built with Next.js, featuring consultation booking and multilingual support.",
    images: ["https://diraya-law.vercel.app/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`font-sans antialiased ${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cairo.variable} ${arefRuqaa.variable} ${amiri.variable}`}
      >
        <LocaleProvider>
          <ClientLayout>{children}</ClientLayout>
        </LocaleProvider>
      </body>
    </html>
  );
}

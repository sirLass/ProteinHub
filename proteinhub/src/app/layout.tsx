import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Protein Hub | Premium Distributor Training & Membership Platform",
  description: "Join Protein Hub and launch your own protein distribution business. Our all-in-one platform provides founder-led mentorship, business training, and network management tools.",
  keywords: ["protein hub", "business training", "distributor platform", "entrepreneurship", "protein distribution", "founder mentorship"],
  authors: [{ name: "Protein Hub Team" }],
  openGraph: {
    title: "Protein Hub | Start Your Own Business",
    description: "Launch your business with a proven roadmap and premium products.",
    url: "https://proteinhub0.netlify.app",
    siteName: "Protein Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protein Hub | Distributor Platform",
    description: "The all-in-one platform for Protein Hub distributors.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

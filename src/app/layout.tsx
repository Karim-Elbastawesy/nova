import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novacafe.com"),
  title: {
    default: "NOVA Specialty Café",
    template: "%s | NOVA Specialty Café",
  },
  description: "Premium coffee and modern dining experience in Mansoura, Egypt.",
  openGraph: {
    title: "NOVA Specialty Café",
    description: "Premium coffee and modern dining experience in Mansoura, Egypt.",
    url: "https://novacafe.com",
    siteName: "NOVA Specialty Café",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-slate-50">
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
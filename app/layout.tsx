import type { Metadata } from "next";
import { Anton, Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Portal — West Seattle Concrete",
    template: "%s | Portal Concrete",
  },
  description:
    "West Seattle's residential concrete studio. Driveways, patios, walkways, stairs, retaining walls, and foundation work. 100+ five-star reviews. Owner on every job.",
  keywords: [
    "concrete contractor Seattle",
    "West Seattle concrete",
    "driveway concrete Seattle",
    "patio concrete Seattle",
    "concrete stairs Seattle",
    "retaining wall Seattle",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildwithportal.com",
    siteName: "Portal Concrete",
    title: "Portal — West Seattle Concrete",
    description:
      "Residential concrete done right. Driveways, patios, stairs, retaining walls. 100+ five-star reviews.",
    images: [{ url: "/images/hero-stairs.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal — West Seattle Concrete",
    description: "Residential concrete done right. 100+ five-star reviews.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${spaceGrotesk.variable} ${archivo.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

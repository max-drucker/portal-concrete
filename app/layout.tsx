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
  metadataBase: new URL("https://buildwithportal.life"),
  title: {
    default: "Portal — West Seattle Concrete",
    template: "%s | Portal Concrete",
  },
  description:
    "West Seattle's residential concrete studio. 35+ years, 150+ five-star reviews. Driveways, patios, walkways, stairs, retaining walls, and foundation work. Owner on every job.",
  keywords: [
    "concrete contractor Seattle",
    "West Seattle concrete",
    "driveway concrete Seattle",
    "patio concrete Seattle",
    "concrete stairs Seattle",
    "retaining wall Seattle",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildwithportal.life",
    siteName: "Portal Concrete",
    title: "Portal — Seattle Concrete",
    description:
      "West Seattle residential concrete. 35+ years. 150+ five-star reviews. Owner on every job. We pour year-round.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630, alt: "Portal Seattle Concrete" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal — Seattle Concrete",
    description: "West Seattle residential concrete. 35+ years. 150+ five-star reviews.",
    images: ["/images/brand/og-image.jpg"],
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

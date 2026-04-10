import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const lora = Lora({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Modern Health & Wellness | Chiropractor in Hamden, CT",
    template: "%s | Modern Health & Wellness",
  },
  description:
    "Hamden's most trusted chiropractic team since 1990. Chiropractic care, acupuncture, personal training, massage therapy, and nutrition counseling.",
  openGraph: {
    title: "Modern Health & Wellness | Chiropractor in Hamden, CT",
    description: "3 doctors. 7 specialized services. 35+ years helping Hamden families move, heal, and thrive.",
    url: "https://modernhealthwellness.com",
    siteName: "Modern Health & Wellness",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.variable} ${outfit.variable}`}>
      <body className="grain">
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}

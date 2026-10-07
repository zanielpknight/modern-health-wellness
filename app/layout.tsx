import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  axes: ["opsz", "SOFT"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

export const metadata: Metadata = {
  title: {
    default: "Modern Health & Wellness | Chiropractor in [City], [State]",
    template: "%s | Modern Health & Wellness",
  },
  description:
    "[City]'s most trusted chiropractic team since 1990. Chiropractic care, acupuncture, personal training, massage therapy, and nutrition counseling.",
  openGraph: {
    title: "Modern Health & Wellness | Chiropractor in [City], [State]",
    description: "3 doctors. 7 specialized services. 35+ years helping families in [City] move, heal, and thrive.",
    url: "https://example.com",
    siteName: "Modern Health & Wellness",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
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

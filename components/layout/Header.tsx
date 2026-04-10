"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinic } from "@/lib/data/clinic";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const textColor = "text-navy";
  const linkColor = "text-clay hover:text-navy";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-stone/95 backdrop-blur-sm shadow-[0_1px_0_rgba(122,110,100,0.1)]"
            : "bg-stone"
        }`}
      >
        <div
          className="flex items-center py-4"
          style={{
            maxWidth: "var(--grid-max)",
            marginInline: "auto",
            paddingInline: "var(--grid-margin)",
          }}
        >
          <Link
            href="/"
            className={`font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-wide lg:text-2xl transition-colors duration-200 ${textColor}`}
          >
            Modern Health
          </Link>

          <div className="flex-1" />

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.15em] transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-navy border-b border-navy/30"
                    : linkColor
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={`tel:${clinic.phoneRaw}`}
            className="ml-10 hidden border border-gold bg-gold px-6 py-2.5 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark md:inline-block cursor-pointer whitespace-nowrap"
          >
            Book Now
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block h-[1px] w-5 transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45 bg-navy" : isHome && !scrolled ? "bg-white" : "bg-navy"}`} />
            <span className={`block h-[1px] w-5 transition-all duration-300 ${menuOpen ? "opacity-0 bg-navy" : isHome && !scrolled ? "bg-white" : "bg-navy"}`} />
            <span className={`block h-[1px] w-5 transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45 bg-navy" : isHome && !scrolled ? "bg-white" : "bg-navy"}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-stone transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-[family-name:var(--font-playfair)] text-3xl font-light transition-colors duration-200 ${
                pathname === link.href ? "text-gold" : "text-navy hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${clinic.phoneRaw}`}
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}

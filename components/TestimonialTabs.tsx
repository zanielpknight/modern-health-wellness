"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialTabs() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <div>
      {/* Active review */}
      <div className="min-h-[200px]">
        <div className="flex gap-0.5 mb-[var(--space-4)]">
          {[...Array(t.rating)].map((_, j) => (
            <svg key={j} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p
          className="font-[family-name:var(--font-heading)] italic text-navy leading-snug transition-opacity duration-300"
          style={{ fontSize: "clamp(1.25rem, 2.5vw, var(--text-3xl))" }}
        >
          &ldquo;{t.text}&rdquo;
        </p>
        <p
          className="mt-[var(--space-4)] font-[family-name:var(--font-body)] text-charcoal-light"
          style={{ fontSize: "var(--text-sm)" }}
        >
          {t.name}
          {t.source && (
            <span className="text-clay"> &middot; {t.source.charAt(0).toUpperCase() + t.source.slice(1)}</span>
          )}
        </p>
      </div>

      {/* Tabs — patient names */}
      <div className="mt-[var(--space-8)] flex flex-wrap gap-[var(--space-1)] sm:gap-[var(--space-2)]">
        {testimonials.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActive(i)}
            className={`px-2 sm:px-4 py-2 font-[family-name:var(--font-body)] text-[length:var(--text-xs)] text-sm transition-all duration-200 cursor-pointer ${
              i === active
                ? "bg-navy text-white"
                : "bg-transparent text-clay hover:text-navy border border-clay/20 hover:border-navy/30"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";
import PageHeader from "@/components/PageHeader";
import { testimonials } from "@/lib/data/testimonials";
import { clinic } from "@/lib/data/clinic";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description: "Read what our patients say about Modern Health & Wellness.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        label="Testimonials"
        title="What our patients say."
        subtitle="Real stories from real patients. Nothing speaks louder than the experiences of the people we've helped."
      />

      <section className="section bg-stone">
        <ScrollFade stagger>
          <div className="grid-layout">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`fade-in ${i % 2 === 0 ? "col-full md:col-left-7" : "col-full md:col-right-7"} ${
                  i > 0 ? "mt-[var(--space-8)] md:mt-[var(--space-12)]" : ""
                }`}
              >
                <blockquote className={`${i > 0 ? "pt-[var(--space-8)] border-t border-clay/10" : ""}`}>
                  <div className="flex gap-0.5 mb-[var(--space-3)]">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="h-3.5 w-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    className="font-[family-name:var(--font-heading)] font-light italic text-navy leading-snug"
                    style={{ fontSize: "clamp(1.25rem, 2vw, var(--text-3xl))" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <cite
                    className="mt-[var(--space-4)] block font-[family-name:var(--font-body)] text-sm text-clay not-italic"
                  >
                    {t.name}
                    {t.source && ` · ${t.source.charAt(0).toUpperCase() + t.source.slice(1)} Review`}
                  </cite>
                </blockquote>
              </div>
            ))}
          </div>
        </ScrollFade>
      </section>

      {/* CTA */}
      <section className="bg-navy py-[var(--space-20)]">
        <div className="grid-layout">
          <div className="col-full flex flex-col items-center text-center">
            <h2 className="font-[family-name:var(--font-heading)] font-semibold text-white" style={{ fontSize: "var(--text-4xl)" }}>
              Your story starts here.
            </h2>
            <a href={`tel:${clinic.phoneRaw}`} className="mt-[var(--space-8)] rounded-full bg-gold px-8 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer">
              Call to book
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

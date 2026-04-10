import type { Metadata } from "next";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";
import PageHeader from "@/components/PageHeader";
import { conditions } from "@/lib/data/conditions";
import { clinic } from "@/lib/data/clinic";

export const metadata: Metadata = {
  title: "Conditions We Treat",
  description:
    "Chiropractic care for auto accidents, low back pain, neck pain, headaches, shoulder injuries, sports injuries, and post-PT recovery in Hamden, CT.",
};

export default function ConditionsPage() {
  return (
    <>
      <PageHeader
        label="Conditions"
        title="Conditions we treat."
        subtitle="We provide chiropractic care for a wide range of conditions — supporting everything from acute injuries and pain relief to preventative, mobility, and performance-focused care."
      />

      <section className="section bg-stone">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in">
              <p
                className="font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed"
                style={{ fontSize: "var(--text-base)" }}
              >
                Our approach isn&apos;t limited to treating symptoms — we help patients
                restore function, move better, and stay healthy long-term through
                personalized, evidence-informed care. Below is a list of common
                conditions we treat.
              </p>
            </div>
          </div>
        </ScrollFade>
      </section>

      <section className="section bg-warm-white">
        <ScrollFade stagger>
          <div className="grid-layout">
            {conditions.map((condition, i) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="col-full fade-in group"
              >
                <div
                  className={`py-[var(--space-6)] sm:py-[var(--space-8)] ${
                    i < conditions.length - 1 ? "border-b border-clay/10" : ""
                  }`}
                >
                  <h2
                    className="font-[family-name:var(--font-playfair)] font-semibold text-navy group-hover:text-gold transition-colors duration-200"
                    style={{ fontSize: "var(--text-3xl)" }}
                  >
                    {condition.name}
                  </h2>
                  <p
                    className="mt-[var(--space-3)] font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed max-w-2xl"
                    style={{ fontSize: "var(--text-base)" }}
                  >
                    {condition.shortDescription}
                  </p>
                  <span className="mt-[var(--space-4)] inline-block font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-200">
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollFade>
      </section>

      {/* CTA */}
      <section className="bg-navy py-[var(--space-20)]">
        <div className="grid-layout">
          <div className="col-full flex flex-col items-center text-center">
            <h2
              className="font-[family-name:var(--font-playfair)] font-semibold text-white"
              style={{ fontSize: "var(--text-4xl)" }}
            >
              Not sure what&apos;s causing your pain?
            </h2>
            <p
              className="mt-[var(--space-3)] font-[family-name:var(--font-dm-sans)] text-white/50"
              style={{ fontSize: "var(--text-base)" }}
            >
              Schedule an evaluation and let us identify the source.
            </p>
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="mt-[var(--space-8)] bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
            >
              {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

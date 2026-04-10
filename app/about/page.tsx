import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import PageHeader from "@/components/PageHeader";
import ImageLabel from "@/components/ImageLabel";
import { clinic } from "@/lib/data/clinic";

export const metadata: Metadata = {
  title: "About Us",
  description: "Modern Health & Wellness has been Hamden's trusted chiropractic team since 1990.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="More than a clinic."
        subtitle="For over 35 years, we've been helping Hamden families move better, heal faster, and live healthier."
      />

      {/* Story */}
      <section className="section bg-stone">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in">
              <h2
                className="font-[family-name:var(--font-playfair)] font-light text-navy"
                style={{ fontSize: "var(--text-4xl)" }}
              >
                Our Story
              </h2>
              <div className="mt-[var(--space-6)] space-y-[var(--space-4)] font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
                <p>
                  In 1990, Dr. Patrick Hackett opened Modern Health & Wellness
                  with a simple belief: chiropractic care should be accessible,
                  evidence-based, and genuinely focused on helping people get
                  better — not just managing symptoms.
                </p>
                <p>
                  Over the decades, that vision expanded. Dr. Jennifer Rakus
                  brought acupuncture and nutritional counseling into the practice.
                  Dr. Spencer Hackett — the next generation — added strength and
                  conditioning expertise, bridging rehabilitation and performance.
                </p>
                <p>
                  Today we offer seven specialized services under one roof. We&apos;re
                  proud to be the team chiropractors for Quinnipiac University
                  Men&apos;s Ice Hockey, including the 2023 NCAA National Championship
                  squad — but we&apos;re equally proud of every patient who walks
                  through our doors.
                </p>
              </div>
            </div>
            <div className="col-full md:col-right-5 fade-in mt-8 md:mt-0">
              <div className="relative aspect-[1/1] max-w-full sm:max-w-[320px] overflow-hidden">
                <ImageLabel text="Replace: Clinic team photo or exterior" />
                <Image
                  src="/images/about-team.jpg"
                  alt="Healthcare team — replace with actual clinic team photo"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* Values — text only, no cards */}
      <section className="section bg-warm-white">
        <ScrollFade stagger>
          <div className="grid-layout">
            <div className="col-full fade-in">
              <p
                className="mb-[var(--space-4)] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] text-clay"
                style={{ fontSize: "var(--text-xs)" }}
              >
                What We Believe
              </p>
            </div>
            <div className="col-full grid gap-px sm:grid-cols-3 mt-[var(--space-6)]">
              {[
                { name: "Patient-First Care", desc: "Every treatment plan starts with listening. We take the time to understand your goals before recommending a path forward." },
                { name: "Integrated Approach", desc: "Our doctors collaborate on your care. Chiropractic, acupuncture, massage, nutrition, and training work together — not in silos." },
                { name: "Excellence in Practice", desc: "From NCAA athletes to everyday families — the same level of expertise and attention for every patient who trusts us." },
              ].map((v) => (
                <div key={v.name} className="fade-in py-[var(--space-6)] pr-[var(--space-8)] border-b border-clay/10 sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <h3
                    className="font-[family-name:var(--font-playfair)] font-light italic text-navy"
                    style={{ fontSize: "var(--text-2xl)" }}
                  >
                    {v.name}
                  </h3>
                  <p className="mt-[var(--space-2)] font-[family-name:var(--font-dm-sans)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* Image break */}
      <section className="relative h-[50vh] overflow-hidden">
        <ImageLabel text="Replace: Training area or gym in use" />
        <Image
          src="/images/training.jpg"
          alt="Training session — replace with actual clinic photo"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* CTA */}
      <section className="bg-navy py-[var(--space-20)]">
        <div className="grid-layout">
          <div className="col-full flex flex-col items-center text-center">
            <h2 className="font-[family-name:var(--font-playfair)] font-light text-white" style={{ fontSize: "var(--text-4xl)" }}>
              Meet the team behind your care.
            </h2>
            <div className="mt-[var(--space-8)] flex flex-col items-center gap-[var(--space-4)] sm:flex-row">
              <Link
                href="/team"
                className="border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
              >
                Our Doctors
              </Link>
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="border border-white/30 px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 cursor-pointer"
              >
                Call to Book
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

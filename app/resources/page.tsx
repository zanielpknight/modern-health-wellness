import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ScrollFade from "@/components/ScrollFade";
import { clinic } from "@/lib/data/clinic";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Resources & Products",
  description: "Doctor-endorsed health products, online courses, and training programs from Modern Health & Wellness.",
};

const products = [
  {
    name: "Uncle Bob's Cervical Traction Device",
    description: "At-home cervical traction for neck pain relief.",
    category: "Equipment",
  },
  {
    name: "Low Back / Spine Ice Pack",
    description: "Targeted cold therapy for lower back pain and inflammation.",
    category: "Recovery",
  },
  {
    name: "Neck Ice Pack",
    description: "Contoured ice pack designed for the cervical spine.",
    category: "Recovery",
  },
  {
    name: "Shoulder Ice Pack",
    description: "Wrap-around cold therapy for shoulder injuries.",
    category: "Recovery",
  },
  {
    name: "Beginner Resistance Bands / Shoulder Rehab Kit",
    description: "Progressive resistance bands for home rehabilitation exercises.",
    category: "Equipment",
  },
  {
    name: "Fitness Gear Pro Resistance Tube",
    description: "Professional-grade resistance tube for strength training.",
    category: "Equipment",
  },
  {
    name: "Creatine Supplement",
    description: "Doctor-recommended creatine monohydrate for strength and recovery.",
    category: "Supplements",
  },
];

const programs = [
  {
    name: "Core Rehab #1: Re-Learning HOW to MOVE",
    description: "Online course by Dr. Carter. Learn foundational movement patterns for injury prevention and recovery.",
    price: "$29",
    provider: "Dr. James Carter",
  },
  {
    name: "Rvs.B Health RESET Program",
    description: "25-day fitness transformation by Dr. Bell. Includes daily workouts, grocery lists, exercise program, and food guide.",
    price: "$9.99",
    provider: "Dr. Marcus Bell",
  },
  {
    name: "Free Weight-Loss Grocery List",
    description: "A free downloadable grocery guide to kickstart healthier eating habits.",
    price: "Free",
    provider: "Dr. Marcus Bell",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        label="Resources"
        title="Products & programs."
        subtitle="Doctor-endorsed tools, supplements, and online programs to support your care between visits."
      />

      {/* Online Programs */}
      <section className="section bg-stone">
        <ScrollFade stagger>
          <div className="grid-layout">
            <div className="col-full fade-in">
              <Eyebrow>Online programs</Eyebrow>
              <h2 className="mt-[var(--space-3)] font-[family-name:var(--font-heading)] font-semibold text-navy" style={{ fontSize: "var(--text-3xl)" }}>
                Learn & train from anywhere
              </h2>
            </div>

            {programs.map((p) => (
              <Link
                key={p.name}
                href="/contact"
                className="col-full fade-in group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-[var(--space-6)] border-b border-clay/10">
                  <div className="flex-1">
                    <h3
                      className="font-[family-name:var(--font-heading)] text-navy group-hover:text-gold transition-colors duration-200"
                      style={{ fontSize: "var(--text-xl)" }}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-[var(--space-1)] font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                      {p.description}
                    </p>
                    <p className="mt-[var(--space-1)] font-[family-name:var(--font-body)] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                      By {p.provider}
                    </p>
                  </div>
                  <span className="mt-2 sm:mt-0 font-[family-name:var(--font-body)] font-medium text-gold" style={{ fontSize: "var(--text-lg)" }}>
                    {p.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollFade>
      </section>

      {/* Products */}
      <section className="section bg-warm-white">
        <ScrollFade stagger>
          <div className="grid-layout">
            <div className="col-full fade-in">
              <Eyebrow>Endorsed products</Eyebrow>
              <h2 className="mt-[var(--space-3)] font-[family-name:var(--font-heading)] font-semibold text-navy" style={{ fontSize: "var(--text-3xl)" }}>
                Recommended by our doctors
              </h2>
            </div>

            {products.map((p) => (
              <div key={p.name} className="col-full fade-in">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-[var(--space-4)] border-b border-clay/10">
                  <div>
                    <h3
                      className="font-[family-name:var(--font-body)] font-medium text-navy"
                      style={{ fontSize: "var(--text-base)" }}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-[var(--space-1)] font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                      {p.description}
                    </p>
                  </div>
                  <span className="mt-1 sm:mt-0 font-[family-name:var(--font-body)] text-sm text-clay shrink-0">
                    {p.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollFade>
      </section>

      {/* Group classes CTA */}
      <section className="section bg-stone">
        <div className="grid-layout">
          <div className="col-full md:col-left-7">
            <Eyebrow>Group exercise</Eyebrow>
            <h2 className="mt-[var(--space-3)] font-[family-name:var(--font-heading)] font-semibold text-navy" style={{ fontSize: "var(--text-3xl)" }}>
              Doctor-guided small group classes
            </h2>
            <p className="mt-[var(--space-4)] font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
              Led by Dr. Bell, our group exercise classes are designed for adults of all fitness levels — with dedicated programming for ages 30–45, 50+, and 60+. Small class sizes ensure personalized attention and safe progression.
            </p>
            <Link
              href="/contact"
              className="mt-[var(--space-6)] inline-block rounded-full bg-gold px-7 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
            >
              Sign up for classes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-[var(--space-20)]">
        <div className="grid-layout">
          <div className="col-full flex flex-col items-center text-center">
            <h2 className="font-[family-name:var(--font-heading)] font-semibold text-white" style={{ fontSize: "var(--text-4xl)" }}>
              Questions about a product or program?
            </h2>
            <p className="mt-[var(--space-3)] font-[family-name:var(--font-body)] text-white/50" style={{ fontSize: "var(--text-sm)" }}>
              Ask any of our doctors during your next visit, or give us a call.
            </p>
            <a href={`tel:${clinic.phoneRaw}`} className="mt-[var(--space-8)] rounded-full bg-gold px-8 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer">
              {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

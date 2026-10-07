import Link from "next/link";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import TestimonialTabs from "@/components/TestimonialTabs";
import { clinic } from "@/lib/data/clinic";
import { services } from "@/lib/data/services";
import { getDoctors } from "@/lib/data/team";
import { conditions } from "@/lib/data/conditions";
import Eyebrow from "@/components/Eyebrow";
import StatsCards from "@/components/StatsCards";
import AuroraBackground from "@/components/motion/AuroraBackground";
import AnimatedGradient from "@/components/motion/AnimatedGradient";

const doctorImages = ["/images/doctor-1.jpg", "/images/doctor-2.jpg", "/images/doctor-3.jpg"];

export default function HomePage() {
  const doctors = getDoctors();

  return (
    <>
      {/* ─── Hero — split layout ─── */}
      <section className="pt-24 bg-stone">
        <div className="grid-layout items-center" style={{ minHeight: "calc(85vh - 64px)" }}>
          {/* Left — text, over a soft aurora */}
          <div className="relative col-full md:col-left-6 py-[var(--space-8)] md:py-[var(--space-24)]">
            <div className="absolute -inset-y-4 -inset-x-6 md:-inset-x-12 overflow-hidden rounded-[2rem]">
              <AuroraBackground />
            </div>
            <div className="relative">
            <Eyebrow>Austin, Texas &middot; Est. 1990</Eyebrow>

            <h1
              className="mt-[var(--space-4)] font-[family-name:var(--font-heading)] font-semibold text-navy"
              style={{ fontSize: "clamp(2.5rem, 5vw, var(--text-6xl))", lineHeight: 1.05 }}
            >
              Your health,
              <br />
              our expertise.
            </h1>

            <p
              className="mt-[var(--space-6)] max-w-md font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed"
              style={{ fontSize: "var(--text-lg)" }}
            >
              Three doctors. Seven services. One team dedicated to getting you
              back to the life you love.
            </p>

            <div className="mt-[var(--space-8)] flex flex-col sm:flex-row gap-[var(--space-3)]">
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="w-full sm:w-auto text-center rounded-full bg-gold px-7 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
              >
                Book now
              </a>
              <Link
                href="/services"
                className="w-full sm:w-auto text-center rounded-full border border-navy/20 px-7 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-navy transition-all duration-200 hover:border-navy/50 cursor-pointer"
              >
                Our services
              </Link>
            </div>

            {/* Partner team callout */}
            <div className="mt-[var(--space-10)] pt-[var(--space-6)] border-t border-clay/15">
              <Eyebrow>Official team chiropractors</Eyebrow>
              <p
                className="mt-[var(--space-2)] font-[family-name:var(--font-heading)] font-semibold text-navy"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                Austin Rivermen Hockey Club
              </p>
              <p
                className="mt-[var(--space-1)] font-[family-name:var(--font-body)] text-gold font-medium"
                style={{ fontSize: "var(--text-base)" }}
              >
                2023 Southwest Regional Champions
              </p>
            </div>
            </div>
          </div>

          {/* Right — rounded portrait image that overlaps into the stats strip */}
          <div className="col-full md:col-right-6 md:self-end flex items-end justify-center md:justify-end pt-[var(--space-6)] md:pt-[var(--space-12)]">
            <div className="relative z-10 w-full max-w-[480px] md:-mb-16">
              <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-24px_rgba(27,58,75,0.35)]">
                <Image
                  src="/images/hero.jpg"
                  alt="Treatment room at Modern Health & Wellness"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats — three motion cards (count-up on view, pointer tilt) ─── */}
      <section className="bg-navy pt-[var(--space-12)] md:pt-[var(--space-24)] pb-[var(--space-12)]">
        <div className="grid-layout">
          <div className="col-full">
            <StatsCards
              stats={[
                { value: 35, suffix: "+", label: "Years in practice" },
                { value: 3, label: "Expert doctors" },
                { value: 7, label: "Integrated services" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─── Philosophy & what we treat ─── */}
      <section className="section bg-stone">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in">
              <Eyebrow>Our approach</Eyebrow>
              <h2
                className="mt-[var(--space-3)] font-[family-name:var(--font-heading)] font-semibold text-navy"
                style={{ fontSize: "var(--text-4xl)" }}
              >
                Chiropractic care for injury recovery, pain relief & prevention
              </h2>
              <p
                className="mt-[var(--space-6)] font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed"
                style={{ fontSize: "var(--text-base)" }}
              >
                Get out of pain and back to normal activity with targeted and modern chiropractic care. We help patients in Austin with back pain, neck pain, sciatica, and injury recovery from sports, work, or auto accidents — without relying on medication or long-term dependency. Dr. Carter, Dr. Nair and Dr. Bell all strongly believe in promoting well-being through good nutrition and physical health, with an emphasis on a team approach to conservative holistic health care.
              </p>
              <blockquote className="mt-[var(--space-6)] pl-[var(--space-4)] border-l-2 border-gold/40">
                <p className="font-[family-name:var(--font-heading)] italic text-navy" style={{ fontSize: "var(--text-lg)" }}>
                  &ldquo;The body has the ability to heal itself, without the use of drugs. We give our patients the knowledge, combined with chiropractic adjustments, to live a healthy, pain-free life.&rdquo;
                </p>
              </blockquote>
              <p
                className="mt-[var(--space-6)] font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Modern Health and Wellness now offers in-house yoga, physical therapy, and therapeutic massage — comprehensive services tailored for men, women, and children. Initial consultations with exam and x-rays available through Capital Area Health Network — covered by most insurances.
              </p>
            </div>
            <div className="col-full md:col-right-5 fade-in mt-8 md:mt-0">
              <Eyebrow tone="clay" className="mb-[var(--space-4)]">We treat</Eyebrow>
              <ul className="space-y-[var(--space-2)]">
                {[
                  "Back pain — chronic and acute",
                  "Neck pain — chronic and acute",
                  "Spine and work posture conditions",
                  "Auto accident and workers compensation cases",
                  "Headaches",
                  "Wellness and preventative care",
                  "Personal training and weight loss",
                  "Athlete strength and conditioning",
                  "Golf, tennis, pickleball injuries",
                  "Lifting injuries",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-[family-name:var(--font-body)] text-charcoal-light border-b border-clay/8 pb-[var(--space-2)]"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* ─── Services — two columns ─── */}
      <section className="section bg-warm-white">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-5 fade-in">
              <Eyebrow>What we do</Eyebrow>
              <h2
                className="mt-[var(--space-3)] font-[family-name:var(--font-heading)] font-semibold text-navy"
                style={{ fontSize: "var(--text-4xl)" }}
              >
                Services
              </h2>
              <p
                className="mt-[var(--space-4)] font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed"
                style={{ fontSize: "var(--text-base)" }}
              >
                Seven specialized services designed to work together — so your
                care is coordinated, not fragmented.
              </p>
              <Link
                href="/services"
                className="mt-[var(--space-6)] inline-block font-[family-name:var(--font-body)] text-sm font-medium text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors duration-200 cursor-pointer"
              >
                View all services
              </Link>
            </div>
            <div className="col-full md:col-right-7 fade-in mt-8 md:mt-0">
              {services.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`group flex justify-between items-baseline py-[var(--space-4)] ${
                    i < services.length - 1 ? "border-b border-clay/10" : ""
                  }`}
                >
                  <span
                    className="font-[family-name:var(--font-heading)] text-navy group-hover:text-gold transition-colors duration-200"
                    style={{ fontSize: "var(--text-xl)" }}
                  >
                    {s.name}
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-clay opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ fontSize: "var(--text-xs)" }}>
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* ─── Image + overlay quote ─── */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/adjustment.jpg"
          alt="Treatment session at Modern Health & Wellness"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="grid-layout">
            <div className="col-full md:col-left-7">
              <p
                className="font-[family-name:var(--font-heading)] italic text-white leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3vw, var(--text-4xl))" }}
              >
                &ldquo;They don&apos;t just crack your back and send you on your way.
                They actually figure out what&apos;s wrong and create a real plan
                to fix it.&rdquo;
              </p>
              <p
                className="mt-[var(--space-4)] font-[family-name:var(--font-body)] text-white/60 text-sm"
              >
                Lisa P. &middot; Yelp Review
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Doctors — staggered grid ─── */}
      <section className="section bg-stone md:pb-[calc(var(--section-py-lg)+3rem)]">
        <ScrollFade stagger>
          <div className="grid-layout">
            <div className="col-full fade-in">
              <Eyebrow>The team</Eyebrow>
              <h2
                className="mt-[var(--space-3)] font-[family-name:var(--font-heading)] font-semibold text-navy"
                style={{ fontSize: "var(--text-4xl)" }}
              >
                Your doctors
              </h2>
            </div>

            <div className="col-full mt-[var(--space-10)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[var(--space-8)] md:gap-[var(--space-6)]">
              {doctors.map((doc, i) => (
                <Link
                  key={doc.slug}
                  href={`/team/${doc.slug}`}
                  className={`group fade-in ${i === 1 ? "md:translate-y-12" : ""}`}
                >
                  <div className={`relative overflow-hidden rounded-2xl ${i === 1 ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
                    <Image
                      src={doctorImages[i]}
                      alt={`Headshot of ${doc.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-[var(--space-5)]">
                    {doc.credentials && (
                      <p className="font-[family-name:var(--font-body)] text-sm text-gold">
                        {doc.credentials.join(" · ")}
                      </p>
                    )}
                    <h3
                      className="mt-[var(--space-1)] font-[family-name:var(--font-heading)] font-semibold text-navy group-hover:text-gold transition-colors duration-200"
                      style={{ fontSize: "var(--text-2xl)" }}
                    >
                      {doc.name}
                    </h3>
                    <p className="mt-[var(--space-1)] font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                      {doc.title}
                    </p>
                    <p className="mt-[var(--space-3)] font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed line-clamp-3" style={{ fontSize: "var(--text-sm)" }}>
                      {doc.bio}
                    </p>
                    <span className="mt-[var(--space-3)] inline-block font-[family-name:var(--font-body)] text-sm font-medium text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-200">
                      Full bio
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* ─── Conditions — horizontal list ─── */}
      <section className="py-[var(--space-12)] bg-warm-white border-y border-clay/8">
        <div className="grid-layout">
          <div className="col-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-[var(--space-4)] sm:gap-[var(--space-8)]">
              <Eyebrow tone="clay" className="whitespace-nowrap shrink-0">We treat</Eyebrow>
              <div className="flex flex-wrap gap-x-[var(--space-3)] sm:gap-x-[var(--space-6)] gap-y-[var(--space-2)]">
                {conditions.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/conditions/${c.slug}`}
                    className="font-[family-name:var(--font-heading)] text-navy hover:text-gold transition-colors duration-200"
                    style={{ fontSize: "clamp(0.95rem, 2.5vw, var(--text-lg))" }}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials — tabbed ─── */}
      <section className="section bg-stone">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in">
              <Eyebrow>Patient stories</Eyebrow>
              <h2
                className="mt-[var(--space-3)] mb-[var(--space-8)] font-[family-name:var(--font-heading)] font-semibold text-navy"
                style={{ fontSize: "var(--text-4xl)" }}
              >
                What they say
              </h2>
              <TestimonialTabs />
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* ─── CTA — animated gradient band ─── */}
      <section className="relative isolate overflow-hidden bg-navy py-[var(--space-20)]">
        {/* speed 8 on the kit's 0–100 scale = an internal time multiplier of 0.4 */}
        <AnimatedGradient
          config={{ preset: "custom", color1: "#1B3A4B", color2: "#2D5F73", color3: "#C8963E", speed: 8, softness: 100, swirl: 60, scale: 0.8 }}
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 z-[1] bg-navy/60" aria-hidden="true" />
        <div className="relative z-[2] grid-layout">
          <div className="col-full flex flex-col items-center text-center">
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold text-white"
              style={{ fontSize: "var(--text-4xl)" }}
            >
              Ready to feel better?
            </h2>
            <p
              className="mt-[var(--space-3)] font-[family-name:var(--font-body)] text-white/70"
              style={{ fontSize: "var(--text-sm)" }}
            >
              Mon–Thu 7am–7pm &middot; Fri 7am–6pm &middot; Sat 7am–12pm
            </p>
            <div className="mt-[var(--space-8)] flex flex-col items-center gap-[var(--space-3)] sm:flex-row">
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="rounded-full bg-gold px-8 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
              >
                {clinic.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-8 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white/85 transition-all duration-200 hover:border-white/60 hover:text-white cursor-pointer"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

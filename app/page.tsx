import Link from "next/link";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import TestimonialTabs from "@/components/TestimonialTabs";
import ImageLabel from "@/components/ImageLabel";
import { clinic } from "@/lib/data/clinic";
import { services } from "@/lib/data/services";
import { getDoctors } from "@/lib/data/team";
import { conditions } from "@/lib/data/conditions";

const doctorImages = ["/images/doctor-1.jpg", "/images/doctor-2.jpg", "/images/doctor-3.jpg"];

export default function HomePage() {
  const doctors = getDoctors();

  return (
    <>
      {/* ─── Hero — split layout ─── */}
      <section className="pt-24 bg-stone">
        <div className="grid-layout items-center" style={{ minHeight: "calc(85vh - 64px)" }}>
          {/* Left — text */}
          <div className="col-full md:col-left-6 py-[var(--space-8)] md:py-[var(--space-24)]">
            <p
              className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.25em] text-gold font-medium"
              style={{ fontSize: "var(--text-xs)" }}
            >
              Hamden, CT &middot; Est. 1990
            </p>

            <h1
              className="mt-[var(--space-4)] font-[family-name:var(--font-playfair)] font-semibold text-navy"
              style={{ fontSize: "clamp(2.5rem, 5vw, var(--text-6xl))", lineHeight: 1.05 }}
            >
              Your health,
              <br />
              our expertise.
            </h1>

            <p
              className="mt-[var(--space-6)] max-w-md font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed"
              style={{ fontSize: "var(--text-lg)" }}
            >
              Three doctors. Seven services. One team dedicated to getting you
              back to the life you love.
            </p>

            <div className="mt-[var(--space-8)] flex flex-col sm:flex-row gap-[var(--space-3)]">
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="w-full sm:w-auto text-center bg-gold px-7 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
              >
                Book Now
              </a>
              <Link
                href="/services"
                className="w-full sm:w-auto text-center border border-navy/20 px-7 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-navy transition-all duration-200 hover:border-navy/50 cursor-pointer"
              >
                Our Services
              </Link>
            </div>

            {/* Quinnipiac callout */}
            <div className="mt-[var(--space-10)] pt-[var(--space-6)] border-t border-clay/15">
              <p
                className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-gold font-medium"
                style={{ fontSize: "var(--text-xs)" }}
              >
                Official Team Chiropractors
              </p>
              <p
                className="mt-[var(--space-2)] font-[family-name:var(--font-playfair)] font-semibold text-navy"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                Quinnipiac University Men&apos;s Ice Hockey
              </p>
              <p
                className="mt-[var(--space-1)] font-[family-name:var(--font-dm-sans)] text-gold font-medium"
                style={{ fontSize: "var(--text-base)" }}
              >
                2023 NCAA National Champions
              </p>
            </div>
          </div>

          {/* Right — image with offset depth effect */}
          <div className="col-full md:col-right-6 flex items-center justify-center py-[var(--space-6)] md:py-[var(--space-12)]">
            <div className="relative w-full max-w-[520px]">
              {/* Navy offset block behind the image */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 w-full h-full bg-navy/10" />
              {/* Image */}
              <div className="relative aspect-[4/3] border-2 border-navy/15 overflow-hidden">
                <ImageLabel text="Replace: Clinic exterior or treatment in action" />
                <Image
                  src="/images/hero.jpg"
                  alt="Modern wellness clinic — replace with actual clinic photo"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats strip ─── */}
      <section className="bg-navy py-[var(--space-8)]">
        <div className="grid-layout">
          <div className="col-full flex flex-wrap justify-center gap-[var(--space-8)] sm:gap-[var(--space-12)] md:gap-[var(--space-20)]">
            {[
              { number: "35+", label: "Years in Practice" },
              { number: "3", label: "Expert Doctors" },
              { number: "7", label: "Integrated Services" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span
                  className="font-[family-name:var(--font-playfair)] font-semibold text-white"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 1.875rem)" }}
                >
                  {s.number}
                </span>
                <p className="mt-[var(--space-1)] font-[family-name:var(--font-dm-sans)] text-white/50 uppercase tracking-[0.15em]" style={{ fontSize: "var(--text-xs)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy & what we treat ─── */}
      <section className="section bg-stone">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in">
              <p
                className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.25em] text-gold font-medium"
                style={{ fontSize: "var(--text-xs)" }}
              >
                Our Approach
              </p>
              <h2
                className="mt-[var(--space-3)] font-[family-name:var(--font-playfair)] font-semibold text-navy"
                style={{ fontSize: "var(--text-4xl)" }}
              >
                Chiropractic care for injury recovery, pain relief & prevention
              </h2>
              <p
                className="mt-[var(--space-6)] font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed"
                style={{ fontSize: "var(--text-base)" }}
              >
                Get out of pain and back to normal activity with targeted and modern chiropractic care. We help patients in Hamden with back pain, neck pain, sciatica, and injury recovery from sports, work, or auto accidents — without relying on medication or long-term dependency. Dr. Pat, Dr. Jen and Dr. Spencer all strongly believe in promoting well-being through good nutrition and physical health, with an emphasis on a team approach to conservative holistic health care.
              </p>
              <blockquote className="mt-[var(--space-6)] pl-[var(--space-4)] border-l-2 border-gold/40">
                <p className="font-[family-name:var(--font-playfair)] italic text-navy" style={{ fontSize: "var(--text-lg)" }}>
                  &ldquo;The body has the ability to heal itself, without the use of drugs. We give our patients the knowledge, combined with chiropractic adjustments, to live a healthy, pain-free life.&rdquo;
                </p>
              </blockquote>
              <p
                className="mt-[var(--space-6)] font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Modern Health and Wellness now offers in-house yoga, physical therapy, and therapeutic massage — comprehensive services tailored for men, women, and children. Initial consultations with exam and x-rays available through Hartford Healthcare — covered by most insurances.
              </p>
            </div>
            <div className="col-full md:col-right-5 fade-in mt-8 md:mt-0">
              <p
                className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-4)]"
                style={{ fontSize: "var(--text-xs)" }}
              >
                We treat
              </p>
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
                    className="font-[family-name:var(--font-dm-sans)] text-charcoal-light border-b border-clay/8 pb-[var(--space-2)]"
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
              <p
                className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.25em] text-gold font-medium"
                style={{ fontSize: "var(--text-xs)" }}
              >
                What We Do
              </p>
              <h2
                className="mt-[var(--space-3)] font-[family-name:var(--font-playfair)] font-semibold text-navy"
                style={{ fontSize: "var(--text-4xl)" }}
              >
                Services
              </h2>
              <p
                className="mt-[var(--space-4)] font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed"
                style={{ fontSize: "var(--text-base)" }}
              >
                Seven specialized services designed to work together — so your
                care is coordinated, not fragmented.
              </p>
              <Link
                href="/services"
                className="mt-[var(--space-6)] inline-block font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors duration-200 cursor-pointer"
              >
                View All Services
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
                    className="font-[family-name:var(--font-playfair)] text-navy group-hover:text-gold transition-colors duration-200"
                    style={{ fontSize: "var(--text-xl)" }}
                  >
                    {s.name}
                  </span>
                  <span className="font-[family-name:var(--font-dm-sans)] text-clay opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ fontSize: "var(--text-xs)" }}>
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
        <ImageLabel text="Replace: Doctor performing adjustment or treatment" />
        <Image
          src="/images/adjustment.jpg"
          alt="Treatment session — replace with actual clinic photo"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="grid-layout">
            <div className="col-full md:col-left-7">
              <p
                className="font-[family-name:var(--font-playfair)] italic text-white leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3vw, var(--text-4xl))" }}
              >
                &ldquo;They don&apos;t just crack your back and send you on your way.
                They actually figure out what&apos;s wrong and create a real plan
                to fix it.&rdquo;
              </p>
              <p
                className="mt-[var(--space-4)] font-[family-name:var(--font-dm-sans)] text-white/60 uppercase tracking-[0.2em]"
                style={{ fontSize: "var(--text-xs)" }}
              >
                Lisa P. &middot; Yelp Review
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Doctors — alternating rows ─── */}
      <section className="section bg-stone">
        <ScrollFade stagger>
          <div className="grid-layout">
            <div className="col-full fade-in">
              <p
                className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.25em] text-gold font-medium"
                style={{ fontSize: "var(--text-xs)" }}
              >
                The Team
              </p>
              <h2
                className="mt-[var(--space-3)] font-[family-name:var(--font-playfair)] font-semibold text-navy"
                style={{ fontSize: "var(--text-4xl)" }}
              >
                Your Doctors
              </h2>
            </div>

            {doctors.map((doc, i) => (
              <Link
                key={doc.slug}
                href={`/team/${doc.slug}`}
                className={`col-full fade-in group mt-[var(--space-8)]`}
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-[var(--space-8)] items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}>
                  <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <ImageLabel text={`Replace: Headshot of ${doc.name}`} />
                    <Image
                      src={doctorImages[i]}
                      alt={`${doc.name} — replace with actual headshot`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    {doc.credentials && (
                      <p className="font-[family-name:var(--font-dm-sans)] text-gold uppercase tracking-[0.15em]" style={{ fontSize: "var(--text-xs)" }}>
                        {doc.credentials.join(" · ")}
                      </p>
                    )}
                    <h3
                      className="mt-[var(--space-2)] font-[family-name:var(--font-playfair)] font-semibold text-navy group-hover:text-gold transition-colors duration-200"
                      style={{ fontSize: "var(--text-3xl)" }}
                    >
                      {doc.name}
                    </h3>
                    <p className="mt-[var(--space-1)] font-[family-name:var(--font-dm-sans)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                      {doc.title}
                    </p>
                    <p className="mt-[var(--space-4)] font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed line-clamp-3" style={{ fontSize: "var(--text-base)" }}>
                      {doc.bio}
                    </p>
                    <span className="mt-[var(--space-4)] inline-block font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-200">
                      Full Bio
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollFade>
      </section>

      {/* ─── Conditions — horizontal list ─── */}
      <section className="py-[var(--space-12)] bg-warm-white border-y border-clay/8">
        <div className="grid-layout">
          <div className="col-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-[var(--space-4)] sm:gap-[var(--space-8)]">
              <p
                className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay whitespace-nowrap shrink-0"
                style={{ fontSize: "var(--text-xs)" }}
              >
                We Treat
              </p>
              <div className="flex flex-wrap gap-x-[var(--space-3)] sm:gap-x-[var(--space-6)] gap-y-[var(--space-2)]">
                {conditions.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/conditions/${c.slug}`}
                    className="font-[family-name:var(--font-playfair)] text-navy hover:text-gold transition-colors duration-200"
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
              <p
                className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.25em] text-gold font-medium"
                style={{ fontSize: "var(--text-xs)" }}
              >
                Patient Stories
              </p>
              <h2
                className="mt-[var(--space-3)] mb-[var(--space-8)] font-[family-name:var(--font-playfair)] font-semibold text-navy"
                style={{ fontSize: "var(--text-4xl)" }}
              >
                What they say
              </h2>
              <TestimonialTabs />
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-navy py-[var(--space-20)]">
        <div className="grid-layout">
          <div className="col-full flex flex-col items-center text-center">
            <h2
              className="font-[family-name:var(--font-playfair)] font-semibold text-white"
              style={{ fontSize: "var(--text-4xl)" }}
            >
              Ready to feel better?
            </h2>
            <p
              className="mt-[var(--space-3)] font-[family-name:var(--font-dm-sans)] text-white/50"
              style={{ fontSize: "var(--text-sm)" }}
            >
              Mon–Thu 7am–7pm &middot; Fri 7am–6pm &middot; Sat 7am–12pm
            </p>
            <div className="mt-[var(--space-8)] flex flex-col items-center gap-[var(--space-3)] sm:flex-row">
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
              >
                {clinic.phone}
              </a>
              <Link
                href="/contact"
                className="border border-white/20 px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

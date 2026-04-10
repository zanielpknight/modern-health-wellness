import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";
import { conditions, getCondition } from "@/lib/data/conditions";
import { getTestimonialsByCondition } from "@/lib/data/testimonials";
import { services } from "@/lib/data/services";
import { clinic } from "@/lib/data/clinic";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const condition = getCondition(slug);
    if (!condition) return { title: "Not Found" };
    return { title: `${condition.name} Treatment`, description: condition.shortDescription };
  });
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) notFound();

  const relatedTestimonials = getTestimonialsByCondition(slug);
  const relatedServices = condition.relatedServices
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean);

  return (
    <>
      <div className="pt-32 pb-[var(--space-16)] bg-warm-white">
        <div className="grid-layout">
          <div className="col-full">
            <Link href="/services" className="font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-clay hover:text-navy transition-colors duration-200 mb-[var(--space-6)] inline-block">
              &larr; Services
            </Link>
            <h1 className="font-[family-name:var(--font-playfair)] font-light text-navy" style={{ fontSize: "var(--text-5xl)", lineHeight: 1.15 }}>
              {condition.name}
            </h1>
            <p className="mt-[var(--space-4)] max-w-xl font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-lg)" }}>
              {condition.shortDescription}
            </p>
            <a href={`tel:${clinic.phoneRaw}`} className="mt-[var(--space-8)] inline-block border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer">
              Get Treatment
            </a>
          </div>
        </div>
      </div>

      {/* Description + Symptoms */}
      <section className="section bg-stone">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in">
              <p className="mb-[var(--space-4)] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                Understanding {condition.name}
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
                {condition.description}
              </p>
            </div>
            <div className="col-full md:col-right-5 fade-in mt-8 md:mt-0">
              <p className="mb-[var(--space-4)] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                Common Symptoms
              </p>
              <ul className="space-y-[var(--space-3)]">
                {condition.symptoms.map((s) => (
                  <li key={s} className="font-[family-name:var(--font-dm-sans)] text-charcoal-light border-b border-clay/8 pb-[var(--space-3)]" style={{ fontSize: "var(--text-sm)" }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* How we help */}
      <section className="section bg-warm-white">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in">
              <p className="mb-[var(--space-4)] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                Our Approach
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
                {condition.howWeHelp}
              </p>
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section bg-stone">
          <ScrollFade>
            <div className="grid-layout">
              <div className="col-full fade-in">
                <p className="mb-[var(--space-4)] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                  Related Services
                </p>
                <div className="grid gap-px sm:grid-cols-3">
                  {relatedServices.map((svc) => svc && (
                    <Link key={svc.slug} href={`/services/${svc.slug}`} className="group py-[var(--space-6)] pr-[var(--space-8)] border-b border-clay/10 sm:border-b-0 sm:border-r sm:last:border-r-0">
                      <h3 className="font-[family-name:var(--font-playfair)] font-light italic text-navy group-hover:text-gold transition-colors duration-200" style={{ fontSize: "clamp(1.1rem, 3vw, var(--text-2xl))" }}>
                        {svc.name}
                      </h3>
                      <p className="mt-[var(--space-2)] font-[family-name:var(--font-dm-sans)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                        {svc.shortDescription.split(".")[0]}.
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFade>
        </section>
      )}

      {/* Testimonial */}
      {relatedTestimonials.length > 0 && (
        <section className="section bg-warm-white">
          <ScrollFade>
            <div className="grid-layout">
              <div className="col-full md:col-left-7 fade-in">
                <blockquote>
                  <p className="font-[family-name:var(--font-playfair)] font-light italic text-navy leading-snug" style={{ fontSize: "clamp(1.25rem, 2.5vw, var(--text-3xl))" }}>
                    &ldquo;{relatedTestimonials[0].text}&rdquo;
                  </p>
                  <cite className="mt-[var(--space-4)] block font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay not-italic" style={{ fontSize: "var(--text-xs)" }}>
                    {relatedTestimonials[0].name}
                  </cite>
                </blockquote>
              </div>
            </div>
          </ScrollFade>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy py-[var(--space-20)]">
        <div className="grid-layout">
          <div className="col-full flex flex-col items-center text-center">
            <h2 className="font-[family-name:var(--font-playfair)] font-light text-white" style={{ fontSize: "var(--text-4xl)" }}>
              Don&apos;t wait for the pain to get worse.
            </h2>
            <a href={`tel:${clinic.phoneRaw}`} className="mt-[var(--space-8)] border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer">
              Call to Book
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

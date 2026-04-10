import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import ImageLabel from "@/components/ImageLabel";
import { services, getService } from "@/lib/data/services";

const serviceImages: Record<string, string> = {
  "injury-rehab-chiropractic": "/images/adjustment.jpg",
  "personal-training": "/images/training.jpg",
  "acupuncture": "/images/acupuncture.jpg",
  "massage": "/images/massage.jpg",
  "weight-loss-nutrition": "/images/clinic-interior.jpg",
  "yoga": "/images/training.jpg",
  "health-products": "/images/clinic-interior.jpg",
};
import { getTestimonialsByService } from "@/lib/data/testimonials";
import { conditions } from "@/lib/data/conditions";
import { clinic } from "@/lib/data/clinic";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getService(slug);
    if (!service) return { title: "Not Found" };
    return { title: service.name, description: service.shortDescription };
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedTestimonials = getTestimonialsByService(slug);
  const relatedConditions = service.relatedConditions
    ?.map((c) => conditions.find((cond) => cond.slug === c))
    .filter(Boolean);

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-[var(--space-8)] bg-warm-white">
        <div className="grid-layout">
          <div className="col-full">
            <Link href="/services" className="font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-clay hover:text-navy transition-colors duration-200">
              &larr; All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-[var(--space-16)] bg-warm-white">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in">
              {service.providers && (
                <p className="mb-[var(--space-3)] font-[family-name:var(--font-dm-sans)] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                  {service.providers.join(" · ")}
                </p>
              )}
              <h1 className="font-[family-name:var(--font-playfair)] font-light text-navy" style={{ fontSize: "var(--text-5xl)", lineHeight: 1.15 }}>
                {service.name}
              </h1>
              <p className="mt-[var(--space-6)] font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed max-w-xl" style={{ fontSize: "var(--text-lg)" }}>
                {service.shortDescription}
              </p>
              <a href={`tel:${clinic.phoneRaw}`} className="mt-[var(--space-8)] inline-block border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer">
                Book This Service
              </a>
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* Image */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <ImageLabel text={`Replace: ${service.name} in action`} />
        <Image
          src={serviceImages[slug] || "/images/clinic-interior.jpg"}
          alt={`${service.name} — replace with actual service photo`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Description */}
      <section className="section bg-stone">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in">
              <p className="font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
                {service.description}
              </p>
            </div>
            {service.benefits && (
              <div className="col-full md:col-right-5 fade-in mt-8 md:mt-0">
                <p className="mb-[var(--space-4)] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                  Benefits
                </p>
                <ul className="space-y-[var(--space-3)]">
                  {service.benefits.map((b) => (
                    <li key={b} className="font-[family-name:var(--font-dm-sans)] text-charcoal-light border-b border-clay/8 pb-[var(--space-3)]" style={{ fontSize: "var(--text-sm)" }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ScrollFade>
      </section>

      {/* What to expect */}
      {service.whatToExpect && (
        <section className="section bg-warm-white">
          <ScrollFade>
            <div className="grid-layout">
              <div className="col-full md:col-left-7 fade-in">
                <p className="mb-[var(--space-4)] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                  What to Expect
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
                  {service.whatToExpect}
                </p>
              </div>
            </div>
          </ScrollFade>
        </section>
      )}

      {/* Testimonial */}
      {relatedTestimonials.length > 0 && (
        <section className="section bg-stone">
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

      {/* Related conditions */}
      {relatedConditions && relatedConditions.length > 0 && (
        <section className="section bg-warm-white">
          <ScrollFade>
            <div className="grid-layout">
              <div className="col-full fade-in">
                <p className="mb-[var(--space-4)] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                  Conditions We Treat
                </p>
                <div className="flex flex-wrap gap-x-[var(--space-8)] gap-y-[var(--space-3)]">
                  {relatedConditions.map((c) => c && (
                    <Link key={c.slug} href={`/conditions/${c.slug}`} className="font-[family-name:var(--font-playfair)] italic text-navy hover:text-gold transition-colors duration-200" style={{ fontSize: "var(--text-xl)" }}>
                      {c.name}
                    </Link>
                  ))}
                </div>
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
              Ready to get started?
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

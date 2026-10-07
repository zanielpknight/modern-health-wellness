import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import ImageLabel from "@/components/ImageLabel";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/data/services";
import { clinic } from "@/lib/data/clinic";

const serviceImages: Record<string, string> = {
  "injury-rehab-chiropractic": "/images/adjustment.jpg",
  "personal-training": "/images/training.jpg",
  "acupuncture": "/images/acupuncture.jpg",
  "massage": "/images/massage.jpg",
  "weight-loss-nutrition": "/images/clinic-interior.jpg",
  "yoga": "/images/training.jpg",
  "health-products": "/images/clinic-interior.jpg",
};

export const metadata: Metadata = {
  title: "Our Services",
  description: "7 integrated wellness services: chiropractic, personal training, acupuncture, massage, nutrition, yoga, and health products.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What we do"
        title="Services"
        subtitle="Seven specialized services under one roof, designed to work together for faster recovery and lasting wellness."
      />

      <section className="section bg-stone">
        <ScrollFade stagger>
          <div className="grid-layout">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="col-full fade-in group"
              >
                <div className={`grid grid-cols-1 ${i % 2 === 1 ? "md:grid-cols-[2fr_1fr]" : "md:grid-cols-[1fr_2fr]"} gap-[var(--space-4)] md:gap-[var(--space-8)] py-[var(--space-8)] ${
                  i < services.length - 1 ? "border-b border-clay/10" : ""
                }`}>
                  <div className={`relative aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <ImageLabel text={`Replace: ${service.name} photo`} />
                    <Image
                      src={serviceImages[service.slug] || "/images/clinic-interior.jpg"}
                      alt={`${service.name} — replace with actual service photo`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1 md:pr-[var(--space-8)]" : "md:pl-[var(--space-4)]"}`}>
                    <h2
                      className="font-[family-name:var(--font-heading)] font-light text-navy group-hover:text-gold transition-colors duration-200"
                      style={{ fontSize: "var(--text-3xl)" }}
                    >
                      {service.name}
                    </h2>
                    <p className="mt-[var(--space-3)] font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed max-w-lg" style={{ fontSize: "var(--text-base)" }}>
                      {service.shortDescription}
                    </p>
                    {service.providers && (
                      <p className="mt-[var(--space-3)] font-[family-name:var(--font-body)] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                        {service.providers.join(" · ")}
                      </p>
                    )}
                    <span className="mt-[var(--space-4)] inline-block font-[family-name:var(--font-body)] text-sm font-medium text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-200 self-start">
                      Learn more
                    </span>
                  </div>
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
            <h2 className="font-[family-name:var(--font-heading)] font-light text-white" style={{ fontSize: "var(--text-4xl)" }}>
              Not sure which service is right for you?
            </h2>
            <p className="mt-[var(--space-4)] font-[family-name:var(--font-body)] text-white/60" style={{ fontSize: "var(--text-base)" }}>
              Call us and we&apos;ll help you find the best path forward.
            </p>
            <a href={`tel:${clinic.phoneRaw}`} className="mt-[var(--space-8)] rounded-full border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer">
              {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

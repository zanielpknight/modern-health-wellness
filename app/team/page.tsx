import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import PageHeader from "@/components/PageHeader";
import ImageLabel from "@/components/ImageLabel";
import { getDoctors, getStaff } from "@/lib/data/team";
import { clinic } from "@/lib/data/clinic";

const doctorImages = ["/images/doctor-1.jpg", "/images/doctor-2.jpg", "/images/doctor-3.jpg"];

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the doctors and staff at Modern Health & Wellness in Hamden, CT.",
};

export default function TeamPage() {
  const doctors = getDoctors();
  const staff = getStaff();

  return (
    <>
      <PageHeader
        label="The Team"
        title="The people behind your care."
        subtitle="Three doctors with complementary specialties and a support staff that makes every visit seamless."
      />

      {/* Doctors */}
      <section className="section bg-stone">
        <ScrollFade stagger>
          <div className="grid-layout">
            <div className="col-full grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-8)]">
              {doctors.map((doc, i) => (
                <Link key={doc.slug} href={`/team/${doc.slug}`} className="group fade-in">
                  <div className="relative aspect-[3/4] overflow-hidden mb-[var(--space-4)]">
                    <ImageLabel text={`Replace: Headshot of ${doc.name}`} />
                    <Image
                      src={doctorImages[i]}
                      alt={`${doc.name} — replace with actual headshot`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <h3
                    className="font-[family-name:var(--font-playfair)] font-normal text-navy group-hover:text-gold transition-colors duration-200"
                    style={{ fontSize: "var(--text-2xl)" }}
                  >
                    {doc.name}
                  </h3>
                  <p className="mt-[var(--space-1)] font-[family-name:var(--font-dm-sans)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                    {doc.title}
                  </p>
                  {doc.credentials && (
                    <p className="mt-[var(--space-1)] font-[family-name:var(--font-dm-sans)] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                      {doc.credentials.join(", ")}
                    </p>
                  )}
                  <p className="mt-[var(--space-3)] font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed line-clamp-3" style={{ fontSize: "var(--text-sm)" }}>
                    {doc.bio}
                  </p>
                  <span className="mt-[var(--space-3)] inline-block font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-200">
                    Full Bio
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* Staff */}
      <section className="section bg-warm-white">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full fade-in">
              <p className="mb-[var(--space-4)] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.3em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                Support Team
              </p>
              <div className="grid gap-px sm:grid-cols-3 lg:grid-cols-5 mt-[var(--space-6)]">
                {staff.map((member) => (
                  <div key={member.slug} className="py-[var(--space-4)] pr-[var(--space-6)] border-b border-clay/10 sm:border-b-0 sm:border-r sm:last:border-r-0">
                    <p className="font-[family-name:var(--font-playfair)] text-navy" style={{ fontSize: "var(--text-lg)" }}>
                      {member.name}
                    </p>
                    <p className="font-[family-name:var(--font-dm-sans)] text-charcoal-light" style={{ fontSize: "var(--text-xs)" }}>
                      {member.title}
                      {member.yearJoined && ` · Since ${member.yearJoined}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollFade>
      </section>

      {/* CTA */}
      <section className="bg-navy py-[var(--space-20)]">
        <div className="grid-layout">
          <div className="col-full flex flex-col items-center text-center">
            <h2 className="font-[family-name:var(--font-playfair)] font-light text-white" style={{ fontSize: "var(--text-4xl)" }}>
              Ready to feel better?
            </h2>
            <div className="mt-[var(--space-8)] flex flex-col items-center gap-[var(--space-4)] sm:flex-row">
              <a href={`tel:${clinic.phoneRaw}`} className="border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer">
                Call to Book
              </a>
              <Link href="/services" className="border border-white/30 px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 cursor-pointer">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

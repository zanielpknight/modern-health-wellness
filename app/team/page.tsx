import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import PageHeader from "@/components/PageHeader";
import { getDoctors, getStaff, displayName } from "@/lib/data/team";
import { clinic } from "@/lib/data/clinic";
import Eyebrow from "@/components/Eyebrow";

const doctorImages = ["/images/doctor-1.jpg", "/images/doctor-2.jpg", "/images/doctor-3.jpg"];

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the doctors and staff at Modern Health & Wellness in Austin, TX.",
};

export default function TeamPage() {
  const doctors = getDoctors();
  const staff = getStaff();

  return (
    <>
      <PageHeader
        label="The team"
        title="The people behind your care."
        subtitle="Three doctors with complementary specialties and a support staff that makes every visit seamless."
      />

      {/* Doctors */}
      <section className="section bg-stone">
        <ScrollFade stagger>
          <div className="grid-layout">
            <div className="col-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[var(--space-8)] md:gap-[var(--space-6)] md:pb-12">
              {doctors.map((doc, i) => (
                <Link key={doc.slug} href={`/team/${doc.slug}`} className={`group fade-in ${i === 1 ? "md:translate-y-12" : ""}`}>
                  <div className={`relative overflow-hidden rounded-2xl mb-[var(--space-5)] ${i === 1 ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
                    <Image
                      src={doctorImages[i]}
                      alt={`Headshot of ${doc.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <h3
                    className="font-[family-name:var(--font-heading)] font-normal text-navy group-hover:text-gold transition-colors duration-200"
                    style={{ fontSize: "var(--text-2xl)" }}
                  >
                    {displayName(doc)}
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
              <Eyebrow tone="clay" className="mb-[var(--space-4)]">Support team</Eyebrow>
              <div className="grid gap-px sm:grid-cols-3 lg:grid-cols-5 mt-[var(--space-6)]">
                {staff.map((member) => (
                  <div key={member.slug} className="py-[var(--space-4)] pr-[var(--space-6)] border-b border-clay/10 sm:border-b-0 sm:border-r sm:last:border-r-0">
                    <p className="font-[family-name:var(--font-heading)] text-navy" style={{ fontSize: "var(--text-lg)" }}>
                      {member.name}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-xs)" }}>
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
            <h2 className="font-[family-name:var(--font-heading)] font-light text-white" style={{ fontSize: "var(--text-4xl)" }}>
              Ready to feel better?
            </h2>
            <div className="mt-[var(--space-8)] flex flex-col items-center gap-[var(--space-4)] sm:flex-row">
              <a href={`tel:${clinic.phoneRaw}`} className="rounded-full border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer">
                Call to book
              </a>
              <Link href="/services" className="rounded-full border border-white/30 px-8 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 cursor-pointer">
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

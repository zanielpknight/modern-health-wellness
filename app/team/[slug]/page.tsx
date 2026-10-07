import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import ImageLabel from "@/components/ImageLabel";
import { team, getTeamMember } from "@/lib/data/team";
import { clinic } from "@/lib/data/clinic";
import Eyebrow from "@/components/Eyebrow";

const doctorImageMap: Record<string, string> = {
  "doctor-1": "/images/doctor-1.jpg",
  "doctor-2": "/images/doctor-2.jpg",
  "doctor-3": "/images/doctor-3.jpg",
};

export function generateStaticParams() {
  return team.filter((m) => m.role === "doctor").map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const member = getTeamMember(slug);
    if (!member) return { title: "Not Found" };
    return { title: member.name, description: `${member.name} — ${member.title} at Modern Health & Wellness.` };
  });
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member || member.role !== "doctor") notFound();

  return (
    <>
      <div className="pt-32 pb-[var(--space-8)] bg-warm-white">
        <div className="grid-layout">
          <div className="col-full">
            <Link
              href="/team"
              className="font-[family-name:var(--font-body)] text-sm font-medium text-clay hover:text-navy transition-colors duration-200"
            >
              &larr; Back to team
            </Link>
          </div>
        </div>
      </div>

      <section className="section bg-warm-white pt-0">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-5 fade-in">
              <div className="relative aspect-[1/1] max-w-[280px] overflow-hidden sticky top-20 md:top-32">
                <ImageLabel text={`Replace: Portrait of ${member.name}`} />
                <Image
                  src={doctorImageMap[slug] || "/images/doctor-1.jpg"}
                  alt={`Headshot of ${member.name}`}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
            <div className="col-full md:col-right-7 fade-in mt-8 md:mt-0">
              {member.credentials && (
                <Eyebrow tone="clay" className="mb-[var(--space-2)]">{member.credentials.join(" · ")}</Eyebrow>
              )}
              <h1 className="font-[family-name:var(--font-heading)] font-light text-navy" style={{ fontSize: "var(--text-5xl)", lineHeight: 1.15 }}>
                {member.name}
              </h1>
              <p className="mt-[var(--space-2)] font-[family-name:var(--font-body)] text-gold" style={{ fontSize: "var(--text-lg)" }}>
                {member.title}
              </p>

              {member.quote && (
                <blockquote className="mt-[var(--space-6)] pl-[var(--space-4)] border-l-2 border-gold/40">
                  <p className="font-[family-name:var(--font-heading)] italic text-navy leading-relaxed" style={{ fontSize: "var(--text-lg)" }}>
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </blockquote>
              )}

              <div className="mt-[var(--space-8)] font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
                <p>{member.bio}</p>
              </div>

              {member.firstVisitInfo && (
                <div className="mt-[var(--space-8)]">
                  <Eyebrow tone="clay" className="mb-[var(--space-3)]">What to expect — your first visit</Eyebrow>
                  <p className="font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-sm)" }}>
                    {member.firstVisitInfo}
                  </p>
                </div>
              )}

              {member.treatmentCriteria && (
                <div className="mt-[var(--space-6)]">
                  <p className="mb-[var(--space-2)] font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                    Treatment recommendations are always based on:
                  </p>
                  <ul className="space-y-[var(--space-1)]">
                    {member.treatmentCriteria.map((c) => (
                      <li key={c} className="font-[family-name:var(--font-body)] text-charcoal-light border-b border-clay/8 pb-[var(--space-2)]" style={{ fontSize: "var(--text-sm)" }}>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.education && (
                <div className="mt-[var(--space-8)]">
                  <Eyebrow tone="clay" className="mb-[var(--space-3)]">Education</Eyebrow>
                  <ul className="space-y-[var(--space-2)]">
                    {member.education.map((e) => (
                      <li key={e} className="font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.specialties && (
                <div className="mt-[var(--space-8)]">
                  <Eyebrow tone="clay" className="mb-[var(--space-3)]">Specialties</Eyebrow>
                  <div className="flex flex-wrap gap-x-[var(--space-3)] sm:gap-x-[var(--space-6)] gap-y-[var(--space-2)]">
                    {member.specialties.map((s) => (
                      <span key={s} className="font-[family-name:var(--font-heading)] italic text-navy" style={{ fontSize: "var(--text-lg)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {member.postGradEducation && (
                <div className="mt-[var(--space-6)]">
                  <Eyebrow tone="clay" className="mb-[var(--space-3)]">Post-graduate education</Eyebrow>
                  <p className="font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                    {member.postGradEducation.join(", ")}
                  </p>
                </div>
              )}

              {member.practiceFocus && (
                <div className="mt-[var(--space-8)]">
                  <Eyebrow tone="clay" className="mb-[var(--space-3)]">Practice focus</Eyebrow>
                  <ul className="space-y-[var(--space-2)]">
                    {member.practiceFocus.map((f) => (
                      <li key={f} className="font-[family-name:var(--font-body)] text-charcoal-light border-b border-clay/8 pb-[var(--space-2)]" style={{ fontSize: "var(--text-sm)" }}>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.employmentHistory && (
                <div className="mt-[var(--space-8)]">
                  <Eyebrow tone="clay" className="mb-[var(--space-3)]">Experience</Eyebrow>
                  <ul className="space-y-[var(--space-2)]">
                    {member.employmentHistory.map((e) => (
                      <li key={e} className="font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.professionalAssociations && (
                <div className="mt-[var(--space-8)]">
                  <Eyebrow tone="clay" className="mb-[var(--space-3)]">Professional associations</Eyebrow>
                  <ul className="space-y-[var(--space-2)]">
                    {member.professionalAssociations.map((a) => (
                      <li key={a.name}>
                        {a.url !== "#" ? (
                          <a href={a.url} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-body)] text-navy hover:text-gold transition-colors duration-200" style={{ fontSize: "var(--text-sm)" }}>
                            {a.name}
                          </a>
                        ) : (
                          <span className="font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                            {a.name}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.personal && (
                <div className="mt-[var(--space-8)]">
                  <Eyebrow tone="clay" className="mb-[var(--space-3)]">Personal</Eyebrow>
                  <p className="font-[family-name:var(--font-body)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                    {member.personal}
                  </p>
                </div>
              )}

              {member.yearJoined && (
                <p className="mt-[var(--space-6)] font-[family-name:var(--font-body)] text-clay" style={{ fontSize: "var(--text-sm)" }}>
                  Practicing at Modern Health & Wellness since {member.yearJoined}
                </p>
              )}

              <div className="mt-[var(--space-10)] pt-[var(--space-8)] border-t border-clay/10">
                <a
                  href={`tel:${clinic.phoneRaw}`}
                  className="rounded-full border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-body)] text-sm font-medium text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
                >
                  Book with {member.name.split(" ")[1]}
                </a>
              </div>
            </div>
          </div>
        </ScrollFade>
      </section>
    </>
  );
}

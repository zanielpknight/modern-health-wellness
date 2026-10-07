import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { clinic } from "@/lib/data/clinic";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for the ${clinic.name} website.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader label="Legal" title="Terms of Service" />

      <section className="section bg-stone">
        <div className="grid-layout">
          <div className="col-full md:col-left-7 space-y-[var(--space-6)] font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
            <p><strong className="text-navy">Last updated:</strong> April 2026</p>

            <p>Welcome to the Modern Health & Wellness website. By accessing or using this website, you agree to be bound by these Terms of Service.</p>

            <h2 className="font-[family-name:var(--font-heading)] font-light text-navy pt-[var(--space-4)]" style={{ fontSize: "var(--text-2xl)" }}>Website Use</h2>
            <p>This website is provided for informational purposes only. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>

            <h2 className="font-[family-name:var(--font-heading)] font-light text-navy pt-[var(--space-4)]" style={{ fontSize: "var(--text-2xl)" }}>No Doctor-Patient Relationship</h2>
            <p>Using this website or contacting us through the website does not establish a doctor-patient relationship. A doctor-patient relationship is only established through an in-person consultation.</p>

            <h2 className="font-[family-name:var(--font-heading)] font-light text-navy pt-[var(--space-4)]" style={{ fontSize: "var(--text-2xl)" }}>Intellectual Property</h2>
            <p>All content on this website is the property of Modern Health & Wellness and is protected by copyright and other intellectual property laws.</p>

            <h2 className="font-[family-name:var(--font-heading)] font-light text-navy pt-[var(--space-4)]" style={{ fontSize: "var(--text-2xl)" }}>Contact</h2>
            <p>For questions about these Terms, contact us at {clinic.phone} or visit us at {clinic.address.full}.</p>
          </div>
        </div>
      </section>
    </>
  );
}

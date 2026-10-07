import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { clinic } from "@/lib/data/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${clinic.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader label="Legal" title="Privacy Policy" />

      <section className="section bg-stone">
        <div className="grid-layout">
          <div className="col-full md:col-left-7 space-y-[var(--space-6)] font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
            <p><strong className="text-navy">Last updated:</strong> April 2026</p>

            <p>Modern Health & Wellness (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information you share with us.</p>

            <h2 className="font-[family-name:var(--font-heading)] font-light text-navy pt-[var(--space-4)]" style={{ fontSize: "var(--text-2xl)" }}>Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide when you contact us through our website, including your name, email address, phone number, and any information you include in your message.</p>

            <h2 className="font-[family-name:var(--font-heading)] font-light text-navy pt-[var(--space-4)]" style={{ fontSize: "var(--text-2xl)" }}>How We Use Your Information</h2>
            <p>We use the information you provide to respond to your inquiries, schedule appointments, and improve our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

            <h2 className="font-[family-name:var(--font-heading)] font-light text-navy pt-[var(--space-4)]" style={{ fontSize: "var(--text-2xl)" }}>HIPAA Compliance</h2>
            <p>As a healthcare provider, we comply with HIPAA regarding the protection of your health information. Patient health records are maintained separately from website data.</p>

            <h2 className="font-[family-name:var(--font-heading)] font-light text-navy pt-[var(--space-4)]" style={{ fontSize: "var(--text-2xl)" }}>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at {clinic.phone} or visit us at {clinic.address.full}.</p>
          </div>
        </div>
      </section>
    </>
  );
}

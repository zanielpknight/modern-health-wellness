"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ScrollFade from "@/components/ScrollFade";
import { clinic } from "@/lib/data/clinic";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        label="Contact"
        title="Get in touch."
        subtitle="Have a question or ready to schedule? We're here to help."
      />

      <section className="section bg-stone">
        <ScrollFade>
          <div className="grid-layout">
            {/* Form */}
            <div className="col-full md:col-left-7 fade-in">
              {submitted ? (
                <div className="py-[var(--space-16)]">
                  <h2 className="font-[family-name:var(--font-playfair)] font-light text-navy" style={{ fontSize: "var(--text-3xl)" }}>
                    Message sent.
                  </h2>
                  <p className="mt-[var(--space-4)] font-[family-name:var(--font-dm-sans)] text-charcoal-light" style={{ fontSize: "var(--text-base)" }}>
                    Thank you for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-[var(--space-6)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-6)]">
                    <div>
                      <label htmlFor="firstName" className="block font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-2)]" style={{ fontSize: "var(--text-xs)" }}>
                        First Name
                      </label>
                      <input
                        type="text" id="firstName" name="firstName" required
                        className="w-full px-0 py-[var(--space-3)] bg-transparent border-0 border-b border-clay/20 font-[family-name:var(--font-dm-sans)] text-navy outline-none focus:border-gold transition-colors duration-200"
                        style={{ fontSize: "var(--text-base)" }}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-2)]" style={{ fontSize: "var(--text-xs)" }}>
                        Last Name
                      </label>
                      <input
                        type="text" id="lastName" name="lastName" required
                        className="w-full px-0 py-[var(--space-3)] bg-transparent border-0 border-b border-clay/20 font-[family-name:var(--font-dm-sans)] text-navy outline-none focus:border-gold transition-colors duration-200"
                        style={{ fontSize: "var(--text-base)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-2)]" style={{ fontSize: "var(--text-xs)" }}>
                      Email
                    </label>
                    <input
                      type="email" id="email" name="email" required
                      className="w-full px-0 py-[var(--space-3)] bg-transparent border-0 border-b border-clay/20 font-[family-name:var(--font-dm-sans)] text-navy outline-none focus:border-gold transition-colors duration-200"
                      style={{ fontSize: "var(--text-base)" }}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-2)]" style={{ fontSize: "var(--text-xs)" }}>
                      Phone (optional)
                    </label>
                    <input
                      type="tel" id="phone" name="phone"
                      className="w-full px-0 py-[var(--space-3)] bg-transparent border-0 border-b border-clay/20 font-[family-name:var(--font-dm-sans)] text-navy outline-none focus:border-gold transition-colors duration-200"
                      style={{ fontSize: "var(--text-base)" }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-2)]" style={{ fontSize: "var(--text-xs)" }}>
                      Message
                    </label>
                    <textarea
                      id="message" name="message" required rows={4}
                      className="w-full px-0 py-[var(--space-3)] bg-transparent border-0 border-b border-clay/20 font-[family-name:var(--font-dm-sans)] text-navy outline-none focus:border-gold transition-colors duration-200 resize-y"
                      style={{ fontSize: "var(--text-base)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="border border-gold bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="col-full md:col-right-5 fade-in mt-8 md:mt-0">
              <div className="space-y-[var(--space-8)]">
                <div>
                  <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-3)]" style={{ fontSize: "var(--text-xs)" }}>
                    Address
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-dm-sans)] text-navy hover:text-gold transition-colors duration-200"
                    style={{ fontSize: "var(--text-base)" }}
                  >
                    {clinic.address.full}
                  </a>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-3)]" style={{ fontSize: "var(--text-xs)" }}>
                    Phone
                  </p>
                  <a
                    href={`tel:${clinic.phoneRaw}`}
                    className="font-[family-name:var(--font-dm-sans)] text-navy hover:text-gold transition-colors duration-200"
                    style={{ fontSize: "var(--text-base)" }}
                  >
                    {clinic.phone}
                  </a>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-3)]" style={{ fontSize: "var(--text-xs)" }}>
                    Hours
                  </p>
                  <div className="space-y-[var(--space-1)] font-[family-name:var(--font-dm-sans)] text-charcoal-light" style={{ fontSize: "var(--text-sm)" }}>
                    {clinic.hours.map((h) => (
                      <div key={h.day} className="flex justify-between max-w-full sm:max-w-[240px]">
                        <span>{h.day}</span>
                        <span>{h.open === "Closed" ? "Closed" : `${h.open} – ${h.close}`}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-3)]" style={{ fontSize: "var(--text-xs)" }}>
                    Social
                  </p>
                  <div className="flex flex-wrap gap-[var(--space-3)] sm:gap-[var(--space-6)]">
                    <a href={clinic.social.facebook} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-dm-sans)] text-navy hover:text-gold transition-colors duration-200" style={{ fontSize: "var(--text-sm)" }}>
                      Facebook
                    </a>
                    <a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-dm-sans)] text-navy hover:text-gold transition-colors duration-200" style={{ fontSize: "var(--text-sm)" }}>
                      Instagram
                    </a>
                    <a href={clinic.social.yelp} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-dm-sans)] text-navy hover:text-gold transition-colors duration-200" style={{ fontSize: "var(--text-sm)" }}>
                      Yelp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFade>
      </section>
    </>
  );
}

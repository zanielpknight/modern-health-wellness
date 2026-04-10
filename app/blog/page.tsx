import type { Metadata } from "next";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blog",
  description: "Health and wellness tips from the team at Modern Health & Wellness.",
};

const posts = [
  {
    slug: "benefits-of-group-exercise-classes",
    title: "The Benefits of Group Exercise Classes",
    excerpt: "Group exercise classes offer more than just a workout. From accountability to social connection, discover why exercising with others can transform your fitness journey.",
    category: "Fitness",
    date: "2024-01-15",
  },
  {
    slug: "strength-training-for-seniors",
    title: "Stay Strong After 60",
    excerpt: "Strength training isn't just for young athletes. For adults over 60, it's one of the most important things you can do for your health, independence, and quality of life.",
    category: "Senior Health",
    date: "2025-09-15",
  },
  {
    slug: "auto-accident-whiplash-injuries",
    title: "Auto Accident & Whiplash Injuries",
    excerpt: "Whiplash symptoms can be delayed by days or even weeks. Learn why early chiropractic evaluation after a car accident is critical, and how we coordinate with attorneys and insurance.",
    category: "Conditions",
    date: "2026-01-03",
  },
  {
    slug: "low-back-pain-causes",
    title: "Low Back Pain — What Is the Cause?",
    excerpt: "Low back pain has many sources: sprains, disc injuries, and joint dysfunction. Understanding the specific cause is the first step toward effective treatment.",
    category: "Conditions",
    date: "2026-02-02",
  },
  {
    slug: "neck-pain-understanding-the-source",
    title: "Neck Pain: Understanding the Source Matters",
    excerpt: "Not all neck pain is created equal. The three primary pain generators — joints, discs, and muscles — each require different treatment approaches.",
    category: "Conditions",
    date: "2026-02-10",
  },
  {
    slug: "chiropractic-treatment-of-headaches",
    title: "Chiropractic Treatment of Headaches",
    excerpt: "Tension headaches, migraines, and cervicogenic headaches each have distinct causes. Chiropractic care and acupuncture offer drug-free relief for all three.",
    category: "Conditions",
    date: "2026-02-10",
  },
  {
    slug: "injury-rehabilitation-chiropractic",
    title: "Injury Rehabilitation Chiropractic Care",
    excerpt: "Our 4-step rehabilitation process takes you from acute pain relief through functional restoration to long-term strength and prevention.",
    category: "Services",
    date: "2026-03-05",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Blog"
        title="Health & wellness."
        subtitle="Tips, insights, and advice from our doctors to help you live a healthier, more active life."
      />

      <section className="section bg-stone">
        <ScrollFade stagger>
          <div className="grid-layout">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`col-full fade-in group ${i > 0 ? "mt-[var(--space-4)]" : ""}`}
              >
                <div className={`py-[var(--space-8)] ${i < posts.length - 1 ? "border-b border-clay/10" : ""}`}>
                  <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
                    {post.category} &middot; {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                  <h2 className="mt-[var(--space-3)] font-[family-name:var(--font-playfair)] font-light text-navy group-hover:text-gold transition-colors duration-200" style={{ fontSize: "var(--text-3xl)" }}>
                    {post.title}
                  </h2>
                  <p className="mt-[var(--space-3)] font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed max-w-2xl" style={{ fontSize: "var(--text-base)" }}>
                    {post.excerpt}
                  </p>
                  <span className="mt-[var(--space-4)] inline-block font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-200">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollFade>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";
import { clinic } from "@/lib/data/clinic";

const posts: Record<string, { title: string; category: string; date: string; content: string[]; links?: { text: string; url: string }[]; youtubeEmbed?: string }> = {
  "benefits-of-group-exercise-classes": {
    title: "Doctor-Guided Small Group Exercise Classes",
    category: "Fitness",
    date: "2025-12-08",
    content: [
      "New for January — Modern Health and Wellness is launching doctor-guided small group exercise classes led by Dr. Spencer Hackett, CSCS.",
      "These are not generic gym classes. Every session is designed by a chiropractor and certified strength and conditioning specialist who understands injury prevention, movement mechanics, and how to safely progress adults of all fitness levels.",
      "We're offering three age-specific tiers to ensure personalized attention: Ages 30–45 (athletic performance and injury prevention), Ages 50+ (functional strength and mobility), and Ages 60+ (safe, supervised strength training for healthy aging).",
      "Class sizes are kept small so Dr. Spencer can provide individualized corrections and modifications. Whether you're coming back from an injury, trying to stay active, or looking for structured guidance, these classes meet you where you are.",
      "Early-bird pricing: $100/month (regularly $130/month). We're also offering a gift-a-friend promotion — sign up a friend and both of you get the early-bird rate.",
      "Ready to sign up? Fill out our early-bird sign-up form (link below) or call the office at (203) 230-2225.",
    ],
    links: [
      { text: "Early-Bird / Gift-a-Friend Sign-Up Form", url: "https://forms.gle/eTTTBtF8CZbdp9fCA" },
    ],
  },
  "strength-training-for-seniors": {
    title: "Stay Strong After 60: Safe, Doctor-Guided Strength Training for Healthy Aging",
    category: "Senior Health",
    date: "2025-09-15",
    content: [
      "After age 30, we lose approximately 3–5% of our muscle mass per decade. By age 60, this muscle loss — called sarcopenia — can significantly impact your strength, balance, mobility, and independence. The good news? Strength training can slow, stop, and even reverse this process at any age.",
      "Dr. Spencer Hackett, our CSCS-certified chiropractor and strength coach, has developed specialized training programs for adults over 60. His approach combines clinical knowledge of the aging musculoskeletal system with evidence-based strength and conditioning principles.",
      "The benefits of strength training for seniors extend far beyond bigger muscles. Regular resistance exercise: improves bone density (reducing fracture risk), enhances joint stability, boosts metabolism, improves blood sugar regulation, and even supports cognitive function. Studies have shown that seniors who strength train regularly have a significantly lower risk of falls — the leading cause of injury-related death in adults over 65.",
      "One of the biggest misconceptions is that strength training is dangerous for older adults. In fact, when properly supervised, it's one of the safest and most beneficial forms of exercise available. The key is appropriate programming — starting with manageable loads, focusing on proper technique, and progressing gradually.",
      "Our senior strength training programs begin with a thorough movement assessment to identify any limitations, imbalances, or areas of concern. From there, Dr. Spencer creates a personalized program that addresses your specific goals — whether that's staying independent, playing with your grandchildren, getting back to a sport, or simply feeling stronger and more confident in your daily life.",
      "You don't need to be in great shape to start. You just need to start. Contact us at (203) 230-2225 to learn more about our personal training programs for adults 60 and older.",
    ],
  },
  "auto-accident-whiplash-injuries": {
    title: "Auto Accident & Whiplash Injuries: How Chiropractic Care Can Help",
    category: "Conditions",
    date: "2026-01-03",
    content: [
      "Auto accidents can happen in the blink of an eye. Even minor collisions may lead to back or neck pain that develops over time. At Modern Health & Wellness, our auto accident chiropractic care focuses on helping patients recover safely while providing guidance and support throughout the process.",
      "We work closely with attorneys and law firms to ensure your care is documented properly and your recovery is supported from start to finish. Your recovery and peace of mind is our top priority.",
      "Even if you feel fine immediately after an accident, injuries can become noticeable days or weeks later. Common delayed symptoms include: neck stiffness or pain, shoulder or upper back discomfort, lower back pain, headaches or dizziness, and limited range of motion. These issues often stem from whiplash or soft tissue trauma, and without proper evaluation, even minor injuries can become chronic problems.",
      "Chiropractic care after an auto accident is more than pain relief — it is a structured approach to ensure full recovery and prevent long-term complications.",
      "Step 1 — Comprehensive Evaluation: Our chiropractors assess your spine, posture, and musculoskeletal function to identify sources of back and neck pain. Early evaluation helps detect issues before they worsen.",
      "Step 2 — Structured Re-Examinations: Auto injuries can change over time. Regular follow-ups allow us to track recovery progress, adjust treatment as needed, and address any emerging back or neck pain promptly.",
      "Step 3 — Targeted Chiropractic Treatments: Treatment may include gentle and safe spinal adjustments to restore proper movement, soft tissue therapies to reduce inflammation and restore motion, and rehabilitation exercises to strengthen muscles and prevent reinjury.",
      "Step 4 — Coordination With Attorneys: We work closely with your legal team to provide clear documentation of your care, support your claims process while you focus on recovery, and ensure peace of mind throughout your healing journey.",
      "Why early chiropractic care matters: it helps reduce pain and inflammation quickly, helps prevent chronic back or neck issues, improves long-term mobility and function, and ensures your recovery is fully documented for legal purposes.",
      "Even minor collisions can have lasting effects if injuries are overlooked. If you've been in an auto accident or are experiencing back or neck pain, don't wait. Contact us today or book online to schedule your evaluation.",
    ],
  },
  "low-back-pain-causes": {
    title: "Low Back Pain — What Is the Cause?",
    category: "Conditions",
    date: "2026-02-02",
    content: [
      "Low back pain is one of the most common reasons people seek care, but it is rarely caused by a single issue. At Modern Health & Wellness, we focus on identifying the primary pain generator — the structure responsible for your symptoms — so care is precise, safe, and effective.",
      "Rather than relying on labels alone, our approach is guided by your history, physical exam, and how your pain responds to movement and daily activities.",
      "Common Cause #1 — Sprain or Strain: Muscle and ligament injuries often result from lifting, twisting, prolonged sitting, or sudden movements. Symptoms include localized lower back pain, muscle tightness or stiffness, and pain that worsens with activity and improves with rest.",
      "Common Cause #2 — Disc-Related Pain & Sciatica: Disc-related issues can irritate nearby nerves, leading to pain that may travel into the hip or leg. Symptoms include low back pain with leg pain (sciatica), tingling or numbness, and pain aggravated by sitting or bending.",
      "Common Cause #3 — Joint-Based Low Back Pain: Spinal joint irritation can develop from repetitive stress, poor posture, or injury. Symptoms include stiffness or one-sided low back pain, pain with twisting or standing, and relief with movement or position changes.",
      "When is imaging needed? Imaging is used when clinically relevant, based on exam findings, symptoms, and response to care. Most cases of low back pain can be safely and effectively managed with conservative treatment first.",
      "How chiropractic care helps: Chiropractic care addresses low back pain by improving movement, reducing irritation, and supporting long-term recovery. Treatment includes gentle spinal adjustments to restore joint motion, non-adjusting techniques including traction to reduce nerve and joint irritation, soft tissue therapies to relieve muscle tension, and rehabilitation exercises to improve stability and prevent recurrence. These techniques are well tolerated by patients of all ages, extremely safe, and tailored to your comfort level.",
      "If you're dealing with low back pain, identifying the true source of the problem matters. Contact us today or book online to schedule your evaluation.",
    ],
    links: [
      { text: "Research: Identifying Pain Generators (ScienceDirect)", url: "https://www.sciencedirect.com/science/article/abs/pii/S1529943003001773" },
    ],
  },
  "neck-pain-understanding-the-source": {
    title: "Neck Pain: Understanding the Source Matters",
    category: "Conditions",
    date: "2026-02-10",
    content: [
      "Neck pain is common, but 'neck pain' is not one single condition. Symptoms can come from different pain generators, and understanding the source is key to effective, long-lasting relief. Neck pain may develop suddenly after an injury or gradually from posture, repetitive stress, or daily habits.",
      "Care focuses on identifying the primary pain generator and choosing the safest, most effective tools for each situation.",
      "Pain Generator #1 — Sprain or Strain: Neck strains and sprains involve injury to muscles, tendons, or ligaments. These often occur from sudden movements, poor posture, prolonged screen use, or motor vehicle accidents. Symptoms include local neck stiffness or soreness, pain with movement, and muscle tightness or spasms. While often considered 'simple,' unresolved sprain-strain injuries can contribute to ongoing dysfunction and inflammation if not managed properly.",
      "Pain Generator #2 — Disc or Nerve Injury: A cervical disc lesion occurs when the outer fibers of a disc weaken or tear, allowing internal material to shift. This can create inflammation or mechanical pressure on nearby nerve roots. Disc injuries usually develop over time from repetitive stress rather than a single event. Symptoms include neck pain, arm pain or tingling, and numbness or weakness. Both chemical irritation and mechanical compression can contribute to symptoms, which is why individualized care is important.",
      "Pain Generator #3 — Joint Dysfunction: Mechanical neck pain often originates from irritation or restricted motion in the cervical facet joints. These joints guide movement in the neck and are sensitive to posture, muscle imbalance, and prolonged sitting. Symptoms include localized neck pain, reduced range of motion, and pain with turning or looking up. If left unaddressed, joint dysfunction can contribute to recurring pain and early degenerative changes.",
      "Why neck pain often persists or returns: Neck pain often involves more than one structure at a time. Muscle strain, ligament sprain, joint irritation, and disc involvement frequently overlap. Factors such as prolonged smartphone use, poor posture, stress, and sedentary habits may increase the risk of chronic symptoms. That's why care should address movement, joint mechanics, muscle balance, and nerve irritation together — not just pain alone.",
      "How chiropractic care helps: gentle spinal adjustments when appropriate, non-adjusting techniques such as traction to reduce nerve and joint irritation, soft tissue therapies to improve mobility, and exercise and posture guidance to prevent recurrence. These approaches are well tolerated, extremely safe, and adapted to each individual's needs and comfort level. Imaging is used when clinically relevant, based on history, symptoms, and response to care.",
      "Neck pain doesn't have to be something you 'just live with.' Whether your symptoms stem from strain, joint dysfunction, or disc involvement, identifying the pain generator is the first step toward recovery. Schedule an evaluation to determine the cause and begin safe, targeted care.",
    ],
    youtubeEmbed: "https://www.youtube.com/embed/UqSHjomLCRU",
  },
  "chiropractic-treatment-of-headaches": {
    title: "Chiropractic Treatment of Headaches: Different Types, Different Causes",
    category: "Conditions",
    date: "2026-02-10",
    content: [
      "Headaches are extremely common, but not all headaches are the same. Symptoms may come from muscle tension, joint dysfunction, nerve involvement, or neurologic sensitivity. Understanding the type of headache is the first step toward effective, lasting treatment.",
      "Tension-Type Headaches: The most common headache in clinical practice. They feel like a dull, pressing, or tightening band around the head. Duration ranges from minutes to days. Common contributors include muscle tension, stress, poor sleep, and prolonged sitting. Treatment focuses on manual therapy, spinal manipulation, soft tissue techniques, and posture-focused exercises.",
      "Migraines: A complex neurologic condition with recurrent moderate to severe headaches. May include aura with visual disturbances, numbness, nausea, and sensitivity to light and sound. Influenced by neurologic and vascular factors, hormonal changes, and lifestyle triggers. Treatment focuses on trigger management, lifestyle modification, exercise, and manual therapies.",
      "Cervicogenic Headaches: Estimated to account for 15–25% of all headaches. Pain is referred from irritated joints, muscles, or nerves in the neck. Associated with neck stiffness, poor posture, screen use, and upper cervical dysfunction. Treatment focuses on restoring normal joint motion, reducing muscle tension, and improving movement patterns.",
      "Why headaches often overlap: Many patients experience more than one headache type at the same time. Tension-type and cervicogenic headaches frequently coexist, making accurate assessment essential for effective care.",
      "How chiropractic care helps: safe, efficacious spinal manipulation or mobilization, non-adjusting techniques, soft tissue therapy and trigger point work, and exercise, posture, and lifestyle guidance. Treatment is well tolerated, extremely safe, and supported by clinical research.",
      "If you suffer from chronic headaches, a thorough evaluation can identify the source. Contact Modern Health & Wellness to schedule your assessment.",
    ],
  },
  "injury-rehabilitation-chiropractic": {
    title: "Injury Rehabilitation Chiropractic Care in Hamden",
    category: "Services",
    date: "2026-03-05",
    content: [
      "Injuries are rarely solved with a single adjustment, one exercise or PT session, or a single day on a medication. At Modern Health and Wellness, our approach to chiropractic care focuses on structured injury rehabilitation — not just temporary symptom relief.",
      "Whether you were hurt in a car accident, during sports, at work, or from repetitive stress, recovery requires a clear plan. Our goal is simple: reduce pain, restore movement, and rebuild strength so the problem doesn't return.",
      "What makes injury rehabilitation different from traditional care? Traditional care can reduce discomfort quickly. But lasting recovery requires more than symptom management. Our approach includes: comprehensive movement assessment, targeted and safe chiropractic adjustments, soft tissue therapy when appropriate, corrective exercise prescription, and ongoing progress re-evaluation.",
      "Common injuries we treat: auto accident injuries and whiplash, sports-related injuries, work-related strain injuries, chronic neck and back pain, and shoulder and hip dysfunction. If you were injured in a motor vehicle accident, visit our Auto Accident Injury page for specific information about documentation, insurance coordination, and recovery planning.",
      "Our step-by-step process: Step 1 — Evaluation: A thorough physical exam identifies the pain generator and any underlying dysfunction. Prior imaging, if available, is reviewed. Additional imaging may be recommended through our partner Whitney Imaging / Midstate Radiology or Hartford Healthcare. Step 2 — Targeted Treatment: Safe chiropractic adjustments, soft tissue therapy, and non-adjusting techniques are used to reduce pain and restore joint function. Step 3 — Corrective Exercise: Specific exercises are prescribed to restore strength, mobility, and stability. Dr. Spencer Hackett's CSCS certification ensures exercise programming is clinically informed. Step 4 — Re-Evaluation & Prevention: Progress is tracked with structured re-examinations. Care evolves with your recovery, and long-term prevention strategies are built in.",
      "Care is always personalized and guided by three criteria: best available evidence-based practice guidelines, physicians' expertise with similar conditions, and patients' comfort, goals, and trust.",
      "If you've been injured — whether recently or dealing with lingering pain — don't wait. Contact Modern Health & Wellness at (203) 230-2225 or book online to schedule your evaluation and start your path to full recovery.",
    ],
    links: [
      { text: "Whitney Imaging / Midstate Radiology", url: "https://www.midstateradiology.com/locations/whitney-imaging/" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = posts[slug];
    if (!post) return { title: "Not Found" };
    return { title: post.title, description: post.content[0].slice(0, 155) + "..." };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <div className="pt-32 pb-[var(--space-8)] bg-warm-white">
        <div className="grid-layout">
          <div className="col-full">
            <Link href="/blog" className="font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-clay hover:text-navy transition-colors duration-200">
              &larr; Blog
            </Link>
          </div>
        </div>
      </div>

      <section className="pb-[var(--space-16)] bg-warm-white">
        <div className="grid-layout">
          <div className="col-full md:col-left-7">
            <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay" style={{ fontSize: "var(--text-xs)" }}>
              {post.category} &middot; {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
            <h1 className="mt-[var(--space-4)] font-[family-name:var(--font-playfair)] font-semibold text-navy" style={{ fontSize: "var(--text-5xl)", lineHeight: 1.15 }}>
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="section bg-stone">
        <ScrollFade>
          <div className="grid-layout">
            <div className="col-full md:col-left-7 fade-in space-y-[var(--space-6)]">
              {post.content.map((p, i) => (
                <p key={i} className="font-[family-name:var(--font-dm-sans)] text-charcoal-light leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
                  {p}
                </p>
              ))}

              {post.youtubeEmbed && (
                <div className="mt-[var(--space-8)]">
                  <iframe
                    src={post.youtubeEmbed}
                    title="Video"
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {post.links && post.links.length > 0 && (
                <div className="mt-[var(--space-8)] pt-[var(--space-6)] border-t border-clay/10">
                  <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.2em] text-clay mb-[var(--space-3)]" style={{ fontSize: "var(--text-xs)" }}>
                    Resources
                  </p>
                  {post.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-[family-name:var(--font-dm-sans)] text-navy hover:text-gold transition-colors duration-200 mb-[var(--space-2)] break-words"
                      style={{ fontSize: "var(--text-sm)" }}
                    >
                      {link.text} &rarr;
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ScrollFade>
      </section>

      <section className="bg-navy py-[var(--space-20)]">
        <div className="grid-layout">
          <div className="col-full flex flex-col items-center text-center">
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-white" style={{ fontSize: "var(--text-4xl)" }}>
              Questions? We&apos;re here to help.
            </h2>
            <a href={`tel:${clinic.phoneRaw}`} className="mt-[var(--space-8)] bg-gold px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-gold-dark cursor-pointer">
              {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

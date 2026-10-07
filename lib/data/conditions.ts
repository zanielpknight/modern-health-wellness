export interface Condition {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  symptoms: string[];
  howWeHelp: string;
  relatedServices: string[];
  icon: string;
}

export const conditions: Condition[] = [
  {
    slug: "auto-accident-whiplash",
    name: "Auto Accident & Whiplash",
    shortDescription:
      "Comprehensive care for whiplash and auto accident injuries — from acute pain relief to full recovery.",
    description:
      "Auto accidents can cause injuries that aren't immediately apparent. Whiplash, the most common auto accident injury, occurs when the head is suddenly jerked forward and backward, straining the muscles, ligaments, and joints of the neck. Without proper treatment, whiplash can lead to chronic pain, headaches, and reduced mobility. At Modern Health & Wellness, we specialize in diagnosing and treating the full spectrum of auto accident injuries. Our integrated approach combines chiropractic adjustments, soft tissue therapy, and progressive rehabilitation to help you recover completely — not just mask the pain.",
    symptoms: [
      "Neck pain and stiffness",
      "Headaches (especially at the base of the skull)",
      "Shoulder and upper back pain",
      "Dizziness or blurred vision",
      "Difficulty concentrating or sleeping",
      "Numbness or tingling in arms",
      "Jaw pain (TMJ)",
    ],
    howWeHelp:
      "We start with a thorough examination to assess the full extent of your injuries, including any hidden damage that may not show symptoms right away. Your treatment plan may include chiropractic adjustments to restore proper spinal alignment, soft tissue therapy to address muscle damage, and targeted rehab exercises to rebuild strength and stability. We also work with attorneys and insurance companies to ensure your care is properly documented.",
    relatedServices: ["injury-rehab-chiropractic", "massage", "acupuncture"],
    icon: "Car",
  },
  {
    slug: "low-back-pain",
    name: "Low Back Pain",
    shortDescription:
      "Expert diagnosis and treatment for acute and chronic low back pain — the most common reason people visit a chiropractor.",
    description:
      "Low back pain affects 80% of adults at some point in their lives and is the leading cause of disability worldwide. Whether yours is caused by a herniated disc, muscle strain, poor posture, or degenerative changes, our team has the experience and tools to help. We take a comprehensive approach that addresses the underlying cause of your pain — not just the symptoms — so you can get back to living your life without limitation.",
    symptoms: [
      "Dull aching or sharp pain in the lower back",
      "Pain that radiates into the buttocks or legs (sciatica)",
      "Stiffness or reduced range of motion",
      "Difficulty standing up straight",
      "Pain that worsens with sitting or bending",
      "Muscle spasms",
    ],
    howWeHelp:
      "After a comprehensive exam and any necessary imaging, we develop a personalized plan combining chiropractic adjustments, therapeutic exercises, and lifestyle modifications. For many patients, we also incorporate massage therapy and targeted strengthening to prevent recurrence. Our goal isn't just pain relief — it's building a stronger, more resilient back.",
    relatedServices: [
      "injury-rehab-chiropractic",
      "personal-training",
      "massage",
    ],
    icon: "Lightning",
  },
  {
    slug: "neck-pain",
    name: "Neck Pain",
    shortDescription:
      "Relief from neck pain caused by poor posture, tech neck, injuries, and degenerative conditions.",
    description:
      "In today's screen-dominated world, neck pain has become an epidemic. Whether it's caused by hours hunched over a computer (tech neck), sleeping in an awkward position, an old injury, or degenerative disc disease, chronic neck pain can significantly impact your quality of life. Our doctors specialize in identifying the specific structures causing your pain and developing targeted treatment plans that restore mobility and provide lasting relief.",
    symptoms: [
      "Persistent neck stiffness or soreness",
      "Pain that worsens when holding your head in one position",
      "Headaches originating from the neck",
      "Reduced ability to turn your head",
      "Numbness or tingling in arms or hands",
      "Grinding or clicking sensation with movement",
    ],
    howWeHelp:
      "Our approach combines precise chiropractic adjustments to restore proper cervical alignment with targeted exercises to strengthen supporting muscles. We also address ergonomic factors — your workstation setup, sleeping position, and daily habits — that may be contributing to your pain. Many patients experience significant improvement within the first few visits.",
    relatedServices: [
      "injury-rehab-chiropractic",
      "massage",
      "acupuncture",
    ],
    icon: "Bone",
  },
  {
    slug: "headaches",
    name: "Headaches & Migraines",
    shortDescription:
      "Drug-free relief for tension headaches, cervicogenic headaches, and migraines through chiropractic and acupuncture.",
    description:
      "If you're one of the millions who suffer from chronic headaches, you know how debilitating they can be. What many people don't realize is that the majority of headaches — including tension headaches and cervicogenic headaches — originate from problems in the neck and upper back. Chiropractic care and acupuncture have both been shown to be highly effective at reducing headache frequency, duration, and intensity without the side effects of medication.",
    symptoms: [
      "Frequent tension-type headaches",
      "Migraines with or without aura",
      "Headaches that start at the base of the skull",
      "Pain behind the eyes",
      "Headaches triggered by neck movement or posture",
      "Headaches accompanied by neck stiffness",
    ],
    howWeHelp:
      "We start by identifying the type and source of your headaches through a detailed examination. Treatment typically includes cervical adjustments to improve spinal function, soft tissue work to release trigger points in the neck and shoulders, and acupuncture for natural pain management. We also help you identify and modify triggers including posture, stress, diet, and sleep habits.",
    relatedServices: [
      "injury-rehab-chiropractic",
      "acupuncture",
      "massage",
    ],
    icon: "Brain",
  },
  {
    slug: "shoulder-pain",
    name: "Shoulder Pain",
    shortDescription:
      "Comprehensive treatment for rotator cuff injuries, frozen shoulder, impingement, and other shoulder conditions.",
    description:
      "The shoulder is one of the most complex and mobile joints in the body, making it vulnerable to a wide range of injuries and conditions. Whether you're dealing with a rotator cuff tear, frozen shoulder, impingement syndrome, or shoulder instability, our team combines chiropractic care with targeted rehabilitation to restore function and reduce pain. Dr. Bell's strength and conditioning background is particularly valuable for shoulder rehabilitation, ensuring you rebuild both mobility and strength.",
    symptoms: [
      "Pain when reaching overhead or behind your back",
      "Weakness when lifting or carrying",
      "Clicking, popping, or grinding in the shoulder",
      "Difficulty sleeping on the affected side",
      "Reduced range of motion",
      "Sharp pain with specific movements",
    ],
    howWeHelp:
      "Our treatment begins with a thorough shoulder examination to identify the specific structures involved. Care typically includes joint mobilization, soft tissue therapy, and a progressive exercise program designed to restore full function. We coordinate chiropractic adjustments with targeted strengthening to ensure your shoulder heals properly and stays strong.",
    relatedServices: [
      "injury-rehab-chiropractic",
      "personal-training",
      "massage",
    ],
    icon: "ArrowsOutCardinal",
  },
  {
    slug: "sports-injuries",
    name: "Sports Injuries",
    shortDescription:
      "From weekend warriors to NCAA athletes — expert sports injury treatment and performance optimization.",
    description:
      "As the team chiropractors for the Austin Rivermen Hockey Club — 2023 Southwest Regional Champions — our doctors understand the demands athletes place on their bodies. Whether you're a competitive athlete dealing with a sports-specific injury or a recreational player who overdid it on the weekend, we provide the same level of expert care. Our approach goes beyond just treating the injury — we identify the underlying biomechanical issues that led to it and build a plan to get you back in the game stronger than before.",
    symptoms: [
      "Acute pain from a specific incident",
      "Chronic overuse injuries",
      "Muscle strains and ligament sprains",
      "Joint instability or recurring dislocations",
      "Reduced athletic performance",
      "Persistent soreness that doesn't resolve with rest",
    ],
    howWeHelp:
      "Our sports injury protocol combines rapid pain management with functional rehabilitation. We use chiropractic adjustments, soft tissue techniques, and evidence-based exercise prescription to accelerate your return to sport. Dr. Bell's CSCS certification means your rehab program is designed with athletic performance in mind — not just getting you pain-free, but getting you back to peak performance.",
    relatedServices: [
      "injury-rehab-chiropractic",
      "personal-training",
      "massage",
    ],
    icon: "Trophy",
  },
  {
    slug: "post-pt-recovery",
    name: "Post-PT Recovery & Training",
    shortDescription:
      "Continuing care after physical therapy to maintain gains, build strength, and prevent re-injury.",
    description:
      "Many patients finish physical therapy feeling better but not fully confident in their strength or stability. Post-PT recovery bridges the gap between rehabilitation and real-world performance. Whether you've completed PT for a knee surgery, back injury, or shoulder repair, our integrated approach ensures you don't lose the progress you've made — and that you continue building toward full function and resilience.",
    symptoms: [
      "Lingering weakness after completing PT",
      "Fear of re-injury during normal activities",
      "Stiffness or limited mobility that hasn't fully resolved",
      "Difficulty returning to exercise or sport",
      "Recurring flare-ups of the original injury",
      "Plateau in recovery progress",
    ],
    howWeHelp:
      "Our post-PT program combines chiropractic adjustments to maintain joint mobility with Dr. Bell's strength and conditioning expertise to progressively load and strengthen the affected area. We pick up where PT left off — with a plan that evolves as you get stronger. The goal is to get you back to full activity, not just pain-free but performing at your best.",
    relatedServices: [
      "injury-rehab-chiropractic",
      "personal-training",
    ],
    icon: "ArrowsOutCardinal",
  },
];

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}

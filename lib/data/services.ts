export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string; // Phosphor icon name
  featured?: boolean;
  providers?: string[];
  benefits?: string[];
  whatToExpect?: string;
  relatedConditions?: string[];
}

export const services: Service[] = [
  {
    slug: "injury-rehab-chiropractic",
    name: "Injury Rehab & Chiropractic",
    shortDescription:
      "Evidence-based chiropractic adjustments and rehabilitation for injuries, chronic pain, and everyday wellness.",
    description:
      "Injuries are rarely solved with a single adjustment, one exercise, or a single day on medication. At Modern Health and Wellness, our approach focuses on structured injury rehabilitation — not just temporary symptom relief. Whether you were hurt in a car accident, during sports, at work, or from repetitive stress, recovery requires a clear plan. Our goal is simple: reduce pain, restore movement, and rebuild strength so the problem doesn't return. Our structured 4-step process includes: (1) Comprehensive movement assessment and evaluation, (2) Targeted and safe chiropractic adjustments, (3) Soft tissue therapy and corrective exercise prescription, and (4) Ongoing progress re-evaluation. Imaging is available through our imaging partner, [Imaging partner], and initial consultations with exam and x-rays are available through [Healthcare partner] — covered by most insurances. We work with all attorneys and law firms to support auto accident and workers' compensation recovery.",
    icon: "FirstAid",
    featured: true,
    providers: ["Dr. [Doctor name 1]", "Dr. [Doctor name 3]"],
    benefits: [
      "Drug-free pain relief",
      "Improved range of motion",
      "Faster recovery from injuries",
      "Better posture and alignment",
      "Preventive wellness care",
    ],
    whatToExpect:
      "Your first visit includes a comprehensive exam, health history review, and if needed, same-day treatment. Initial consultations with exam and x-rays are available through [Healthcare partner] — covered by most insurances. We also coordinate with attorneys and insurance companies for auto accident and workers' compensation cases. Follow-up visits focus on targeted adjustments and progressive rehabilitation exercises to build long-term resilience.",
    relatedConditions: [
      "auto-accident-whiplash",
      "low-back-pain",
      "neck-pain",
      "headaches",
      "shoulder-pain",
      "sports-injuries",
    ],
  },
  {
    slug: "personal-training",
    name: "Personal Training",
    shortDescription:
      "Strength and conditioning programs designed by a CSCS-certified chiropractor who understands your body inside and out.",
    description:
      "Our personal training program is unlike anything you'll find at a gym. Led by Dr. [Doctor name 3] — a Certified Strength and Conditioning Specialist with a background in physical therapy — every workout is informed by clinical knowledge of your musculoskeletal system. We design programs that work with your body, not against it, whether you're building strength after rehab, training for athletic performance, or staying strong as you age. Future chiropractors also serve as trainers under Dr. Spencer's direct guidance. Programs are available for all ages and abilities. You do not need to be an existing patient to sign up.",
    icon: "Barbell",
    featured: true,
    providers: ["Dr. [Doctor name 3]"],
    benefits: [
      "Clinically informed programming",
      "Safe post-rehab strength building",
      "Athletic performance optimization",
      "Strength training for seniors (60+)",
      "Accountability and form correction",
    ],
    whatToExpect:
      "Sessions begin with a movement assessment to identify imbalances and limitations. From there, we build a progressive program that evolves with your strength and goals. Sessions are available one-on-one or in small groups. You do not need to be an existing patient to sign up for personal training. Your first session is discounted. To inquire, email [Email address] or call [Phone number].",
    relatedConditions: ["low-back-pain", "sports-injuries", "shoulder-pain"],
  },
  {
    slug: "acupuncture",
    name: "Acupuncture",
    shortDescription:
      "Traditional acupuncture treatments for pain relief, stress reduction, and whole-body balance.",
    description:
      "Dr. [Doctor name 2] brings a holistic approach to healing through acupuncture — an ancient practice backed by modern research. By stimulating specific points along the body's meridians, acupuncture promotes natural pain relief, reduces inflammation, and restores balance to the nervous system. Acupuncture treats a wide range of conditions including pain, headaches, sciatica, addictions, and weight loss. Treatments include both traditional acupuncture and auriculotherapy (ear acupuncture). Acupuncture is covered by certain insurances — call our office to verify your coverage.",
    icon: "Drop",
    providers: ["Dr. [Doctor name 2]"],
    benefits: [
      "Natural pain management",
      "Reduced stress and anxiety",
      "Improved sleep quality",
      "Enhanced immune function",
      "Complement to chiropractic care",
    ],
    whatToExpect:
      "Your first session includes a thorough health intake and diagnostic assessment. Treatments include traditional acupuncture as well as auriculotherapy (ear acupuncture). Sessions are gentle, relaxing, and typically last 25-30 minutes. Many patients feel relief after just one or two sessions. Acupuncture is covered by certain insurances — call our office to verify your coverage.",
    relatedConditions: ["headaches", "neck-pain", "low-back-pain"],
  },
  {
    slug: "massage",
    name: "Massage Therapy",
    shortDescription:
      "Therapeutic massage to release tension, improve circulation, and accelerate recovery.",
    description:
      "We have two licensed massage therapists on staff who work alongside our chiropractic team to provide integrated care that addresses your whole body. Massage therapy breaks up adhesions, improves circulation, and helps your adjustments hold longer. We offer a range of modalities including deep tissue, Swedish, trigger point therapy, and sports massage — each tailored to your specific needs and comfort level. Please note: massage appointments must be booked by calling our office at [Phone number] — online booking is not available for massage.",
    icon: "Hands",
    benefits: [
      "Muscle tension and stress relief",
      "Improved circulation and flexibility",
      "Faster post-adjustment recovery",
      "Reduced headache frequency",
      "Better sleep and relaxation",
    ],
    whatToExpect:
      "Let us know your goals and trouble areas. Your therapist will customize pressure and technique to match your needs, whether that's deep therapeutic work or gentle relaxation. Sessions range from 30 to 90 minutes.",
    relatedConditions: [
      "neck-pain",
      "low-back-pain",
      "headaches",
      "shoulder-pain",
    ],
  },
  {
    slug: "weight-loss-nutrition",
    name: "Weight Loss & Nutrition",
    shortDescription:
      "Personalized nutrition counseling and weight management programs grounded in functional medicine.",
    description:
      "Dr. [Doctor name 2] provides physician-monitored weight loss and nutritional counseling combining nutritional science with a functional medicine approach. Our programs go beyond calorie counting — we use Bioelectrical Impedance Analysis (BIA) to measure body composition, address the root causes of weight gain including hormonal imbalances, food sensitivities, and metabolic health. With customized meal plans and weekly counseling sessions, we help you build sustainable habits that transform your health from the inside out.",
    icon: "Leaf",
    providers: ["Dr. [Doctor name 2]"],
    benefits: [
      "Personalized nutrition plans",
      "Metabolic health optimization",
      "Food sensitivity identification",
      "Sustainable lifestyle changes",
      "Ongoing accountability and support",
    ],
    whatToExpect:
      "Your journey begins with a comprehensive health assessment including dietary analysis. We create a customized nutrition plan that fits your lifestyle, preferences, and health goals. Regular check-ins keep you on track.",
  },
  {
    slug: "yoga",
    name: "Yoga",
    shortDescription:
      "Group yoga classes designed to improve flexibility, strength, and mindfulness for all levels.",
    description:
      "Our yoga program complements our clinical services by helping you build flexibility, core strength, and body awareness. Classes are designed for all levels — from complete beginners to experienced practitioners — and are informed by our understanding of musculoskeletal health. Yoga is an excellent way to maintain the gains from chiropractic care, reduce stress, and build a stronger connection between mind and body.",
    icon: "Person",
    benefits: [
      "Improved flexibility and balance",
      "Core strength development",
      "Stress and anxiety reduction",
      "Better body awareness",
      "Complement to chiropractic care",
    ],
    whatToExpect:
      "We now offer yoga classes. Please call our office at [Phone number] to sign up and get details on schedules and pricing.",
  },
  {
    slug: "health-products",
    name: "Health Products",
    shortDescription:
      "Doctor-recommended supplements, supports, and wellness products available in-office and online.",
    description:
      "We carry a curated selection of professional-grade supplements, orthotics, supports, and wellness products that our doctors personally recommend. Everything in our product line has been vetted for quality and efficacy. Whether you need a cervical pillow for better sleep, nutritional supplements to support your treatment plan, or a foam roller for home maintenance, we have you covered.",
    icon: "Package",
    benefits: [
      "Doctor-vetted quality",
      "Professional-grade supplements",
      "Supports and braces",
      "Home care tools",
      "Convenient in-office pickup",
    ],
    whatToExpect:
      "Ask any of our doctors or staff for product recommendations during your visit. We can also help you find the right products for home care between appointments.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

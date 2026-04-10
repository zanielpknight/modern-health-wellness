export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  condition?: string;
  service?: string;
  source?: "google" | "yelp" | "website";
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    text: "After my car accident, I was in constant pain and couldn't turn my neck. Dr. Pat and his team had me feeling like myself again within a few weeks. They truly care about their patients — it's not just a number game here.",
    rating: 5,
    condition: "auto-accident-whiplash",
    service: "injury-rehab-chiropractic",
    source: "google",
  },
  {
    id: 2,
    name: "Michael R.",
    text: "I've been going to Modern Health for over 10 years. Dr. Hackett is the best chiropractor I've ever been to. The entire staff is friendly and professional. They take the time to listen and explain everything.",
    rating: 5,
    service: "injury-rehab-chiropractic",
    source: "yelp",
  },
  {
    id: 3,
    name: "Jennifer K.",
    text: "Dr. Rakus's acupuncture treatments have been life-changing for my chronic migraines. I went from 3-4 headaches a week to maybe one a month. I wish I had started sooner.",
    rating: 5,
    condition: "headaches",
    service: "acupuncture",
    source: "google",
  },
  {
    id: 4,
    name: "Tom D.",
    text: "Dr. Spencer's personal training program helped me get back to the gym safely after my back surgery. His knowledge of both chiropractic and strength training is exactly what I needed. I'm stronger now than before my injury.",
    rating: 5,
    condition: "low-back-pain",
    service: "personal-training",
    source: "google",
  },
  {
    id: 5,
    name: "Lisa P.",
    text: "I've been to many chiropractors over the years, but Modern Health is different. They don't just crack your back and send you on your way. They actually figure out what's wrong and create a real plan to fix it.",
    rating: 5,
    service: "injury-rehab-chiropractic",
    source: "yelp",
  },
  {
    id: 6,
    name: "David W.",
    text: "The massage therapy here is outstanding. Combined with my chiropractic adjustments, I've finally been able to manage my chronic neck pain. The whole team works together on your care.",
    rating: 5,
    condition: "neck-pain",
    service: "massage",
    source: "google",
  },
  {
    id: 7,
    name: "Amanda S.",
    text: "Dr. Rakus helped me lose 30 pounds with her nutrition program. It wasn't a crash diet — she taught me how to eat right for my body. The weight has stayed off for over a year now.",
    rating: 5,
    service: "weight-loss-nutrition",
    source: "google",
  },
  {
    id: 8,
    name: "Chris B.",
    text: "As a competitive hockey player, having Dr. Pat and Dr. Spencer as my chiropractors gives me a huge edge. They understand the demands of the sport and keep me performing at my best.",
    rating: 5,
    condition: "sports-injuries",
    service: "injury-rehab-chiropractic",
    source: "website",
  },
];

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.service === serviceSlug);
}

export function getTestimonialsByCondition(
  conditionSlug: string
): Testimonial[] {
  return testimonials.filter((t) => t.condition === conditionSlug);
}

export function getFeaturedTestimonial(): Testimonial {
  return testimonials[0];
}

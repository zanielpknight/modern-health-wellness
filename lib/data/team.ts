export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  role: "doctor" | "staff";
  credentials?: string[];
  bio: string;
  quote?: string;
  education?: string[];
  postGradEducation?: string[];
  specialties?: string[];
  practiceFocus?: string[];
  personal?: string;
  yearJoined?: number;
  employmentHistory?: string[];
  professionalAssociations?: { name: string; url: string }[];
  firstVisitInfo?: string;
  treatmentCriteria?: string[];
}

export const team: TeamMember[] = [
  {
    slug: "doctor-1",
    name: "Dr. [Doctor name 1]",
    title: "Chief Chiropractic Physician & Owner",
    role: "doctor",
    credentials: ["DC"],
    bio: "Dr. [Doctor name 1] has been practicing chiropractic since [Year]. He has owned and operated successful practices in [Prior location] and the current office in [City]. Dr. [Doctor name 1] focuses his practice on wellness and preventive family care. Specializing in treating orthopedic (spine and extremities), auto and work-related injuries, sports injuries, regaining and maintaining spinal function, and non-operative disc treatments. Dr. [Doctor name 1] strongly believes in promoting well-being through good nutrition, with an emphasis on a team approach to conservative holistic health care.",
    quote: "The body has the ability to heal itself, without the use of drugs. We give our patients the knowledge, combined with chiropractic adjustments, to live a healthy, pain-free life.",
    education: [
      "[University] — B.S. Biology, [Year]",
      "[Chiropractic college] — B.S. Human Biology & Doctor of Chiropractic, [Year]",
    ],
    postGradEducation: [
      "Neurology",
      "Radiology (X-ray)",
      "Rehabilitation",
      "Orthopedics",
      "Nutrition",
      "Biomechanics",
      "Sports injuries",
    ],
    specialties: [
      "Orthopedic spine & extremity",
      "Auto accident & workers' comp injuries",
      "Sports injuries",
      "Non-operative disc treatment",
      "Wellness & preventive family care",
    ],
    personal: "[Personal background]. Enjoys golf, running, hiking, and playing the piano.",
    professionalAssociations: [
      { name: "American Chiropractic Association", url: "http://www.amerchiro.org/" },
      { name: "[State] Chiropractic Association", url: "#" },
      { name: "American Academy of Spine Physicians", url: "http://www.spinephysicians.org/" },
    ],
      },
  {
    slug: "doctor-2",
    name: "Dr. [Doctor name 2]",
    title: "Chiropractor, Acupuncturist & Nutritionist",
    role: "doctor",
    credentials: ["DC", "LAc"],
    bio: "Dr. [Doctor name 2] brings a truly integrative approach to patient care, combining chiropractic medicine with acupuncture and clinical nutrition. Her holistic philosophy means she looks at the whole person — not just the area of complaint. Whether she's placing acupuncture needles to manage chronic pain, designing a nutrition plan for sustainable weight loss, or performing chiropractic adjustments, Dr. [Doctor name 2] helps patients achieve balance and optimal health through multiple evidence-based modalities. She has kept abreast of the most recent research on nutrition and acupuncture, weight loss, weight management and wellness care.",
    education: [
      "[University] — B.S. Human Kinetics, [Year]",
      "[Chiropractic college] — B.S. Human Biology & Doctor of Chiropractic, [Year]",
      "[Postgraduate institution] — Acupuncture Certification, [Year]",
    ],
    practiceFocus: [
      "Nutritional counseling for weight loss, diabetes and heart disease prevention and management",
      "Acupuncture for headaches, back pain, joint pain, and weight loss",
      "Wellness and preventive care",
      "Family chiropractic care",
      "Orthopedic injuries (spine and extremities)",
    ],
    specialties: [
      "Acupuncture & auriculotherapy",
      "Nutritional counseling & weight loss",
      "Holistic wellness",
      "Women's health",
      "Family chiropractic care",
    ],
    employmentHistory: [
      "[Year]–present: Chiropractor, Nutritionist & Acupuncturist — Modern Health and Wellness, [City]",
      "[Years]: Chiropractor & Acupuncturist — [Prior clinic], [Prior location]",
    ],
    personal: "[Personal background]. Enjoys spending time with her family, running, hiking, gardening, reading, and cooking.",
  },
  {
    slug: "doctor-3",
    name: "Dr. [Doctor name 3]",
    title: "Chiropractor & Strength Coach",
    role: "doctor",
    credentials: ["DC", "CSCS"],
    bio: "After graduation with his Doctorate degree in Chiropractic, Dr. [Doctor name 3] was hired to be the chiropractor at [Prior clinic] in [Prior location]. Here he used both chiropractic care and physical therapy for hundreds of patients focusing on both chiropractic techniques and PT and worked closely with incredibly skilled physical therapists. He focuses his practice on wellness and treating orthopedic (spine and extremity) injuries. He also helps patients with auto accident and workers comp injuries, sports injuries and non-operative disc treatments. By working closely with the best PCPs, neurologists, orthopedic surgeons, and other healthcare specialists in [State], we can provide patients with personalized care.",
    quote: "Health-span — the number of years a person lives with FULL function — should be almost more important than life-span. By combining all aspects of preventative health care including nutrition, exercise, and chiropractic care with great patient education, we hope to achieve freedom of disease, injury, and stress for our patients.",
    education: [
      "[University] — B.S. Exercise Science, [Year]",
      "[Chiropractic college] — Doctor of Chiropractic, [Year]",
    ],
    postGradEducation: [
      "Neurology",
      "Radiology (X-ray)",
      "Rehabilitation & orthopedics",
      "Sports injuries",
    ],
    specialties: [
      "Orthopedic spine & extremity",
      "Auto accident & workers' comp injuries",
      "Sports injuries",
      "Non-operative disc treatment",
      "Strength & conditioning (CSCS)",
      "Personal training & group exercise",
      "Senior fitness & health-span",
    ],
    professionalAssociations: [
      { name: "Board Certified Chiropractic Physician", url: "#" },
      { name: "NSCA Certified Strength and Conditioning Specialist (CSCS)", url: "https://www.nsca.com/certification/cscs/" },
    ],
    firstVisitInfo: "During your first visit, you'll receive a thorough consultation, spinal assessment, and review of your medical history. Following this, prior test results like x-ray films, MRI results or labs will be consulted and/or recommended (imaging taken typically at [Imaging partner]). Based on this information, Dr. [Doctor name 3] will design a personalized treatment plan based on your condition, lifestyle, and health goals. Our approach often includes safe chiropractor-based adjustments and techniques, specific and safe rehab exercises, nutritional support, and ergonomic advice to promote healing and prevent reinjury. Follow-up visits are tailored to your progress, with continuous evaluation to ensure optimal results.",
    treatmentCriteria: [
      "Best available evidence-based practice guidelines and standard of care",
      "Physicians' expertise and experience with similar conditions",
      "Patients' comfort, goals and trust",
    ],
    personal: "Former college athlete at [University]. Previously at [Prior clinic]. Enjoys resistance training, hiking, golfing, and cooking. Stays up to date on the most current literature on exercise and nutrition.",
  },
  {
    slug: "staff-1",
    name: "[Staff name]",
    title: "Office Manager",
    role: "staff",
    bio: "[Staff name] has been part of Modern Health and Wellness since [Year]. She believes the key to a healthy life is to remain active, and enjoys spending time outdoors with her family.",
  },
  {
    slug: "staff-2",
    name: "[Staff name]",
    title: "Office Staff",
    role: "staff",
    bio: "[Staff name] joined the Modern Health and Wellness team after a long career working with the elderly. The best part of the job is working with patients of all ages.",
  },
  {
    slug: "staff-3",
    name: "[Staff name]",
    title: "Office Staff",
    role: "staff",
    bio: "",
  },
  {
    slug: "staff-4",
    name: "[Staff name]",
    title: "Office Staff",
    role: "staff",
    bio: "",
  },
  {
    slug: "staff-5",
    name: "[Staff name]",
    title: "Office Staff",
    role: "staff",
    bio: "",
  },
];

export function getDoctors(): TeamMember[] {
  return team.filter((m) => m.role === "doctor");
}

export function getStaff(): TeamMember[] {
  return team.filter((m) => m.role === "staff");
}

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

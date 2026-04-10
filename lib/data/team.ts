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
    slug: "dr-patrick-hackett",
    name: "Dr. Patrick Hackett",
    title: "Chief Chiropractic Physician & Owner",
    role: "doctor",
    credentials: ["DC"],
    bio: "Dr. Hackett has been practicing chiropractic since 1990. He has owned and operated successful practices in Illinois and the current office in Hamden, Connecticut. Dr. Pat focuses his practice on wellness and preventive family care. Specializing in treating orthopedic (spine and extremities), auto and work-related injuries, sports injuries, regaining and maintaining spinal function, and non-operative disc treatments. Dr. Pat strongly believes in promoting well-being through good nutrition, with an emphasis on a team approach to conservative holistic health care.",
    quote: "The body has the ability to heal itself, without the use of drugs. We give our patients the knowledge, combined with chiropractic adjustments, to live a healthy, pain-free life.",
    education: [
      "Western Connecticut State University — B.S. Biology, 1986",
      "National College of Chiropractic — B.S. Human Biology & Doctor of Chiropractic, 1990",
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
    personal: "Former varsity college athlete. Married to Dr. Jennifer Rakus. Father of five. Enjoys golf, running, hiking, and playing the piano. Active youth hockey and lacrosse coach.",
    professionalAssociations: [
      { name: "American Chiropractic Association", url: "http://www.amerchiro.org/" },
      { name: "Connecticut Chiropractic Association", url: "http://www.ctchiro.com/" },
      { name: "American Academy of Spine Physicians", url: "http://www.spinephysicians.org/ndspdocdetail.cfm?memberid=306" },
    ],
    yearJoined: 1990,
  },
  {
    slug: "dr-jennifer-rakus",
    name: "Dr. Jennifer Rakus",
    title: "Chiropractor, Acupuncturist & Nutritionist",
    role: "doctor",
    credentials: ["DC", "LAc"],
    bio: "Dr. Jennifer Rakus brings a truly integrative approach to patient care, combining chiropractic medicine with acupuncture and clinical nutrition. Her holistic philosophy means she looks at the whole person — not just the area of complaint. Whether she's placing acupuncture needles to manage chronic pain, designing a nutrition plan for sustainable weight loss, or performing chiropractic adjustments, Dr. Rakus helps patients achieve balance and optimal health through multiple evidence-based modalities. She has kept abreast of the most recent research on nutrition and acupuncture, weight loss, weight management and wellness care.",
    education: [
      "University of Windsor — B.S. Human Kinetics, 1988",
      "National College of Chiropractic — B.S. Human Biology & Doctor of Chiropractic, 1992",
      "National-Lincoln School of Postgraduate Education — Acupuncture Certification, 1996",
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
      "2000–present: Chiropractor, Nutritionist & Acupuncturist — Modern Health and Wellness, Hamden, CT",
      "1992–1999: Chiropractor & Acupuncturist — Advanced Chiropractic Specialists, River Grove, IL",
    ],
    personal: "Married to Dr. Patrick Hackett. Mother of five. Enjoys spending time with her family, running, hiking, gardening, reading, and cooking.",
  },
  {
    slug: "dr-spencer-hackett",
    name: "Dr. Spencer Hackett",
    title: "Chiropractor & Strength Coach",
    role: "doctor",
    credentials: ["DC", "CSCS"],
    bio: "After graduation with his Doctorate degree in Chiropractic, Dr. Spencer was hired to be the chiropractor at Baystate Physical Therapy/MCR in Boston, MA. Here he used both chiropractic care and physical therapy for hundreds of patients focusing on both chiropractic techniques and PT and worked closely with incredibly skilled physical therapists. He focuses his practice on wellness and treating orthopedic (spine and extremity) injuries. He also helps patients with auto accident and workers comp injuries, sports injuries and non-operative disc treatments. By working closely with the best PCPs, neurologists, orthopedic surgeons, and other healthcare specialists in Connecticut, we can provide patients with personalized care.",
    quote: "Health-span — the number of years a person lives with FULL function — should be almost more important than life-span. By combining all aspects of preventative health care including nutrition, exercise, and chiropractic care with great patient education, we hope to achieve freedom of disease, injury, and stress for our patients.",
    education: [
      "Sacred Heart University — B.S. Exercise Science, 2016",
      "University of Bridgeport School of Chiropractic — Doctor of Chiropractic, 2022",
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
    firstVisitInfo: "During your first visit, you'll receive a thorough consultation, spinal assessment, and review of your medical history. Following this, prior test results like x-ray films, MRI results or labs will be consulted and/or recommended (imaging taken typically at a Hartford Healthcare center). Based on this information, Dr. Hackett will design a personalized treatment plan based on your condition, lifestyle, and health goals. Our approach often includes safe chiropractor-based adjustments and techniques, specific and safe rehab exercises, nutritional support, and ergonomic advice to promote healing and prevent reinjury. Follow-up visits are tailored to your progress, with continuous evaluation to ensure optimal results.",
    treatmentCriteria: [
      "Best available evidence-based practice guidelines and standard of care",
      "Physicians' expertise and experience with similar conditions",
      "Patients' comfort, goals and trust",
    ],
    personal: "Former Sacred Heart University lacrosse player (4 years). Previously at Baystate Physical Therapy and MCR in Boston. Enjoys resistance training, hiking, golfing, and cooking. Stays up to date on the most current literature on exercise and nutrition.",
  },
  {
    slug: "krystina-kolman",
    name: "Krystina Kolman",
    title: "Office Manager",
    role: "staff",
    bio: "Krystina has been part of Modern Health and Wellness since 2011. She believes the key to a healthy life is to remain active. This is why she and her family enjoy spending time outdoors. Her favorite activities are hiking and riding her horses.",
    yearJoined: 2011,
  },
  {
    slug: "beth-seeger",
    name: "Beth Seeger",
    title: "Office Staff",
    role: "staff",
    bio: "Beth is married with two wonderful children both in college. She has been a lifelong resident of Hamden. She joined the Modern Health and Wellness team in 2006 after a 20 year career working with the elderly. She enjoys being a part of the Modern Health and Wellness team. The best part of her job is working with patients of all ages.",
    yearJoined: 2006,
  },
  {
    slug: "felicia-gotta",
    name: "Felicia Gotta",
    title: "Office Staff",
    role: "staff",
    bio: "",
  },
  {
    slug: "chelsea-laflamme",
    name: "Chelsea Laflamme",
    title: "Office Staff",
    role: "staff",
    bio: "",
  },
  {
    slug: "david-pantalena",
    name: "David Pantalena",
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

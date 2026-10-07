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
    slug: "james-carter",
    name: "Dr. James Carter",
    title: "Chief Chiropractic Physician & Owner",
    role: "doctor",
    credentials: ["DC"],
    bio: "Dr. Carter has been practicing chiropractic since 1988. He has owned and operated successful practices in Houston and the current office in Austin. Dr. Carter focuses his practice on wellness and preventive family care. Specializing in treating orthopedic (spine and extremities), auto and work-related injuries, sports injuries, regaining and maintaining spinal function, and non-operative disc treatments. Dr. Carter strongly believes in promoting well-being through good nutrition, with an emphasis on a team approach to conservative holistic health care.",
    quote: "The body has the ability to heal itself, without the use of drugs. We give our patients the knowledge, combined with chiropractic adjustments, to live a healthy, pain-free life.",
    education: [
      "University of Texas at Austin — B.S. Biology, 1984",
      "Texas Chiropractic College — B.S. Human Biology & Doctor of Chiropractic, 1988",
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
    personal: "Born and raised in San Antonio; married with three grown children. Enjoys golf, running, hiking, and playing the piano.",
    professionalAssociations: [
      { name: "American Chiropractic Association", url: "http://www.amerchiro.org/" },
      { name: "Texas Chiropractic Association", url: "" },
      { name: "American Academy of Spine Physicians", url: "http://www.spinephysicians.org/" },
    ],
  },
  {
    slug: "priya-nair",
    name: "Dr. Priya Nair",
    title: "Acupuncturist & Nutritionist",
    role: "doctor",
    credentials: ["LAc"],
    bio: "Dr. Nair is a licensed acupuncturist who brings a truly integrative approach to patient care, combining acupuncture with clinical nutrition. Her holistic philosophy means she looks at the whole person — not just the area of complaint. Whether she's placing acupuncture needles to manage chronic pain and stress or designing a nutrition plan for sustainable weight loss, Dr. Nair helps patients achieve balance and optimal health through complementary, evidence-based modalities. She has kept abreast of the most recent research on nutrition and acupuncture, weight loss, weight management and wellness care.",
    education: [
      "Texas A&M University — B.S. Nutritional Sciences, 2004",
      "AOMA Graduate School of Integrative Medicine — Master of Acupuncture and Oriental Medicine, 2008",
      "Doctor of Acupuncture (DAc), 2012",
    ],
    practiceFocus: [
      "Nutritional counseling for weight loss, diabetes and heart disease prevention and management",
      "Acupuncture for headaches, back pain, joint pain, and weight loss",
      "Wellness and preventive care",
      "Women's health",
    ],
    specialties: [
      "Acupuncture & auriculotherapy",
      "Nutritional counseling & weight loss",
      "Holistic wellness",
      "Women's health",
    ],
    employmentHistory: [
      "2012–present: Acupuncturist & Nutritionist — Modern Health and Wellness, Austin",
      "2008–2012: Acupuncturist — Hill Country Spine & Sport, San Antonio",
    ],
    personal: "Grew up in Dallas and has called Austin home since 2012. Enjoys spending time with her family, running, hiking, gardening, reading, and cooking.",
  },
  {
    slug: "marcus-bell",
    name: "Dr. Marcus Bell",
    title: "Physical Therapist & Strength Coach",
    role: "doctor",
    credentials: ["PT"],
    bio: "After earning his Doctor of Physical Therapy degree, Dr. Bell joined Lone Star Physical Therapy in Round Rock, where he treated hundreds of patients and worked alongside an incredibly skilled team of physical therapists. He focuses his practice on orthopedic rehabilitation (spine and extremity), sports injuries, and post-surgical recovery. He also helps patients rehabilitate from auto accident and workers' comp injuries, and as a Certified Strength and Conditioning Specialist, he bridges the gap between rehab and long-term strength and performance. By working closely with the best PCPs, neurologists, orthopedic surgeons, and other healthcare specialists in Texas, we can provide patients with personalized care.",
    quote: "Health-span — the number of years a person lives with FULL function — should be almost more important than life-span. By combining all aspects of preventative health care including nutrition, exercise, and physical therapy with great patient education, we hope to achieve freedom of disease, injury, and stress for our patients.",
    education: [
      "Texas State University — B.S. Exercise Science, 2014",
      "Texas State University — Doctor of Physical Therapy, 2017",
    ],
    postGradEducation: [
      "Orthopedic manual therapy",
      "Post-surgical rehabilitation",
      "Sports injury rehabilitation",
      "Strength & conditioning",
    ],
    specialties: [
      "Orthopedic rehabilitation (spine & extremity)",
      "Sports injury rehab",
      "Post-surgical rehabilitation",
      "Auto accident & workers' comp rehab",
      "Strength & conditioning (CSCS)",
      "Personal training & group exercise",
      "Senior fitness & health-span",
    ],
    professionalAssociations: [
      { name: "American Physical Therapy Association", url: "https://www.apta.org/" },
      { name: "NSCA Certified Strength and Conditioning Specialist (CSCS)", url: "https://www.nsca.com/certification/cscs/" },
    ],
    firstVisitInfo: "Your first visit is a comprehensive physical therapy evaluation: a thorough consultation, review of your medical history, and assessment of your movement, strength, range of motion, and function. Prior test results like x-ray films, MRI results, or surgical notes will be reviewed and/or recommended (imaging taken typically at Lakeline Imaging Center). Based on this information, Dr. Bell will design a personalized plan of care based on your condition, lifestyle, and goals. Treatment often includes hands-on manual therapy, specific and safe therapeutic exercise, progressive strength work, and ergonomic and activity advice to promote healing and prevent reinjury. Follow-up visits are tailored to your progress, with continuous re-assessment to ensure optimal results.",
    treatmentCriteria: [
      "Best available evidence-based practice guidelines and standard of care",
      "Physicians' expertise and experience with similar conditions",
      "Patients' comfort, goals and trust",
    ],
    personal: "Former college baseball player at Texas State University. Previously at Lone Star Physical Therapy in Round Rock. Enjoys resistance training, hiking, golfing, and cooking. Stays up to date on the most current literature on exercise and nutrition.",
  },
  {
    slug: "maria-lopez",
    name: "Maria Lopez",
    title: "Office Manager",
    role: "staff",
    bio: "Maria Lopez has been part of Modern Health and Wellness since 2011. She believes the key to a healthy life is to remain active, and enjoys spending time outdoors with her family.",
  },
  {
    slug: "kevin-brooks",
    name: "Kevin Brooks",
    title: "Office Staff",
    role: "staff",
    bio: "Kevin Brooks joined the Modern Health and Wellness team after a long career working with the elderly. The best part of the job is working with patients of all ages.",
  },
  {
    slug: "hannah-wright",
    name: "Hannah Wright",
    title: "Office Staff",
    role: "staff",
    bio: "",
  },
  {
    slug: "daniel-kim",
    name: "Daniel Kim",
    title: "Office Staff",
    role: "staff",
    bio: "",
  },
  {
    slug: "olivia-grant",
    name: "Olivia Grant",
    title: "Office Staff",
    role: "staff",
    bio: "",
  },
];

/** Full display name with credentials appended, e.g. "Dr. James Carter, DC". */
export function displayName(member: Pick<TeamMember, "name" | "credentials">): string {
  return member.credentials?.length ? `${member.name}, ${member.credentials.join(", ")}` : member.name;
}

/** Look up a team member by plain name and return their credentialed display name. */
export function displayNameFor(name: string): string {
  const member = team.find((m) => m.name === name);
  return member ? displayName(member) : name;
}

export function getDoctors(): TeamMember[] {
  return team.filter((m) => m.role === "doctor");
}

export function getStaff(): TeamMember[] {
  return team.filter((m) => m.role === "staff");
}

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

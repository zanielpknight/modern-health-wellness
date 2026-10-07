export const clinic = {
  name: "Modern Health & Wellness",
  legalName: "Modern Health and Wellness LLC",
  tagline: "Austin's most trusted chiropractic team since 1990",
  phone: "(512) 555-0147",
  phoneRaw: "+15125550147",
  email: "hello@example.com",
  emailHref: "mailto:hello@example.com",
  address: {
    street: "123 Wellness Way",
    city: "Austin",
    state: "TX",
    zip: "78701",
    full: "123 Wellness Way, Austin, TX 78701",
  },
  hours: [
    { day: "Monday", open: "7:00 AM", close: "7:00 PM" },
    { day: "Tuesday", open: "7:00 AM", close: "7:00 PM" },
    { day: "Wednesday", open: "7:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "7:00 AM", close: "7:00 PM" },
    { day: "Friday", open: "7:00 AM", close: "6:00 PM" },
    { day: "Saturday", open: "7:00 AM", close: "12:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=123+Wellness+Way%2C+Austin%2C+TX+78701",
  geo: { latitude: 30.2672, longitude: -97.7431 },
  credentials: [
    "Team chiropractors — Austin Rivermen Hockey Club",
    "2023 Southwest Regional Champions",
    "Serving Austin since 1990",
  ],
} as const;

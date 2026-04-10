import { clinic } from "@/lib/data/clinic";

interface JsonLdProps {
  type?: "LocalBusiness" | "Physician" | "WebPage";
  data?: Record<string, unknown>;
}

function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Chiropractic",
    name: clinic.name,
    image: [], // Add real images later
    telephone: clinic.phone,
    url: "https://modernhealthwellness.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.coordinates.lat,
      longitude: clinic.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "12:00",
      },
    ],
    sameAs: [clinic.social.facebook, clinic.social.instagram, clinic.social.yelp],
    priceRange: "$$",
  };
}

export default function JsonLd({ type = "LocalBusiness", data }: JsonLdProps) {
  let schema;

  switch (type) {
    case "LocalBusiness":
      schema = getLocalBusinessSchema();
      break;
    case "Physician":
      schema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        ...data,
      };
      break;
    case "WebPage":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        ...data,
      };
      break;
    default:
      schema = getLocalBusinessSchema();
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

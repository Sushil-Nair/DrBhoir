/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://drbhoirfarmandresort.com/";
const SITE_NAME = "Dr. Bhoir Farm & Resort";

const MetadataManager = ({
  title = "Dr. Bhoir Farm & Resort",
  description = "Welcome to Dr. Bhoir Farm & Resort, your premier destination for a serene and luxurious getaway in the heart of the Kalyan - Badlapur region.",
  keywords = "Best farm resort near Mumbai, Weekend getaway in Kalyan, Ambarnath and Badlapur region, Maharashtrian cuisine resort, Family-friendly resorts near Mumbai, Luxury accommodations in Kalyan, Nature resorts in Maharashtra",
  author = "Dr. Santosh Bhoir",
  ogTitle,
  ogDescription,
  ogImage = "/ogImage.webp", // resolved to absolute below
  twitterCard = "summary_large_image",
  canonicalUrl = null,
  noindex = false,
  // New: structured data inputs (all optional, sensible resort defaults given)
  address = {
    streetAddress:
      "Dr. Bhoir Farm & Resort, 56/3 B Dahagaon-Manjarli Road, Rayate",
    addressLocality: "Badlapur",
    addressRegion: "Maharashtra",
    postalCode: "421503",
    addressCountry: "IN",
  },
  geo = { latitude: 19.2254, longitude: 73.2527 }, // approximate Badlapur coords — replace with your exact pin
  telephone = "+91-8779414474",
  priceRange = "₹₹",
  faq = [
    {
      question: "Where is Dr. Bhoir Farm & Resort located?",
      answer:
        "Dr. Bhoir Farm & Resort is located in the Kalyan-Badlapur region of Maharashtra, a short drive from Mumbai, Navi Mumbai, and Thane — making it an easy weekend getaway from the city.",
    },
    {
      question: "How far is the resort from Mumbai and Thane?",
      answer:
        "The resort is conveniently located just a short drive from Mumbai, Navi Mumbai, and Thane, in the scenic Kalyan-Badlapur belt. The approximate driving distance to Dr Bhoir farm & Resort is about 38 km from Thane and 65 to 70 km from Mumbai.",
    },
    {
      question: "What activities and experiences are available at the resort?",
      answer:
        "Guests can enjoy activities like rain dance, adventure sports, and authentic Maharashtrian cuisine, along with lush green surroundings ideal for relaxing family outings, romantic getaways, or group trips.",
    },
    {
      question:
        "Is Dr. Bhoir Farm & Resort suitable for families with children?",
      answer:
        "Yes, the resort is family-friendly, with facilities such as a kids\u2019 pool and indoor/outdoor play areas designed to keep younger guests entertained.",
    },
    {
      question: "Does the resort have a swimming pool?",
      answer:
        "Yes, the resort features a pool for guests to use during their stay.",
    },
    {
      question: "What are the check-in and check-out timings?",
      answer: "Check-in time: 11:00 AM and Check-out time: 10:00 AM",
    },
    {
      question: "Is parking available on-site?",
      answer:
        "Yes, the resort offers on-site private parking for guests arriving by car.",
    },
    {
      question: "Does the resort provide meals and dining options?",
      answer:
        "Yes, guests can enjoy Maharashtrian cuisine and other meal options on-site.",
    },
    {
      question: "Is the resort suitable for corporate outings or group events?",
      answer:
        "The resort accommodates group adventures and gatherings amid its natural surroundings.",
    },
    {
      question:
        "How do I book a stay or day outing at Dr. Bhoir Farm & Resort?",
      answer:
        "You can book directly through our website\u2019s contact/booking page or reach out via phone.",
    },
  ],
  breadcrumbs = [],
  children,
}) => {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage.replace(/^\./, "")}`;
  const finalCanonical = canonicalUrl || SITE_URL;

  // Organization + LocalBusiness (Resort) structured data.
  // This is what powers Google's local pack, Maps, and gives AI assistants
  // (ChatGPT, Perplexity, Google AI Overviews) a clean factual source to cite.
  const hotelSchema = {
    "@type": "Hotel",
    "@id": `${SITE_URL}#hotel`,

    name: SITE_NAME,
    description,
    image: absoluteOgImage,
    url: finalCanonical,
    telephone,
    priceRange,

    checkinTime: "11:00",
    checkoutTime: "10:00",

    address: {
      "@type": "PostalAddress",
      ...address,
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },

    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Kids Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Maharashtrian Cuisine",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Rain Dance",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Adventure Activities",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Family Friendly",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Corporate Events",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioned Rooms",
        value: true,
      },
    ],

    sameAs: [
      "https://www.instagram.com/drbhoirfarm/",
      "https://www.facebook.com/DrBhoirfarm",
    ],
  };

  const breadcrumbSchema =
    breadcrumbs.length > 0
      ? {
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        }
      : null;

  // FAQ structured data — only rendered if you pass faq items.
  // Directly feeds "People Also Ask" boxes and AI chat answers.
  const faqSchema =
    faq.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [hotelSchema, faqSchema, breadcrumbSchema].filter(Boolean),
  };

  return (
    <>
      <Helmet>
        {/* Basic */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content={noindex ? "noindex, nofollow" : "index, follow"}
        />
        <link rel="canonical" href={finalCanonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content={finalOgTitle} />
        <meta property="og:description" content={finalOgDescription} />
        <meta property="og:image" content={absoluteOgImage} />
        <meta property="og:url" content={finalCanonical} />

        {/* Twitter */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={finalOgTitle} />
        <meta name="twitter:description" content={finalOgDescription} />
        <meta name="twitter:image" content={absoluteOgImage} />

        {/* Structured data (JSON-LD) — key for AI visibility */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {children}
    </>
  );
};

export default MetadataManager;

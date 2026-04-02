export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Yoder Construction Inc.",
    "description": "Precision craftsmanship for Southern California's finest outdoor living spaces. Custom decks, patio covers, and outdoor rooms built to last generations.",
    "url": "https://yoderconstructioninc.com",
    "telephone": "(760) 730-6776",
    "email": "hello@pinpointdigital.us",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "918 Mission Ave Ste 120 #250",
      "addressLocality": "Oceanside",
      "addressRegion": "CA",
      "postalCode": "92054",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.1959",
      "longitude": "-117.3795"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "California"
      },
      {
        "@type": "City",
        "name": "Oceanside"
      },
      {
        "@type": "City",
        "name": "Carlsbad"
      },
      {
        "@type": "City",
        "name": "Encinitas"
      },
      {
        "@type": "City",
        "name": "San Marcos"
      },
      {
        "@type": "City",
        "name": "Vista"
      },
      {
        "@type": "City",
        "name": "Escondido"
      }
    ],
    "serviceType": [
      "Custom Deck Construction",
      "Patio Cover Installation",
      "Outdoor Living Space Design",
      "Hardwood Decking",
      "Composite Decking",
      "Pergola Construction"
    ],
    "founder": {
      "@type": "Person",
      "name": "Matthew Yoder",
      "jobTitle": "President / Owner"
    },
    "employee": {
      "@type": "Person",
      "name": "Matthew Yoder",
      "jobTitle": "President / Owner"
    },
    "foundingDate": "2022",
    "license": "CSLB #1098601",
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "USD",
    "priceRange": "$25000-$150000+",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/yoderconstructioninc",
      "https://www.facebook.com/yoderconstructioninc"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Outdoor Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Deck Construction",
            "description": "Premium hardwood and composite decking solutions engineered for your outdoor lifestyle."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Patio Cover Installation",
            "description": "Attached and freestanding patio covers, pergolas, and solid roof structures."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outdoor Living Space Design",
            "description": "Complete outdoor rooms with integrated features and seamless indoor-outdoor transitions."
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "17:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2),
      }}
    />
  );
}
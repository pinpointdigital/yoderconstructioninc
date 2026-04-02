import type { Metadata } from 'next';
import { CarlsbadContent } from './CarlsbadContent';

export const metadata: Metadata = {
  title: "Custom Deck Builder in Carlsbad, CA | Yoder Construction",
  description: "Custom decks, patio covers, and outdoor living spaces for Carlsbad homeowners. Serving Carlsbad Village, La Costa, Aviara, and all Carlsbad communities. Licensed and insured. CSLB #1098601. (760) 730-6776.",
  openGraph: {
    title: "Custom Deck Builder in Carlsbad, CA | Yoder Construction",
    description: "Premium decks, patio covers, and outdoor living spaces built with obsessive craftsmanship for Carlsbad homeowners.",
    url: "https://yoderconstructioninc.com/service-areas/carlsbad",
    siteName: "Yoder Construction Inc.",
    locale: "en_US",
    type: "website",
  },
};

export default function CarlsbadPage() {
  return <CarlsbadContent />;
}
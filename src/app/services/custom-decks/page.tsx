import type { Metadata } from 'next';
import { CustomDecksContent } from './CustomDecksContent';

export const metadata: Metadata = {
  title: 'Custom Decks - Hardwood, Composite & Premium Decking | Yoder Construction',
  description: 'Expert custom deck builders in Oceanside, CA. Premium hardwood, composite, and engineered decking solutions built to last generations. IPE, Cumaru, Trex, TimberTech & more.',
  keywords: 'custom decks, hardwood decking, composite decking, IPE decks, Cumaru decks, Trex decking, TimberTech, deck builders Oceanside',
};

export default function CustomDecks() {
  return <CustomDecksContent />;
}
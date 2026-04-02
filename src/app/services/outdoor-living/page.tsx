import type { Metadata } from 'next';
import { OutdoorLivingContent } from './OutdoorLivingContent';

export const metadata: Metadata = {
  title: 'Outdoor Living Spaces - Complete Outdoor Rooms & Entertainment Areas | Yoder Construction',
  description: 'Custom outdoor living space design & construction in Oceanside, CA. Complete outdoor rooms, multi-level decks, entertainment areas, and seamless indoor-outdoor transitions.',
  keywords: 'outdoor living spaces, outdoor rooms, entertainment areas, multi-level decks, outdoor kitchens, fire features, Oceanside outdoor living',
};

export default function OutdoorLiving() {
  return <OutdoorLivingContent />;
}
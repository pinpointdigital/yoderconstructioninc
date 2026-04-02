import type { Metadata } from 'next';
import { PatioCoversContent } from './PatioCoversContent';

export const metadata: Metadata = {
  title: 'Patio Covers - Custom Shade Structures & Pergolas | Yoder Construction',
  description: 'Expert patio cover builders in Oceanside, CA. Custom attached & freestanding patio covers, pergolas, and solid roof structures built for lasting shade and beauty.',
  keywords: 'patio covers, pergolas, shade structures, outdoor covers, attached patio covers, freestanding covers, Oceanside contractors',
};

export default function PatioCovers() {
  return <PatioCoversContent />;
}
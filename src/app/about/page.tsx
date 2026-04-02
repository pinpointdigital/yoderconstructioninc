import type { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'About Yoder Construction Inc. - Matt Yoder & Our Team | Oceanside, CA',
  description: 'Meet Matt Yoder and our team of skilled craftsmen. Founded on precision and integrity, serving Southern California with custom decks and outdoor living spaces since 2022.',
  keywords: 'Matt Yoder, construction team, custom decks, outdoor living, Oceanside contractor, licensed builder',
};

export default function About() {
  return <AboutContent />;
}
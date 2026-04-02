'use client';

import { useState, useRef } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealStagger } from '../../components';
import { Lightbox } from '../../components/ui';

// This would typically come from a CMS or API
const projects = [
  {
    id: 1,
    title: 'San Juan Capistrano Residence',
    type: 'Custom Decks',
    category: 'custom-decks',
    image: '/images/gallery/deck-1.jpg',
    images: ['/images/gallery/deck-1.jpg', '/images/gallery/deck-1-2.jpg'],
    description: 'Multi-level IPE hardwood deck with integrated lighting and built-in seating.',
  },
  {
    id: 2,
    title: 'Encinitas Modern Patio',
    type: 'Patio Covers',
    category: 'patio-covers',
    image: '/images/gallery/patio-1.jpg',
    images: ['/images/gallery/patio-1.jpg', '/images/gallery/patio-1-2.jpg'],
    description: 'Contemporary aluminum patio cover with integrated LED strip lighting.',
  },
  {
    id: 3,
    title: 'Carlsbad Entertainment Space',
    type: 'Outdoor Living',
    category: 'outdoor-living',
    image: '/images/gallery/outdoor-1.jpg',
    images: ['/images/gallery/outdoor-1.jpg', '/images/gallery/outdoor-1-2.jpg'],
    description: 'Complete outdoor living space with fire feature, kitchen prep, and seating areas.',
  },
  {
    id: 4,
    title: 'Oceanside Beach House Deck',
    type: 'Custom Decks',
    category: 'custom-decks',
    image: '/images/gallery/deck-2.jpg',
    images: ['/images/gallery/deck-2.jpg', '/images/gallery/deck-2-2.jpg'],
    description: 'Composite decking with glass railing system and ocean views.',
  },
  {
    id: 5,
    title: 'Del Mar Pergola',
    type: 'Patio Covers',
    category: 'patio-covers',
    image: '/images/gallery/patio-2.jpg',
    images: ['/images/gallery/patio-2.jpg', '/images/gallery/patio-2-2.jpg'],
    description: 'Traditional cedar pergola with climbing plant integration.',
  },
  {
    id: 6,
    title: 'Vista Hills Outdoor Kitchen',
    type: 'Outdoor Living',
    category: 'outdoor-living',
    image: '/images/gallery/outdoor-2.jpg',
    images: ['/images/gallery/outdoor-2.jpg', '/images/gallery/outdoor-2-2.jpg'],
    description: 'Multi-zone outdoor living with full kitchen and dining areas.',
  },
  {
    id: 7,
    title: 'Solana Beach Retreat',
    type: 'Custom Decks',
    category: 'custom-decks',
    image: '/images/gallery/deck-3.jpg',
    images: ['/images/gallery/deck-3.jpg'],
    description: 'Cumaru hardwood deck with custom privacy screening.',
  },
  {
    id: 8,
    title: 'Rancho Santa Fe Estate',
    type: 'Outdoor Living',
    category: 'outdoor-living',
    image: '/images/gallery/outdoor-3.jpg',
    images: ['/images/gallery/outdoor-3.jpg'],
    description: 'Luxury outdoor living space with multiple entertainment zones.',
  },
];

const categories = [
  { id: 'all', label: 'All', count: projects.length },
  { id: 'custom-decks', label: 'Custom Decks', count: projects.filter(p => p.category === 'custom-decks').length },
  { id: 'patio-covers', label: 'Patio Covers', count: projects.filter(p => p.category === 'patio-covers').length },
  { id: 'outdoor-living', label: 'Outdoor Living', count: projects.filter(p => p.category === 'outdoor-living').length },
];

export default function OurWork() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Ken Burns effect - subtle scale and position changes
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openLightbox = (project: typeof projects[0], index: number = 0) => {
    setLightboxImages(project.images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image with Ken Burns Effect */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ scale, x, y }}
        >
          <Image
            src="/images/services/yoder_service_header_ourwork.jpg"
            alt="Our Work by Yoder Construction"
            fill
            unoptimized={true}
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 gradient-overlay-dark" />
        
        <div className="relative z-20 text-center text-white container-padding">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-lora font-medium mb-6">
              Our Work
            </h1>
            <p className="text-xl md:text-2xl font-lora font-light italic">
              Every detail, every project — built to stand for itself.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 bg-background">
        <div className="container-padding">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 font-dm-sans font-medium transition-all duration-300 rounded-full ${
                    activeFilter === category.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-white text-text-primary hover:bg-accent/10 border border-accent/20'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <ScrollRevealStagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="gallery-image bg-white rounded-lg shadow-sm border border-accent/10 overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    {/* Placeholder for project image */}
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary-dark/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ambient-photo">
                      <span className="text-text-light text-sm">{project.title}</span>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/90 px-4 py-2 rounded-full">
                        <svg className="w-5 h-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Type badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-accent text-white text-xs font-dm-sans font-medium rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-lora font-medium text-text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-light font-dm-sans text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollRevealStagger>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-light font-dm-sans text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-padding text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                Ready for Your Project?
              </h2>
              <p className="text-lg text-text-light font-dm-sans mb-8 leading-relaxed">
                Every project we complete is a testament to our commitment to quality and craftsmanship. 
                Let's create something exceptional for your outdoor space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-consultation" className="btn-primary">
                  Start Your Project
                </Link>
                <Link href="/about" className="btn-secondary text-text-primary border-text-primary hover:bg-text-primary hover:text-white">
                  Meet Our Team
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
        alt="Yoder Construction project"
      />
    </>
  );
}
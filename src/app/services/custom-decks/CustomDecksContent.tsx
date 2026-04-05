'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealStagger } from '../../../components';
import { DetailFeaturesSection } from './DetailFeaturesSection';

const materials = [
  {
    name: 'IPE',
    description: 'The gold standard of hardwood decking - naturally beautiful and incredibly durable.',
    features: ['25+ year lifespan', 'Natural fire resistance', 'Class A fire rating', 'Rich chocolate tones'],
    image: '/images/services/yoder-services-ipe.jpg',
  },
  {
    name: 'Cumaru',
    description: 'Brazilian teak with stunning grain patterns and exceptional longevity.',
    features: ['20+ year lifespan', 'Natural insect resistance', 'Dense hardwood', 'Honey-gold color'],
    image: '/images/services/yoder-services-cumaru.jpg',
  },
  {
    name: 'Trex',
    description: 'Premium composite decking that combines beauty with low maintenance.',
    features: ['25-year warranty', 'Fade resistant', 'No staining needed', 'Multiple color options'],
    image: '/images/services/yoder-services-trex.jpg',
  },
  {
    name: 'TimberTech',
    description: 'Advanced composite technology with realistic wood grain textures.',
    features: ['30-year warranty', 'Scratch resistant', 'Cooler surface', 'Capped polymer protection'],
    image: '/images/services/yoder-services-timbertech.jpg',
  },
  {
    name: 'Cedar',
    description: 'Traditional Pacific Northwest beauty with natural weather resistance.',
    features: ['Natural oils', 'Aromatic properties', 'Lightweight', 'Cost effective'],
    image: '/images/services/yoder-services-cedar.jpg',
  },
];

export function CustomDecksContent() {
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Ken Burns effect - subtle scale and position changes
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);

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
            src="/images/services/yoder_service_header_custom-decks.jpg"
            alt="Custom Decks by Yoder Construction"
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
              Custom Decks
            </h1>
            <p className="text-xl md:text-2xl font-lora font-light italic">
              Premium materials. Obsessive craftsmanship.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                  Deck Craftsmanship
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="prose prose-lg max-w-none text-text-primary font-dm-sans leading-relaxed space-y-6">
                <p className="text-xl md:text-2xl font-light text-center mb-12">
                  A Yoder deck isn't a surface — it's a statement. Every board, every joint, 
                  every detail engineered to transform your outdoor space into something extraordinary.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <p>
                      When we design your custom deck, we're not just thinking about today. We're engineering 
                      for decades of Southern California weather, thousands of family gatherings, and the 
                      countless moments that make a house a home.
                    </p>
                    
                    <p>
                      Our approach begins with understanding how you live. Do you entertain large groups? 
                      Love quiet morning coffee? Need space for outdoor dining? Every deck we build is 
                      tailored to your lifestyle, not pulled from a catalog.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <p>
                      The difference lies in the details others skip. Precision-milled joinery that creates 
                      seamless surfaces. Hidden fastener systems that eliminate visible screws. Integrated 
                      drainage that prevents water damage. Custom railings that complement your home's architecture.
                    </p>
                    
                    <p>
                      Whether you choose the timeless elegance of IPE hardwood or the advanced technology 
                      of premium composites, every Yoder deck is built to be a lasting investment in your 
                      home's value and your family's enjoyment.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlight Images Gallery */}
      <section className="bg-white">
        <div className="w-full">
          <ScrollRevealStagger staggerDelay={0.1}>
            <div className="grid grid-cols-12 gap-px">
              <div className="col-span-12 md:col-span-4 h-96 relative overflow-hidden">
                <Image
                  src="/images/services/yoder_services_customdecks_highlight-1.jpg"
                  alt="Custom Deck Highlight 1"
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="col-span-12 md:col-span-3 h-96 relative overflow-hidden">
                <Image
                  src="/images/services/yoder_services_customdecks_highlight-4.jpg"
                  alt="Custom Deck Highlight 4"
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="col-span-12 md:col-span-5 h-96 relative overflow-hidden">
                <Image
                  src="/images/services/yoder_services_customdecks_highlight-3.jpg"
                  alt="Custom Deck Highlight 3"
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </ScrollRevealStagger>
        </div>
      </section>

      <DetailFeaturesSection />

      {/* Materials Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                Materials We Trust
              </span>
              <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                Premium Decking Materials
              </h2>
              <p className="text-lg text-text-light font-dm-sans max-w-3xl mx-auto leading-relaxed">
                Every material we work with is chosen for beauty, durability, and performance. 
                We'll help you select the perfect option for your lifestyle and budget.
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materials.map((material, index) => (
                <div key={material.name} className="bg-white rounded-lg shadow-sm border border-accent/10 p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-6">
                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                      <Image
                        src={material.image}
                        alt={`${material.name} decking material`}
                        fill
                        unoptimized={true}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-lora font-medium text-text-primary mb-3">
                    {material.name}
                  </h3>
                  
                  <p className="text-text-light font-dm-sans leading-relaxed mb-6">
                    {material.description}
                  </p>

                  <ul className="space-y-2">
                    {material.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-text-primary font-dm-sans">
                        <svg className="w-4 h-4 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                  From Vision to Reality
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-dm-sans font-medium text-sm mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-dm-sans font-semibold text-text-primary mb-2">Consultation & Design</h4>
                      <p className="text-text-light font-dm-sans leading-relaxed">
                        We start with your vision, then add our expertise in materials, engineering, and local codes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-dm-sans font-medium text-sm mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-dm-sans font-semibold text-text-primary mb-2">Material Selection</h4>
                      <p className="text-text-light font-dm-sans leading-relaxed">
                        Choose from our curated selection of premium decking materials, each with unique benefits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-dm-sans font-medium text-sm mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-dm-sans font-semibold text-text-primary mb-2">Precision Construction</h4>
                      <p className="text-text-light font-dm-sans leading-relaxed">
                        Every detail executed with the craftsmanship that has defined our reputation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/services/yoder_services_deck-construction-process.jpg"
                    alt="Deck Construction Process"
                    fill
                    unoptimized={true}
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-padding text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-lora font-medium mb-6">
                Let's Design Your Deck
              </h2>
              <p className="text-lg text-white/90 font-dm-sans mb-8 leading-relaxed">
                Ready to create an outdoor space that reflects your style and enhances your lifestyle? 
                Let's discuss your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/request-consultation"
                  className="inline-block px-8 py-4 bg-accent text-background font-dm-sans font-medium tracking-wide hover:bg-accent/90 transition-colors duration-300"
                  style={{
                    borderRadius: '6px',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderRadius = '50px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderRadius = '6px';
                  }}
                >
                  Request Consultation
                </Link>
                <Link
                  href="/our-work"
                  className="inline-block px-8 py-4 border-2 border-white text-white font-dm-sans font-medium tracking-wide hover:bg-white hover:text-primary-dark transition-colors duration-300"
                  style={{
                    borderRadius: '6px',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderRadius = '50px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderRadius = '6px';
                  }}
                >
                  View Deck Projects
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealStagger } from '../../../components';

export function OutdoorLivingContent() {
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Ken Burns effect - subtle scale and position changes
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const spaces = [
    {
      name: 'Complete Outdoor Rooms',
      description: 'Fully integrated spaces with defined zones for dining, lounging, and entertainment.',
      features: ['Integrated seating', 'Weather protection', 'Lighting design', 'Privacy elements'],
    },
    {
      name: 'Multi-Level Decks',
      description: 'Dynamic elevation changes that create natural separation and visual interest.',
      features: ['Terraced design', 'Built-in planters', 'Multiple gathering areas', 'Seamless transitions'],
    },
    {
      name: 'Entertainment Spaces',
      description: 'Purpose-built areas for hosting, with all the infrastructure for memorable gatherings.',
      features: ['Outdoor kitchens', 'Fire features', 'Audio/visual prep', 'Bar seating'],
    },
    {
      name: 'Transitional Thresholds',
      description: 'Spaces that blur the line between indoor and outdoor living.',
      features: ['Covered passages', 'Glass wall integration', 'Climate control', 'Unified flooring'],
    },
  ];

  const designElements = [
    'Custom fire features',
    'Built-in seating & storage',
    'Integrated lighting systems',
    'Outdoor kitchen prep',
    'Water feature integration',
    'Privacy screening',
    'Plant integration zones',
    'Audio/visual infrastructure',
  ];

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
            src="/images/services/yoder_service_header_outdoorliving.jpg"
            alt="Outdoor Living Spaces by Yoder Construction"
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
              Outdoor Living Spaces
            </h1>
            <p className="text-xl md:text-2xl font-lora font-light italic">
              Where your home meets the horizon.
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
                  Complete Outdoor Living
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="prose prose-lg max-w-none text-text-primary font-dm-sans leading-relaxed space-y-6">
                <p className="text-xl md:text-2xl font-light text-center mb-12">
                  The best outdoor spaces don't just add square footage — they expand how you live. 
                  They become the heart of your home, where life's best moments unfold.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <p>
                      True outdoor living design goes beyond individual elements. It's about creating 
                      cohesive environments that flow naturally from your home's interior, offering 
                      the same comfort and functionality you expect indoors.
                    </p>
                    
                    <p>
                      We design outdoor living spaces that support how you actually live. Multi-generational 
                      gatherings. Quiet morning coffee. Evening entertainment. Seasonal celebrations. 
                      Each space is thoughtfully planned to enhance every aspect of your outdoor lifestyle.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <p>
                      Our approach integrates architecture, landscape, and infrastructure. Fire features 
                      for ambiance, integrated seating for comfort, strategic lighting for evening use, 
                      and weather protection that extends your outdoor season.
                    </p>
                    
                    <p>
                      From intimate conversation nooks to expansive entertainment areas, every Yoder 
                      outdoor living space is designed to feel like a natural extension of your home — 
                      because that's exactly what it should be.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Design Elements Gallery */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                Integrated Design Elements
              </h2>
              <p className="text-lg text-text-light font-dm-sans max-w-3xl mx-auto">
                Each element is carefully considered and seamlessly integrated to create cohesive outdoor environments.
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger staggerDelay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {designElements.map((element, index) => (
                <div key={element} className="text-center group">
                  <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                    {/* Placeholder for design element image */}
                    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary-dark/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ambient-photo">
                      <span className="text-text-light text-xs text-center px-2">{element}</span>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/20 transition-colors duration-300" />
                  </div>
                  <h4 className="font-dm-sans font-medium text-text-primary text-sm text-center">
                    {element}
                  </h4>
                </div>
              ))}
            </div>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* What We Create Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                What We Create
              </span>
              <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                Spaces That Enhance Life
              </h2>
              <p className="text-lg text-text-light font-dm-sans max-w-3xl mx-auto leading-relaxed">
                Every outdoor living space we create is designed around your lifestyle, your home's 
                architecture, and your vision for outdoor living.
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {spaces.map((space, index) => (
                <div key={space.name} className="bg-white rounded-lg shadow-sm border border-accent/10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-56 bg-gray-200 relative overflow-hidden">
                    {/* Placeholder for space type image */}
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary-dark/20 flex items-center justify-center ambient-photo">
                      <span className="text-text-light font-medium text-center px-4">{space.name}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-lora font-medium text-text-primary mb-3">
                      {space.name}
                    </h3>
                    
                    <p className="text-text-light font-dm-sans leading-relaxed mb-6">
                      {space.description}
                    </p>

                    <ul className="space-y-2">
                      {space.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-text-primary font-dm-sans">
                          <svg className="w-4 h-4 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Process & Integration */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                  Design Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                  Seamless Indoor-Outdoor Living
                </h2>
                
                <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                  <p>
                    The most successful outdoor living spaces feel like natural extensions of your home. 
                    We achieve this through careful attention to materials, proportions, and transitions.
                  </p>
                  
                  <p>
                    Our design process begins with understanding how you live indoors, then extends 
                    those patterns and preferences into thoughtfully crafted outdoor environments.
                  </p>
                  
                  <p>
                    Infrastructure planning is crucial. Electrical for lighting and entertainment, 
                    gas lines for fire features and cooking, water access for maintenance and features, 
                    and drainage to protect your investment.
                  </p>
                  
                  <p>
                    The result is outdoor living that truly enhances your lifestyle, not just your 
                    property's appearance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for lifestyle image */}
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary-dark/20 flex items-center justify-center ambient-photo">
                    <span className="text-text-light">Outdoor Living Integration</span>
                  </div>
                </div>
                
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for detail image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-dark/20 to-accent/20 flex items-center justify-center ambient-photo">
                    <span className="text-text-light">Construction Details</span>
                  </div>
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
                Let's Design Your Space
              </h2>
              <p className="text-lg text-white/90 font-dm-sans mb-8 leading-relaxed">
                Ready to expand how you live? Let's create an outdoor living space that becomes 
                the heart of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-consultation" className="btn-secondary">
                  Request Consultation
                </Link>
                <Link href="/our-work" className="btn-primary bg-accent hover:bg-accent/90">
                  View Living Spaces
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealStagger } from '../../../components';

export function PatioCoversContent() {
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Ken Burns effect - subtle scale and position changes
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const configurations = [
    {
      name: 'Attached Covers',
      description: 'Seamlessly integrated with your home\'s architecture for maximum shade and weather protection.',
      features: ['Ledger board attachment', 'Integrated gutters', 'Matches roofline', 'Code compliant'],
      image: '/images/services/yoder_services_patiocovers_attached.jpg',
    },
    {
      name: 'Freestanding',
      description: 'Independent structures that create defined outdoor rooms anywhere in your yard.',
      features: ['No home attachment', 'Flexible placement', 'Custom footings', 'Architectural focal point'],
      image: '/images/services/yoder_services_patiocovers_freestanding.jpg',
    },
    {
      name: 'Pergolas',
      description: 'Open-beam designs that provide filtered shade while maintaining an airy feel.',
      features: ['Decorative beam work', 'Climbing plant support', 'Partial shade', 'Architectural interest'],
      image: '/images/services/yoder_services_patiocovers_pergolas.jpg',
    },
    {
      name: 'Solid Roof',
      description: 'Complete weather protection with insulation and electrical integration options.',
      features: ['Full weather protection', 'Insulated options', 'Electrical integration', 'Year-round use'],
      image: '/images/services/yoder_services_patiocovers_solidroof.jpg',
    },
  ];

  const benefits = [
    'UV protection and shade',
    'Increased outdoor living time',
    'Energy savings for your home',
    'Enhanced property value',
    'Defined outdoor spaces',
    'Weather protection',
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
            src="/images/services/yoder_service_header_patio-covers.jpg"
            alt="Patio Covers by Yoder Construction"
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
              Patio Covers
            </h1>
            <p className="text-xl md:text-2xl font-lora font-light italic">
              Shade that looks like it was always part of the house.
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
                  Shade & Structure
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="prose prose-lg max-w-none text-text-primary font-dm-sans leading-relaxed space-y-6">
                <p className="text-xl md:text-2xl font-light text-center mb-12">
                  A patio cover should do more than block the sun. It should create a outdoor room, 
                  define your living space, and become an architectural extension of your home.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <p>
                      In Southern California, outdoor living isn't seasonal — it's a way of life. 
                      A thoughtfully designed patio cover transforms your outdoor space from a 
                      place you visit into a place you live.
                    </p>
                    
                    <p>
                      Our patio covers are engineered for both beauty and performance. We consider 
                      sun angles, prevailing winds, architectural lines, and how you actually use 
                      your outdoor space. The result is shade that feels intentional, not accidental.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <p>
                      Whether you need an attached cover that extends your home's roofline or a 
                      freestanding structure that creates a new outdoor room, we design each cover 
                      to complement your home's architecture while serving your family's needs.
                    </p>
                    
                    <p>
                      From classic wood beam pergolas to modern aluminum systems with integrated 
                      lighting, every Yoder patio cover is built to withstand decades of Southern 
                      California sun and weather while maintaining its beauty.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Configurations Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                Design Configurations
              </span>
              <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                Built for Your Space
              </h2>
              <p className="text-lg text-text-light font-dm-sans max-w-3xl mx-auto leading-relaxed">
                Every outdoor space has unique requirements. We design patio covers that work with 
                your home's architecture and your lifestyle needs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {configurations.map((config, index) => (
                <div key={config.name} className="bg-white rounded-lg shadow-sm border border-accent/10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-80 bg-gray-200 relative overflow-hidden">
                    <Image
                      src={config.image}
                      alt={`${config.name} patio cover`}
                      fill
                      unoptimized={true}
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-lora font-medium text-text-primary mb-3">
                      {config.name}
                    </h3>
                    
                    <p className="text-text-light font-dm-sans leading-relaxed mb-6">
                      {config.description}
                    </p>

                    <ul className="space-y-2">
                      {config.features.map((feature, featureIndex) => (
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

      {/* Benefits Gallery */}
      <section className="py-16 bg-background">
        <div className="container-padding">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                The Benefits of Professional Shade
              </h2>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger staggerDelay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="text-center group">
                  <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                    {/* Placeholder for benefit image */}
                    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary-dark/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ambient-photo">
                      <span className="text-text-light text-sm text-center px-2">{benefit}</span>
                    </div>
                  </div>
                  <h4 className="font-dm-sans font-medium text-text-primary text-sm">
                    {benefit}
                  </h4>
                </div>
              ))}
            </div>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Materials & Construction */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/services/yoder_services_patiocovers_ConstructionDetails.jpg"
                    alt="Patio Cover Construction Details"
                    fill
                    unoptimized={true}
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                  Materials & Construction
                </span>
                <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                  Built to Last Generations
                </h2>
                
                <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                  <p>
                    We use only premium materials designed for Southern California's climate. 
                    Engineered lumber for structural integrity, powder-coated aluminum for 
                    corrosion resistance, and stainless steel fasteners throughout.
                  </p>
                  
                  <p>
                    Our construction methods exceed local building codes. Proper footings, 
                    engineered connections, and integrated drainage ensure your patio cover 
                    will perform beautifully for decades.
                  </p>
                  
                  <p>
                    Optional features include integrated LED lighting, ceiling fans, electrical 
                    outlets, and even infrared heaters for year-round comfort.
                  </p>
                </div>

                <div className="mt-8">
                  <Link href="/request-consultation" className="btn-primary">
                    Discuss Your Project
                  </Link>
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
                Let's Design Your Cover
              </h2>
              <p className="text-lg text-white/90 font-dm-sans mb-8 leading-relaxed">
                Transform your outdoor space with a custom patio cover designed specifically 
                for your home and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-consultation" className="btn-secondary">
                  Request Consultation
                </Link>
                <Link href="/our-work" className="btn-primary bg-accent hover:bg-accent/90">
                  View Cover Projects
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealStagger } from '../../components';

export function AboutContent() {
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Ken Burns effect - subtle scale and position changes
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const crewMembers = [
    {
      name: 'Matt Yoder',
      role: 'President / Owner',
      image: '/images/team/yoder_aboutus_ourteam_matt.jpg',
      description: 'Founded Yoder Construction on the principle that little things are big things.',
    },
    {
      name: 'Lead Craftsman',
      role: 'Senior Deck Builder',
      image: '/images/team/yoder_aboutus_ourteam_placeholder.jpg',
      description: '15+ years of precision craftsmanship and attention to detail.',
    },
    {
      name: 'Project Manager',
      role: 'Construction Manager',
      image: '/images/team/yoder_aboutus_ourteam_placeholder.jpg',
      description: 'Ensuring every project runs smoothly from design to completion.',
    },
    {
      name: 'Design Specialist',
      role: 'Outdoor Living Designer',
      image: '/images/team/yoder_aboutus_ourteam_placeholder.jpg',
      description: 'Translating visions into buildable, beautiful outdoor spaces.',
    },
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
            src="/images/team/yoder_aboutus_header-bg.jpg"
            alt="About Yoder Construction Inc."
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
              About Us
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/team/yoder_aboutus.jpg"
                  alt="Matt Yoder - President/Owner of Yoder Construction Inc."
                  fill
                  unoptimized={true}
                  className="object-cover ambient-photo"
                />
              </div>
            </ScrollReveal>

            {/* Story Content */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary">
                  Our Story
                </h2>
                
                <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                  <p>
                    Matt Yoder started building at fifteen, working alongside his dad on their family farm. What began with fence lines and outbuildings became a lifelong craft.
                  </p>
                  
                  <p>
                    He later apprenticed under one of North County San Diego's most respected deck builders, learning not just technique but philosophy — that the difference between good and great is in the details most people skip.
                  </p>
                  
                  <p>
                    In 2022, Matt founded Yoder Construction on a simple principle: the little things are the big things. Every cut, every joint, every material choice matters.
                  </p>
                  
                  <p>
                    Today, Matt and his crew serve homeowners from San Clemente through North County San Diego, bringing that same standard to every project they take on.
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href="/request-consultation"
                    className="inline-block px-8 py-4 bg-accent text-background font-dm-sans font-medium tracking-wide hover:bg-opacity-90 transition-colors duration-300"
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
                    Work With Matt
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Crew Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                The Crew Behind the Craft
              </span>
              <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-text-light font-dm-sans max-w-3xl mx-auto leading-relaxed">
                Every member of our team shares a commitment to precision, quality, and the belief that 
                exceptional outdoor spaces require exceptional craftsmanship.
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {crewMembers.map((member, index) => (
                <div key={member.name} className="text-center group">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <div className="aspect-square bg-gray-200 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        fill
                        unoptimized={true}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-lora font-medium text-text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-dm-sans font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-text-light font-dm-sans text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="relative z-10 py-6 lg:py-8" style={{ backgroundColor: '#0A232D' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-20 xl:gap-24 text-white">
              {/* Licensed & Insured */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold font-dm-sans">Licensed & Insured</div>
                  <div className="text-white/80 text-sm font-dm-sans">CSLB #1036601</div>
                </div>
              </div>

              {/* 5-Star Yelp Reviews */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold font-dm-sans">5.0 Stars</div>
                  <div className="text-white/80 text-sm font-dm-sans">Yelp Reviewed</div>
                </div>
              </div>

              {/* Serving SoCal */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold font-dm-sans">Serving SoCal</div>
                  <div className="text-white/80 text-sm font-dm-sans">Since 2022</div>
                </div>
              </div>

              {/* HomeAdvisor Elite Service */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold font-dm-sans">Elite Service</div>
                  <div className="text-white/80 text-sm font-dm-sans">HomeAdvisor Rated</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-padding text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-text-light font-dm-sans mb-8 leading-relaxed">
                Let's discuss your vision and create something remarkable together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-consultation" className="btn-primary">
                  Request Consultation
                </Link>
                <Link href="/our-work" className="btn-secondary text-text-primary border-text-primary hover:bg-text-primary hover:text-white">
                  View Our Work
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
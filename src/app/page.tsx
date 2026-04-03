'use client';

import Image from "next/image";
import Link from "next/link";
import { HeroVideo, ScrollReveal, ScrollRevealStagger } from "../components";
import { ReviewCarousel, MorphingButton } from "../components/ui";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const subHeroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Sophisticated content scroll effects for hero
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.7, 0.1]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 8]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const scrollBlur = useTransform(scrollYProgress, [0, 0.2], [0, 3]);

  // Sub-hero parallax effects
  const { scrollYProgress: subHeroScrollProgress } = useScroll({
    target: subHeroRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(subHeroScrollProgress, [0, 1], ["-5%", "5%"]);
  const backgroundScale = useTransform(subHeroScrollProgress, [0, 1], [1.05, 1.15]);

  // Scroll to top section function
  const scrollToTopSection = () => {
    subHeroRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Services section hover state
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Craftsmen Code hover state - start with first code expanded
  const [hoveredCode, setHoveredCode] = useState<number | null>(0);

  const services = [
    {
      title: 'Custom Decks',
      description: 'Hardwood. Composite. Engineered for your life outdoors.',
      image: '/images/homepage/yoder_services_custom-decks.jpg',
      href: '/services/custom-decks',
    },
    {
      title: 'Patio Covers',
      description: 'Shade, shelter, and structure built to last generations.',
      image: '/images/homepage/yoder_services_patio-covers.jpg',
      href: '/services/patio-covers',
    },
    {
      title: 'Outdoor Living',
      description: 'Where your home meets the horizon.',
      image: '/images/homepage/yoder_services_outdoor-living.jpg',
      href: '/services/outdoor-living',
    },
  ];

  const craftsmenCode = [
    {
      title: 'Product Specialist',
      shortDescription: 'Deep expertise in materials, methods, and design possibilities.',
      fullDescription: 'We know our materials inside and out, not just how to install them, but why we use them. From decking to fasteners, we understand the systems we\'re building. We research what we use, stay current with product knowledge, and speak with clarity to clients and teammates alike.',
      image: '/images/homepage/yoder_thecraftsmencode_product-specialist.jpg'
    },
    {
      title: 'Build',
      shortDescription: 'Every cut, every joint, every detail executed with care.',
      fullDescription: 'We build with purpose. Every cut, measurement, and finish reflects precision and pride. We keep our work areas clean, our pace steady, and our mindset focused on quality that lasts. We show up prepared with the right tools and take responsibility for safe, proper tool operation.',
      image: '/images/homepage/yoder_thecraftsmencode_build.jpg'
    },
    {
      title: 'Customer Service',
      shortDescription: 'Your vision guides every decision we make.',
      fullDescription: 'We are respectful and professional in how we interact with clients and their space. We create a positive experience through clear communication and attention to detail. We greet each client by name and carry ourselves with the same courtesy you\'d expect from a fine dining experience — personal, polished, and thoughtful.',
      image: '/images/homepage/yoder_services_outdoor-living.jpg'
    },
    {
      title: 'Real-Time Design Insight',
      shortDescription: 'Solutions that emerge as we build together.',
      fullDescription: 'We stay alert to what\'s happening on site and speak up when plans and real conditions don\'t align. We think ahead, anticipate issues, and look for opportunities to improve the final design or outcome.',
      image: '/images/homepage/yoder_thecraftsmencode_realtimedesigninsight.jpg'
    },
    {
      title: 'Teach and Reach',
      shortDescription: 'Sharing knowledge to elevate the entire industry.',
      fullDescription: 'We lead by doing. We pass along knowledge, help others grow, and raise the bar with consistency and humility. When the team wins, we all move forward and we all play a part in that.',
      image: '/images/homepage/yoder_thecraftsmencode_teachandreach.jpg'
    },
  ];

  const testimonials = [
    {
      text: "Matt was the absolute BEST contractor we've worked with. He is truly skilled at building custom decks and patio covers. We also appreciated his communication throughout the project, to ensure every detail was meticulously thought through. Simply put he's a joy to work with.",
      author: "Hunter",
      location: "Oceanside, CA",
      rating: 5,
      images: [
        "/images/reviews/yoder_reviews_yelp_hunter_oceanside_apr2024-1.jpg",
        "/images/reviews/yoder_reviews_yelp_hunter_oceanside_apr2024-2.jpg",
        "/images/reviews/yoder_reviews_yelp_hunter_oceanside_apr2024-3.jpg",
        "/images/reviews/yoder_reviews_yelp_hunter_oceanside_apr2024-4.jpg",
        "/images/reviews/yoder_reviews_yelp_hunter_oceanside_apr2024-5.jpg"
      ]
    },
    {
      text: "Matt is very responsive and great to work with. They provided timely quotes and were able to come and evaluate the site. Matt provided a competitive quote and overall was very happy with our deck. Matt and his associates were professional while working.",
      author: "Farukh S.",
      location: "San Diego, CA", 
      rating: 5,
      images: [
        "/images/reviews/yoder_reviews_yelp_farukh_sandiego_sep2024-1.jpg",
        "/images/reviews/yoder_reviews_yelp_farukh_sandiego_sep2024-2.jpg",
        "/images/reviews/yoder_reviews_yelp_farukh_sandiego_sep2024-3.jpg"
      ]
    },
    {
      text: "For years, Yoder construction has been my go to contractor for outdoor living spaces on both my personal and investment properties. From simple to highly custom projects, I can always rely on the quality, excellence, and professionalism of Yoder Construction.",
      author: "Jeff R.",
      location: "Encinitas, CA",
      rating: 5,
      images: [
        "/images/reviews/yoder_reviews_yelp_jeff_encinitas_nov2023-1.jpg",
        "/images/reviews/yoder_reviews_yelp_jeff_encinitas_nov2023-2.jpg"
      ]
    },
    {
      text: "We were very happy with our Trex deck. Matt was very professional, punctual, and efficient. He is priced competitively and we will definitely hire him again in the future. Highly recommend Matt for quality craftsmanship.",
      author: "Tracy",
      location: "Escondido, CA",
      rating: 5,
      images: [
        "/images/reviews/yoder_reviews_yelp_tracy_econdido_nov2025-1.jpg",
        "/images/reviews/yoder_reviews_yelp_tracy_econdido_nov2025-2.jpg"
      ]
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroVideo 
          desktopVideo="/images/hero/YoderHeroVideo.mp4"
          mobileVideo="/images/hero/hero-1_mobile.mp4"
          className="absolute inset-0 z-0"
        />
        
        {/* Gradient Overlay with scroll effect */}
        <motion.div 
          className="absolute inset-0 gradient-overlay-dark z-10"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.7, 0.9]) }}
        />
        
        {/* Hero Content with parallax */}
        <motion.div 
          className="relative z-20 text-center text-white container-padding max-w-5xl"
          style={{ 
            y: contentY,
            opacity: contentOpacity,
            scale: contentScale,
            filter: useTransform(contentBlur, (blur) => `blur(${blur}px)`)
          }}
        >
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-lora font-normal mb-8 leading-tight">
              "A once in a lifetime project deserves timeless construction."
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.7}>
            <div className="flex items-center justify-center space-x-6">
              {/* Matthew Yoder Signature */}
              <div className="relative w-32 h-16 flex items-center justify-center">
                <Image
                  src="/images/logo/Yoder_Signature_White.png"
                  alt="Matthew Yoder Signature"
                  fill
                  unoptimized={true}
                  className="object-contain"
                  style={{ transform: 'translateY(5px)' }}
                />
              </div>
              
              {/* Divider Line */}
              <div className="w-px h-12 bg-white/30 self-center"></div>
              
              {/* Text Block */}
              <div className="text-left flex flex-col justify-center">
                <p className="text-lg font-dm-sans text-white font-medium leading-tight">
                  Matthew Yoder
                </p>
                <p className="text-sm font-dm-sans text-white/80 leading-tight">
                  President/Owner
                </p>
              </div>
            </div>
          </ScrollReveal>
        </motion.div>
        
        {/* Scroll Indicator with fade effect */}
        <ScrollReveal delay={0.7}>
          <motion.button 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hover:scale-110 transition-transform duration-300"
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
              filter: useTransform(scrollBlur, (blur) => `blur(${blur}px)`)
            }}
            onClick={scrollToTopSection}
            aria-label="Scroll to next section"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/70 transition-colors duration-300">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.button>
        </ScrollReveal>
      </section>

      {/* Sub-Hero Section */}
      <section 
        ref={subHeroRef}
        className="relative overflow-hidden" 
        style={{ 
          borderTop: '0.5px solid rgba(27, 45, 58, 0.9)',
          boxShadow: '0 -10px 25px -5px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Ken Burns Parallax Background Image */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: backgroundY,
            scale: backgroundScale
          }}
        >
          <Image
            src="/images/homepage/yoder_top_bg.jpg"
            alt="Yoder Construction outdoor living space"
            fill
            unoptimized={true}
            className="object-cover"
            style={{
              filter: 'contrast(1.3) brightness(0.9) saturate(1.1)'
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-primary-dark/90" />
        </motion.div>
        
        {/* Content with Slow Fade Animation */}
        <div className="relative z-10 py-36 lg:py-44">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal delay={0.4}>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl lg:text-3xl font-dm-sans text-white leading-relaxed mb-10">
                  We design and build decks, patio covers, and outdoor living spaces with precision craftsmanship and lasting quality.
                </p>
                <MorphingButton href="/request-consultation" className="px-8 py-4 text-base">
                  Request Consultation
                </MorphingButton>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Credentials Bar */}
        <div className="relative z-10 py-6 lg:py-8" style={{ backgroundColor: '#0A232D' }}>
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
        </div>
      </section>

      {/* Dramatic Services Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#0A232D' }}>
        {/* Section Header */}
        <div className="relative z-10 text-center mb-16">
          <ScrollReveal>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                Services
              </span>
              <h2 className="text-5xl font-lora font-medium text-white leading-tight">
                What We Build.
              </h2>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div 
          className="relative z-10"
          onMouseLeave={() => setHoveredService(null)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {services.map((service, index) => {
              const isHovered = hoveredService === index;
              const isOtherHovered = hoveredService !== null && hoveredService !== index;
              
              return (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ 
                    once: true, 
                    margin: "-100px"
                  }}
                  className="group relative overflow-hidden cursor-pointer"
                  style={{
                    borderRight: index < services.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredService(index)}
                >
                {/* Service Image */}
                <div 
                  className="relative h-96 lg:h-[500px] overflow-hidden transition-all duration-500"
                  style={{
                    opacity: isOtherHovered ? 0.4 : 1
                  }}
                >
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    viewport={{ 
                      once: true, 
                      margin: "-100px"
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      unoptimized={true}
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      style={{
                        filter: isOtherHovered ? 'grayscale(100%)' : 'grayscale(0%)'
                      }}
                    />
                  </motion.div>
                  {/* Dark Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500"
                    style={{
                      opacity: isOtherHovered ? 0.6 : 1
                    }}
                  />
                  
                  {/* Content Overlay */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-500"
                    style={{
                      opacity: isOtherHovered ? 0.5 : 1,
                      transform: isOtherHovered ? 'translateY(10px)' : 'translateY(0)'
                    }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-lora font-medium mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/90 font-dm-sans leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    
                    <Link 
                      href={service.href}
                      className="inline-flex items-center text-accent font-dm-sans font-medium tracking-wide hover:text-white transition-colors duration-300 group-hover:translate-x-2 transform transition-transform duration-300"
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Services CTA Section */}
        <div className="relative z-10 text-center py-16">
          <ScrollReveal>
            <MorphingButton href="/request-consultation" className="px-8 py-4 text-base">
              Request Consultation
            </MorphingButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Craftsmen Code Section */}
      <section className="bg-primary-dark text-white">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          
          {/* Left Column - Full Bleed Image (40%) */}
          <div className="lg:col-span-2 relative">
            <ScrollReveal direction="left">
              <div className="relative h-96 lg:h-screen overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hoveredCode || 0}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={craftsmenCode[hoveredCode || 0].image}
                        alt={craftsmenCode[hoveredCode || 0].title}
                        fill
                        unoptimized={true}
                        className="object-cover"
                      />
                      {/* Heavy Vignette Overlay */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: `
                            radial-gradient(ellipse at center, transparent 30%, rgba(27, 45, 58, 0.4) 60%, rgba(27, 45, 58, 0.8) 100%),
                            linear-gradient(to top, rgba(27, 45, 58, 0.6), transparent 50%)
                          `
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>

          {/* Right Column - Content (60%) */}
          <div className="lg:col-span-3 flex items-center">
            <div className="w-full px-6 lg:px-16 py-16 lg:py-24">
              <ScrollReveal direction="right">
                {/* Section Header */}
                <div className="mb-12">
                  <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                    The Craftsmen Code
                  </span>
                  <h2 className="text-3xl md:text-4xl font-lora font-medium">
                    How we build reflects who we are.
                  </h2>
                </div>

                {/* Interactive Code List */}
                <div className="space-y-6">
                  {craftsmenCode.map((code, index) => {
                    const isActive = hoveredCode === index;
                    
                    return (
                      <motion.div
                        key={code.title}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredCode(index)}
                        onMouseLeave={() => setHoveredCode(null)}
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <div className="flex items-start space-x-4">
                          {/* Simple Circle Indicator */}
                          <motion.div 
                            className="flex-shrink-0 mt-2 w-3 h-3 rounded-full border-2"
                            animate={{
                              borderColor: isActive ? "#8B7355" : "rgba(255, 255, 255, 0.4)",
                              backgroundColor: isActive ? "#8B7355" : "transparent"
                            }}
                            transition={{ duration: 0.3 }}
                          />

                          {/* Content */}
                          <div className="flex-grow">
                            <motion.h3 
                              className="text-xl font-lora font-medium"
                              animate={{
                                color: isActive ? "#8B7355" : "#ffffff"
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {code.title}
                            </motion.h3>
                            
                            {/* Description - only visible on hover */}
                            <AnimatePresence mode="wait">
                              {isActive && (
                                <motion.p
                                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                  animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-white/90 font-dm-sans leading-relaxed"
                                >
                                  {code.fullDescription}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                Reviews & Testimonials
              </span>
              <h2 className="text-5xl font-lora font-medium text-text-primary">
                What Our Clients Say.
              </h2>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal>
            <ReviewCarousel reviews={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent ambient-photo" />
        <div className="absolute inset-0 bg-primary-dark/75" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-lora font-medium text-white mb-6">
              Ready to Build Something Remarkable?
            </h2>
            <p className="text-xl text-white/90 font-dm-sans mb-8 max-w-2xl mx-auto">
              Tell us about your vision.
            </p>
            <MorphingButton href="/request-consultation" className="px-8 py-4 text-base">
              Request Your Consultation
            </MorphingButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

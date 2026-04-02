'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealStagger } from '../../../components';
import { MorphingButton } from '../../../components/ui';

function CarlsbadLocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Yoder Construction Inc.",
    "description": "Custom deck builder and outdoor living space contractor serving Carlsbad, CA",
    "url": "https://yoderconstructioninc.com/service-areas/carlsbad",
    "telephone": "(760) 730-6776",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "918 Mission Avenue, Ste 120 #250",
      "addressLocality": "Oceanside",
      "addressRegion": "CA",
      "postalCode": "92054",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Carlsbad",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "hasCredential": {
      "@type": "GovernmentPermit",
      "name": "CSLB License #1098601"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12",
      "bestRating": "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2),
      }}
    />
  );
}

const services = [
  {
    title: 'Custom Decks',
    description: 'Premium materials. Obsessive craftsmanship.',
    image: '/images/homepage/yoder_services_custom-decks.jpg',
    href: '/services/custom-decks',
  },
  {
    title: 'Patio Covers',
    description: 'Shade that looks like it was always part of the house.',
    image: '/images/homepage/yoder_services_patio-covers.jpg',
    href: '/services/patio-covers',
  },
  {
    title: 'Outdoor Living Spaces',
    description: 'Where everyone wants to be.',
    image: '/images/homepage/yoder_services_outdoor-living.jpg',
    href: '/services/outdoor-living',
  },
];

const localInsights = [
  {
    heading: "Coastal Climate, Coastal Materials",
    body: "Carlsbad's marine layer and salt air are tough on outdoor structures. Cedar weathers fast near the coast, and lower-grade composites fade under constant UV. That's why we recommend materials built for this environment: IPE hardwood, which naturally resists salt and moisture, or premium composites like Trex and TimberTech that hold up without the maintenance. For patio covers, timber-frame construction with properly sealed connections handles the coastal conditions far better than aluminum or vinyl alternatives. We'll walk you through exactly what works for your specific location, whether you're a block from the beach or a mile inland.",
    image: "/images/details/yoder-detail-materials.jpg",
    imageLeft: true
  },
  {
    heading: "What Carlsbad Homeowners Are Building",
    body: "In La Costa and Aviara, we see homeowners with larger lots building full outdoor rooms: covered patio structures with outdoor kitchens, fire features, and seating areas designed for year-round entertaining. In the Village and closer to the coast, the focus tends to be on maximizing smaller footprints with well-designed decks and shade structures that extend usable living space. In newer communities like Bressi Ranch and Robertson Ranch, homeowners are adding the outdoor features that the original builds didn't include. With Carlsbad's median home price above $1.4 million, these projects aren't just about lifestyle. A well-built outdoor space is one of the highest-impact improvements you can make to your property's value.",
    image: "/images/decks/deck-construction.jpg",
    imageLeft: false
  },
  {
    heading: "Permits and HOAs in Carlsbad",
    body: "Carlsbad has its own building department, so permits are handled locally rather than through the county. Any deck built more than 30 inches above grade requires a permit, as does any attached structure like a patio cover. The process typically takes about two weeks, with fees ranging from $190 to $900 depending on project scope. If you're in a master-planned community like Aviara, Robertson Ranch, or La Costa, your HOA will likely have additional requirements around materials, height restrictions, and design approval. We handle the full permitting process and coordinate with your HOA so you don't have to manage it yourself.",
    image: "/images/details/yoder-detail-construction.jpg",
    imageLeft: true
  }
];

const whyChooseUs = [
  {
    title: "Local to North County",
    body: "We're based in Oceanside, not a crew driving in from hours away. We know the coastal conditions, the local permitting process, and the neighborhoods."
  },
  {
    title: "Premium Materials, No Shortcuts",
    body: "From IPE hardwood to timber-framed patio covers, we use materials that hold up to the salt air and coastal climate Carlsbad is known for."
  },
  {
    title: "Detail-Obsessed Craftsmanship",
    body: "The little things are the big things. Matched plugs, invisible miters, hand-fitted joinery. The details our clients notice for years."
  }
];

export function CarlsbadContent() {
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
      <CarlsbadLocalBusinessSchema />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image with Ken Burns Effect */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ scale, x, y }}
        >
          <Image
            src="/images/areas/carlsbad-hero.jpg"
            alt="Custom Deck Builder in Carlsbad, CA"
            fill
            unoptimized={true}
            className="object-cover"
            style={{
              filter: 'brightness(0.92) saturate(0.85) contrast(1.05)'
            }}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 gradient-overlay-dark" />
        
        <div className="relative z-20 text-center text-white container-padding">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-lora font-medium mb-6">
              Custom Deck Builder in Carlsbad, CA
            </h1>
            <p className="text-xl md:text-2xl font-lora font-light italic">
              Premium decks, patio covers, and outdoor living spaces for Carlsbad homeowners, from the Village to Aviara.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-background section-padding">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <p className="text-lg text-text-primary font-dm-sans leading-relaxed">
                  Carlsbad homeowners live for their outdoor spaces. With over 260 days of sunshine and properties built to take advantage of it, those spaces deserve to be built right. Whether you're in Carlsbad Village steps from Tamarack Beach, settled into La Costa or Aviara with views of the golf course, or in one of the newer communities like Robertson Ranch or Bressi Ranch, Yoder Construction builds custom decks, patio covers, and outdoor living spaces designed for how you actually use your property.
                </p>
                <p className="text-lg text-text-primary font-dm-sans leading-relaxed">
                  We're based in Oceanside, which means your Carlsbad project is in our backyard. Matt and the crew are on-site, accessible, and invested in getting every detail right.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Image */}
            <ScrollReveal direction="right">
              <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/homepage/yoder_services_custom-decks.jpg"
                  alt="Custom outdoor living space in Carlsbad, CA"
                  fill
                  unoptimized={true}
                  className="object-cover ambient-photo"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Local Insights Section */}
      <section className="bg-white section-padding">
        <div className="container-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                Building Outdoor Spaces in Carlsbad
              </span>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {localInsights.map((insight, index) => (
              <div key={insight.heading} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <div className={`relative h-96 lg:h-[400px] bg-gray-200 rounded-lg overflow-hidden ${insight.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ScrollReveal direction={insight.imageLeft ? "left" : "right"}>
                    <Image
                      src={insight.image}
                      alt={insight.heading}
                      fill
                      unoptimized={true}
                      className="object-cover ambient-photo"
                    />
                  </ScrollReveal>
                </div>
                
                {/* Content */}
                <div className={`space-y-6 ${insight.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ScrollReveal direction={insight.imageLeft ? "right" : "left"}>
                    <h3 className="text-3xl md:text-4xl font-lora font-medium text-text-primary">
                      {insight.heading}
                    </h3>
                    <p className="text-lg text-text-primary font-dm-sans leading-relaxed">
                      {insight.body}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#0A232D' }}>
        {/* Section Header */}
        <div className="relative z-10 text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
              What We Build in Carlsbad
            </span>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {services.map((service, index) => (
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
              >
                {/* Service Image */}
                <div className="relative h-96 lg:h-[500px] overflow-hidden transition-all duration-500">
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
                    />
                  </motion.div>
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-500">
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Carlsbad Homeowners Choose Yoder */}
      <section className="bg-primary-dark text-white section-padding">
        <div className="container-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-6">
                Why Carlsbad Homeowners Work With Us
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <ScrollRevealStagger staggerDelay={0.2}>
              {whyChooseUs.map((point, index) => (
                <div key={point.title} className="text-center space-y-4">
                  <h3 className="text-xl lg:text-2xl font-lora font-medium text-white">
                    {point.title}
                  </h3>
                  <p className="text-white/90 font-dm-sans leading-relaxed">
                    {point.body}
                  </p>
                </div>
              ))}
            </ScrollRevealStagger>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-background section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm">
                <blockquote className="text-xl lg:text-2xl font-lora font-light text-text-primary italic mb-8 leading-relaxed">
                  "Yoder Construction has been my go-to contractor for countless projects. Your vision becomes their vision. Best communication I have had with a contractor. No surprises, no working backwards, no compromises."
                </blockquote>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-dm-sans font-medium text-text-primary">
                  Jeff R., Repeat Client
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/homepage/yoder_top_bg.jpg"
            alt="Custom outdoor construction in Carlsbad"
            fill
            unoptimized={true}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/75" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-lora font-medium text-white mb-6">
              Ready to Build in Carlsbad?
            </h2>
            <p className="text-xl text-white/90 font-dm-sans mb-8 max-w-2xl mx-auto">
              Tell us about your project. We'll schedule a site visit and walk your property.
            </p>
            <MorphingButton href="/request-consultation" className="px-8 py-4 text-base">
              Request Your Consultation
            </MorphingButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Community Areas Served */}
      <section className="bg-white py-12">
        <div className="container-padding text-center">
          <ScrollReveal>
            <p className="text-sm text-text-light font-dm-sans">
              Serving all Carlsbad neighborhoods including Carlsbad Village, La Costa, Aviara, Bressi Ranch, Robertson Ranch, Calavera Hills, and surrounding communities.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
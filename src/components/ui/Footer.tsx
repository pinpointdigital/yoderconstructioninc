'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '../animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services/custom-decks', label: 'Custom Decks' },
    { href: '/services/patio-covers', label: 'Patio Covers' },
    { href: '/services/outdoor-living', label: 'Outdoor Living' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/request-consultation', label: 'Request Consultation' },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-padding section-padding">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="relative w-48 h-14 mb-4">
                  <Image
                    src="/images/logo/Yoder-Construction-Logo_White.png"
                    alt="Yoder Construction Inc. Logo"
                    fill
                    unoptimized={true}
                    className="object-contain object-left"
                  />
                </div>
              </div>
              
              <p className="text-white/80 font-dm-sans leading-relaxed mb-6 max-w-md">
                Precision craftsmanship for Southern California's finest outdoor living spaces.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-lora font-medium mb-6">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-300 font-dm-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-lora font-medium mb-6">Contact</h4>
              <div className="space-y-4">
                <div>
                  <a 
                    href="tel:7604217978"
                    className="text-white/80 hover:text-accent transition-colors duration-300 font-dm-sans text-base"
                  >
                    (760) 421-7978
                  </a>
                </div>
                
                <div className="text-white/80 font-dm-sans">
                  <p>918 Mission Ave Ste 120 #250</p>
                  <p>Oceanside, CA 92054</p>
                </div>
                
                <div className="text-white/80 font-dm-sans">
                  <p>CSLB #1098601</p>
                  <p>Licensed, Bonded, and Insured</p>
                </div>
                
                <div className="pt-4">
                  <Link
                    href="/request-consultation"
                    className="inline-block px-6 py-3 border-2 border-white text-white font-dm-sans font-medium tracking-wide hover:bg-white hover:text-primary-dark transition-colors duration-300"
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
                    <span className="relative z-10">Get Free Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Bottom Section */}
        <ScrollReveal delay={0.2}>
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 font-dm-sans text-sm">
                © {currentYear} Yoder Construction Inc. All rights reserved. | v1.0
              </p>
              
              <div className="flex space-x-6 text-sm">
                <Link 
                  href="/privacy-policy" 
                  className="text-white/60 hover:text-accent transition-colors duration-300 font-dm-sans"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms-of-service" 
                  className="text-white/60 hover:text-accent transition-colors duration-300 font-dm-sans"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
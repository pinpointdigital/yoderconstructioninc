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
                <div className="relative w-40 h-12 mb-4">
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

              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/yoderconstructioninc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a
                  href="https://facebook.com/yoderconstructioninc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
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
                    href="tel:7607306776"
                    className="text-white/80 hover:text-accent transition-colors duration-300 font-dm-sans text-base"
                  >
                    (760) 730-6776
                  </a>
                </div>
                
                <div className="text-white/80 font-dm-sans">
                  <p>918 Mission Ave Ste 120 #250</p>
                  <p>Oceanside, CA 92054</p>
                </div>
                
                <div className="text-white/80 font-dm-sans">
                  <p>CSLB #1098601</p>
                  <p>Licensed & Insured</p>
                </div>
                
                <div className="pt-4">
                  <Link
                    href="/request-consultation"
                    className="group relative overflow-hidden px-4 py-2 border-2 border-white text-white font-dm-sans font-medium tracking-wide transition-all duration-500 ease-out hover:bg-white hover:text-primary-dark hover:rounded-full inline-block"
                    style={{
                      borderRadius: '4px',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
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
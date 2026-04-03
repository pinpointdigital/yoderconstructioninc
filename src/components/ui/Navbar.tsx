'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isServiceAreasDropdownOpen, setIsServiceAreasDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { 
      href: '/services', 
      label: 'Services',
      dropdown: [
        { 
          href: '/services/custom-decks', 
          label: 'Custom Decks',
          image: '/images/homepage/yoder_services_custom-decks.jpg',
          description: 'Premium hardwood & composite decking'
        },
        { 
          href: '/services/patio-covers', 
          label: 'Patio Covers',
          image: '/images/homepage/yoder_services_patio-covers.jpg',
          description: 'Elegant outdoor shade solutions'
        },
        { 
          href: '/services/outdoor-living', 
          label: 'Outdoor Living',
          image: '/images/homepage/yoder_services_outdoor-living.jpg',
          description: 'Complete outdoor entertainment spaces'
        },
      ]
    },
    { href: '/our-work', label: 'Our Work' },
    { 
      href: '/service-areas', 
      label: 'Service Areas',
      dropdown: [
        {
          title: 'Coastal',
          image: '/images/homepage/yoder_serviceareas_coastal.jpg',
          areas: [
            { href: '/service-areas/carlsbad', label: 'Carlsbad', subtitle: 'includes Aviara, La Costa' },
            { href: '/service-areas/cardiff-by-the-sea', label: 'Cardiff-by-the-Sea', subtitle: '' },
            { href: '/service-areas/del-mar', label: 'Del Mar', subtitle: '' },
            { href: '/service-areas/encinitas', label: 'Encinitas', subtitle: 'includes Leucadia, Olivenhain' },
            { href: '/service-areas/la-jolla', label: 'La Jolla', subtitle: '' },
            { href: '/service-areas/oceanside', label: 'Oceanside', subtitle: '' },
            { href: '/service-areas/san-clemente', label: 'San Clemente', subtitle: '' },
            { href: '/service-areas/solana-beach', label: 'Solana Beach', subtitle: '' },
          ]
        },
        {
          title: 'Inland',
          image: '/images/homepage/yoder_serviceareas_inland.jpg',
          areas: [
            { href: '/service-areas/4s-ranch', label: '4S Ranch', subtitle: '' },
            { href: '/service-areas/carmel-valley', label: 'Carmel Valley', subtitle: '' },
            { href: '/service-areas/escondido', label: 'Escondido', subtitle: '' },
            { href: '/service-areas/poway', label: 'Poway', subtitle: '' },
            { href: '/service-areas/ramona', label: 'Ramona', subtitle: '' },
            { href: '/service-areas/rancho-bernardo', label: 'Rancho Bernardo', subtitle: '' },
            { href: '/service-areas/rancho-santa-fe', label: 'Rancho Santa Fe', subtitle: '' },
            { href: '/service-areas/san-marcos', label: 'San Marcos', subtitle: '' },
            { href: '/service-areas/valley-center', label: 'Valley Center', subtitle: '' },
            { href: '/service-areas/vista', label: 'Vista', subtitle: '' },
          ]
        }
      ]
    },
  ];

  const isActivePath = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'navbar-solid' : 'bg-transparent'
        }`}
      >
        <div className="container-padding flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-16">
              {/* White logo for transparent background at 60% opacity */}
              <Image
                src="/images/logo/Yoder-Construction-Logo_White.png"
                alt="Yoder Construction Inc. Logo"
                fill
                unoptimized={true}
                className={`object-contain transition-opacity duration-500 ${
                  isScrolled ? 'opacity-0' : 'opacity-60'
                }`}
                priority
              />
              {/* White logo for dark solid background at full opacity */}
              <Image
                src="/images/logo/Yoder-Construction-Logo_White.png"
                alt="Yoder Construction Inc. Logo"
                fill
                unoptimized={true}
                className={`object-contain transition-opacity duration-500 ${
                  isScrolled ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (link.label === 'Services') setIsServicesDropdownOpen(true);
                      if (link.label === 'Service Areas') setIsServiceAreasDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (link.label === 'Services') setIsServicesDropdownOpen(false);
                      if (link.label === 'Service Areas') setIsServiceAreasDropdownOpen(false);
                    }}
                  >
                    <button
                      className={`nav-link text-base font-dm-sans font-medium py-2 transition-colors duration-300 ${
                        isScrolled ? 'nav-scrolled' : 'nav-transparent'
                      } ${
                        isScrolled 
                          ? (isActivePath(link.href) ? 'text-accent' : 'text-white hover:text-accent')
                          : (isActivePath(link.href) ? 'text-accent' : 'text-white hover:text-[#ebebeb]')
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`inline ml-1 w-4 h-4 transition-transform duration-200 ${
                          (link.label === 'Services' && isServicesDropdownOpen) || 
                          (link.label === 'Service Areas' && isServiceAreasDropdownOpen) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Services Dropdown */}
                    {link.label === 'Services' && (
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="fixed bg-white shadow-2xl rounded-xl overflow-hidden z-50"
                            style={{ 
                              width: '900px',
                              top: '80px',
                              left: 'calc(50vw - 450px)'
                            }}
                          >
                            <div className="grid grid-cols-3 gap-0">
                              {link.dropdown.filter((item: any) => item.href).map((item: any) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="group block p-8 text-center hover:bg-gray-50 transition-all duration-300 border-r border-gray-100 last:border-r-0"
                                >
                                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                    <Image
                                      src={item.image}
                                      alt={item.label}
                                      fill
                                      unoptimized={true}
                                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <h3 className="text-lg font-lora font-medium text-text-primary group-hover:text-accent transition-colors duration-200 mb-2">
                                    {item.label}
                                  </h3>
                                  <p className="text-base text-text-light font-dm-sans">
                                    {item.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Service Areas Dropdown */}
                    {link.label === 'Service Areas' && (
                      <AnimatePresence>
                        {isServiceAreasDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="fixed bg-white shadow-2xl rounded-xl overflow-hidden z-50"
                            style={{ 
                              width: '800px',
                              top: '80px',
                              left: 'calc(50vw - 400px)'
                            }}
                          >
                            <div className="grid grid-cols-2 gap-0">
                              {link.dropdown.map((section: any, index) => (
                                <div
                                  key={section.title}
                                  className={`p-6 hover:bg-gray-50 transition-all duration-300 ${
                                    index === 0 ? 'border-r border-gray-100' : ''
                                  }`}
                                >
                                  {/* Section Header with Image */}
                                  <div className="text-center mb-6">
                                    <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden">
                                      <Image
                                        src={section.image}
                                        alt={section.title}
                                        fill
                                        unoptimized={true}
                                        className="object-cover"
                                      />
                                    </div>
                                    <h3 className="text-xl font-lora font-medium text-text-primary mb-2">
                                      {section.title}
                                    </h3>
                                  </div>

                                  {/* Area Links */}
                                  <div className="space-y-2">
                                    {section.areas.map((area: any) => (
                                      <Link
                                        key={area.href}
                                        href={area.href}
                                        className="block group hover:bg-white rounded-lg p-2 transition-all duration-200"
                                      >
                                        <div className="text-sm font-dm-sans text-text-primary group-hover:text-accent transition-colors duration-200 font-medium">
                                          {area.label}
                                        </div>
                                        {area.subtitle && (
                                          <div className="text-xs text-text-light font-dm-sans">
                                            {area.subtitle}
                                          </div>
                                        )}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`nav-link text-base font-dm-sans font-medium py-2 transition-colors duration-300 ${
                      isScrolled ? 'nav-scrolled' : 'nav-transparent'
                    } ${
                      isScrolled 
                        ? (isActivePath(link.href) ? 'text-accent' : 'text-white hover:text-accent')
                        : (isActivePath(link.href) ? 'text-accent' : 'text-white hover:text-[#ebebeb]')
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="/request-consultation" 
              className="group relative overflow-hidden px-4 py-2 border-2 border-white text-white text-sm font-dm-sans font-medium tracking-wide hover:bg-white hover:text-primary-dark"
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
              <span className="relative z-10">Request Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`} />
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-dark"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col justify-center items-center h-full space-y-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                >
                  {link.dropdown ? (
                    <div className="text-center">
                      <div className="text-xl font-lora font-medium text-white mb-4">
                        {link.label}
                      </div>
                      <div className="space-y-3">
                        {link.label === 'Services' ? (
                          // Services dropdown for mobile
                          link.dropdown.filter((item: any) => item.href).map((item: any) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={toggleMobileMenu}
                              className="block text-base font-dm-sans text-white/80 hover:text-accent transition-colors duration-200"
                            >
                              {item.label}
                            </Link>
                          ))
                        ) : link.label === 'Service Areas' ? (
                          // Service Areas dropdown for mobile
                          link.dropdown.map((section: any) => (
                            <div key={section.title} className="mb-6">
                              <div className="text-lg font-lora font-medium text-accent mb-3">
                                {section.title}
                              </div>
                              <div className="space-y-2">
                                {section.areas.map((area: any) => (
                                  <Link
                                    key={area.href}
                                    href={area.href}
                                    onClick={toggleMobileMenu}
                                    className="block text-sm font-dm-sans text-white/80 hover:text-accent transition-colors duration-200"
                                  >
                                    {area.label}
                                    {area.subtitle && (
                                      <span className="text-xs text-white/60 block">
                                        {area.subtitle}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={toggleMobileMenu}
                      className="text-xl font-lora font-medium text-white hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-12"
              >
                <Link
                  href="/request-consultation"
                  onClick={toggleMobileMenu}
                  className="group relative overflow-hidden px-4 py-2 border-2 border-white text-white font-dm-sans font-medium tracking-wide hover:bg-white hover:text-primary-dark"
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
                  <span className="relative z-10">Request Consultation</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
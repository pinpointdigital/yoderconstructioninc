'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ScrollRevealStagger } from '../../../components';
import { Lightbox } from '../../../components/ui';

const detailFeatures = [
  {
    name: 'Precision-milled joinery',
    image: '/images/services/yoder_services_craftsmanship_precision-milled-joinery.jpg'
  },
  {
    name: 'Hidden fastener systems',
    image: '/images/services/yoder_services_craftsmanship_hidden-fastener-systems.jpg'
  },
  {
    name: 'Integrated drainage solutions',
    image: '/images/services/yoder_services_craftsmanship_Integrated-drainage-solutions.jpg'
  },
  {
    name: 'Custom railing designs',
    image: '/images/services/yoder_services_craftsmanship_custom-railing-designs.jpg'
  },
  {
    name: 'Multi-level configurations',
    image: '/images/services/yoder_services_craftsmanship_multi-level-configurations.jpg'
  },
];

export function DetailFeaturesSection() {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Drag scroll state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  
  // Hover state for grayscale effect
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const openLightbox = (image: string, title: string) => {
    setLightboxImages([image]);
    setLightboxIndex(0);
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

  // Drag scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    const newScrollLeft = scrollLeft - walk;
    
    scrollContainerRef.current.scrollLeft = newScrollLeft;
    setDragDistance(Math.abs(walk));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset drag distance after a short delay to allow click detection
    setTimeout(() => setDragDistance(0), 100);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setDragDistance(0), 100);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    const touch = e.touches[0];
    const x = touch.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    
    scrollContainerRef.current.scrollLeft = newScrollLeft;
    setDragDistance(Math.abs(walk));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Reset drag distance after a short delay to allow click detection
    setTimeout(() => setDragDistance(0), 100);
  };

  return (
    <>
      {/* Detail Strip */}
      <section className="py-24 bg-white">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-lora font-medium text-text-primary">
            Craftsmanship Details
          </h2>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-16 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent select-none"
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollBehavior: isDragging ? 'auto' : 'smooth'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            handleMouseLeave();
            setHoveredFeature(null);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <ScrollRevealStagger staggerDelay={0.1}>
            <div className="flex space-x-16 px-6 md:px-8 min-w-max">
              {detailFeatures.map((feature, index) => {
                const isHovered = hoveredFeature === index;
                const isOtherHovered = hoveredFeature !== null && hoveredFeature !== index;
                
                return (
                  <div key={feature.name} className="flex-shrink-0 text-center group">
                    <div 
                      className="w-96 h-72 bg-gray-200 rounded-xl mb-6 overflow-hidden relative shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500"
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        setHoveredFeature(index);
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation();
                        setHoveredFeature(null);
                      }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        fill
                        unoptimized={true}
                        className="object-cover transition-all duration-500 cursor-pointer"
                        style={{
                          filter: isOtherHovered ? 'grayscale(100%)' : 'grayscale(0%)',
                          opacity: isOtherHovered ? 0.6 : 1
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openLightbox(feature.image, feature.name);
                        }}
                      />
                      
                      {/* Subtle View Icon - Bottom Right */}
                      <div 
                        className={`absolute bottom-4 right-4 transition-all duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openLightbox(feature.image, feature.name);
                        }}
                      >
                        <div className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-black/70 hover:scale-105 transition-all duration-200 cursor-pointer">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Feature Label */}
                    <h3 className="text-base font-dm-sans text-text-primary font-medium leading-tight max-w-96 transition-opacity duration-500 mb-8"
                        style={{ opacity: isOtherHovered ? 0.5 : 1 }}>
                      {feature.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </ScrollRevealStagger>
        </div>
        
        {/* Scroll Indicator */}
        <div className="text-center mt-12">
          <p className="text-sm text-text-light font-dm-sans">
            ← Click and drag to scroll through our craftsmanship details →
          </p>
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
        alt="Craftsmanship detail"
      />
    </>
  );
}
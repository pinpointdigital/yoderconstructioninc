'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeroCrossfadeProps {
  images: string[];
  interval?: number;
  crossfadeDuration?: number;
  className?: string;
  alt?: string;
}

export default function HeroCrossfade({
  images,
  interval = 5000,
  crossfadeDuration = 1500,
  className = '',
  alt = 'Hero background image',
}: HeroCrossfadeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) {
    return <div className={`bg-primary-dark ${className}`} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {images.map((image, index) => {
          if (index !== currentIndex) return null;
          
          return (
            <motion.div
              key={`${image}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: crossfadeDuration / 1000,
                ease: 'easeInOut'
              }}
              className="absolute inset-0"
            >
              <motion.div
                initial={{ scale: 1.0 }}
                animate={{ scale: 1.08 }}
                transition={{
                  duration: 12,
                  ease: 'linear'
                }}
                className="w-full h-full"
              >
                <Image
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  fill
                  priority={index === 0}
                  unoptimized={true}
                  className="object-cover ambient-photo"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
      
      {/* Optional indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white opacity-100 scale-125'
                  : 'bg-white/50 opacity-60 hover:opacity-80'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
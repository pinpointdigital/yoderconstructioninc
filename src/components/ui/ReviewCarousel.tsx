'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  text: string;
  author: string;
  location: string;
  rating: number;
  images: string[];
}

interface ReviewCarouselProps {
  reviews: Review[];
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setCurrentImage(0);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setCurrentImage(0);
  };

  // Auto-rotation logic
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
        setCurrentImage(0);
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, reviews.length]);

  const currentReviewData = reviews[currentReview];

  return (
    <div 
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentReview}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative h-80 lg:h-96 overflow-hidden rounded-xl shadow-2xl group">
              <motion.div
                className="flex h-full"
                animate={{
                  x: `-${currentImage * 100}%`
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94] // Subtle elastic easing
                }}
              >
                {currentReviewData.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-full flex-shrink-0"
                  >
                    <Image
                      src={image}
                      alt={`Project for ${currentReviewData.author} - Image ${index + 1}`}
                      fill
                      unoptimized={true}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ))}
              </motion.div>

              {/* Image Navigation Arrows */}
              {currentReviewData.images.length > 1 && (
                <>
                  {currentImage > 0 && (
                    <button
                      onClick={() => setCurrentImage(currentImage - 1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  {currentImage < currentReviewData.images.length - 1 && (
                    <button
                      onClick={() => setCurrentImage(currentImage + 1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Image Navigation Dots (if multiple images) */}
            {currentReviewData.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {currentReviewData.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-700 ${
                      index === currentImage 
                        ? 'bg-accent w-8' 
                        : 'bg-gray-300 hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Review Content */}
          <div className="space-y-6">
            {/* Star Rating with Yelp Badge */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <Image
                src="/images/reviews/yelp-verified-review.png"
                alt="Yelp Verified Review"
                width={70}
                height={35}
                unoptimized={true}
                className="opacity-90"
              />
            </div>

            {/* Review Text */}
            <blockquote className="text-lg font-dm-sans text-text-primary leading-relaxed">
              "{currentReviewData.text}"
            </blockquote>

            {/* Author */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-base font-dm-sans text-text-primary font-medium leading-tight">
                {currentReviewData.author}
              </p>
              <p className="text-sm font-dm-sans text-text-light leading-tight">
                {currentReviewData.location}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Review Navigation */}
      <div className="flex items-center justify-between mt-12">
        {/* Previous Button */}
        <button
          onClick={prevReview}
          className="flex items-center space-x-2 text-accent hover:text-primary-dark transition-colors duration-500 group"
        >
          <ChevronLeft className="w-5 h-5 transition-transform duration-500 group-hover:-translate-x-1" />
          <span className="font-dm-sans font-medium">Previous</span>
        </button>

        {/* Review Dots */}
        <div className="flex space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentReview(index);
                setCurrentImage(0);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentReview 
                  ? 'bg-accent w-12' 
                  : 'bg-gray-300 hover:bg-accent/50'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextReview}
          className="flex items-center space-x-2 text-accent hover:text-primary-dark transition-colors duration-500 group"
        >
          <span className="font-dm-sans font-medium">Next</span>
          <ChevronRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroVideoProps {
  desktopVideo: string;
  mobileVideo: string;
  className?: string;
  poster?: string;
}

export default function HeroVideo({
  desktopVideo,
  mobileVideo,
  className = '',
  poster,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Sophisticated scroll transforms
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.6]);

  // Optimized video loading for Safari
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force muted state for Safari
      video.muted = true;
      video.defaultMuted = true;
      video.controls = false;
      
      // Safari-specific attributes for better performance
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('x-webkit-airplay', 'deny');
      
      // Force immediate load for Safari
      video.load();
      
      const attemptPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Video started successfully, upgrade preload for smoother loops
            video.preload = 'auto';
          }).catch(error => {
            // Auto-play was prevented
            console.log('Auto-play prevented:', error);
          });
        }
      };
      
      // Try multiple methods for fastest Safari startup
      if (video.readyState >= 3) {
        // Video is already ready
        attemptPlay();
      } else {
        // Wait for video to be ready
        const onCanPlay = () => {
          attemptPlay();
          video.removeEventListener('canplay', onCanPlay);
        };
        
        const onLoadedData = () => {
          attemptPlay();
          video.removeEventListener('loadeddata', onLoadedData);
        };
        
        video.addEventListener('canplay', onCanPlay);
        video.addEventListener('loadeddata', onLoadedData);
        
        // Fallback timeout for Safari
        setTimeout(attemptPlay, 50);
      }
    }
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch(console.error);
      } else {
        video.pause();
      }
    }
  };

  return (
    <div ref={containerRef} className={className}>
      <motion.video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
        poster={poster}
        className="w-full h-full object-cover cursor-pointer"
        style={{
          filter: 'brightness(0.92) saturate(0.85) contrast(1.05)',
          scale,
          y,
          opacity,
        }}
        onClick={handleClick}
      >
        <source src={desktopVideo} type="video/mp4" media="(min-width: 768px)" />
        <source src={mobileVideo} type="video/mp4" media="(max-width: 767px)" />
        Your browser does not support the video tag.
      </motion.video>
    </div>
  );
}
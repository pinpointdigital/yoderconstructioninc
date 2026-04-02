'use client';

import Link from 'next/link';

interface MorphingButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function MorphingButton({ href, children, className = '' }: MorphingButtonProps) {
  return (
    <Link 
      href={href} 
      className={`group relative overflow-hidden px-4 py-2 border-2 border-white text-white text-sm font-dm-sans font-medium tracking-wide hover:bg-white hover:text-primary-dark ${className}`}
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
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
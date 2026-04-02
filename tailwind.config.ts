import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1B2D3A',
        'accent': '#c19f4c', // Main Accent Color
        'background': '#F5F3EF',
        'text-primary': '#2C2C2C',
        'text-light': '#6B6B6B',
        'gold-soft': '#D4C5A9',
      },
      fontFamily: {
        'lora': ['var(--font-lora)', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 64px
        'h1-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 40px
        'body': ['1.125rem', { lineHeight: '1.7' }], // 18px
        'body-mobile': ['1rem', { lineHeight: '1.7' }], // 16px
      },
      animation: {
        'ken-burns': 'kenBurns 12s ease-out infinite',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.25, 0.4, 0.25, 1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.25, 0.4, 0.25, 1)',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.4, 0.25, 1)',
      },
      backdropBlur: {
        'navbar': '8px',
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        ember: '#D4AF37',
        'ember-dark': '#B8952E',
        ink: '#2D2D2D',
        washi: '#F5F5F5',
        'sake-red': '#8E2323',
        'sake-red-dark': '#6E1A1A',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-ember': 'pulseEmber 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseEmber: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        ember: '#D4AF37',
        ink: '#2D2D2D',
        washi: '#F5F5F5',
        'sake-red': '#8E2323',
      },
    },
  },
  plugins: [],
};

export default config;

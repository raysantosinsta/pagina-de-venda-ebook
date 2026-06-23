import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bts: '#7C3AED',
        btsLight: '#C4B5FD',
        surface: '#111014',
      },
      boxShadow: {
        glow: '0 30px 90px rgba(124, 58, 237, 0.24)',
      },
      backgroundImage: {
        'purple-wave': 'radial-gradient(circle at top, rgba(124,58,237,0.28), transparent 45%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 22%)',
      },
    },
  },
  plugins: [],
};

export default config;

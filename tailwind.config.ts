import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#E6192E',
        ink: '#1A1A1A',
        paper: '#F2F2F2',
        bts: '#E6192E',
        btsLight: '#F2F2F2',
        surface: '#1A1A1A',
      },
      boxShadow: {
        glow: '0 24px 90px rgba(230, 25, 46, 0.18)',
      },
      backgroundImage: {
        'red-depth': 'linear-gradient(135deg, rgba(230,25,46,0.18), rgba(26,26,26,0.2) 42%, rgba(242,242,242,0.04))',
      },
    },
  },
  plugins: [],
};

export default config;

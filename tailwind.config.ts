import type { Config } from 'tailwindcss';

export default <Config>{
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern tech palette inspired by tamalsen.dev
        primary: '#0070f3',       // Main brand color (blue)
        secondary: '#00DFD8',     // Secondary accent (teal)
        dark: '#121212',          // Dark background
        'dark-surface': '#1E1E1E', // Slightly lighter dark
        midnight: '#0B1F3F',      // Dark blue
        cyanTech: '#00C2D7',      // Technical cyan
        solarTangerine: '#FF7A1A', // Orange accent
        terminal: '#0F172A',      // Terminal-like dark blue
        surface: '#1E293B',       // Surface background
        background: '#121212',    // Primary dark background
        'text-high': '#E0E0E0',   // High-contrast text
        'text-secondary': '#A8A8A8', // Secondary text
        accent: '#7C4DFF',        // Primary accent color
        'accent-hover': '#BB86FC', // Hover accent
        'gradient-1': '#6700EB',  // Gradient start
        'gradient-2': '#00DFD8',  // Gradient end
        'code-bg': '#112240',     // Code background
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Rubik', 'sans-serif'],      // Headings
        body: ['Inter', 'sans-serif'],         // Body text
        mono: ['JetBrains Mono', 'monospace'], // Code/technical text
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundSize: '200% 200%', backgroundPosition: 'left center' },
          '50%': { backgroundSize: '200% 200%', backgroundPosition: 'right center' },
        },
        'floating': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: 'inherit',
          },
        },
      },
    },
  },
  plugins: [],
};

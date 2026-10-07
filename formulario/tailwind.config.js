/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9900',
          foreground: '#000422',
        },
        solar: {
          lime: '#FF9900',
          hover: '#E67300',
          active: '#CC5500',
          soft: '#FFF7ED',
          dark: '#000422',
          navy: '#111638',
          blue: '#374382',
          'blue-secondary': '#4B5BA6',
          'blue-light': '#BFD1FF',
          card: '#ffffff',
          surface: '#f8fafc',
          border: '#e2e8f0',
        },
      },
      backgroundImage: {
        'solar-cta': 'linear-gradient(135deg, #FF9900 0%, #F59E0B 100%)',
        'solar-hero': 'linear-gradient(115deg, #000211 0%, #000422 80%)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 25px -5px rgba(255, 153, 0, 0.40)',
        'subtle': '0 4px 20px -2px rgba(0, 4, 34, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(0, 4, 34, 0.08)',
      },
    },
  },
  plugins: [],
};

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
        lime: {
          solar: '#FF9900',
          hover: '#E67300',
          light: '#FFF7ED',
          dark: '#000422',
        },
        solar: {
          lime: '#FF9900',
          'lime-hover': '#E67300',
          'lime-active': '#CC5500',
          'lime-soft': '#FFF7ED',
          yellow: '#FF9900',
          gold: '#F59E0B',
          orange: '#FF9900',
          blue: '#374382',
          'blue-secondary': '#4B5BA6',
          'blue-dark': '#000422',
          'blue-light': '#BFD1FF',
          dark: '#000422',
          midnight: '#000211',
          navy: '#111638',
        },
        dark: {
          primary: '#000422',
          secondary: '#111638',
          muted: '#4B5BA6',
          card: '#ffffff',
          surface: '#FFF7ED',
          border: '#e5e7eb',
        },
      },
      backgroundImage: {
        'solar-cta': 'linear-gradient(135deg, #FF9900 0%, #F59E0B 100%)',
        'solar-hero': 'linear-gradient(115deg, #000211 0%, #000422 80%)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      transitionDuration: {
        '160': '160ms',
        '200': '200ms',
        '240': '240ms',
        '280': '280ms',
      },
      animation: {
        'marquee': 'marquee 42s linear infinite',
        'marquee-reverse': 'marquee-reverse 46s linear infinite',
        'accordion-down': 'accordion-down 0.22s cubic-bezier(0.23, 1, 0.32, 1)',
        'accordion-up': 'accordion-up 0.18s cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      }
    },
  },
  plugins: [],
}

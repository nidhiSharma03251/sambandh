/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f5f4f0',
          100: '#e8e5dc',
          200: '#d1ccbb',
          300: '#b3ac96',
          400: '#918979',
          500: '#756d61',
          600: '#5e5850',
          700: '#4c4741',
          800: '#3e3b37',
          900: '#363330',
          950: '#1c1a18',
        },
        gold: {
          400: '#d4a843',
          500: '#c49a35',
          600: '#a87f28',
        },
        cream: '#faf8f4',
        charcoal: '#1c1a18',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}

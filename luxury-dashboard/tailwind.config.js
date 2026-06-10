/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kalyan: {
          maroon: '#8C1C22',
          maroonDark: '#6A151A',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          goldDark: '#AA7C11',
          bg: '#FAFAFA',
          text: '#333333'
        },
        luxury: {
          gold: '#C9A84C',
          goldLight: '#E8D28F',
          goldDark: '#A6822C',
          ivory: '#FDF8F0',
          cream: '#F9F6F0',
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          border: '#E2D4B7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)',
        'maroon-gradient': 'linear-gradient(to right, #8C1C22, #6A151A)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

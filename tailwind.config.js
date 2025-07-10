/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0A0A0A', // Deep black
          800: '#111111', // Slightly lighter black
          700: '#1A1A1A', // Dark gray
          600: '#2A2A2A', // Medium gray
          500: '#3A3A3A', // Lighter gray
        },
        accent: {
          500: '#00D4AA', // Bright teal/cyan
          400: '#00E6B8', // Lighter teal
          300: '#33EBC4', // Even lighter teal
        },
        secondary: {
          500: '#00D4AA', // Same as accent for consistency
          400: '#00E6B8',
        },
        text: {
          100: '#FFFFFF', // Pure white
          200: '#E5E5E5', // Light gray
          300: '#B0B0B0', // Medium gray
          400: '#808080', // Darker gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem', 
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(0, 212, 170, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 212, 170, 0.2), 0 0 10px rgba(0, 212, 170, 0.2), 0 0 15px rgba(0, 212, 170, 0.2)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 212, 170, 0.4), 0 0 20px rgba(0, 212, 170, 0.4), 0 0 30px rgba(0, 212, 170, 0.4)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
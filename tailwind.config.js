/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0B0F1A',
          800: '#121E36',
          700: '#1A2C4E', 
          600: '#223C6B',
        },
        accent: {
          500: '#6E57E0', // Modern purple
          400: '#7D69E3',
        },
        secondary: {
          500: '#64FFDA', // Teal accent
        },
        text: {
          100: '#E2E8F0', // Light
          200: '#CBD5E1', // Medium
          300: '#94A3B8', // Darker
        }
      },
      fontFamily: {
        sans: ['Inter', 'Raleway', 'sans-serif'],
        heading: ['Poppins', 'Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'trend': "#E41C40",
        'light': '#777',
        'dark': '#081735',
      },
      screens: {
        '3xl': '1600px'
      },
      animation: {
        shrink: 'shrink 3s ease-out both 2s',
        show: 'show 3s ease-in both 2s'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shrink: {
          '0%': { width: '100%' },
          '100%': { width: '50%' }
        },
        show: {
          '0%': { opacity: '0', width: 0 },
          '100%': { opacity: '1', width: '100%' }
        },
      }
    },
  },
  plugins: [],
}

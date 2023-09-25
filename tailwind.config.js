/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/layouts/**/**.tsx', // Aqui incluindo sua pasta layouts
    './src/components/**/**.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        app: 'minmax(12rem, 14.5rem) 1fr',
        home: '1fr 20rem'
      },
      colors: {
        transparent: "rgba(0,0,0,1)",
        white: "#FFFFFF",
        black: "#000000",

        green: {
          100: "#50B2C0",
          200: "#255D6A",
          300: "#0A313C",
        },

        purple: {
          100: "#8381D9",
          200: "#2A2879",
        },

        gray: {
          100: "#F8F9FC",
          200: "#E6E8F2",
          300: "#D1D6E4",
          400: "#8D95AF",
          500: "#303F73",
          600: "#252D4A",
          700: "#181C2A",
          800: "#0E1116",
        },
      },
    },
  },
  plugins: [],
}

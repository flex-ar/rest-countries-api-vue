/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: 'hsl(209, 23%, 22%)', // Dark Blue
          light: 'hsl(0, 0%, 100%)', // White
        },
        secondary: {
          dark: 'hsl(207, 26%, 17%)', // Very Dark Blue
          light: 'hsl(0, 0%, 98%)', // Very Light Gray
        },
        text: 'hsl(200, 15%, 8%)', // Very Dark Blue
        input: 'hsl(0, 0%, 52%)', // Dark Grey
      },
    },
  },
  plugins: [],
};

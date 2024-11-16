/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'edu': ['"Edu AU VIC WA NT Pre"', 'sans-serif'], // Add your font name here
      },
    },
  },
  plugins: [],
};

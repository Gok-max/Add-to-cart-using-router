/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cream-white': '#FFF9E6',
        'soft-charcoal': '#374151',
        'sky-blue': '#BEE3F8',
        'light-amber': '#1E3A8A',
        'light-gray': '#F3F4F6',
        'dark-brown': '#383961',
        'dark-red': '#A62639',
        'gray-light': '#BBBCBE'
      },
    },
  },
  plugins: [],
}


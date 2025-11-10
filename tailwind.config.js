/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fcecd4',
          200: '#f8d5a8',
          300: '#f4b871',
          400: '#ef9138',
          500: '#eb7418',
          600: '#dc5a0d',
          700: '#b6420d',
          800: '#923512',
          900: '#762d12',
        },
        warm: {
          50: '#fefbf3',
          100: '#fdf5e6',
          200: '#fae8c0',
          300: '#f6d99a',
          400: '#f0bc4e',
          500: '#ea9f02',
          600: '#d38f02',
          700: '#b07702',
          800: '#8d5f01',
          900: '#734e01',
        },
        peach: {
          50: '#fff8f5',
          100: '#ffeee6',
          200: '#ffd4c0',
          300: '#ffba99',
          400: '#ff864d',
          500: '#ff5200',
          600: '#e64a00',
          700: '#bf3d00',
          800: '#993100',
          900: '#7d2800',
        },
      },
    },
  },
  plugins: [],
}


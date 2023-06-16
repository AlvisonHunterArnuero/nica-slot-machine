/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
        blue: {
          1000: '#14b5e7',
        },
        indigo: {
          1000: '#7b81ba',
        },
        sky: {
          1000: '#1f51ff',
        },
        gray: {
          1000: '#232323',
        },
        slate: {
          1000: '#eeffdd',
        },
        rose: {
          1000: '#ff0800',
        },
        orange: {
          1000: '#ff5f00',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

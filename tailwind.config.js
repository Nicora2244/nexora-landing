/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Nexora — studio brand tokens
        ink: '#0b0b14',
        surface: '#12121f',
        surface2: '#191928',
        violet: {
          50: '#f3f1ff',
          100: '#e4dfff',
          200: '#c9beff',
          300: '#a894ff',
          400: '#8b6bff',
          500: '#6c4cf7', // primary
          600: '#5636e0',
          700: '#4327b3',
          800: '#2f1c80',
          900: '#1c1052',
        },
        amber: {
          DEFAULT: '#ffb020',
          400: '#ffc24d',
          500: '#ffb020',
          600: '#e8970a',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1280px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

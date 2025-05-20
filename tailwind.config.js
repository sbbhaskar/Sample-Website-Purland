// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        underlineFlow: {
          '0%': { transform: 'scaleX(0)' },
          '50%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0)' },
        },
      },
      rotate: {
  '180': '180deg',
},
transformOrigin: {
  'center': 'center',
},
      animation: {
        underlineFlow: 'underlineFlow 2s ease-in-out infinite',
      },
      // transformOrigin: {
      //   'left': 'left',
      // }
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
}


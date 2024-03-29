const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 5s ease infinite'
      },
      boxShadow: {
        DEFAULT:
          '0px 27px 80px rgba(0, 0, 0, 0.07), 0px 6.0308px 17.869px rgba(0, 0, 0, 0.0417275), 0px 1.79553px 5.32008px rgba(0, 0, 0, 0.0282725);'
      },
      colors: {
        'origin-protocol-button-start': '#8C66FC',
        'origin-protocol-button-end': '#0274F1',
        'ousd-button-start': '#8C66FC',
        'ousd-button-end': '#0274F1',
        'ousd-button-dark-start': '#402154',
        'ousd-button-dark-end': '#120046',
        'oeth-button-start': '#B361E6',
        'oeth-button-end': '#6A36FC',
        'oeth-button-dark-start': '#402154',
        'oeth-button-dark-end': '#120046',
        'ousd-purple': '#8C66FC',
        'ousd-blue': '#0274F1',
        'oeth-purple': '#B361E6',
        'oeth-blue': '#6A36FC',
        'origin-bg-black': '#141519',
        'story-button-start': '#8C66FC',
        'story-button-end': '#0274F1',
        'story-pink-start': '#FB25F1',
        'story-pink-end': '#FD9BC2',
        'footer-end': '#1E313F'
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%',
        6: '6 6 0%',
        7: '7 7 0%',
        8: '8 8 0%',
        9: '9 9 0%',
        9: '9 9 0%',
        10: '10 10 0%',
        11: '11 11 0%',
        12: '12 12 0%'
      },
      fontFamily: () => ({
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        sansSailec: ['Sailec', ...defaultTheme.fontFamily.sans],
        sansInter: ['Inter', ...defaultTheme.fontFamily.sans]
      }),
      fontSize: {
        '2xs': [
          '10pt',
          {
            letterSpacing: '-0.01em'
          }
        ],
        '2xl': [
          '1.5rem',
          {
            letterSpacing: '-0.01em'
          }
        ],
        '3xl': [
          '2rem',
          {
            lineHeight: '2.25rem'
          }
        ],
        '4xl': [
          '2.5rem',
          {
            lineHeight: '3rem'
          }
        ],
        '5xl': [
          '3rem',
          {
            lineHeight: '4rem'
          }
        ],
        '6xl': [
          '3.5rem',
          {
            lineHeight: '4rem'
          }
        ],
        '7xl': [
          '4rem',
          {
            lineHeight: '4.25rem'
          }
        ],
        '8xl': [
          '4.5rem',
          {
            lineHeight: '5.3125rem'
          }
        ]
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        }
      },
      lineHeight: {
        button: '3.5rem'
      },
      textColor: {
        'story-blue': '#2B70F5',
        'story-pink': '#FC28F1',
        'link-blue': '#0074F0',
        'slate-600': '#475569',
        'slate-800': '#1E293B'
      }
    }
  },
  variants: {
    extend: {
      gradientColorStops: ['group-hover']
    }
  },
  plugins: []
}

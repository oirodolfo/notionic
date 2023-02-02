/* eslint-disable */

const BLOG = require('./blog.config')
const { fontFamily } = require('tailwindcss/defaultTheme')
const CJK = require('./lib/cjk')
const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`]
const fontSerifCJK = !CJK()
  ? []
  : [`"Noto Serif CJK ${CJK()}"`, `"Noto Serif ${CJK()}"`]

// If loading a variable font, you don't need to specify the font weight

module.exports = {
  corePlugins: {
    fontSize: false
  },
  mode: 'jit',

  content: [
    './node_modules/@plaiceholder/ui/**/*.{ts,tsx}',
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js'
  ],
  // darkMode: BLOG.appearance === 'auto' ? 'media' : 'class', // or 'media' or 'class'
  darkMode: ['class', '[data-mode="dark"]'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        day: {
          DEFAULT: BLOG.lightBackground || '#ffffff'
        },
        night: {
          DEFAULT: 'hsl(0deg 0% 14.12%)' || '#000000'
        }
      },
      fontFamily: {
        sans: ['var(--inter-font)', ...fontFamily.sans, ...fontSansCJK],
        serif: [...fontFamily.serif, ...fontSerifCJK],
        display: ['var(--anton-font)', ...fontFamily.sans, ...fontSansCJK],

        noEmoji: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@plaiceholder/tailwindcss'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-fluid-type')({
      settings: {
        fontSizeMin: 1.25,
        fontSizeMax: 1.5,
        ratioMin: 1.125,
        ratioMax: 1.2,
        screenMin: 20,
        screenMax: 96,
        unit: 'rem',
        prefix: '',
        extendValues: true
      },
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.1],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1],
        '8xl': [9, 1],
        '9xl': [10, 1]
      },
      variants: ['responsive']
    })
  ]
}

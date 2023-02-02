/* eslint-disable */

const BLOG = require('./blog.config')
const { fontFamily, colors } = require('tailwindcss/defaultTheme')
const CJK = require('./lib/cjk')
// const newColors = require('./lib/colors')

function dynamicHsl(h, s, l) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(${h}, ${s}, ${l}, ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `hsla(${h}, ${s}, ${l}, var(${opacityVariable}, 1))`
    }
    return `hsl(${h}, ${s}, ${l})`
  }
}


function pallete(color) {

  const h = `var(--color-${color}-h)`
  const s = `var(--color-${color}-s)`
  const l = `var(--color-${color}-l)`

  return {
    DEFAULT: dynamicHsl(h, s, l),
    100: dynamicHsl(h, s, `calc(${l} + 30%)`),
    200: dynamicHsl(h, s, `calc(${l} + 24%)`),
    300: dynamicHsl(h, s, `calc(${l} + 18%)`),
    400: dynamicHsl(h, s, `calc(${l} + 12%)`),
    500: dynamicHsl(h, s, `calc(${l} + 6%)`),
    600: dynamicHsl(h, s, l),
    700: dynamicHsl(h, s, `calc(${l} - 6%)`),
    800: dynamicHsl(h, s, `calc(${l} - 12%)`),
    900: dynamicHsl(h, s, `calc(${l} - 18%)`),
  }
}

// console.log(newColors)

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
        primary: {
          DEFAULT: pallete('zinc'),
        },
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
        display: ['var(--anton-font)', 'Impact', 'Arial Black', ...fontFamily.sans, ...fontSansCJK],

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
  function extractColorsToVariables({ addBase, theme }) {

    // function extractColorVars(colorObj, colorGroup = '') {
    //   return Object.keys(colorObj).reduce((vars, colorKey) => {
    //     const value = colorObj[colorKey];
    //
    //     const newVars =
    //       typeof value === 'string'
    //         ? { [`--color${colorGroup}-${colorKey}`]: value }
    //         : extractColorVars(value, `-${colorKey}`);
    //
    //     return { ...vars, ...newVars };
    //   }, {});
    // }

    function extractColorVars (colorObj, colorGroup = '') {
      return Object.keys(colorObj).reduce((vars, colorKey) => {
        const value = colorObj[colorKey];
        const cssVariable = colorKey === "DEFAULT" ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`;

        const newVars =
          typeof value === 'string'
            ? { [cssVariable]: value }
            : extractColorVars(value, `-${colorKey}`);

        return { ...vars, ...newVars };
      }, {});
    }

    addBase({
      ':root': extractColorVars(theme('colors')),
    });
  },
    require('@mertasan/tailwindcss-variables'),
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

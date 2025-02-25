// import {toHsla} from "color2k";
// import Color from 'color'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { toHsla } = require('color2k')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Color = require('color')
//
// type ColorType = {
//     value: string,
//     type: string
// }
// type LevelType = {
//     "50": ColorType
//     "100": ColorType
//     "200": ColorType
//     "300": ColorType
//     "400": ColorType
//     "500": ColorType
//     "600": ColorType
//     "700": ColorType
//     "800": ColorType
//     "900": ColorType
// }
//
//

const colorDefinitions = {
  // const colorDefinitions: Record<keyof Root, LevelType> = {
  Slate: {
    50: {
      value: '#f8fafc',
      type: 'color'
    },
    100: {
      value: '#f1f5f9',
      type: 'color'
    },
    200: {
      value: '#e2e8f0',
      type: 'color'
    },
    300: {
      value: '#cbd5e1',
      type: 'color'
    },
    400: {
      value: '#94a3b8',
      type: 'color'
    },
    500: {
      value: '#64748b',
      type: 'color'
    },
    600: {
      value: '#475569',
      type: 'color'
    },
    700: {
      value: '#334155',
      type: 'color'
    },
    800: {
      value: '#1e293b',
      type: 'color'
    },
    900: {
      value: '#0f172a',
      type: 'color'
    }
  },
  Gray: {
    50: {
      value: '#f9fafb',
      type: 'color'
    },
    100: {
      value: '#f3f4f6',
      type: 'color'
    },
    200: {
      value: '#e5e7eb',
      type: 'color'
    },
    300: {
      value: '#d1d5db',
      type: 'color'
    },
    400: {
      value: '#9ca3af',
      type: 'color'
    },
    500: {
      value: '#6b7280',
      type: 'color'
    },
    600: {
      value: '#4b5563',
      type: 'color'
    },
    700: {
      value: '#374151',
      type: 'color'
    },
    800: {
      value: '#1f2937',
      type: 'color'
    },
    900: {
      value: '#111827',
      type: 'color'
    }
  },
  Zinc: {
    50: {
      value: '#fafafa',
      type: 'color'
    },
    100: {
      value: '#f4f4f5',
      type: 'color'
    },
    200: {
      value: '#e4e4e7',
      type: 'color'
    },
    300: {
      value: '#d4d4d8',
      type: 'color'
    },
    400: {
      value: '#a1a1aa',
      type: 'color'
    },
    500: {
      value: '#71717a',
      type: 'color'
    },
    600: {
      value: '#52525b',
      type: 'color'
    },
    700: {
      value: '#3f3f46',
      type: 'color'
    },
    800: {
      value: '#27272a',
      type: 'color'
    },
    900: {
      value: '#18181b',
      type: 'color'
    }
  },
  Neutral: {
    50: {
      value: '#fafafa',
      type: 'color'
    },
    100: {
      value: '#f5f5f5',
      type: 'color'
    },
    200: {
      value: '#e5e5e5',
      type: 'color'
    },
    300: {
      value: '#d4d4d4',
      type: 'color'
    },
    400: {
      value: '#a3a3a3',
      type: 'color'
    },
    500: {
      value: '#737373',
      type: 'color'
    },
    600: {
      value: '#525252',
      type: 'color'
    },
    700: {
      value: '#404040',
      type: 'color'
    },
    800: {
      value: '#262626',
      type: 'color'
    },
    900: {
      value: '#171717',
      type: 'color'
    }
  },
  Stone: {
    50: {
      value: '#fafaf9',
      type: 'color'
    },
    100: {
      value: '#f5f5f4',
      type: 'color'
    },
    200: {
      value: '#e7e5e4',
      type: 'color'
    },
    300: {
      value: '#d6d3d1',
      type: 'color'
    },
    400: {
      value: '#a8a29e',
      type: 'color'
    },
    500: {
      value: '#78716c',
      type: 'color'
    },
    600: {
      value: '#57534e',
      type: 'color'
    },
    700: {
      value: '#44403c',
      type: 'color'
    },
    800: {
      value: '#292524',
      type: 'color'
    },
    900: {
      value: '#1c1917',
      type: 'color'
    }
  },
  Red: {
    50: {
      value: '#fef2f2',
      type: 'color'
    },
    100: {
      value: '#fee2e2',
      type: 'color'
    },
    200: {
      value: '#fecaca',
      type: 'color'
    },
    300: {
      value: '#fca5a5',
      type: 'color'
    },
    400: {
      value: '#f87171',
      type: 'color'
    },
    500: {
      value: '#ef4444',
      type: 'color'
    },
    600: {
      value: '#dc2626',
      type: 'color'
    },
    700: {
      value: '#b91c1c',
      type: 'color'
    },
    800: {
      value: '#991b1b',
      type: 'color'
    },
    900: {
      value: '#7f1d1d',
      type: 'color'
    }
  },
  Orange: {
    50: {
      value: '#fff7ed',
      type: 'color'
    },
    100: {
      value: '#ffedd5',
      type: 'color'
    },
    200: {
      value: '#fed7aa',
      type: 'color'
    },
    300: {
      value: '#fdba74',
      type: 'color'
    },
    400: {
      value: '#fb923c',
      type: 'color'
    },
    500: {
      value: '#f97316',
      type: 'color'
    },
    600: {
      value: '#ea580c',
      type: 'color'
    },
    700: {
      value: '#c2410c',
      type: 'color'
    },
    800: {
      value: '#9a3412',
      type: 'color'
    },
    900: {
      value: '#7c2d12',
      type: 'color'
    }
  },
  Amber: {
    50: {
      value: '#fffbeb',
      type: 'color'
    },
    100: {
      value: '#fef3c7',
      type: 'color'
    },
    200: {
      value: '#fde68a',
      type: 'color'
    },
    300: {
      value: '#fcd34d',
      type: 'color'
    },
    400: {
      value: '#fbbf24',
      type: 'color'
    },
    500: {
      value: '#f59e0b',
      type: 'color'
    },
    600: {
      value: '#d97706',
      type: 'color'
    },
    700: {
      value: '#b45309',
      type: 'color'
    },
    800: {
      value: '#92400e',
      type: 'color'
    },
    900: {
      value: '#78350f',
      type: 'color'
    }
  },
  Yellow: {
    50: {
      value: '#fefce8',
      type: 'color'
    },
    100: {
      value: '#fef9c3',
      type: 'color'
    },
    200: {
      value: '#fef08a',
      type: 'color'
    },
    300: {
      value: '#fde047',
      type: 'color'
    },
    400: {
      value: '#facc15',
      type: 'color'
    },
    500: {
      value: '#eab308',
      type: 'color'
    },
    600: {
      value: '#ca8a04',
      type: 'color'
    },
    700: {
      value: '#a16207',
      type: 'color'
    },
    800: {
      value: '#854d0e',
      type: 'color'
    },
    900: {
      value: '#713f12',
      type: 'color'
    }
  },
  Lime: {
    50: {
      value: '#f7fee7',
      type: 'color'
    },
    100: {
      value: '#ecfccb',
      type: 'color'
    },
    200: {
      value: '#d9f99d',
      type: 'color'
    },
    300: {
      value: '#bef264',
      type: 'color'
    },
    400: {
      value: '#a3e635',
      type: 'color'
    },
    500: {
      value: '#84cc16',
      type: 'color'
    },
    600: {
      value: '#65a30d',
      type: 'color'
    },
    700: {
      value: '#4d7c0f',
      type: 'color'
    },
    800: {
      value: '#3f6212',
      type: 'color'
    },
    900: {
      value: '#365314',
      type: 'color'
    }
  },
  Green: {
    50: {
      value: '#f0fdf4',
      type: 'color'
    },
    100: {
      value: '#dcfce7',
      type: 'color'
    },
    200: {
      value: '#bbf7d0',
      type: 'color'
    },
    300: {
      value: '#86efac',
      type: 'color'
    },
    400: {
      value: '#4ade80',
      type: 'color'
    },
    500: {
      value: '#22c55e',
      type: 'color'
    },
    600: {
      value: '#16a34a',
      type: 'color'
    },
    700: {
      value: '#15803d',
      type: 'color'
    },
    800: {
      value: '#166534',
      type: 'color'
    },
    900: {
      value: '#14532d',
      type: 'color'
    }
  },
  Emerald: {
    50: {
      value: '#ecfdf5',
      type: 'color'
    },
    100: {
      value: '#d1fae5',
      type: 'color'
    },
    200: {
      value: '#a7f3d0',
      type: 'color'
    },
    300: {
      value: '#6ee7b7',
      type: 'color'
    },
    400: {
      value: '#34d399',
      type: 'color'
    },
    500: {
      value: '#10b981',
      type: 'color'
    },
    600: {
      value: '#059669',
      type: 'color'
    },
    700: {
      value: '#047857',
      type: 'color'
    },
    800: {
      value: '#065f46',
      type: 'color'
    },
    900: {
      value: '#064e3b',
      type: 'color'
    }
  },
  Teal: {
    50: {
      value: '#f0fdfa',
      type: 'color'
    },
    100: {
      value: '#ccfbf1',
      type: 'color'
    },
    200: {
      value: '#99f6e4',
      type: 'color'
    },
    300: {
      value: '#5eead4',
      type: 'color'
    },
    400: {
      value: '#2dd4bf',
      type: 'color'
    },
    500: {
      value: '#14b8a6',
      type: 'color'
    },
    600: {
      value: '#0d9488',
      type: 'color'
    },
    700: {
      value: '#0f766e',
      type: 'color'
    },
    800: {
      value: '#115e59',
      type: 'color'
    },
    900: {
      value: '#134e4a',
      type: 'color'
    }
  },
  Cyan: {
    50: {
      value: '#ecfeff',
      type: 'color'
    },
    100: {
      value: '#cffafe',
      type: 'color'
    },
    200: {
      value: '#a5f3fc',
      type: 'color'
    },
    300: {
      value: '#67e8f9',
      type: 'color'
    },
    400: {
      value: '#22d3ee',
      type: 'color'
    },
    500: {
      value: '#06b6d4',
      type: 'color'
    },
    600: {
      value: '#0891b2',
      type: 'color'
    },
    700: {
      value: '#0e7490',
      type: 'color'
    },
    800: {
      value: '#155e75',
      type: 'color'
    },
    900: {
      value: '#164e63',
      type: 'color'
    }
  },
  Sky: {
    50: {
      value: '#f0f9ff',
      type: 'color'
    },
    100: {
      value: '#e0f2fe',
      type: 'color'
    },
    200: {
      value: '#bae6fd',
      type: 'color'
    },
    300: {
      value: '#7dd3fc',
      type: 'color'
    },
    400: {
      value: '#38bdf8',
      type: 'color'
    },
    500: {
      value: '#0ea5e9',
      type: 'color'
    },
    600: {
      value: '#0284c7',
      type: 'color'
    },
    700: {
      value: '#0369a1',
      type: 'color'
    },
    800: {
      value: '#075985',
      type: 'color'
    },
    900: {
      value: '#0c4a6e',
      type: 'color'
    }
  },
  Blue: {
    50: {
      value: '#eff6ff',
      type: 'color'
    },
    100: {
      value: '#dbeafe',
      type: 'color'
    },
    200: {
      value: '#bfdbfe',
      type: 'color'
    },
    300: {
      value: '#93c5fd',
      type: 'color'
    },
    400: {
      value: '#60a5fa',
      type: 'color'
    },
    500: {
      value: '#3b82f6',
      type: 'color'
    },
    600: {
      value: '#2563eb',
      type: 'color'
    },
    700: {
      value: '#1d4ed8',
      type: 'color'
    },
    800: {
      value: '#1e40af',
      type: 'color'
    },
    900: {
      value: '#1e3a8a',
      type: 'color'
    }
  },
  Indigo: {
    50: {
      value: '#eef2ff',
      type: 'color'
    },
    100: {
      value: '#e0e7ff',
      type: 'color'
    },
    200: {
      value: '#c7d2fe',
      type: 'color'
    },
    300: {
      value: '#a5b4fc',
      type: 'color'
    },
    400: {
      value: '#818cf8',
      type: 'color'
    },
    500: {
      value: '#6366f1',
      type: 'color'
    },
    600: {
      value: '#4f46e5',
      type: 'color'
    },
    700: {
      value: '#4338ca',
      type: 'color'
    },
    800: {
      value: '#3730a3',
      type: 'color'
    },
    900: {
      value: '#312e81',
      type: 'color'
    }
  },
  Violet: {
    50: {
      value: '#f5f3ff',
      type: 'color'
    },
    100: {
      value: '#ede9fe',
      type: 'color'
    },
    200: {
      value: '#ddd6fe',
      type: 'color'
    },
    300: {
      value: '#c4b5fd',
      type: 'color'
    },
    400: {
      value: '#a78bfa',
      type: 'color'
    },
    500: {
      value: '#8b5cf6',
      type: 'color'
    },
    600: {
      value: '#7c3aed',
      type: 'color'
    },
    700: {
      value: '#6d28d9',
      type: 'color'
    },
    800: {
      value: '#5b21b6',
      type: 'color'
    },
    900: {
      value: '#4c1d95',
      type: 'color'
    }
  },
  Purple: {
    50: {
      value: '#faf5ff',
      type: 'color'
    },
    100: {
      value: '#f3e8ff',
      type: 'color'
    },
    200: {
      value: '#e9d5ff',
      type: 'color'
    },
    300: {
      value: '#d8b4fe',
      type: 'color'
    },
    400: {
      value: '#c084fc',
      type: 'color'
    },
    500: {
      value: '#a855f7',
      type: 'color'
    },
    600: {
      value: '#9333ea',
      type: 'color'
    },
    700: {
      value: '#7e22ce',
      type: 'color'
    },
    800: {
      value: '#6b21a8',
      type: 'color'
    },
    900: {
      value: '#581c87',
      type: 'color'
    }
  },
  Fuchsia: {
    50: {
      value: '#fdf4ff',
      type: 'color'
    },
    100: {
      value: '#fae8ff',
      type: 'color'
    },
    200: {
      value: '#f5d0fe',
      type: 'color'
    },
    300: {
      value: '#f0abfc',
      type: 'color'
    },
    400: {
      value: '#e879f9',
      type: 'color'
    },
    500: {
      value: '#d946ef',
      type: 'color'
    },
    600: {
      value: '#c026d3',
      type: 'color'
    },
    700: {
      value: '#a21caf',
      type: 'color'
    },
    800: {
      value: '#86198f',
      type: 'color'
    },
    900: {
      value: '#701a75',
      type: 'color'
    }
  },
  Pink: {
    50: {
      value: '#fdf2f8',
      type: 'color'
    },
    100: {
      value: '#fce7f3',
      type: 'color'
    },
    200: {
      value: '#fbcfe8',
      type: 'color'
    },
    300: {
      value: '#f9a8d4',
      type: 'color'
    },
    400: {
      value: '#f472b6',
      type: 'color'
    },
    500: {
      value: '#ec4899',
      type: 'color'
    },
    600: {
      value: '#db2777',
      type: 'color'
    },
    700: {
      value: '#be185d',
      type: 'color'
    },
    800: {
      value: '#9d174d',
      type: 'color'
    },
    900: {
      value: '#831843',
      type: 'color'
    }
  },
  Rose: {
    50: {
      value: '#fff1f2',
      type: 'color'
    },
    100: {
      value: '#ffe4e6',
      type: 'color'
    },
    200: {
      value: '#fecdd3',
      type: 'color'
    },
    300: {
      value: '#fda4af',
      type: 'color'
    },
    400: {
      value: '#fb7185',
      type: 'color'
    },
    500: {
      value: '#f43f5e',
      type: 'color'
    },
    600: {
      value: '#e11d48',
      type: 'color'
    },
    700: {
      value: '#be123c',
      type: 'color'
    },
    800: {
      value: '#9f1239',
      type: 'color'
    },
    900: {
      value: '#881337',
      type: 'color'
    }
  }
}

const colorObjs = Object.entries(colorDefinitions).reduce((acc, prev) => {
  const [colorName, definitions] = prev
  // console.log({acc, prev, colorName, definitions});
  const name = colorName.toLowerCase()

  const defs = Object.entries(definitions)
    .map(([key, values]) => ({ [key]: toHsla(values.value) }))
    .flat()

  return { ...acc, [colorName]: defs }
}, {})

function generateDarkPalette(csInput) {
  const colorsList = []
  // colorsList.push(Color(givenColor).rotate((step + 1) / colorsAmount * -rotate)
  // .saturate((step + 1) / colorsAmount * (saturation / 100)
  // ).mix(Color(mixColor), (colorsShiftAmount / 100) * (step + 1) / colorsAmount).string())

  for (const colorTitle in csInput) {
    const { name, colorHsla } = colorTitle
    const colorConverted = Color(colorHsla).negate().hsl().string()
    colorsList.push({ [name]: colorConverted })
  }

  return colorsList
}

function makeCssVariables(cssVariables) {
  // let cssVariables = {
  //     'primary-color': "#ffffff",
  //     'secondary-color': "#000"
  // }
  let styleValues = Object.entries(cssVariables)
    .map(([key, value]) => `--${key}:${value}`)
    .join(';')

  return styleValues
}

console.log(generateDarkPalette(colorObjs))

module.exports = generateDarkPalette(colorObjs)

//
//
//
// export interface Root {
//     Slate: Slate[]
//     Gray: Gray[]
//     Zinc: Zinc[]
//     Neutral: Neutral[]
//     Stone: Stone[]
//     Red: Red[]
//     Orange: Orange[]
//     Amber: Amber[]
//     Yellow: Yellow[]
//     Lime: Lime[]
//     Green: Green[]
//     Emerald: Emerald[]
//     Teal: Teal[]
//     Cyan: Cyan[]
//     Sky: Sky[]
//     Blue: Blue[]
//     Indigo: Indigo[]
//     Violet: Violet[]
//     Purple: Purple[]
//     Fuchsia: Fuchsum[]
//     Pink: Pink[]
//     Rose: Rose[]
// }
//
// export interface Slate {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Gray {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Zinc {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Neutral {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Stone {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Red {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Orange {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Amber {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Yellow {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Lime {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Green {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Emerald {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Teal {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Cyan {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Sky {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Blue {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Indigo {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Violet {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Purple {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Fuchsum {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Pink {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }
//
// export interface Rose {
//     "50"?: string
//     "100"?: string
//     "200"?: string
//     "300"?: string
//     "400"?: string
//     "500"?: string
//     "600"?: string
//     "700"?: string
//     "800"?: string
//     "900"?: string
// }

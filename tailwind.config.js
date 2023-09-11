const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './node_modules/flowbite-react/**/*.js',
    './node_modules/@rewind-ui/core/src/theme/styles/*.ts',
    './app/**/*.{ts,tsx}',
    './public/**/*.html',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        zinc: colors.zinc,
        slate: colors.slate,
        neutral: colors.neutral,
        blue: {
          50: '#E5F6FF',
          100: '#CCECFF',
          200: '#94D8FF',
          300: '#61C5FF',
          400: '#2EB2FF',
          500: '#009EF7',
          600: '#007EC7',
          700: '#005E94',
          800: '#003D61',
          900: '#002033',
          950: '#001019'
        },
        red: {
          50: '#FEECF0',
          100: '#FCD9E2',
          200: '#F9B3C5',
          300: '#F78DA7',
          400: '#F4678A',
          500: '#F1416C',
          600: '#E41146',
          700: '#AB0D34',
          800: '#720823',
          900: '#390411',
          950: '#1D0209'
        },
        green: {
          50: '#EFFAF4',
          100: '#DBF5E7',
          200: '#B8EBCF',
          300: '#98E2B9',
          400: '#74D7A1',
          500: '#50CD89',
          600: '#33B36C',
          700: '#268752',
          800: '#195735',
          900: '#0C2C1A',
          950: '#07180E'
        },
        yellow: {
          50: '#FFF9E5',
          100: '#FFF4CC',
          200: '#FFE999',
          300: '#FFDE66',
          400: '#FFD333',
          500: '#FFC700',
          600: '#CCA000',
          700: '#997800',
          800: '#665000',
          900: '#332800',
          950: '#191400'
        },
        purple: {
          50: '#F2EDFD',
          100: '#E1D6FB',
          200: '#C7B1F7',
          300: '#A987F2',
          400: '#8F62EE',
          500: '#7239EA',
          600: '#5317D4',
          700: '#3D119D',
          800: '#290B6A',
          900: '#140533',
          950: '#0B031C'
        },
        pink: {
          50: '#FBEAF2',
          100: '#F6D5E6',
          200: '#EFAECF',
          300: '#E684B5',
          400: '#DF5E9E',
          500: '#D63384',
          600: '#B2246B',
          700: '#841A4F',
          800: '#591236',
          900: '#2A091A',
          950: '#15040D'
        }
      }
    }
  },
  // purge: ['./app/**/*.tsx', './components/**/*.tsx'],
  // media: false,
  // variants: {
  //   backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  //   fontSize: ['responsive', 'hover', 'focus', 'active'],
  //   padding: ['responsive', 'hover', 'focus', 'active'],
  //   margin: ['responsive', 'hover', 'focus', 'active'],
  //   align: ['responsive', 'hover', 'focus', 'active']
  // },
  plugins: [
    require('@tailwindcss/typography'),
    // require('flowbite/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    }),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      {
        mytheme: {
          primary: '#1b8d47',

          secondary: '#9b7108',

          accent: '#f716e0',

          neutral: '#202837',

          'base-100': '#4d4d4d',

          info: '#0891b2',

          success: '#1b8d47',

          warning: '#9b7108',

          error: '#eb4275'
        }
      }
    ]
    // darkTheme: '', // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and modifier utility classes
    // rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    // prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    // logs: true // Shows info about daisyUI version and used config in the console when building your CSS
  }
}

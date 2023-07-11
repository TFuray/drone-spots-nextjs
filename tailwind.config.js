module.exports = {
    content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{ts,tsx}',
    './public/**/*.html',
    './components/**/*.{ts,tsx}'
  ],
  purge: ['./app/**/*.tsx', './components/**/*.tsx'],
  media: false,
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover', 'focus', 'active'],
    padding: ['responsive', 'hover', 'focus', 'active'],
    margin: ['responsive', 'hover', 'focus', 'active'],
    align: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#db15ce',

          secondary: '#a6b728',

          accent: '#0fc14d',

          neutral: '#2b2e3b',

          'base-100': '#324457',

          info: '#7cbaf4',

          success: '#3de187',

          warning: '#edb054',

          error: '#f7505e'
        }
      }
    ],
    darkTheme: '', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true // Shows info about daisyUI version and used config in the console when building your CSS
  },

}

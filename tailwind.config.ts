import {theme, darkTheme} from '@adv-re/theme'
import plugins from '@adv-re/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@adv-re/ui/dist/**/*.{js,mjs}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {}
  },
  plugins: [
    ...plugins({
      htmlFontSize: 16,
      themes: {default: theme, dark: darkTheme}
    })
  ]
}

export default config
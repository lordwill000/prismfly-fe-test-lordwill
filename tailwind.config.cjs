/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  important: true,
  content: [
    './index.html'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      primary: '#F3F4EC',
      secondary: '#6C6E71',
      tertiary: '#FFF',
      'forest-green': '#292D33',
      charcoal: '#202020',
      sunset: '#D4491B',
      dark: '#000',
      disabled: '#DAD9D8'
    },
    fontSize: {
      default: '1.25rem',
      'default-mobile': '1.0625rem',
      h2: '3.125rem',
      'h2-mobile': '2rem',
      h3: '1.25rem'
    },
    extend: {
      fontFamily: {
        primary: ['indivisible', ...defaultTheme.fontFamily.serif],
        secondary: ['turnip', ...defaultTheme.fontFamily.sans]
      },
      height: {
      },
      lineHeight: {
        default: '150%',
        h2: '120%',
        h3: '130%'
      },
      screens: {
      },
      spacing: {
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)'
      },
      zIndex: {
      }
    }
  }
}

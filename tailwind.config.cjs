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
      
    },
    fontSize: {
      
    },
    extend: {
      // Add fonts here
      fontFamily: {
        primary: ['indivisible', ...defaultTheme.fontFamily.serif],
        secondary: ['turnip', ...defaultTheme.fontFamily.sans]
      },
      height: {
      },
      lineHeight: {
        
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

/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'roboto': ['Roboto', 'system-ui'],
      },
      colors: {
        'blackblue': '#1e293b',
        'blackblue2': '#0f172a',
        'primaryblue': '#7d3665',
        'primaryblack': '#262626',
        'customPurple800': '#7d3665', // Cambiar a customPurple800 552B50
        'customWhiteOcean': '#F0F0F0',
        'customPurple300': '#ff6c8a',
        'customOrange': '#FAA32F',
        'customYellow': '#FFD700',
        'customOscure':  '#1D2027',
        'customGradient': 'linear-gradient(to right, #FFD700, #FAA32F)', // Arreglar el gradiente
      },
      textColor: {
        'textrosa': '#ff00d4', // Cambia esto al color rosado que prefieras
        'textblue': '#0060ff',

      },
      animation: {

        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite' : 'marquee 25s linear infinite',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  darkMode: "class",

  plugins: [
    nextui({
      themes: {
        
      },
    }),
  ],
};

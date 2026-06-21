/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {

      colors: {

        primary: "#06b6d4",

        secondary: "#8b5cf6",

        dark: "#050816",

      },

      boxShadow: {

        glow:
          "0 0 40px rgba(6,182,212,0.35)",

      },

      animation: {

        float:
          "float 6s ease-in-out infinite",

        pulseSlow:
          "pulse 4s infinite",

      },

      keyframes: {

        float: {

          "0%, 100%": {
            transform:
              "translateY(0px)",
          },

          "50%": {
            transform:
              "translateY(-15px)",
          },

        },

      },

    },

  },

  plugins: [],

};
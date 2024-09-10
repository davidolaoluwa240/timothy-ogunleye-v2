// Modules
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#808080",
        },
        blue: {
          DEFAULT: "#6699FF",
        },
      },
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        montserrat: ["Montserrat", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            foreground: "#ffffff",
            background: "#000000",
            primary: {
              foreground: "#ffffff",
              DEFAULT: "#18181B",
            },
            secondary: {
              foreground: "#ffffff",
              DEFAULT: "#2F3136",
            },
          },
        },
      },
    }),
  ],
};

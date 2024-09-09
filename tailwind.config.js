// Modules
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./node_modules/@nextui-org/theme"],
  theme: {
    extend: {
      fontFamily: {
        crimson: ["Crimson Pro", "serif"],
      },
    },
  },
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#2D2D35",
            },
          },
        },
      },
    }),
  ],
};

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,svelte}",
    "../../packages/ui/components/**/*.{html,js,ts,svelte}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      display: ["Outfit", "sans-serif"],
      code: ["attribute-mono", "sans-serif"],
    },
    colors: {
      brand: "#EF5350",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",

      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
      gray: colors.gray,
    },
    extend: {
      boxShadow: {
        "3xl": "0 5px 20px rgb(0 0 0 / 30%)",
        "4xl": "0 5px 20px rgb(0 0 0 / 90%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    logs: false,
  },
};

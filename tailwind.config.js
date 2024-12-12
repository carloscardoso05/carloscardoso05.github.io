/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      blur: {
        px: "1px",
      },
      backgroundImage: {
        "gradient-green-violet":
          "linear-gradient(90deg, hsla(142, 76%, 36%, 1) 0%, hsla(263, 70%, 50%, 1) 50%, hsla(142, 76%, 36%, 1) 100%);",
      },
      fontFamily: {
        "sofia-sans": ["Sofia Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-purple": "#2D132C",
        "rainsin-black": "#252525",
        "deep-violet": "#13005A",
        "yankees-blue": "#16213E",
        "dark-midnight-blue": "#0F3460",
        "erie-black": "#181818",
        "space-cadet": "#1B2951",
      },
      keyframes: {
        "background-pan": {
          "0%": {
            "background-position": "0% center",
          },
          "100%": {
            "background-position": "-300% center",
          },
        },
      },
      animation: {
        "background-pan": "background-pan 3s linear infinite",
      },
    },
  },
  plugins: [],
};

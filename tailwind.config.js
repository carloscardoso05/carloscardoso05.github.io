/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-beige":
          "linear-gradient(55deg,hsl(29deg 60% 93%) 13%,hsl(28deg 48% 90%) 45%,hsl(27deg 42% 87%) 50%,hsl(27deg 38% 85%) 50%,hsl(26deg 35% 82%) 50%,hsl(25deg 33% 79%) 50%,hsl(25deg 31% 76%) 55%,hsl(24deg 30% 74%) 87%)",
        "gradient-dark-blue":
          "linear-gradient(55deg, #16213E 50%, #0F3460 50%)",
      },
      fontFamily: {
        "sofia-sans": ["Sofia Sans", ...defaultTheme.fontFamily.sans],
        "roboto-slab": ["Roboto Slab", ...defaultTheme.fontFamily.sans],
        "roboto-mono": ["Roboto Mono", ...defaultTheme.fontFamily.mono]
      },
      colors: {
        "dark-purple": "#2D132C",
        "rainsin-black": "#252525",
        "deep-violet": "#13005A",
      },
      keyframes: {
        "bounce-right": {
          "50%": { transform: "translateX(10%);" },
          "100%": { transform: "translateX(0);" },
        },
        "bounce-left": {
          "50%": { transform: "translateX(-10%);" },
          "100%": { transform: "translateX(0);" },
        },
        "pulse-switch": {
          "50%": { color: "transparent" },
        },
      },
      animation: {
        "bounce-right":
          "bounce-right 1s cubic-bezier(0.55, 0.16, 0.65, 0.93) infinite",
        "bounce-left":
          "bounce-left 1s cubic-bezier(0.55, 0.16, 0.65, 0.93) infinite",
        "pulse-switch": "pulse-switch 1s steps(1, end) infinite",
      },
    },
  },
  plugins: [],
};

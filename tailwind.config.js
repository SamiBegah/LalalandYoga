/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      backgroundClip: ["responsive"],
      colors: {
        "logo-color": "rgb(234,167,156)",
        "logo-color-before": "rgb(246,217,212)",
        "background-text": "rgb(252,242,240)",
        "button-color": "rgb(166, 172, 175)",
        "bg-color-about-us": "rgb(250,237,235)",
      },
      fontFamily: {
        Maven: ["Maven Pro", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        shine: {
          "0%": { left: "-50%" },
          "100%": { left: "125%" },
        },
      },

      animation: {
        shine: "shine 1s ease-in-out infinite",
      },
      aspectRatio: {
        // new aspect ratio
        1: "1",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"), // new plugin
  ],
};

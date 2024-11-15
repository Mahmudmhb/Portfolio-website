/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "Oswald, ui-serif", // Adds a new `font-display` class
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};

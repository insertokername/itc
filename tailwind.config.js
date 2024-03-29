const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'periodic': 'url("../public/bg-periodic.png")',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

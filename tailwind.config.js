const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'waves-xl': 'url("../public/waves-XL.png")',
        'waves-m': 'url("../public/waves-M.png")',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'waves-xl': 'url("../public/waves-XL.png")',
        // 'waves-m': 'url("../public/waves-M.png")',
        // 'nav': 'url("../public/bg-nav.png")',
        'periodic': 'url("../public/bg-periodic.png")',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

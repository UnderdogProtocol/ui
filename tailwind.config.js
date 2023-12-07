const colors = require('./colors');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
module.exports = {
mode: "jit",
content: [
  "./components/**/*.{vue,js}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
],
theme: {
  extend: {
    fontFamily: {
      sans: ['Helvetica Now Display', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
},
variants: {
  extend: {},
},
plugins: [],
};

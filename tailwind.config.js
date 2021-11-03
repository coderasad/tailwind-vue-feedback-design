module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-500': "#8B5CF6",
        'primary-300': "#C4B5FD",
        'primary-50': "#F5F3FF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

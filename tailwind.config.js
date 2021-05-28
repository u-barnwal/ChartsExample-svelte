const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        140: "35rem",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production, // disable purge in dev
  },
};

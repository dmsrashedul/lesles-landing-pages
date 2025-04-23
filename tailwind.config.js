/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        client: ["var(--font-primary)"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        pcolor: "var(--color-primary-text)",
        heading: "var(--color-heading-text)",
      },
    },
  },
  plugins: [],
};

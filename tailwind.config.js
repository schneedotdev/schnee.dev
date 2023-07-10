/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-opaque": "var(--background-opaque)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
      },
      typography: {
        "custom-colors": {
          css: {
            "h1, h2, h3, h4, h5, h6": {
              "font-weight": "bold",
              "margin-block": "2rem",
              color: "var(--primary)",
              "scroll-margin-top": "8rem",
            },
            h2: {
              "font-size": "1.25rem",
              "line-height": "1.75rem",
            },
            h3: {
              "font-size": "1.125rem",
              "line-height": "1.75rem",
            },
            h4: {
              "font-size": "1rem",
              "line-height": "1.75rem",
            },
            pre: {
              position: "relative",
              "border-radius": ".375rem",
              background: "#f2f2f308",
              padding: "1rem",
            },
            code: {
              "font-size": ".875rem",
              "line-height": "1.25rem",
              color: "hsl(240, 4%, 85%)",
              padding: ".125rem .25rem .125rem .25rem",
              background: "#f2f2f31f",
              border: "1px solid var(--tertiary)",
              "border-radius": ".25rem",
              "overflow-x": "auto",
            },
            "pre > code": {
              background: "none",
              border: "none",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

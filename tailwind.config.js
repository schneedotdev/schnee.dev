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
            h1: {
              "margin-block": "0rem 1rem",
              color: "var(--primary)",
              "font-size": "1.5rem",
              "line-height": "2rem",
            },
            h2: {
              "font-size": "1.25rem",
              "line-height": "1.75rem",
            },
            h3: {
              "font-size": "1.125rem",
              "line-height": "1.75rem",
            },
            p: {
              "font-size": "1rem",
              "line-height": "1.5rem",
              "margin-block": "1rem",
              color: "var(--secondary)",
            },
            a: {
              color: "var(--accent)",
              "font-size": "1rem",
              "line-height": "1.5rem",
            },
            "a:hover": {
              color: "hsl(160, 84%, 29%)",
            },
            hr: {
              "margin-block": "2rem",
              "border-color": "var(--tertiary)",
            },
            pre: {
              padding: "1rem",
              background: "#f2f2f308",
              "border-radius": ".25rem",
            },
            img: {
              "margin-block": "2rem",
              "border-radius": ".25rem",
            },
            code: {
              color: "hsl(240, 4%, 85%)",
              padding: ".125rem .25rem .125rem .25rem",
              background: "#f2f2f31f",
              "border-radius": ".25rem",
              "font-size": ".9rem",
            },
            "pre > code": {
              background: "none",
            },
            ol: {
              "padding-left": "1.5rem",
              "list-style-type": "decimal",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

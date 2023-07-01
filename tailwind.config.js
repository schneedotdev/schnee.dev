/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
            "h2, h3, h4, h5, h6": {
              "margin-block": "2rem",
              color: "var(--primary)",
            },
            h1: {
              "margin-bottom": "1rem",
              color: "var(--primary)",
              "font-size": "1.5rem",
              "line-height": "2rem",
              "font-weight": "bold",
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
            },
            hr: {
              "margin-block": "2rem",
              "border-color": "var(--tertiary)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

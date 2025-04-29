/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      // https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#customizing-the-css
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-headings": "rgb(var(--color-zu-light-heading))",
            "--tw-prose-body": "rgb(var(--color-zu-light-body-text))",
            "--tw-prose-links": "rgb(var(--color-zu-light-body-highlight))",
            "--tw-prose-bullets": "rgb(var(--color-zu-light-body-highlight))",
            "--tw-prose-hr": "rgb(var(--color-zu-light-body-highlight))",
            "--tw-prose-invert-headings": "rgb(var(--color-zu-dark-heading))",
            "--tw-prose-invert-body": "rgb(var(--color-zu-dark-body-text))",
            "--tw-prose-invert-links":
              "rgb(var(--color-zu-dark-body-highlight))",
            "--tw-prose-invert-bullets":
              "rgb(var(--color-zu-dark-body-highlight))",
            "--tw-prose-invert-hr": "rgb(var(--color-zu-dark-body-highlight))",
            h2: {
              fontSize: "1.75rem",
            },
            ul: {
              paddingInlineStart: 0,
            },
            "ul > li": {
              paddingInlineStart: 0,
            },
            a: {
              fontWeight: 400,
              textDecorationThickness: "2px",
              textUnderlineOffset: "0.25em",
              "&:hover": {
                color: "black",
              },
            },
            blockquote: {
              position: "relative",
              fontStyle: "normal",
              borderLeftWidth: "0px",
              paddingInlineStart: "0px",
              marginTop: "60px",
              fontWeight: "300",
              lineHeight: "normal",
              color: "rgb(var(--color-zu-light-body-text))",
              "@media (min-width: 768px)": {
                fontSize: "1.5rem",
              },
              "@media (prefers-color-scheme: dark)": {
                color: "rgb(var(--color-zu-dark-body-text))",
              },
              "&::before": {
                content: '"\\201C"',
                color: "rgb(var(--color-zu-light-primary))",
                position: "absolute",
                fontSize: "100px",
                lineHeight: "0px",
                "@media (min-width: 1024px)": {
                  position: "absolute",
                  left: "-5rem",
                  top: "3rem",
                  fontSize: "170px",
                },
              },
              quotes: "none",
            },
          },
        },
        invert: {
          css: {
            a: {
              // color: "white",
              "&:hover": {
                color: "white",
              },
            },
          },
        },
      },
      colors: {
        "zu-light-primary":
          "rgb(var(--color-zu-light-primary) / <alpha-value>)",
        "zu-light-bg": "rgb(var(--color-zu-light-bg) / <alpha-value>)",
        "zu-light-bg-partner":
          "rgb(var(--color-zu-light-bg-partner) / <alpha-value>)",
        "zu-light-bg-footer":
          "rgb(var(--color-zu-light-bg-footer) / <alpha-value>)",
        "zu-light-heading":
          "rgb(var(--color-zu-light-heading) / <alpha-value>)",
        "zu-light-body-text":
          "rgb(var(--color-zu-light-body-text) / <alpha-value>)",
        "zu-light-body-highlight":
          "rgb(var(--color-zu-light-body-highlight) / <alpha-value>)",
        "zu-light-banner-heading":
          "rgb(var(--color-zu-light-banner-heading) / <alpha-value>)",

        "zu-dark-primary": "rgb(var(--color-zu-dark-primary) / <alpha-value>)",
        "zu-dark-heading": "rgb(var(--color-zu-dark-heading) / <alpha-value>)",
        "zu-dark-bg": "rgb(var(--color-zu-dark-bg) / <alpha-value>)",
        "zu-dark-bg-partner":
          "rgb(var(--color-zu-dark-bg-partner) / <alpha-value>)",
        "zu-dark-bg-footer":
          "rgb(var(--color-zu-dark-bg-footer) / <alpha-value>)",
        "zu-dark-body-text":
          "rgb(var(--color-zu-dark-body-text) / <alpha-value>)",
        "zu-dark-body-highlight":
          "rgb(var(--color-zu-dark-body-highlight) / <alpha-value>)",
        "zu-dark-banner-heading":
          "rgb(var(--color-zu-dark-banner-heading) / <alpha-value>)",

        "sbx-dark-brand": "#D4C600", // hsl(from #fff23b h s calc(l + -20))
        "sbx-light-brand": "#FFF23B",
        "cor-light-brand": "#02548D",
        "skt-light-brand": "#F33D98",
        "sha-light-brand": "#026936",
        "pip-light-brand": "#02548D",
        "gms-light-brand": "#5B4B88",
        "sdb-light-brand": "#046A38", // TODO: migrate to use gsk-light-brand
        "gsk-light-brand": "#046A38",
      },
      boxShadow: {
        inset: "inset 0px 0px 0px 1px black",
        "top-4": "0px -4px 0px 0px rgb(var(--color-zu-light-primary))",
        card: "0px 0px 15px 0px rgba(0, 0, 0, 0.15)",
        "light-4": "0 0 0px 4px rgb(var(--color-zu-light-primary))",
        "dark-4": "0 0 0px 4px white",
      },
      listStyleType: {
        slash: "/  ",
      },
      gridTemplateColumns: {
        350: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
        300: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
        250: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
        200: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
        150: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
        125: "repeat(auto-fit, minmax(min(100%, 125px), 1fr))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      lineHeight: {
        12: "3rem",
      },
      container: {
        center: true,
        padding: "4rem",
      },
      aspectRatio: {
        team: "3 / 4",
        menu: "4 / 3",
        "4/3": "4 / 3",
      },
      textDecorationThickness: {
        3: "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "d-background": "#51626A",
      "d-dark": "#404E54",
      "d-foreground": "#D2E3EB",
      "d-primary": "#DFB726",
      "d-yellow": "#DFB726",
      "d-orange": "#FA9E48",
      "d-lime": "#D0E7AA",
      "d-blue": "#9BD9E6",
      "d-green": "#7ED1AE",
    },
  },
  safelist: [
    {
      pattern: /bg-d-(primary|yellow|orange|lime|blue|green)/,
    },
    {
      pattern: /text-d-(primary|yellow|orange|lime|blue|green)/,
    },
    {
      pattern: /fill-d-(primary|yellow|orange|lime|blue|green)/,
    },
  ],
  plugins: [],
};

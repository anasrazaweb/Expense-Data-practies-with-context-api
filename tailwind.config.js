/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modalcomponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "error": "#ff0000",
        "dark":"#bd1ddc"
      },
      backgroundImage: {
        "gradient-purple": "linear-gradient(90deg, rgba(216,73,241,1) 0%, rgba(230,115,255,1) 50%, rgba(216,73,248,1) 100%)",
        "gradient-lite-color": "linear-gradient(90deg, rgba(160,21,182,1) 0%, rgba(111,21,122,1) 50%, rgba(126,17,162,1) 100%)"
      },
      backgroundColor: {
        
        "lite-purple-100": "#f3ceff",
        "lite-purple-50": "#fcf3ff",
        "btn-contained": "#bd1ddc",
        "btn-hover": "#d63df8"

      },
      fontSize: {
        "logo": "22px"
      },
      fontWeight: {
        logoBold: "800",
        btnBold: "600"
      }
    },
  },
  plugins: [],
};

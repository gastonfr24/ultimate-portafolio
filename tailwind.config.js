/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulseslow': 'pulseslow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseslow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        }
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1720px",
        // => @media (min-width: 1536px) { ... }

        "4xl": "1856px",
        // => @media (min-width: 1536px) { ... }
    },

      colors:{
        "violet-cus":'#8884d8',},

      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        serif: ["Merriweather", "serif"],
        "gilroy-thin": "'Gilroy-Thin', sans-serif",
        "gilroy-ultralight": "'Gilroy-UltraLight', sans-serif",
        "gilroy-light": "'Gilroy-Light', sans-serif",
        "gilroy-regular": "'Gilroy-Regular', sans-serif",
        "gilroy-medium": "'Gilroy-Medium', sans-serif",
        "gilroy-semibold": "'Gilroy-Semibold', sans-serif",
        "gilroy-bold": "'Gilroy-Bold', sans-serif",
        "gilroy-heavy": "'Gilroy-Heavy', sans-serif",
        "gilroy-black": "'Gilroy-Black', sans-serif",
  
        "gilroy-thin-italic": "'Gilroy-ThinItalic', sans-serif",
        "gilroy-ultralight-italic": "'Gilroy-UltraLightItalic', sans-serif",
        "gilroy-light-italic": "'Gilroy-LightItalic', sans-serif",
        "gilroy-regular-italic": "'Gilroy-RegularItalic', sans-serif",
        "gilroy-medium-italic": "'Gilroy-MediumItalic', sans-serif",
        "gilroy-semibold-italic": "'Gilroy-SemiboldItalic', sans-serif",
        "gilroy-bold-italic": "'Gilroy-BoldItalic', sans-serif",
        "gilroy-heavy-italic": "'Gilroy-HeavyItalic', sans-serif",
        "gilroy-black-italic": "'Gilroy-BlackItalic', sans-serif",
    },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
],
}
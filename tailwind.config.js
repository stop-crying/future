/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "640px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1900px",
    },
    extend: {
      fontFamily: {
        charis: ["charis", "san-serif"],
        poppins : ["poppins", "san-serif"],
        
      },
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        "Light-Pink": "hsl(321, 100%, 78%)",
        "Light-Red": "hsl(0, 100%, 63%)",
        "Very-Dark-Cyan": "hsl(192, 100%, 9%)",
        "Very-Pale-Blue": "hsl(207, 100%, 98%)",
      },
    },
  },
  plugins: [],
};

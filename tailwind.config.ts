/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // 0-375, 376-560, 560-975, 975-1024, 1024-1220, 1200 >
  theme: {
    screens: {
      xs: "375px",
      sm: "400px",
      md: "600px",
      lg: "1024px",
      xl: "1220px",
      xxl: "1221px",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      variants: {
        // ...
        animation: ["responsive", "motion-safe", "motion-reduce"],
      },
      colors: {
        webBlue: "#052C6F",
        webWhite: "#ffffff",
      },
      fontFamily: {
        "DINCondensed-Bold": ["DINCondensed-Bold"],
        "gotham-black-italic": ["gotham-black-italic"],
        "neosans-bold": ["neosans-bold"],
        "neosans-medium": ["neosans-medium"],
        // "neosans-regular": ["neosans-regular"],
        // primetime: ["primetime"],
        // circularStd: ["circularStd"],
        // "almarai-bold": ["almarai-bold"],
        // "almarai-extrabold": ["almarai-extrabold"],
        // "almarai-regular": ["almarai-regular"],
        // "helvetica-neue-lt-arabic-75-bold": [
        //   "helvetica-neue-lt-arabic-75-bold",
        // ],
      },
    },
  },
  plugins: [],
};

export {};

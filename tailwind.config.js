/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/assets/home-main-bg.jpg')",
        featuresLeft: "url('/assets/features-bg-left.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#E80E0F",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        plusJakartaSans: ["var(--font-jakarta)"],
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
        archivo: ["var(--font-archivo)"],
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};

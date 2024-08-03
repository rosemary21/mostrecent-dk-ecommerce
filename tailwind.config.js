/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/assets/home-main-bg.jpg')",
        featuresLeft: "url('/assets/features-bg-left.png')",
        fashionBg: "url('/assets/fashion-bg.png')",
        artCraftBg: "url('/assets/art-craft-bg.png')",
        artCraftCat1: "url('/assets/art-cat-1.png')",
        artCraftCat2: "url('/assets/art-cat-2.png')",
      },
      colors: {
        primary: "#E80E0F",
        muted: "#888",
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

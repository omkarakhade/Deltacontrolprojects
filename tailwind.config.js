/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050E2B",
          900: "#0A1B4E",
          800: "#0F2666",
          700: "#163788",
          600: "#1E4FA3",
        },
        steel: {
          500: "#2F6FED",
          400: "#5A8CF0",
          100: "#E7EFFB",
          50: "#F5F8FC",
        },
        spark: {
          600: "#E85A1B",
          500: "#FF6A2B",
          400: "#FF8A52",
        },
        ink: "#101828",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "diagonal-grid":
          "linear-gradient(135deg, rgba(255,106,43,0.06) 1px, transparent 1px), linear-gradient(45deg, rgba(10,27,78,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

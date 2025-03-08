/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#eb0237",
          hover: "#A01131",
          disabled: "#800e2a",
        },
        success: "#43ad28",
        warning: "#eb6402",
        dark: {
          DEFAULT: "#06080c",
          secondary: "#0b0e12",
        },
        secondary: "#333333",
        white: {
          DEFAULT: "#fff",
          secondary: "#b4b5b6",
          disabled: "#787878",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        tactic: ['"Tactic Sans"', "sans-serif"],
      },
      fontSize: {
        sm: "12px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "56px",
      },
      radius: {
        sm: "4px",
      },
    },
  },
  plugins: [],
};

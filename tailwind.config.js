/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your folder structure
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: "#1F093C",
        },
      },
      animation: {
        "fade-in-down": "fadeInDown 1.5s ease-out",
        "fade-in": "fadeIn 2s ease-out",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 4s ease-in-out infinite",
        "creepy-reveal": "creepyReveal 2s ease-out forwards",
        "spooky-fade-in": "spookyFadeIn 3s ease-out 1s forwards",
        "smooth-reveal":
          "smoothReveal 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "smooth-fade-in":
          "smoothFadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        creepyReveal: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8) translateY(50px) skewX(10deg)",
            filter: "blur(10px)",
          },
          "25%": {
            opacity: "0.3",
            transform: "scale(0.9) translateY(30px) skewX(-5deg)",
            filter: "blur(5px)",
          },
          "50%": {
            opacity: "0.7",
            transform: "scale(1.1) translateY(10px) skewX(3deg)",
            filter: "blur(2px)",
          },
          "75%": {
            opacity: "0.9",
            transform: "scale(0.95) translateY(0px) skewX(-1deg)",
            filter: "blur(1px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0) skewX(0)",
            filter: "blur(0)",
          },
        },
        spookyFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
            filter: "blur(8px)",
          },
          "20%": {
            opacity: "0.2",
            transform: "translateX(15px)",
            filter: "blur(6px)",
          },
          "40%": {
            opacity: "0.4",
            transform: "translateX(-10px)",
            filter: "blur(4px)",
          },
          "60%": {
            opacity: "0.6",
            transform: "translateX(5px)",
            filter: "blur(2px)",
          },
          "80%": {
            opacity: "0.8",
            transform: "translateX(-2px)",
            filter: "blur(1px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
            filter: "blur(0)",
          },
        },
        smoothReveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        smoothFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            filter: "blur(5px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

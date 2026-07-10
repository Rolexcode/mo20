import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        voidsoft: "#0A0908",
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#F5D76E",
          deep: "#8A6C1F",
          line: "rgba(212,175,55,0.15)",
        },
        ivory: "#FFFFFF",
        mist: "#9CA3AF",
        glass: "rgba(255,255,255,0.03)",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        imperial: "0.28em",
        wide2: "0.18em",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at center, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 70%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(212,175,55,0.15)",
        goldlg: "0 0 80px rgba(212,175,55,0.2)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(8px)" },
        },
        rotateslow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseglow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        rotateslow: "rotateslow 60s linear infinite",
        pulseglow: "pulseglow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E13",
        panel: "#111820",
        "panel-2": "#161F29",
        line: "#232E3A",
        muted: "#8A97A6",
        fog: "#C7D0DA",
        paper: "#E7EDF3",
        signal: "#34E7B4",
        "signal-dim": "#1E7A5C",
        amber: "#F5A524",
        "amber-dim": "#8A5E17",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(52,231,180,0.55)" },
          "70%": { boxShadow: "0 0 0 7px rgba(52,231,180,0)" },
        },
        pulseDotAmber: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,165,36,0.5)" },
          "70%": { boxShadow: "0 0 0 7px rgba(245,165,36,0)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        pulseDotAmber: "pulseDotAmber 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
        scan: "scan 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

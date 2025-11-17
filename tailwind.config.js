/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // New Blueprint/Terminal Theme
        primary: "#0D1117", // GitHub dark background
        secondary: "#8B949E", // Muted gray
        tertiary: "#161B22", // Slightly lighter dark

        // Blueprint colors
        blueprint: {
          dark: "#0A4D68",
          DEFAULT: "#05BFDB",
          light: "#00FFCB",
          glow: "rgba(5, 191, 219, 0.3)",
        },

        // Terminal colors
        terminal: {
          green: "#00FF00",
          bright: "#39FF14",
          dim: "#00AA00",
        },

        // Legacy colors (kept for compatibility)
        "black-100": "#161B22",
        "black-200": "#0D1117",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 4px 20px rgba(5, 191, 219, 0.2)",
        blueprint: "0 0 20px rgba(5, 191, 219, 0.3)",
        terminal: "0 0 10px rgba(0, 255, 0, 0.3)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "blueprint-grid": "linear-gradient(rgba(5, 191, 219, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 191, 219, 0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        mono: ["'Fira Code'", "'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
        'blueprint-glow': 'glow 2s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
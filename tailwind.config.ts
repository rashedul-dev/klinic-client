/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        blob: "blob 7s infinite",
        "slide-in-from-top-2": "slideInFromTop 0.2s ease-out",
        "rotate-3d": "rotate3d 12s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blob: {
          "0%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(30px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.9)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
        slideInFromTop: {
          from: { transform: "translateY(-10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        rotate3d: {
          "0%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "50%": { transform: "rotateY(180deg) rotateX(20deg)" },
          "100%": { transform: "rotateY(360deg) rotateX(0deg)" },
        },
      },
      backgroundImage: {
        "gradient-to-r-primary": "linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))",
        "gradient-to-r-accent": "linear-gradient(to right, hsl(var(--accent)), hsl(var(--secondary)))",
      },
      textColor: {
        "gradient-primary": "hsl(var(--primary))",
        "gradient-secondary": "hsl(var(--secondary))",
      },
      textOpacity: {
        90: "0.9",
      },
    },
  },
  plugins: [],
};

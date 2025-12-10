// ========== TAILWIND CONFIGURATION START ==========
// Main Tailwind CSS configuration file
// Defines theme extensions, custom colors, animations, and plugins
// ========== IMPORTS START ==========
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
// ========== IMPORTS END ==========

// ========== CONFIGURATION START ==========
const config: Config = {
  // ========== DARK MODE CONFIGURATION START ==========
  // Enable class-based dark mode
  darkMode: "class",
  // ========== DARK MODE CONFIGURATION END ==========

  // ========== CONTENT PATHS START ==========
  // Specify which files Tailwind should scan for class names
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  // ========== CONTENT PATHS END ==========

  // ========== PREFIX START ==========
  // No prefix for Tailwind classes
  prefix: "",
  // ========== PREFIX END ==========

  // ========== THEME CONFIGURATION START ==========
  theme: {
    // ========== CONTAINER CONFIGURATION START ==========
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    // ========== CONTAINER CONFIGURATION END ==========

    // ========== THEME EXTENSIONS START ==========
    extend: {
      // ========== FONT FAMILY CONFIGURATION START ==========
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      // ========== FONT FAMILY CONFIGURATION END ==========

      // ========== CUSTOM COLORS START ==========
      colors: {
        // Border and input colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Background colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Custom brand colors
        navy: {
          DEFAULT: "hsl(var(--navy))",
          dark: "hsl(var(--navy-dark))",
        },
        purple: {
          DEFAULT: "hsl(var(--purple))",
        },
        'blue-bright': "hsl(var(--blue-bright))",
        
        // Semantic colors
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
        
        // Component colors
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // Sidebar colors
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      // ========== CUSTOM COLORS END ==========

      // ========== BORDER RADIUS START ==========
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // ========== BORDER RADIUS END ==========

      // ========== KEYFRAMES START ==========
      keyframes: {
        // Accordion animations
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      // ========== KEYFRAMES END ==========

      // ========== ANIMATIONS START ==========
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
      },
      // ========== ANIMATIONS END ==========

      // ========== BACKGROUND IMAGES START ==========
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
      // ========== BACKGROUND IMAGES END ==========
    },
    // ========== THEME EXTENSIONS END ==========
  },
  // ========== THEME CONFIGURATION END ==========

  // ========== PLUGINS START ==========
  // Use ES module import instead of require() for better compatibility
  plugins: [tailwindcssAnimate],
  // ========== PLUGINS END ==========
};
// ========== CONFIGURATION END ==========

// ========== EXPORT START ==========
export default config;
// ========== EXPORT END ==========

// ========== TAILWIND CONFIGURATION END ==========
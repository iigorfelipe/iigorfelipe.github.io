/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs-laptop': { raw: '(min-width: 460px) and (min-height: 600px)' },
      'sm-laptop': { raw: '(min-width: 500px) and (min-height: 600px)' },
      'md-laptop': { raw: '(min-width: 640px) and (min-height: 600px)' },
      '70-laptop': { raw: '(min-width: 896px) and (min-height: 600px)' },
      laptop: { raw: '(min-width: 1280px) and (min-height: 600px)' },

      'xs-desktop': { raw: '(min-width: 500px) and (min-height: 800px)' },
      'sm-desktop': { raw: '(min-width: 640px) and (min-height: 800px)' },
      'md-desktop': { raw: '(min-width: 896px) and (min-height: 800px)' },
      '70-desktop': { raw: '(min-width: 1280px) and (min-height: 800px)' },
      desktop: { raw: '(min-width: 1440px) and (min-height: 800px)' },
      'xl-desktop': { raw: '(min-width: 1600px) and (min-height: 800px)' },
      '2xl-desktop': { raw: '(min-width: 1800px) and (min-height: 800px)' },
    },
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in forwards',
      },
      dropShadow: {
        custom: '5px 5px 10px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

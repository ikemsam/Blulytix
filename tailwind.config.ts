module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A8CFC',
        secondary: '#D6E9FF',
        dark: '#0f0f0f',
        white: '#f7f9f9',
        pitch: '#FF6B6B',
        gray: '#737787',
      },
      transitionDelay: {
        0: '0ms',
        200: '200ms',
        500: '500ms',
        1000: '1000ms',
      },
      screens: {
        xs: '640px', // Small screens and up
        sm: '767px', // Small screens and up
        md: '768px', // Medium screens and up
        lg: '1024px', // Large screens and up
        xl: '1280px', // Extra large screens and up
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '1.5rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
